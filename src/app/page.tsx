import { AppSidebar } from "@/components/app-sidebar";
import { TypographyH1 } from "@/components/TypographyH1";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { SessionProvider } from "next-auth/react";

export default function Home() {
  return (
    <SidebarProvider>
      <SessionProvider>
        <AppSidebar />
      </SessionProvider>
      <SidebarInset>
        <div className="flex flex-1 flex-col bg-main-dark gap-4 p-4">
          <SidebarTrigger className="md:hidden text-white" />
          <div className="bg-main-light min-h-[100vh] flex-1 flex flex-col rounded-3xl md:min-h-min p-7">
            <TypographyH1 />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
