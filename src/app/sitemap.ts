import type { MetadataRoute } from "next";
import { conditions } from "@/lib/conditions";
import { procedureProtocols } from "@/lib/procedureProtocols";

const BASE = "https://www.stevenjleemd.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, freq: "weekly" },
    { path: "/about", priority: 0.7, freq: "monthly" },
    { path: "/about/bio", priority: 0.8, freq: "monthly" },
    { path: "/about/credentials", priority: 0.6, freq: "monthly" },
    { path: "/about/publications", priority: 0.7, freq: "monthly" },
    { path: "/about/cv", priority: 0.5, freq: "yearly" },
    { path: "/specialties", priority: 0.8, freq: "monthly" },
    { path: "/specialties/hand-wrist", priority: 0.9, freq: "monthly" },
    { path: "/specialties/elbow", priority: 0.9, freq: "monthly" },
    { path: "/specialties/shoulder", priority: 0.9, freq: "monthly" },
    { path: "/specialties/knee", priority: 0.9, freq: "monthly" },
    { path: "/specialties/advanced-treatments", priority: 0.8, freq: "monthly" },
    { path: "/conditions", priority: 0.9, freq: "weekly" },
    { path: "/before-surgery", priority: 0.7, freq: "monthly" },
    { path: "/therapy-protocols", priority: 0.7, freq: "monthly" },
    { path: "/surgery-nutrition", priority: 0.6, freq: "monthly" },
    { path: "/second-opinions", priority: 0.95, freq: "monthly" },
    { path: "/insurance-and-costs", priority: 0.8, freq: "monthly" },
    { path: "/hand-surgeon-upper-east-side", priority: 0.9, freq: "monthly" },
    { path: "/hand-surgeon-scarsdale", priority: 0.9, freq: "monthly" },
    { path: "/testimonials", priority: 0.7, freq: "monthly" },
    { path: "/contact", priority: 0.85, freq: "monthly" },
    { path: "/privacy", priority: 0.3, freq: "yearly" },
  ];

  const conditionRoutes = conditions
    .filter((c) => c.status === "priority")
    .map((c) => ({
      url: `${BASE}/conditions/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    }));

  const protocolRoutes = procedureProtocols
    .filter((p) => p.status === "live")
    .map((p) => ({
      url: `${BASE}/therapy-protocols/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [
    ...staticRoutes.map((r) => ({
      url: `${BASE}${r.path}`,
      lastModified: now,
      changeFrequency: r.freq,
      priority: r.priority,
    })),
    ...conditionRoutes,
    ...protocolRoutes,
  ];
}
