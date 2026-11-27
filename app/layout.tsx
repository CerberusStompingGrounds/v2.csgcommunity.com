import type { Metadata } from "next";
import { Copyright } from "lucide-react";
import { CSGNavbar } from "@/components/CSGNavbar";
import { inter } from "@/lib/fonts";
import { siteOpenGraph } from "@/lib/metadata";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://csgcommunity.com"),
  title: {
    default: "CSG Exile | Cerberus Stomping Grounds",
    template: "%s | CSG Exile",
  },
  description:
    "Cerberus Stomping Grounds — a custom ARMA 3 Exile server on Chernarus Isles with custom traders, missions, locations and loot.",
  authors: { url: "https://jallison.co.uk", name: "Danny Dorito" },
  openGraph: siteOpenGraph,
  twitter: {
    card: "summary_large_image",
    site: "@csg_exile",
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body className={inter.className}>
        <div className="flex min-h-dvh flex-col">
          <CSGNavbar />
          <main className="flex w-full flex-1 flex-col">{children}</main>
          <footer className="sticky bottom-0 z-50 w-full border-t bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-auto flex max-w-screen-2xl items-center justify-center gap-1 px-4 py-4 text-sm orange">
              <Copyright className="size-4" />
              CSG 2026
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
