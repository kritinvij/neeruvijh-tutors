import type { MetadataRoute } from "next";

// TODO: Update sitemap URL to custom domain when configured
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [],
    },
    sitemap: "https://neeruvijhtutors.vercel.app/sitemap.xml",
  };
}
