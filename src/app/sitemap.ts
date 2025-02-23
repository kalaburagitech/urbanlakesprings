import { MetadataRoute } from "next";

export const dynamic = "force-static"; 

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://urbanlakesprings.in", lastModified: new Date() },
    { url: "https://urbanlakesprings.in/about", lastModified: new Date() },
    { url: "https://urbanlakesprings.in/price", lastModified: new Date() },
    { url: "https://urbanlakesprings.in/floorplan", lastModified: new Date() },
    { url: "https://urbanlakesprings.in/location", lastModified: new Date() },
    { url: "https://urbanlakesprings.in/gallery", lastModified: new Date() },
    { url: "https://urbanlakesprings.in/contact", lastModified: new Date() },
  ];
}
