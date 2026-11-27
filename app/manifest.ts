import { MetadataRoute } from "next";

export default function manifest (): MetadataRoute.Manifest
{
  return {
    name: "Cerberus Stomping Ground Exile",
    short_name: "CSG Exile",
    description: "Cerberus Stomping Ground Exile",
    start_url: "/",
    display: "standalone",
    background_color: "#232323",
    theme_color: "#DE5021",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      {
        src: "/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}

export const dynamic = "force-static";
