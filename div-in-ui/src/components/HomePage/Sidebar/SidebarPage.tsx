import * as React from "react";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
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
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

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
          url: "/components/button",
        },
        {
          title: "Card",
          url: "/components/card",
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
      className="group bg-gradient-to-b from-[#222831] to-[#393E46] text-[#EEEEEE] border-0 shadow-xl h-screen"
      {...props}
    >
      <SidebarHeader className="border-b border-[#00ADB5]/20 pb-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex items-center p-3">
              <div className="flex items-center">
                <span className="text-[#00ADB5] mr-1 text-xl font-bold">
                  Div
                </span>
                <span className="text-[#EEEEEE] text-xl font-bold">
                  -ine UI
                </span>
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
                  className={`flex items-center justify-between w-full px-4 py-2 text-left text-[#EEEEEE] hover:bg-[#00ADB5]/20 hover:text-[#7b7b7b] transition-colors ${
                    activeSection === section.title ? "bg-[#00ADB5]/10" : ""
                  }`}
                >
                  {section.title}
                  <ChevronDown
                    className={`transition-transform ${
                      activeSection === section.title ? "rotate-180" : ""
                    }`}
                  />
                </SidebarMenuButton>
                {activeSection === section.title && (
                  <SidebarMenuSub>
                    {section.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <Link
                          to={item.url}
                          className={`block px-4 py-2 text-[#7b7b7b] hover:bg-[#00ADB5]/10 hover:text-[#EEEEEE] transition-colors ${
                            activePage === item.title ? "bg-[#00ADB5]/10" : ""
                          }`}
                        >
                          {item.title}
                        </Link>
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
