"use client";

import * as React from "react";
import {
  HomeIcon,
  Settings2,
  ChartBarBigIcon,
  MessageCircleIcon,
} from "lucide-react";

import { NavMain } from "./nav-main";
import { NavSecondary } from "./nav-secondary";
import { NavUser } from "./nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";

const data = {
  user: {
    name: "Andeh",
    allyCode: "567-968-497",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Home",
      url: "/app",
      icon: HomeIcon,
      isActive: true,
    },
    {
      title: "Trackers",
      url: "#",
      icon: ChartBarBigIcon,
      items: [
        {
          title: "Shard Tracker",
          url: "/app/trackers/shards",
        },
        {
          title: "Gear Tracker",
          url: "/app/trackers/gear",
        },
      ],
    },
    {
      title: "Settings",
      url: "/app/settings",
      icon: Settings2,
    },
  ],
  navSecondary: [
    {
      title: "Discord Server",
      url: "/discord",
      icon: MessageCircleIcon,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild className="pl-0">
              <Link href="/" className="flex flex-shrink-0 items-center gap-2">
                <Image
                  src="/Transparent_3.png"
                  alt="Logo"
                  width={48}
                  height={48}
                />
                <p className="text-lg font-semibold">HoloNexus</p>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
