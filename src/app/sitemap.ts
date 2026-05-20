import { MetadataRoute } from "next";

const DEFAULT_SITE_URL = "https://rameshwarbhagwat.me";

function resolveSiteUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const baseUrl = envUrl && envUrl.length > 0 ? envUrl : DEFAULT_SITE_URL;
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = resolveSiteUrl();
  const lastModified = new Date();

  // Keep sitemap focused on canonical, indexable routes only.
  const routes = [
    {
      path: "",
      changeFrequency: "weekly" as const,
      priority: 1,
    },
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
