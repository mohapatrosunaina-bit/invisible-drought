import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://invisible-drought.vercel.app";
  const lastModified = new Date();

  const routes = [
    "",
    "/research",
    "/methodology",
    "/data",
    "/findings",
    "/geospatial-explorer",
    "/seasonal-analysis",
    "/reproducibility",
    "/limitations",
    "/about",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
