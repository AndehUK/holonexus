"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

export function MobileNavigation() {
  const { setTheme, theme } = useTheme();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="flex sm:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-left">
            Holonexus - Launch Control
          </SheetTitle>
        </SheetHeader>
        <div className="mt-8 flex flex-col justify-center gap-4">
          <Button className="w-full rounded-lg">Home</Button>
          <SignedOut>
            <Link href="/login">
              <Button variant="outline" className="w-full rounded-lg">
                Login
              </Button>
            </Link>
          </SignedOut>
          <SignedIn>
            <Button variant="outline" className="w-full rounded-lg">
              Manage Profile
            </Button>
          </SignedIn>
          <div className="flex w-full items-center justify-center gap-4">
            <Button
              className="w-full"
              variant={theme === "light" ? "default" : "outline"}
              onClick={() => setTheme("light")}
            >
              <Sun />
            </Button>
            <Button
              className="w-full"
              variant={theme === "dark" ? "default" : "outline"}
              onClick={() => setTheme("dark")}
            >
              <Moon />
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
