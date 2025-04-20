import * as React from "react";

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

const data = {
  navMain: [
    {
      title: "Getting Started",
      url: "#",
      items: [
        {
          title: "Introduction",
          url: "#",
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
          title: "Buttons",
          url: "#",
        },
        {
          title: "Cards",
          url: "#",
        },
        {
          title: "Modals",
          url: "#",
        },
        {
          title: "Forms",
          url: "#",
        },
        {
          title: "Tables",
          url: "#",
        },
        {
          title: "Accordions",
          url: "#",
        },
        {
          title: "Dropdowns",
          url: "#",
        },
        {
          title: "Tabs",
          url: "#",
        },
        {
          title: "Alerts",
          url: "#",
        },
        {
          title: "Loaders",
          url: "#",
        },
        {
          title: "File Conventions",
          url: "#",
        },
        {
          title: "Functions",
          url: "#",
        },
        {
          title: "next.config.js Options",
          url: "#",
        },
        {
          title: "CLI",
          url: "#",
        },
        {
          title: "Edge Runtime",
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
        {
          title: "Next.js Compiler",
          url: "#",
        },
        {
          title: "Supported Browsers",
          url: "#",
        },
        {
          title: "Turbopack",
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
  return (
    <Sidebar
      variant="floating"
      style={{
        background: "#eae0d5",
        color: "#250902",
      }}
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex items-center gap-3 p-4">
              <div
                className="font-bold text-3xl"
                style={{
                  background: "linear-gradient(90deg, #250902, #250902)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Div-ine-ui
              </div>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-1">
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a
                    href={item.url}
                    className="font-medium hover:bg-[#250902]/10 transition-colors px-3 py-2 rounded-lg flex items-center gap-2"
                    style={{ color: "#250902" }}
                  >
                    {item.title}
                  </a>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub className="ml-4 border-l border-[#250902]/20 px-2">
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild>
                          <a
                            href={item.url}
                            className="hover:bg-[#250902]/10 transition-colors px-3 py-1.5 rounded-lg flex items-center gap-2"
                            style={{ color: "#250902" }}
                          >
                            {item.title}
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
