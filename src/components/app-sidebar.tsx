"use client";

import * as React from "react";
import { GalleryVerticalEnd, LayoutDashboard } from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { Merriweather_Sans } from "next/font/google";
import PassUser from "../app/api/pass-user";
import { redirect } from "next/navigation";

const merriweather = Merriweather_Sans({ subsets: ["latin"] });

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: LayoutDashboard,
      isActive: false,
    },
    {
      title: "Create an Inventory",
      url: "/inventories",
      icon: GalleryVerticalEnd,
      isActive: false,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="flex flex-row items-center justify-around mt-3">
        <Link
          href="/"
          className={`${merriweather.className} truncate tracking-wider text-2xl`}
        >
          INVENTORY
        </Link>
        <SidebarTrigger className="-ml-1 md:visible" />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter className="mb-5">
        <NavUser user={PassUser()} />
      </SidebarFooter>
    </Sidebar>
  );
}
