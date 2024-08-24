"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Separator } from "@/components/ui/separator";
import { MobileNavigation } from "./mobile-navigation";

const font = Montserrat({ weight: "600", subsets: ["latin"] });

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      <Link href="/" className="flex items-center">
        <div className="relative mr-4 size-8">
          <Image fill alt="Logo" src="/gr_logo.png" />
        </div>
        <h1 className={cn("text-2xl font-bold", font.className)}>Holonexus</h1>
      </Link>
      <div className="hidden items-center gap-x-4 sm:flex">
        <SignedOut>
          <Link href="/login">
            <Button className="rounded-2xl">Login</Button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <Separator orientation="vertical" className="h-8" />
        <ThemeToggle />
      </div>
      <MobileNavigation />
    </nav>
  );
};
