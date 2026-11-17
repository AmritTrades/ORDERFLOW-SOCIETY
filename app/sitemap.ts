import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://www.orderflowsociety.com", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: "https://www.orderflowsociety.com/llms.txt", lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
  ];
}
