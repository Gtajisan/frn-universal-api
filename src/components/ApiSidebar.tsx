import { useState } from "react";
import { Search, ChevronDown, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface ApiEndpoint {
  id: string;
  name: string;
  method: string;
  path: string;
  description: string;
}

interface ApiCategory {
  name: string;
  endpoints: ApiEndpoint[];
}

interface ApiSidebarProps {
  categories: ApiCategory[];
  selectedEndpoint: string | null;
  onSelectEndpoint: (id: string) => void;
}

export function ApiSidebar({ categories, selectedEndpoint, onSelectEndpoint }: ApiSidebarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCategories, setExpandedCategories] = useState<string[]>(
    categories.map((c) => c.name)
  );

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryName)
        ? prev.filter((c) => c !== categoryName)
        : [...prev, categoryName]
    );
  };

  const filteredCategories = categories
    .map((category) => ({
      ...category,
      endpoints: category.endpoints.filter(
        (endpoint) =>
          endpoint.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          endpoint.path.toLowerCase().includes(searchQuery.toLowerCase()) ||
          endpoint.description.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.endpoints.length > 0);

  const getMethodColor = (method: string) => {
    switch (method.toUpperCase()) {
      case "GET":
        return "text-success";
      case "POST":
        return "text-primary";
      case "PUT":
        return "text-warning";
      case "DELETE":
        return "text-destructive";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <div className="flex h-full flex-col bg-sidebar border-r border-sidebar-border">
      <div className="p-4 border-b border-sidebar-border">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search APIs... (Ctrl+K)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 bg-sidebar-accent border-sidebar-border"
          />
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-2">
          {filteredCategories.map((category) => (
            <div key={category.name} className="mb-2">
              <button
                onClick={() => toggleCategory(category.name)}
                className="flex w-full items-center justify-between px-3 py-2 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent rounded-md transition-colors"
              >
                <span className="capitalize">{category.name}</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">
                    {category.endpoints.length}
                  </span>
                  {expandedCategories.includes(category.name) ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </div>
              </button>

              {expandedCategories.includes(category.name) && (
                <div className="mt-1 space-y-1 pl-2">
                  {category.endpoints.map((endpoint) => (
                    <button
                      key={endpoint.id}
                      onClick={() => onSelectEndpoint(endpoint.id)}
                      className={cn(
                        "flex w-full items-start gap-2 px-3 py-2 text-sm rounded-md transition-all",
                        selectedEndpoint === endpoint.id
                          ? "bg-primary text-primary-foreground shadow-lg"
                          : "hover:bg-sidebar-accent text-sidebar-foreground"
                      )}
                    >
                      <span
                        className={cn(
                          "font-mono text-xs font-bold mt-0.5",
                          selectedEndpoint === endpoint.id
                            ? "text-primary-foreground"
                            : getMethodColor(endpoint.method)
                        )}
                      >
                        {endpoint.method.toUpperCase()}
                      </span>
                      <div className="flex-1 text-left">
                        <div className="font-medium">{endpoint.name}</div>
                        <div className="text-xs opacity-70 truncate">
                          {endpoint.path}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
