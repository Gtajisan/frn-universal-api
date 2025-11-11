import { useState } from "react";
import { Send, Copy, CheckCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

interface ApiEndpoint {
  id: string;
  name: string;
  method: string;
  path: string;
  description: string;
  parameters?: { name: string; type: string; required: boolean; description: string }[];
  category: string;
  version: string;
  author: string;
}

interface ApiTesterProps {
  endpoint: ApiEndpoint;
}

export function ApiTester({ endpoint }: ApiTesterProps) {
  const [params, setParams] = useState<Record<string, string>>({});
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleTest = async () => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Mock response based on endpoint
      let mockResponse;
      if (endpoint.id === "hello") {
        const name = params.name || "World";
        mockResponse = {
          message: `Hello, ${name}!`,
          timestamp: new Date().toISOString(),
          powered_by: "Wataru API",
        };
      } else if (endpoint.id === "reverse") {
        const text = params.text || "";
        mockResponse = {
          original: text,
          reversed: text.split("").reverse().join(""),
          length: text.length,
          timestamp: new Date().toISOString(),
          powered_by: "Wataru API",
        };
      } else {
        mockResponse = {
          status: "success",
          data: { ...params },
          timestamp: new Date().toISOString(),
          powered_by: "Wataru API",
        };
      }

      setResponse(mockResponse);
      toast.success("API request successful!");
    } catch (error) {
      toast.error("API request failed!");
      setResponse({ error: "Request failed" });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const getMethodColor = (method: string) => {
    switch (method.toUpperCase()) {
      case "GET":
        return "bg-success text-success-foreground";
      case "POST":
        return "bg-primary text-primary-foreground";
      case "PUT":
        return "bg-warning text-warning-foreground";
      case "DELETE":
        return "bg-destructive text-destructive-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-3xl font-bold text-foreground">{endpoint.name}</h2>
            <Badge className={getMethodColor(endpoint.method)}>
              {endpoint.method.toUpperCase()}
            </Badge>
          </div>
          <p className="text-muted-foreground">{endpoint.description}</p>
        </div>
      </div>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-lg">Endpoint Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
            <code className="text-sm font-mono text-foreground">{endpoint.path}</code>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => copyToClipboard(endpoint.path)}
            >
              {copied ? (
                <CheckCheck className="h-4 w-4 text-success" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Version:</span>
              <span className="ml-2 font-medium">{endpoint.version}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Category:</span>
              <span className="ml-2 font-medium capitalize">{endpoint.category}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Author:</span>
              <span className="ml-2 font-medium">{endpoint.author}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="test" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="test">Test API</TabsTrigger>
          <TabsTrigger value="response">Response</TabsTrigger>
        </TabsList>

        <TabsContent value="test" className="space-y-4">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Parameters</CardTitle>
              <CardDescription>
                Enter the parameters for your API request
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {endpoint.parameters?.map((param) => (
                <div key={param.name} className="space-y-2">
                  <Label htmlFor={param.name}>
                    {param.name}
                    {param.required && (
                      <span className="text-destructive ml-1">*</span>
                    )}
                    <span className="text-xs text-muted-foreground ml-2">
                      ({param.type})
                    </span>
                  </Label>
                  <Input
                    id={param.name}
                    placeholder={param.description}
                    value={params[param.name] || ""}
                    onChange={(e) =>
                      setParams({ ...params, [param.name]: e.target.value })
                    }
                    className="bg-background border-border"
                  />
                </div>
              ))}

              <Button
                onClick={handleTest}
                disabled={loading}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {loading ? (
                  "Testing..."
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Test API
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="response">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Response</CardTitle>
              <CardDescription>
                The API response will appear here after testing
              </CardDescription>
            </CardHeader>
            <CardContent>
              {response ? (
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(JSON.stringify(response, null, 2))}
                    className="absolute top-2 right-2"
                  >
                    {copied ? (
                      <CheckCheck className="h-4 w-4 text-success" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                  <pre className="bg-background p-4 rounded-lg overflow-x-auto text-sm border border-border">
                    <code className="text-foreground">
                      {JSON.stringify(response, null, 2)}
                    </code>
                  </pre>
                </div>
              ) : (
                <div className="text-center text-muted-foreground py-8">
                  No response yet. Test the API to see the response.
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
