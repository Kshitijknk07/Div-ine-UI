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
import { motion } from "framer-motion";

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
        "A versatile button component with support for multiple variants, sizes, icons, and loading states. Designed for both functionality and aesthetic appeal.",
      code: `import * as React from "react";
import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:translate-y-[1px]",
  {
    variants: {
      variant: {
        default: 
          "bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-md hover:shadow-lg hover:from-primary/95 hover:to-primary/85",
        outline: 
          "border border-input bg-background/40 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground",
        solid: 
          "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: 
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        success: 
          "bg-green-600 text-white hover:bg-green-700",
        secondary: 
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: 
          "hover:bg-accent hover:text-accent-foreground",
        link: 
          "text-primary underline-offset-4 hover:underline",
        soft: 
          "bg-primary/10 text-primary hover:bg-primary/20",
        glossy: 
          "bg-gradient-to-b from-white/10 to-white/5 border border-white/20 backdrop-blur-sm text-white shadow-inner",
      },
      size: {
        default: "h-9 px-4 py-2 rounded-md",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-11 rounded-md px-8",
        xl: "h-12 rounded-lg px-10 text-base",
        icon: "h-9 w-9 rounded-md",
        pill: "h-9 px-6 rounded-full",
        "sm-pill": "h-8 px-4 rounded-full text-xs",
        "lg-pill": "h-11 px-8 rounded-full",
        "xl-pill": "h-12 px-10 rounded-full text-base",
      },
      animation: {
        none: "",
        pulse: "animate-pulse",
        bounce: "animate-bounce",
        glow: "animate-glow",
      },
      iconPosition: {
        none: "",
        left: "flex-row",
        right: "flex-row-reverse"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      animation: "none",
      iconPosition: "none"
    },
    compoundVariants: [
      {
        iconPosition: ["left", "right"],
        className: "gap-2"
      }
    ]
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    animation,
    iconPosition,
    loading = false,
    icon,
    children,
    disabled,
    ...props 
  }, ref) => {
    // Handle loading state
    const isDisabled = disabled || loading;
    
    return (
      <button
        className={cn(
          buttonVariants({ 
            variant, 
            size, 
            animation,
            iconPosition: icon ? (iconPosition || "left") : "none"
          }), 
          className
        )}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        {loading && (
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </span>
        )}
        {icon && iconPosition !== "right" && <span className={loading ? "invisible" : ""}>{icon}</span>}
        <span className={loading ? "invisible" : ""}>{children}</span>
        {icon && iconPosition === "right" && <span className={loading ? "invisible" : ""}>{icon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };`,
      usage: `import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";

export function ButtonExample() {
  return (
    <div className="flex flex-col gap-4">
      {/* Basic usage */}
      <Button>Default Button</Button>
      
      {/* With icon */}
      <Button icon={<Mail className="h-4 w-4" />}>
        Email Us
      </Button>
      
      {/* Icon position right */}
      <Button 
        icon={<ArrowRight className="h-4 w-4" />} 
        iconPosition="right"
        variant="solid"
      >
        Next Step
      </Button>
      
      {/* Variants */}
      <div className="flex gap-2">
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
    </div>
  );
}`,
      preview: (
        <div className="flex flex-wrap gap-2">
          <Button>Default</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="solid">Solid</Button>
        </div>
      ),
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
      className="bg-gradient-to-b from-[#222831] to-[#393E46] text-[#EEEEEE] w-full"
      style={{
        ["--sidebar-width" as any]: "19rem",
      }}
    >
      <div className="flex h-screen w-full overflow-hidden">
        <SidebarPage />
        <SidebarInset className="flex-1 flex flex-col w-full">
          <section className="flex-1 bg-gradient-to-b from-[#222831] to-[#393E46] text-[#EEEEEE] w-full h-screen overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <Card className="bg-[#222831]/80 backdrop-blur-sm border-0 shadow-xl overflow-hidden w-full rounded-none min-h-screen">
                <CardHeader className="pb-0 pt-6 px-6 lg:px-16">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Badge className="w-fit mx-auto mb-3 px-4 py-1.5 text-sm font-medium bg-[#00ADB5]/20 text-[#00ADB5] border-[#00ADB5]/50 hover:bg-[#00ADB5]/30">
                      Components
                    </Badge>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 text-center"
                  >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ADB5] to-[#00ADB5]">
                      Explore
                    </span>{" "}
                    Components
                  </motion.h1>
                </CardHeader>

                <CardContent className="px-6 sm:px-8 lg:px-16 py-5">
                  <div className="prose max-w-4xl mx-auto text-[#EEEEEE] space-y-6">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-lg sm:text-xl leading-relaxed text-center"
                    >
                      Browse our collection of beautifully designed, accessible
                      components. Each component comes with full source code
                      that you can copy and customize.
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="relative my-8 max-w-md mx-auto"
                    >
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#00ADB5]" />
                      <Input
                        type="search"
                        placeholder="Search components..."
                        className="w-full pl-10 bg-[#222831]/50 border-[#00ADB5]/30 focus:border-[#00ADB5] placeholder:text-[#EEEEEE]/50 text-[#EEEEEE]"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </motion.div>

                    <div className="space-y-10">
                      {filteredComponents.length === 0 ? (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5 }}
                          className="text-center py-10"
                        >
                          <p className="text-lg text-[#EEEEEE]/70">
                            No components found matching your search.
                          </p>
                        </motion.div>
                      ) : (
                        filteredComponents.map((component, index) => (
                          <motion.div
                            key={component.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="border border-[#00ADB5]/20 rounded-lg p-6 bg-[#222831]/40 hover:bg-[#222831]/60 transition-colors duration-200"
                          >
                            <h2 className="text-2xl font-bold text-[#00ADB5] mb-3">
                              {component.name}
                            </h2>
                            <p className="mb-4 text-[#EEEEEE]">
                              {component.description}
                            </p>

                            <div className="bg-[#222831]/60 rounded-lg p-4 mb-6">
                              <h3 className="text-[#00ADB5] font-medium mb-3">
                                Preview
                              </h3>
                              <div className="p-4 border border-[#00ADB5]/20 rounded-md bg-[#222831]/70 flex items-center justify-center min-h-16">
                                {component.preview}
                              </div>
                            </div>

                            <Tabs defaultValue="code" className="w-full">
                              <TabsList className="grid w-full grid-cols-2 bg-[#222831]/70 rounded-lg mb-2">
                                <TabsTrigger
                                  value="code"
                                  className="data-[state=active]:bg-[#00ADB5]/20 data-[state=active]:text-[#00ADB5] rounded-md"
                                >
                                  Component Code
                                </TabsTrigger>
                                <TabsTrigger
                                  value="usage"
                                  className="data-[state=active]:bg-[#00ADB5]/20 data-[state=active]:text-[#00ADB5] rounded-md"
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
                          </motion.div>
                        ))
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </section>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
