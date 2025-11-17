import "../globals.css";

import { AppSidebar } from "@/components/app-sidebar";
import Search from "@/components/search";

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";

export const metadata: Metadata = {
  title: "Inventory",
  icons: {
    icon: "/gallery-vertical-end.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <SessionProvider>
              <AppSidebar />
              <SidebarInset>
                <div className="flex flex-1 flex-col bg-main-dark gap-4 p-4">
                  <SidebarTrigger className="md:hidden text-white" />
                  <div className="bg-white dark:bg-main-dark-theme min-h-[100vh] flex-1 flex flex-col rounded-3xl md:min-h-min p-7">
                    <div className="flex justify-end gap-2">
                      <ModeToggle />
                      <Search />
                    </div>
                    {children}
                  </div>
                </div>
              </SidebarInset>
            </SessionProvider>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
