import * as React from "react";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

const data = {
  navMain: [
    {
      title: "Getting Started",
      url: "#",
      items: [
        {
          title: "Introduction",
          url: "/home",
        },
        {
          title: "Installation",
          url: "#",
        },
        {
          title: "CLI",
          url: "#",
        },
      ],
    },
    {
      title: "Installation",
      url: "#",
      items: [
        {
          title: "Vite",
          url: "#",
        },
        {
          title: "Next.js",
          url: "#",
        },
        {
          title: "Manual Setup",
          url: "#",
        },
      ],
    },
    {
      title: "Components",
      url: "#",
      items: [
        {
          title: "Introduction",
          url: "/home",
        },
        {
          title: "Buttons",
          url: "#",
        },
        {
          title: "Cards",
          url: "#",
        },
      ],
    },
    {
      title: "Architecture",
      url: "#",
      items: [
        {
          title: "Accessibility",
          url: "#",
        },
        {
          title: "Fast Refresh",
          url: "#",
        },
      ],
    },
    {
      title: "Community",
      url: "#",
      items: [
        {
          title: "Contribution Guide",
          url: "#",
        },
      ],
    },
  ],
};

export function SidebarPage({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const [activeSection, setActiveSection] = useState<string | null>(
    "Getting Started"
  );
  const [activePage, setActivePage] = useState<string>("Introduction");

  const toggleSection = (title: string) => {
    setActiveSection(activeSection === title ? null : title);
  };

  return (
    <Sidebar
      variant="floating"
      className="group bg-gradient-to-b from-[#070814] to-[#09092d] text-white border-0 shadow-xl h-screen"
      {...props}
    >
      <SidebarHeader className="border-b border-[#a2a3f5]/20 pb-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex items-center p-3">
              <div className="flex items-center">
                <span className="text-[#678aee] mr-1 text-xl font-bold">
                  Div
                </span>
                <span className="text-white text-xl font-bold">-ine UI</span>
              </div>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="overflow-hidden h-[calc(100vh-4rem)] py-2">
        <SidebarGroup>
          <SidebarMenu className="gap-1">
            {data.navMain.map((section) => (
              <SidebarMenuItem
                key={section.title}
                className="transition-all duration-200"
              >
                <SidebarMenuButton
                  onClick={() => toggleSection(section.title)}
                  className={cn(
                    "font-medium hover:bg-[#678aee]/10 transition-colors px-3 py-2 rounded-lg flex items-center justify-between gap-2 text-white text-sm",
                    activeSection === section.title &&
                      "bg-[#678aee]/15 text-[#a2a3f5]"
                  )}
                >
                  <span>{section.title}</span>
                  <span className="transition-transform duration-200">
                    {activeSection === section.title ? (
                      <ChevronDown className="h-3.5 w-3.5 text-[#a2a3f5]" />
                    ) : (
                      <ChevronRight className="h-3.5 w-3.5 text-[#bfc9f2]" />
                    )}
                  </span>
                </SidebarMenuButton>
                {section.items?.length && activeSection === section.title && (
                  <SidebarMenuSub className="ml-3 border-l border-[#a2a3f5]/20 pl-2 mt-1 mb-1 overflow-hidden">
                    {section.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton
                          asChild
                          onClick={() => setActivePage(item.title)}
                        >
                          <a
                            href={item.url}
                            className={cn(
                              "hover:bg-[#678aee]/10 transition-colors px-2 py-1 rounded-lg flex items-center gap-1 text-[#bfc9f2]/90 hover:text-[#a2a3f5] text-xs",
                              activePage === item.title &&
                                "bg-gradient-to-r from-[#678aee]/20 to-[#ffc2e1]/10 text-[#a2a3f5]"
                            )}
                          >
                            {item.title}
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                )}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
