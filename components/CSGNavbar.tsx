"use client";

import { useState } from "react";
import { HoverPrefetchLink as Link } from "@/components/HoverPrefetchLink";
import { usePathname } from "next/navigation";
import type { Route } from "next";
import {
  AtSign,
  CircleHelp,
  House,
  Menu,
  Scale,
  Server,
  Users,
} from "lucide-react";
import { cn } from "cn";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const routes: { href: Route; name: string; icon: typeof House }[] = [
  { href: "/", name: "Home", icon: House },
  { href: "/servers", name: "Servers", icon: Server },
  { href: "/rules", name: "Rules", icon: Scale },
  { href: "/about", name: "About Us", icon: Users },
  { href: "/faq", name: "FAQ", icon: CircleHelp },
  { href: "/contact", name: "Contact", icon: AtSign },
];

export const CSGNavbar = () => {
  const pathName = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold orange">
          CSG Exile
        </Link>

        <NavigationMenu className="hidden md:flex" viewport={false}>
          <NavigationMenuList>
            {routes.map(({ href, name, icon: Icon }) => (
              <NavigationMenuItem key={href}>
                <NavigationMenuLink
                  asChild
                  active={pathName === href}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "flex-row gap-2 bg-transparent data-[active=true]:bg-accent"
                  )}
                >
                  <Link href={href}>
                    <Icon className="size-4" />
                    {name}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetHeader>
              <SheetTitle className="orange">CSG Exile</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {routes.map(({ href, name, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                    pathName === href && "bg-accent text-accent-foreground"
                  )}
                >
                  <Icon className="size-4" />
                  {name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
