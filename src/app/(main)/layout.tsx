import "../globals.css";

import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <SidebarProvider>
          <SessionProvider>
            <AppSidebar />
          </SessionProvider>
          <SidebarInset>
            <div className="flex flex-1 flex-col bg-main-dark gap-4 p-4">
              <SidebarTrigger className="md:hidden text-white" />
              <div className="bg-main-light min-h-[100vh] flex-1 flex flex-col rounded-3xl md:min-h-min p-7">
                {children}
              </div>
            </div>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
