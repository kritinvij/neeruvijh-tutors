import type { MetadataRoute } from "next";

// TODO: Update URL to custom domain when configured
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://neeruvijhtutors.vercel.app",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
