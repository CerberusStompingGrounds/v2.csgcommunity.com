import { MetadataRoute } from "next";

const BASE_URL = "https://csgcommunity.com";
const PAGES = ["", "/servers", "/rules", "/about", "/faq", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((path) => ({
    url: `${BASE_URL}${path}`,
    changeFrequency: "yearly",
    priority: path === "" ? 1 : 0.8,
  }));
}

export const dynamic = "force-static";
