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
  // From wataru-api repository
  {
    id: "bluearchive",
    name: "Blue Archive",
    method: "GET",
    path: "/api/bluearchive",
    description: "Get random Blue Archive character image",
    parameters: [],
    category: "anime",
    version: "1.0.0",
    author: "wataru-api",
  },
  {
    id: "deepseek",
    name: "DeepSeek AI",
    method: "GET",
    path: "/api/deepseek?text=",
    description: "AI chatbot powered by DeepSeek",
    parameters: [
      {
        name: "text",
        type: "string",
        required: true,
        description: "Your message to the AI",
      },
    ],
    category: "ai",
    version: "1.0.0",
    author: "wataru-api",
  },
  {
    id: "mal-animeinfo",
    name: "MAL Anime Info",
    method: "GET",
    path: "/api/mal-animeinfo?id=",
    description: "Get detailed anime information from MyAnimeList",
    parameters: [
      {
        name: "id",
        type: "number",
        required: true,
        description: "MyAnimeList anime ID",
      },
    ],
    category: "anime",
    version: "1.0.0",
    author: "wataru-api",
  },
  {
    id: "mal-animesearch",
    name: "MAL Anime Search",
    method: "GET",
    path: "/api/mal-animesearch?q=",
    description: "Search for anime on MyAnimeList",
    parameters: [
      {
        name: "q",
        type: "string",
        required: true,
        description: "Search query",
      },
    ],
    category: "anime",
    version: "1.0.0",
    author: "wataru-api",
  },
  {
    id: "mal-charainfo",
    name: "MAL Character Info",
    method: "GET",
    path: "/api/mal-charainfo?id=",
    description: "Get detailed character information from MyAnimeList",
    parameters: [
      {
        name: "id",
        type: "number",
        required: true,
        description: "MyAnimeList character ID",
      },
    ],
    category: "anime",
    version: "1.0.0",
    author: "wataru-api",
  },
  {
    id: "mal-charasearch",
    name: "MAL Character Search",
    method: "GET",
    path: "/api/mal-charasearch?q=",
    description: "Search for characters on MyAnimeList",
    parameters: [
      {
        name: "q",
        type: "string",
        required: true,
        description: "Search query",
      },
    ],
    category: "anime",
    version: "1.0.0",
    author: "wataru-api",
  },
  {
    id: "mal-mangainfo",
    name: "MAL Manga Info",
    method: "GET",
    path: "/api/mal-mangainfo?id=",
    description: "Get detailed manga information from MyAnimeList",
    parameters: [
      {
        name: "id",
        type: "number",
        required: true,
        description: "MyAnimeList manga ID",
      },
    ],
    category: "anime",
    version: "1.0.0",
    author: "wataru-api",
  },
  {
    id: "mal-mangasearch",
    name: "MAL Manga Search",
    method: "GET",
    path: "/api/mal-mangasearch?q=",
    description: "Search for manga on MyAnimeList",
    parameters: [
      {
        name: "q",
        type: "string",
        required: true,
        description: "Search query",
      },
    ],
    category: "anime",
    version: "1.0.0",
    author: "wataru-api",
  },
  {
    id: "mal-seasonalanime",
    name: "MAL Seasonal Anime",
    method: "GET",
    path: "/api/mal-seasonalanime",
    description: "Get current seasonal anime from MyAnimeList",
    parameters: [],
    category: "anime",
    version: "1.0.0",
    author: "wataru-api",
  },
  {
    id: "mal-topanime",
    name: "MAL Top Anime",
    method: "GET",
    path: "/api/mal-topanime",
    description: "Get top anime from MyAnimeList",
    parameters: [],
    category: "anime",
    version: "1.0.0",
    author: "wataru-api",
  },
  {
    id: "spotifydl",
    name: "Spotify Downloader",
    method: "GET",
    path: "/api/spotifydl?url=",
    description: "Download Spotify tracks",
    parameters: [
      {
        name: "url",
        type: "string",
        required: true,
        description: "Spotify track URL",
      },
    ],
    category: "downloader",
    version: "1.0.0",
    author: "wataru-api",
  },
  {
    id: "spotifydl2",
    name: "Spotify Downloader V2",
    method: "GET",
    path: "/api/spotifydl2?url=",
    description: "Download Spotify tracks (Alternative method)",
    parameters: [
      {
        name: "url",
        type: "string",
        required: true,
        description: "Spotify track URL",
      },
    ],
    category: "downloader",
    version: "1.0.0",
    author: "wataru-api",
  },
  {
    id: "tikdl",
    name: "TikTok Downloader",
    method: "GET",
    path: "/api/tikdl?url=",
    description: "Download TikTok videos without watermark",
    parameters: [
      {
        name: "url",
        type: "string",
        required: true,
        description: "TikTok video URL",
      },
    ],
    category: "downloader",
    version: "1.0.0",
    author: "wataru-api",
  },
  {
    id: "unidl",
    name: "Universal Downloader",
    method: "GET",
    path: "/api/unidl?url=",
    description: "Universal video downloader for multiple platforms",
    parameters: [
      {
        name: "url",
        type: "string",
        required: true,
        description: "Video URL from supported platforms",
      },
    ],
    category: "downloader",
    version: "1.0.0",
    author: "wataru-api",
  },
  {
    id: "ytmp3dl",
    name: "YouTube MP3 Downloader",
    method: "GET",
    path: "/api/ytmp3dl?url=",
    description: "Download YouTube videos as MP3",
    parameters: [
      {
        name: "url",
        type: "string",
        required: true,
        description: "YouTube video URL",
      },
    ],
    category: "downloader",
    version: "1.0.0",
    author: "wataru-api",
  },
  {
    id: "ytsearch",
    name: "YouTube Search",
    method: "GET",
    path: "/api/ytsearch?q=",
    description: "Search for videos on YouTube",
    parameters: [
      {
        name: "q",
        type: "string",
        required: true,
        description: "Search query",
      },
    ],
    category: "search",
    version: "1.0.0",
    author: "wataru-api",
  },
  // From Shin-API-UI-V2 repository
  {
    id: "cosplay",
    name: "Cosplay Images",
    method: "GET",
    path: "/api/cosplay",
    description: "Get random cosplay images",
    parameters: [],
    category: "random",
    version: "1.0.0",
    author: "Shin-API-UI-V2",
  },
  {
    id: "loli",
    name: "Loli Images",
    method: "GET",
    path: "/api/loli",
    description: "Get random anime loli images",
    parameters: [],
    category: "random",
    version: "1.0.0",
    author: "Shin-API-UI-V2",
  },
  {
    id: "lyrics",
    name: "Lyrics Search",
    method: "GET",
    path: "/api/lyrics?title=&artist=",
    description: "Search for song lyrics",
    parameters: [
      {
        name: "title",
        type: "string",
        required: true,
        description: "Song title",
      },
      {
        name: "artist",
        type: "string",
        required: false,
        description: "Artist name",
      },
    ],
    category: "search",
    version: "1.0.0",
    author: "Shin-API-UI-V2",
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
