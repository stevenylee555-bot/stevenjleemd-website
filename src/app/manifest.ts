import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Steven J. Lee, MD, Orthopedic Surgery",
    short_name: "Dr. Steven Lee",
    description:
      "Board-certified orthopedic surgeon specializing in hand, wrist, elbow, shoulder, and sports medicine. NYC and Scarsdale.",
    start_url: "/",
    display: "standalone",
    background_color: "#11193a",
    theme_color: "#11193a",
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
