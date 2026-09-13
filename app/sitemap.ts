import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/content/site";
import { products } from "@/lib/content/products";
import { caseStudies } from "@/lib/content/case-studies";
import { team } from "@/lib/content/team";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/solutions",
    "/products",
    "/case-studies",
    "/team",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ];

  const dynamicRoutes = [
    ...products.map((p) => `/products/${p.slug}`),
    ...caseStudies.map((c) => `/case-studies/${c.slug}`),
    ...team.map((t) => `/team/${t.slug}`),
  ];

  return [...staticRoutes, ...dynamicRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));
}
