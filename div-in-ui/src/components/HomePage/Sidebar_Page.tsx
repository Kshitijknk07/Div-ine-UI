import { SidebarPage } from "./Sidebar/SidebarPage";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function Sidebar_Page() {
  return (
    <SidebarProvider
      style={{
        background: "#eae0d5",
        color: "#250902",
        ["--sidebar-width" as any]: "19rem",
      }}
    >
      <SidebarPage />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1 hover:bg-[#250902]/10 transition-colors rounded-lg p-2 hover:shadow-md hover:shadow-[#250902]/20" />
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-[#250902]/10" />
            <div className="aspect-video rounded-xl bg-[#250902]/10" />
            <div className="aspect-video rounded-xl bg-[#250902]/10" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-[#250902]/10 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
