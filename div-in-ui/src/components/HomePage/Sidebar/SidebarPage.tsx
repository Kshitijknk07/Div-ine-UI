import * as React from "react";
import { useState, useEffect } from "react";
import {
  ChevronDown,
  Home,
  Code,
  Package,
  Users,
  FileText,
} from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
} from "@/components/ui/sidebar";

const data = {
  navMain: [
    {
      title: "Introduction",
      icon: <Home className="w-4 h-4" />,
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
      icon: <Code className="w-4 h-4" />,
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
      icon: <Package className="w-4 h-4" />,
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
      icon: <Code className="w-4 h-4" />,
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
      icon: <FileText className="w-4 h-4" />,
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
      icon: <Users className="w-4 h-4" />,
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
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  useEffect(() => {
    const pathname = location.pathname;

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
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center p-3"
            >
              <div className="flex items-center">
                <span className="text-[#00ADB5] mr-1 text-xl font-bold">
                  Div
                </span>
                <span className="text-[#00ADB5] text-xl font-extrabold">
                  -ine UI
                </span>
              </div>
            </motion.div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="overflow-y-auto scrollbar-thin scrollbar-thumb-[#00ADB5]/20 scrollbar-track-transparent">
        {data.navMain.map((section) => (
          <SidebarGroup key={section.title}>
            <motion.div
              onHoverStart={() => setHoveredSection(section.title)}
              onHoverEnd={() => setHoveredSection(null)}
            >
              <SidebarMenuButton
                onClick={() => toggleSection(section.title)}
                className={cn(
                  "flex items-center justify-between p-3 transition-all duration-200",
                  hoveredSection === section.title
                    ? "bg-[#00ADB5]/10"
                    : "hover:bg-[#00ADB5]/5"
                )}
              >
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{
                      color:
                        hoveredSection === section.title
                          ? "#00ADB5"
                          : "#EEEEEE",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {section.icon}
                  </motion.div>
                  <motion.span
                    animate={{
                      color:
                        hoveredSection === section.title
                          ? "#00ADB5"
                          : "#EEEEEE",
                    }}
                    transition={{ duration: 0.2 }}
                    className="text-sm font-medium"
                  >
                    {section.title}
                  </motion.span>
                </div>
                <motion.div
                  animate={{
                    rotate: activeSection === section.title ? 180 : 0,
                    color:
                      hoveredSection === section.title ? "#00ADB5" : "#EEEEEE",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </SidebarMenuButton>
            </motion.div>

            <AnimatePresence>
              {activeSection === section.title && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <SidebarMenuSub className="pl-4">
                    {section.items.map((item) => (
                      <motion.li
                        key={item.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                        className={cn(
                          "block px-3 py-2 text-sm font-medium rounded-md transition-all duration-200",
                          activePage === item.title
                            ? "bg-[#00ADB5]/10 text-[#00ADB5]"
                            : "text-[#EEEEEE] hover:bg-[#00ADB5]/10 hover:text-[#00ADB5]"
                        )}
                      >
                        <Link
                          to={item.url}
                          className="flex items-center gap-2 transition-colors duration-200"
                        >
                          {item.title}
                        </Link>
                      </motion.li>
                    ))}
                  </SidebarMenuSub>
                </motion.div>
              )}
            </AnimatePresence>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
