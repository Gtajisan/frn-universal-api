import { useState } from "react";
import { Menu, X, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ApiSidebar } from "@/components/ApiSidebar";
import { ApiTester } from "@/components/ApiTester";
import { Dashboard } from "@/components/Dashboard";
import { apiEndpoints, categorizeEndpoints, getMethodBreakdown } from "@/data/apiData";

const Index = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const categories = categorizeEndpoints(apiEndpoints);
  const methodBreakdown = getMethodBreakdown(apiEndpoints);
  const currentEndpoint = apiEndpoints.find((e) => e.id === selectedEndpoint);

  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-80 transform transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ApiSidebar
          categories={categories}
          selectedEndpoint={selectedEndpoint}
          onSelectEndpoint={(id) => {
            setSelectedEndpoint(id);
            setSidebarOpen(false);
          }}
        />
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="border-b border-border bg-card">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  FRN API
                </h1>
                <p className="text-xs text-muted-foreground">
                  Free REST API Collection
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
              </Button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto px-6 py-8 max-w-7xl">
            {currentEndpoint ? (
              <ApiTester endpoint={currentEndpoint} />
            ) : (
              <Dashboard
                totalEndpoints={apiEndpoints.length}
                categories={categories.length}
                methodBreakdown={methodBreakdown}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
