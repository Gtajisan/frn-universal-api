import { Github, Users, Code } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Credits() {
  return (
    <Card className="mt-8 bg-card/50 backdrop-blur border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Users className="h-5 w-5" />
          Credits & Attribution
        </CardTitle>
        <CardDescription>
          This project aggregates APIs from multiple repositories
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <Code className="h-4 w-4" />
            Source Repositories
          </h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
              <Github className="h-5 w-5 mt-0.5 text-primary" />
              <div className="flex-1">
                <a
                  href="https://github.com/ajirodesu/wataru-api"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:text-primary transition-colors"
                >
                  wataru-api
                </a>
                <p className="text-xs text-muted-foreground mt-1">
                  Created by Rynn • Modified by AjiroDesu
                </p>
                <div className="flex gap-2 mt-2">
                  <Badge variant="secondary" className="text-xs">
                    18 endpoints
                  </Badge>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
              <Github className="h-5 w-5 mt-0.5 text-primary" />
              <div className="flex-1">
                <a
                  href="https://github.com/ajirodesu/Shin-API-UI-V2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:text-primary transition-colors"
                >
                  Shin-API-UI-V2
                </a>
                <p className="text-xs text-muted-foreground mt-1">
                  Based on Rynn's UI design • Adapted by AjiroDesu
                </p>
                <div className="flex gap-2 mt-2">
                  <Badge variant="secondary" className="text-xs">
                    3 endpoints
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-border/50">
          <h3 className="text-sm font-semibold mb-2">Original Developers</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="text-xs">
              Rynn (Creator)
            </Badge>
            <Badge variant="outline" className="text-xs">
              Lenwy (Inspiration)
            </Badge>
            <Badge variant="outline" className="text-xs">
              AjiroDesu (Modifications)
            </Badge>
          </div>
        </div>

        <div className="pt-4 border-t border-border/50">
          <h3 className="text-sm font-semibold mb-2">Current Project</h3>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Developed by</span>
            <Badge className="bg-gradient-to-r from-primary to-accent">
              Gtajisan
            </Badge>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            This project aggregates and presents APIs from both repositories in a unified interface
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
