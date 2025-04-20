import * as React from "react";
import { SidebarPage } from "../Sidebar/SidebarPage";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code } from "@/components/ui/code";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

type ComponentType = {
  name: string;
  description: string;
  code: string;
  usage: string;
  preview: React.ReactNode;
};

export function ComponentsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const components: ComponentType[] = [
    {
      name: "Button",
      description:
        "A button component that can be used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.",
      code: `import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);`,
      usage: `import { Button } from "@/components/ui/button"

export function ButtonExample() {
  return (
    <Button variant="default">Click me</Button>
  )
}`,
      preview: <Button>Click me</Button>,
    },
    {
      name: "Badge",
      description:
        "A badge component to display a status, count, or label with a distinct style to make it stand out.",
      code: `import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };`,
      usage: `import { Badge } from "@/components/ui/badge"

export function BadgeExample() {
  return (
    <Badge variant="secondary">New Feature</Badge>
  )
}`,
      preview: <Badge variant="secondary">New Feature</Badge>,
    },
  ];

  const filteredComponents = components.filter((component) =>
    component.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SidebarProvider
      className="bg-gradient-to-b from-[#070814] to-[#09092d] text-white w-full"
      style={{
        ["--sidebar-width" as any]: "19rem",
      }}
    >
      <div className="flex h-screen w-full overflow-hidden">
        <SidebarPage />
        <SidebarInset className="flex-1 flex flex-col w-full">
          <section className="flex-1 bg-gradient-to-b from-[#070814] to-[#09092d] text-white w-full h-screen overflow-y-auto">
            <div className="w-full animate-fade-in-up">
              <Card className="bg-[#070814]/60 backdrop-blur-sm border-0 shadow-xl overflow-hidden w-full rounded-none min-h-screen">
                <CardHeader className="pb-0 pt-6 px-6 lg:px-16">
                  <Badge className="w-fit mx-auto mb-3 px-4 py-1.5 text-sm font-medium bg-[#678aee]/10 text-[#a2a3f5] border-[#a2a3f5]/30 hover:bg-[#678aee]/20">
                    Components
                  </Badge>

                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 text-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#678aee] to-[#a2a3f5]">
                      Explore
                    </span>{" "}
                    Components
                  </h1>
                </CardHeader>

                <CardContent className="px-6 sm:px-8 lg:px-16 py-5">
                  <div className="prose max-w-4xl mx-auto text-[#bfc9f2] space-y-6">
                    <p className="text-lg sm:text-xl leading-relaxed text-center">
                      Browse our collection of beautifully designed, accessible
                      components. Each component comes with full source code
                      that you can copy and customize.
                    </p>

                    <div className="relative my-8 max-w-md mx-auto">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#bfc9f2]" />
                      <Input
                        type="search"
                        placeholder="Search components..."
                        className="w-full pl-10 bg-[#070814]/50 border-[#a2a3f5]/30 focus:border-[#678aee] placeholder:text-white/50 text-white"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>

                    <div className="space-y-10">
                      {filteredComponents.length === 0 ? (
                        <div className="text-center py-10">
                          <p className="text-lg text-[#bfc9f2]/70">
                            No components found matching your search.
                          </p>
                        </div>
                      ) : (
                        filteredComponents.map((component) => (
                          <div
                            key={component.name}
                            className="border border-[#a2a3f5]/20 rounded-lg p-6 bg-[#070814]/40"
                          >
                            <h2 className="text-2xl font-bold text-[#a2a3f5] mb-3">
                              {component.name}
                            </h2>
                            <p className="mb-4 text-[#bfc9f2]">
                              {component.description}
                            </p>

                            <div className="bg-[#0d101e]/40 rounded-lg p-4 mb-6">
                              <h3 className="text-[#678aee] font-medium mb-3">
                                Preview
                              </h3>
                              <div className="p-4 border border-[#a2a3f5]/20 rounded-md bg-[#070814]/70 flex items-center justify-center min-h-16">
                                {component.preview}
                              </div>
                            </div>

                            <Tabs defaultValue="code" className="w-full">
                              <TabsList className="grid w-full grid-cols-2 bg-[#0d101e]/70 rounded-lg mb-2">
                                <TabsTrigger
                                  value="code"
                                  className="data-[state=active]:bg-[#678aee]/20 data-[state=active]:text-[#a2a3f5] rounded-md"
                                >
                                  Component Code
                                </TabsTrigger>
                                <TabsTrigger
                                  value="usage"
                                  className="data-[state=active]:bg-[#678aee]/20 data-[state=active]:text-[#a2a3f5] rounded-md"
                                >
                                  Usage Example
                                </TabsTrigger>
                              </TabsList>

                              <TabsContent value="code" className="mt-2">
                                <Code
                                  filename={`${component.name.toLowerCase()}.tsx`}
                                  language="tsx"
                                >
                                  {component.code}
                                </Code>
                              </TabsContent>

                              <TabsContent value="usage" className="mt-2">
                                <Code filename="example.tsx" language="tsx">
                                  {component.usage}
                                </Code>
                              </TabsContent>
                            </Tabs>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
