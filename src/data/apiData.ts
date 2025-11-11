export interface ApiEndpoint {
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

export interface ApiCategory {
  name: string;
  endpoints: ApiEndpoint[];
}

export const apiEndpoints: ApiEndpoint[] = [
  {
    id: "hello",
    name: "Hello World",
    method: "GET",
    path: "/api/hello?name=",
    description: "A simple greeting API that returns a personalized hello message",
    parameters: [
      {
        name: "name",
        type: "string",
        required: false,
        description: "Your name (defaults to 'World')",
      },
    ],
    category: "examples",
    version: "1.0.0",
    author: "Wataru Team",
  },
  {
    id: "reverse",
    name: "Reverse Text",
    method: "GET",
    path: "/api/reverse?text=",
    description: "Reverses the provided text string",
    parameters: [
      {
        name: "text",
        type: "string",
        required: true,
        description: "Text to reverse",
      },
    ],
    category: "examples",
    version: "1.0.0",
    author: "Wataru Team",
  },
  {
    id: "time",
    name: "Current Time",
    method: "GET",
    path: "/api/time",
    description: "Returns the current server time in various formats",
    parameters: [],
    category: "utilities",
    version: "1.0.0",
    author: "Wataru Team",
  },
  {
    id: "uuid",
    name: "Generate UUID",
    method: "GET",
    path: "/api/uuid",
    description: "Generates a random UUID v4",
    parameters: [],
    category: "utilities",
    version: "1.0.0",
    author: "Wataru Team",
  },
  {
    id: "hash",
    name: "Hash Text",
    method: "POST",
    path: "/api/hash",
    description: "Creates a hash of the provided text using various algorithms",
    parameters: [
      {
        name: "text",
        type: "string",
        required: true,
        description: "Text to hash",
      },
      {
        name: "algorithm",
        type: "string",
        required: false,
        description: "Hash algorithm (md5, sha1, sha256)",
      },
    ],
    category: "utilities",
    version: "1.0.0",
    author: "Wataru Team",
  },
  {
    id: "qrcode",
    name: "Generate QR Code",
    method: "GET",
    path: "/api/qrcode?text=",
    description: "Generates a QR code image from text",
    parameters: [
      {
        name: "text",
        type: "string",
        required: true,
        description: "Text to encode in QR code",
      },
      {
        name: "size",
        type: "number",
        required: false,
        description: "Size of the QR code (default: 200)",
      },
    ],
    category: "generators",
    version: "1.0.0",
    author: "Wataru Team",
  },
  {
    id: "placeholder",
    name: "Placeholder Image",
    method: "GET",
    path: "/api/placeholder?width=&height=",
    description: "Generates a placeholder image with custom dimensions",
    parameters: [
      {
        name: "width",
        type: "number",
        required: true,
        description: "Image width in pixels",
      },
      {
        name: "height",
        type: "number",
        required: true,
        description: "Image height in pixels",
      },
    ],
    category: "generators",
    version: "1.0.0",
    author: "Wataru Team",
  },
  {
    id: "joke",
    name: "Random Joke",
    method: "GET",
    path: "/api/joke",
    description: "Returns a random programming joke",
    parameters: [],
    category: "fun",
    version: "1.0.0",
    author: "Wataru Team",
  },
  {
    id: "quote",
    name: "Inspirational Quote",
    method: "GET",
    path: "/api/quote",
    description: "Returns a random inspirational quote",
    parameters: [],
    category: "fun",
    version: "1.0.0",
    author: "Wataru Team",
  },
  {
    id: "dice",
    name: "Roll Dice",
    method: "GET",
    path: "/api/dice?sides=&count=",
    description: "Simulates rolling dice",
    parameters: [
      {
        name: "sides",
        type: "number",
        required: false,
        description: "Number of sides on the die (default: 6)",
      },
      {
        name: "count",
        type: "number",
        required: false,
        description: "Number of dice to roll (default: 1)",
      },
    ],
    category: "fun",
    version: "1.0.0",
    author: "Wataru Team",
  },
];

export const categorizeEndpoints = (endpoints: ApiEndpoint[]): ApiCategory[] => {
  const categoryMap = new Map<string, ApiEndpoint[]>();

  endpoints.forEach((endpoint) => {
    if (!categoryMap.has(endpoint.category)) {
      categoryMap.set(endpoint.category, []);
    }
    categoryMap.get(endpoint.category)!.push(endpoint);
  });

  return Array.from(categoryMap.entries()).map(([name, endpoints]) => ({
    name,
    endpoints,
  }));
};

export const getMethodBreakdown = (endpoints: ApiEndpoint[]) => {
  const methods = endpoints.reduce((acc, endpoint) => {
    const method = endpoint.method.toUpperCase();
    acc[method] = (acc[method] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return Object.entries(methods)
    .map(([method, count]) => ({ method, count }))
    .sort((a, b) => b.count - a.count);
};
