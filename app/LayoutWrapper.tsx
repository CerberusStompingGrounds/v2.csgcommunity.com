"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Copyright } from "lucide-react";
import { CSGNavbar } from "@/components/CSGNavbar";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const LayoutWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <CSGNavbar />
            <main className="w-full flex-1">{children}</main>
            <footer className="sticky bottom-0 z-50 w-full border-t bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="mx-auto flex max-w-screen-2xl items-center justify-center gap-1 px-4 py-4 text-sm orange">
                <Copyright className="size-4" />
                CSG 2026
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
};
