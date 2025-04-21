import { SidebarPage } from "../Sidebar/SidebarPage";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code } from "@/components/ui/code";
import { ExternalLink, Mail, Trash2 } from "lucide-react";

export function ButtonPage() {
  const buttonCode = `import * as React from "react";
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

export { Button, buttonVariants };`;

  const buttonUsageCode = `import { Button } from "@/components/ui/button";
import { Mail, ArrowRight, Trash2 } from "lucide-react";

export function ButtonDemo() {
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
      >
        Next Step
      </Button>
      
      {/* Loading state */}
      <Button loading>Processing</Button>
      
      {/* Destructive variant */}
      <Button variant="destructive" icon={<Trash2 className="h-4 w-4" />}>
        Delete
      </Button>
    </div>
  );
}`;

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
                    Button Components
                  </Badge>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 text-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#678aee] to-[#a2a3f5]">
                      Button
                    </span>
                  </h1>
                  <p className="text-center text-[#bfc9f2] text-lg max-w-2xl mx-auto mt-2">
                    Discover a range of button components designed for modern
                    UIs. Each button is customizable, responsive, and
                    accessible.
                  </p>
                </CardHeader>

                <CardContent className="px-6 sm:px-8 lg:px-16 py-5">
                  <div className="prose max-w-4xl mx-auto text-[#bfc9f2] space-y-6">
                    <p className="text-lg sm:text-xl leading-relaxed text-center">
                      The{" "}
                      <span className="text-[#a2a3f5] font-medium">Button</span>{" "}
                      component is versatile and can be used in various
                      contexts.
                    </p>

                    <div className="border-t border-[#a2a3f5]/10 pt-4 mt-6"></div>

                    <h2 className="text-2xl font-bold mt-8 text-[#a2a3f5] pb-1 border-b border-[#a2a3f5]/20">
                      Examples
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-6">
                      {/* Basic Button */}
                      <Button className="bg-gradient-to-br from-[#23244a]/80 to-[#070814]/60 border-[#a2a3f5]/30 shadow-xl hover:shadow-2xl transition-shadow duration-300 group relative overflow-hidden">
                        Basic Button
                      </Button>
                      {/* Button with Icon */}
                      <Button
                        icon={<Mail className="h-4 w-4" />}
                        className="bg-gradient-to-br from-[#23244a]/80 to-[#070814]/60 border-[#a2a3f5]/30 shadow-xl hover:shadow-2xl transition-shadow duration-300 group relative overflow-hidden"
                      >
                        Email Us
                      </Button>
                      {/* Destructive Button */}
                      <Button
                        variant="destructive"
                        icon={<Trash2 className="h-4 w-4" />}
                        className="bg-gradient-to-br from-[#23244a]/80 to-[#070814]/60 border-[#a2a3f5]/30 shadow-xl hover:shadow-2xl transition-shadow duration-300 group relative overflow-hidden"
                      >
                        Delete
                      </Button>
                    </div>

                    <Tabs defaultValue="code" className="w-full mt-8">
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
                        <Code filename="button.tsx" language="tsx">
                          {buttonCode}
                        </Code>
                      </TabsContent>

                      <TabsContent value="usage" className="mt-2">
                        <Code filename="example.tsx" language="tsx">
                          {buttonUsageCode}
                        </Code>
                      </TabsContent>
                    </Tabs>

                    <div className="bg-[#678aee]/10 rounded-lg p-6 border border-[#a2a3f5]/20 mt-12">
                      <h3 className="text-lg font-semibold text-[#a2a3f5] mb-2">
                        Accessibility & Best Practices
                      </h3>
                      <ul className="space-y-2 ml-6 list-disc text-[#bfc9f2]">
                        <li>
                          Use semantic HTML (button, a, etc) for structure.
                        </li>
                        <li>
                          Ensure sufficient color contrast for text and
                          backgrounds.
                        </li>
                        <li>
                          Provide clear focus states for all interactive
                          elements.
                        </li>
                        <li>Support keyboard navigation and screen readers.</li>
                        <li>Keep content concise and meaningful.</li>
                      </ul>
                      <div className="mt-4">
                        <Button
                          variant="outline"
                          className="text-sm"
                          icon={<ExternalLink className="h-4 w-4" />}
                        >
                          ARIA Button Guidelines
                        </Button>
                      </div>
                    </div>

                    <div className="flex justify-center mt-10">
                      <Button
                        className="bg-gradient-to-r from-[#678aee] to-[#a2a3f5] hover:from-[#a2a3f5] hover:to-[#678aee] text-white rounded-full px-6 py-2 font-medium text-base"
                        asChild
                      >
                        <a href="/components">Back to Components</a>
                      </Button>
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

export default ButtonPage;
