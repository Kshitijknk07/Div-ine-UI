import * as React from "react";
import { useState, useEffect } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

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
      title: "Introduction",
      url: "#",
      items: [
        {
          title: "Overview",
          url: "/home",
        },
        {
          title: "Philosophy",
          url: "/philosophy",
        },
        {
          title: "Getting Started",
          url: "/getting-started",
        },
      ],
    },
    {
      title: "Core Principles",
      url: "#",
      items: [
        {
          title: "Open Code",
          url: "/open-code",
        },
        {
          title: "Composition",
          url: "/composition",
        },
        {
          title: "Distribution",
          url: "/distribution",
        },
        {
          title: "Beautiful Defaults",
          url: "/beautiful-defaults",
        },
      ],
    },
    {
      title: "Installation",
      url: "#",
      items: [
        {
          title: "Vite",
          url: "/installation/vite",
        },
        {
          title: "Next.js",
          url: "/installation/nextjs",
        },
        {
          title: "Manual Setup",
          url: "/installation/manual",
        },
      ],
    },
    {
      title: "Components",
      url: "#",
      items: [
        {
          title: "Button",
          url: "#",
        },
        {
          title: "Card",
          url: "#",
        },
        {
          title: "Sidebar",
          url: "#",
        },
        {
          title: "Badge",
          url: "#",
        },
        {
          title: "All Components",
          url: "/components",
        },
      ],
    },
    {
      title: "Resources",
      url: "#",
      items: [
        {
          title: "Documentation",
          url: "#",
        },
        {
          title: "Examples",
          url: "#",
        },
        {
          title: "Schema Reference",
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
        {
          title: "GitHub",
          url: "#",
        },
        {
          title: "Discord",
          url: "#",
        },
      ],
    },
  ],
};

// Helper function to find the page title by URL
const findPageTitleByUrl = (
  url: string
): { title: string; section: string } | null => {
  for (const section of data.navMain) {
    for (const item of section.items) {
      if (item.url === url) {
        return { title: item.title, section: section.title };
      }
    }
  }
  return null;
};

export function SidebarPage({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string | null>(
    "Introduction"
  );
  const [activePage, setActivePage] = useState<string>("Overview");

  // Update active page and section based on current URL
  useEffect(() => {
    const pathname = location.pathname;

    // Handle default paths
    if (pathname === "/" || pathname === "") {
      setActivePage("Overview");
      setActiveSection("Introduction");
      return;
    }

    const pageInfo = findPageTitleByUrl(pathname);
    if (pageInfo) {
      setActivePage(pageInfo.title);
      setActiveSection(pageInfo.section);
    }
  }, [location.pathname]);

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
                          onClick={() => {
                            setActivePage(item.title);
                            if (item.url !== "#") {
                              setActiveSection(section.title);
                            }
                          }}
                        >
                          {item.url === "#" ? (
                            <span
                              className={cn(
                                "hover:bg-[#678aee]/10 transition-colors px-2 py-1 rounded-lg flex items-center gap-1 text-[#bfc9f2]/90 hover:text-[#a2a3f5] text-xs cursor-pointer",
                                activePage === item.title &&
                                  "bg-gradient-to-r from-[#678aee]/20 to-[#ffc2e1]/10 text-[#a2a3f5]"
                              )}
                            >
                              {item.title}
                            </span>
                          ) : (
                            <Link
                              to={item.url}
                              className={cn(
                                "hover:bg-[#678aee]/10 transition-colors px-2 py-1 rounded-lg flex items-center gap-1 text-[#bfc9f2]/90 hover:text-[#a2a3f5] text-xs",
                                activePage === item.title &&
                                  "bg-gradient-to-r from-[#678aee]/20 to-[#ffc2e1]/10 text-[#a2a3f5]"
                              )}
                            >
                              {item.title}
                            </Link>
                          )}
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
