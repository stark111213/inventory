"use client";

import * as React from "react";
import { Home } from "lucide-react";

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
import PassUser from "./pass-user";

const merriweather = Merriweather_Sans({ subsets: ["latin"] });

const data = {
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: Home,
      isActive: true,
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
