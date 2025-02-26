import type { MetadataRoute } from "next";

export default function Robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/*",
      disallow: ["/admin", "/auth/*", "/order"],
    },
    host: "system-storage.ru",
    sitemap: "https://system-storage.ru/sitemap.xml",
  };
}
