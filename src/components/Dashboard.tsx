import { Activity, Code2, Layers, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface DashboardProps {
  totalEndpoints: number;
  categories: number;
  methodBreakdown: { method: string; count: number }[];
}

export function Dashboard({ totalEndpoints, categories, methodBreakdown }: DashboardProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">API Dashboard</h2>
        <p className="text-muted-foreground">
          Welcome to the Wataru API documentation and testing interface
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-card border-border hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Endpoints</CardTitle>
            <Code2 className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{totalEndpoints}</div>
            <p className="text-xs text-muted-foreground">Available API endpoints</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Categories</CardTitle>
            <Layers className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{categories}</div>
            <p className="text-xs text-muted-foreground">Organized categories</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Status</CardTitle>
            <Activity className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">Online</div>
            <p className="text-xs text-muted-foreground">All systems operational</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Performance</CardTitle>
            <TrendingUp className="h-4 w-4 text-info" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">Fast</div>
            <p className="text-xs text-muted-foreground">Optimized response times</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle>Method Distribution</CardTitle>
          <CardDescription>Breakdown of API methods</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {methodBreakdown.map((item) => {
              const percentage = (item.count / totalEndpoints) * 100;
              const getColor = () => {
                switch (item.method) {
                  case "GET":
                    return "bg-success";
                  case "POST":
                    return "bg-primary";
                  case "PUT":
                    return "bg-warning";
                  case "DELETE":
                    return "bg-destructive";
                  default:
                    return "bg-muted";
                }
              };

              return (
                <div key={item.method}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">{item.method}</span>
                    <span className="text-sm text-muted-foreground">
                      {item.count} ({percentage.toFixed(0)}%)
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full ${getColor()} transition-all duration-500`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle>Getting Started</CardTitle>
          <CardDescription>How to use this API documentation</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-medium text-foreground">1. Browse Categories</h4>
            <p className="text-sm text-muted-foreground">
              Use the sidebar to explore different API categories and endpoints.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium text-foreground">2. Test Endpoints</h4>
            <p className="text-sm text-muted-foreground">
              Click on any endpoint to view details and test it with custom parameters.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium text-foreground">3. View Responses</h4>
            <p className="text-sm text-muted-foreground">
              See real-time JSON responses with syntax highlighting and copy functionality.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium text-foreground">4. Integrate</h4>
            <p className="text-sm text-muted-foreground">
              Copy endpoint URLs and integrate them into your applications.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
