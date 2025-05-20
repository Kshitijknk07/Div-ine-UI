import React, { forwardRef } from "react";
import { SidebarPage } from "../Sidebar/SidebarPage";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code } from "@/components/ui/code";
import {
  Trash2,
  ArrowRight,
  Sparkles,
  Zap,
  Heart,
  Star,
  Rocket,
  Sun,
  Moon,
  Cloud,
} from "lucide-react";
import { motion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Button Variants Configuration
const buttonVariants = cva(
  "relative inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-[#00ADB5] to-[#00ADB5]/90 text-white shadow-lg hover:shadow-xl hover:from-[#00ADB5]/90 hover:to-[#00ADB5]",
        solid: "bg-[#00ADB5] text-white hover:bg-[#00ADB5]/90",
        outline: "border border-[#00ADB5] text-[#00ADB5] hover:bg-[#00ADB5]/10",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        success: "bg-green-500 text-white hover:bg-green-600",
        secondary: "bg-[#00ADB5]/20 text-[#00ADB5] hover:bg-[#00ADB5]/30",
        ghost: "hover:bg-[#00ADB5]/10 hover:text-[#00ADB5]",
        link: "text-[#00ADB5] underline-offset-4 hover:underline",
        soft: "bg-[#00ADB5]/10 text-[#00ADB5] hover:bg-[#00ADB5]/20",
        glossy:
          "bg-gradient-to-b from-white/10 to-white/5 border border-white/20 backdrop-blur-sm text-white shadow-inner",
      },
      size: {
        default: "h-10 px-4 py-2 rounded-lg",
        sm: "h-8 rounded-lg px-3 text-xs",
        lg: "h-12 rounded-lg px-8",
        xl: "h-14 rounded-xl px-10 text-base",
        icon: "h-10 w-10 rounded-lg",
        pill: "h-10 px-6 rounded-full",
        "sm-pill": "h-8 px-4 rounded-full text-xs",
        "lg-pill": "h-12 px-8 rounded-full",
        "xl-pill": "h-14 px-10 rounded-full text-base",
      },
      animation: {
        none: "",
        pulse: "animate-pulse",
        bounce: "animate-bounce",
        glow: "animate-glow",
        float: "animate-float",
      },
      iconPosition: {
        none: "",
        left: "flex-row",
        right: "flex-row-reverse",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      animation: "none",
      iconPosition: "none",
    },
    compoundVariants: [
      {
        iconPosition: ["left", "right"],
        className: "gap-2",
      },
    ],
  }
);

// Button Component
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
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
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        className={cn(
          buttonVariants({
            variant,
            size,
            animation,
            iconPosition: icon ? iconPosition || "left" : "none",
          }),
          className
        )}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        {loading && (
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <svg
              className="animate-spin h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </span>
        )}
        {icon && iconPosition !== "right" && (
          <span className={loading ? "invisible" : ""}>{icon}</span>
        )}
        <span className={loading ? "invisible" : ""}>{children}</span>
        {icon && iconPosition === "right" && (
          <span className={loading ? "invisible" : ""}>{icon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };

// ButtonPage Component
export function ButtonPage() {
  const buttonCode = `// Button Component Code
import * as React from "react";
import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-[#00ADB5] to-[#00ADB5]/90 text-white shadow-lg hover:shadow-xl hover:from-[#00ADB5]/90 hover:to-[#00ADB5]",
        solid: "bg-[#00ADB5] text-white hover:bg-[#00ADB5]/90",
        outline: "border border-[#00ADB5] text-[#00ADB5] hover:bg-[#00ADB5]/10",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        success: "bg-green-500 text-white hover:bg-green-600",
        secondary: "bg-[#00ADB5]/20 text-[#00ADB5] hover:bg-[#00ADB5]/30",
        ghost: "hover:bg-[#00ADB5]/10 hover:text-[#00ADB5]",
        link: "text-[#00ADB5] underline-offset-4 hover:underline",
        soft: "bg-[#00ADB5]/10 text-[#00ADB5] hover:bg-[#00ADB5]/20",
        glossy: "bg-gradient-to-b from-white/10 to-white/5 border border-white/20 backdrop-blur-sm text-white shadow-inner",
      },
      size: {
        default: "h-10 px-4 py-2 rounded-lg",
        sm: "h-8 rounded-lg px-3 text-xs",
        lg: "h-12 rounded-lg px-8",
        xl: "h-14 rounded-xl px-10 text-base",
        icon: "h-10 w-10 rounded-lg",
        pill: "h-10 px-6 rounded-full",
        "sm-pill": "h-8 px-4 rounded-full text-xs",
        "lg-pill": "h-12 px-8 rounded-full",
        "xl-pill": "h-14 px-10 rounded-full text-base",
      },
      animation: {
        none: "",
        pulse: "animate-pulse",
        bounce: "animate-bounce",
        glow: "animate-glow",
        float: "animate-float",
      },
      iconPosition: {
        none: "",
        left: "flex-row",
        right: "flex-row-reverse",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      animation: "none",
      iconPosition: "none",
    },
    compoundVariants: [
      {
        iconPosition: ["left", "right"],
        className: "gap-2",
      },
    ],
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
  (
    {
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
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        className={cn(
          buttonVariants({
            variant,
            size,
            animation,
            iconPosition: icon ? iconPosition || "left" : "none",
          }),
          className
        )}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        {loading && (
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <svg
              className="animate-spin h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </span>
        )}
        {icon && iconPosition !== "right" && (
          <span className={loading ? "invisible" : ""}>{icon}</span>
        )}
        <span className={loading ? "invisible" : ""}>{children}</span>
        {icon && iconPosition === "right" && (
          <span className={loading ? "invisible" : ""}>{icon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };`;

  const buttonUsageCode = `// Button Usage Example
import { Button } from "@/components/ui/button";
import { Sparkles, Trash2, ArrowRight } from "lucide-react";

export function ButtonDemo() {
  return (
    <div className="flex flex-col gap-4">
      <Button variant="default" icon={<Sparkles className="h-4 w-4" />}>
        Default Button
      </Button>
      <Button variant="destructive" icon={<Trash2 className="h-4 w-4" />}>
        Delete
      </Button>
      <Button variant="link" icon={<ArrowRight className="h-4 w-4" />} iconPosition="right">
        Learn More
      </Button>
    </div>
  );
}`;

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
                      Button Components
                    </Badge>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 text-center"
                  >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ADB5] to-[#00ADB5]">
                      Button
                    </span>{" "}
                    Components
                  </motion.h1>
                </CardHeader>

                <CardContent className="px-6 sm:px-8 lg:px-16 py-5">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="prose max-w-4xl mx-auto text-[#7b7b7b] space-y-6"
                  >
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                      className="text-lg sm:text-xl leading-relaxed text-center"
                    >
                      Discover our collection of beautifully designed, animated
                      buttons that bring your UI to life.
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                      className="border-t border-[#00ADB5]/30 pt-4 mt-6"
                    ></motion.div>

                    <motion.h2
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                      className="text-2xl font-bold mt-8 text-[#00ADB5] pb-1 border-b border-[#00ADB5]/30 flex items-center gap-2"
                    >
                      <Sparkles className="w-5 h-5" />
                      Button Variants
                    </motion.h2>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 }}
                      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6"
                    >
                      {/* Default Button */}
                      <div className="bg-[#222831] p-6 rounded-lg border border-[#00ADB5]/20">
                        <h3 className="text-lg font-medium text-[#00ADB5] mb-4">
                          Default
                        </h3>
                        <Button
                          variant="default"
                          icon={<Sparkles className="h-4 w-4" />}
                        >
                          Default Button
                        </Button>
                      </div>

                      {/* Solid Button */}
                      <div className="bg-[#222831] p-6 rounded-lg border border-[#00ADB5]/20">
                        <h3 className="text-lg font-medium text-[#00ADB5] mb-4">
                          Solid
                        </h3>
                        <Button
                          variant="solid"
                          icon={<Zap className="h-4 w-4" />}
                        >
                          Solid Button
                        </Button>
                      </div>

                      {/* Outline Button */}
                      <div className="bg-[#222831] p-6 rounded-lg border border-[#00ADB5]/20">
                        <h3 className="text-lg font-medium text-[#00ADB5] mb-4">
                          Outline
                        </h3>
                        <Button
                          variant="outline"
                          icon={<Moon className="h-4 w-4" />}
                        >
                          Outline Button
                        </Button>
                      </div>

                      {/* Soft Button */}
                      <div className="bg-[#222831] p-6 rounded-lg border border-[#00ADB5]/20">
                        <h3 className="text-lg font-medium text-[#00ADB5] mb-4">
                          Soft
                        </h3>
                        <Button
                          variant="soft"
                          icon={<Sun className="h-4 w-4" />}
                        >
                          Soft Button
                        </Button>
                      </div>

                      {/* Ghost Button */}
                      <div className="bg-[#222831] p-6 rounded-lg border border-[#00ADB5]/20">
                        <h3 className="text-lg font-medium text-[#00ADB5] mb-4">
                          Ghost
                        </h3>
                        <Button
                          variant="ghost"
                          icon={<Cloud className="h-4 w-4" />}
                        >
                          Ghost Button
                        </Button>
                      </div>

                      {/* Status Buttons */}
                      <div className="bg-[#222831] p-6 rounded-lg border border-[#00ADB5]/20">
                        <h3 className="text-lg font-medium text-[#00ADB5] mb-4">
                          Status Buttons
                        </h3>
                        <div className="flex flex-col gap-2">
                          <Button
                            variant="success"
                            icon={<Heart className="h-4 w-4" />}
                          >
                            Success
                          </Button>
                          <Button
                            variant="secondary"
                            icon={<Star className="h-4 w-4" />}
                          >
                            Secondary
                          </Button>
                          <Button
                            variant="destructive"
                            icon={<Trash2 className="h-4 w-4" />}
                          >
                            Delete
                          </Button>
                        </div>
                      </div>
                    </motion.div>

                    <motion.h2
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.7 }}
                      className="text-2xl font-bold mt-8 text-[#00ADB5] pb-1 border-b border-[#00ADB5]/30 flex items-center gap-2"
                    >
                      <Rocket className="w-5 h-5" />
                      Interactive Features
                    </motion.h2>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.8 }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"
                    >
                      <div className="bg-[#222831] p-6 rounded-lg border border-[#00ADB5]/20">
                        <h3 className="text-lg font-medium text-[#00ADB5] mb-4">
                          Loading State
                        </h3>
                        <Button loading>Processing...</Button>
                      </div>

                      <div className="bg-[#222831] p-6 rounded-lg border border-[#00ADB5]/20">
                        <h3 className="text-lg font-medium text-[#00ADB5] mb-4">
                          Icon Positions
                        </h3>
                        <div className="flex flex-col gap-2">
                          <Button icon={<ArrowRight className="h-4 w-4" />}>
                            Icon Left
                          </Button>
                          <Button
                            icon={<ArrowRight className="h-4 w-4" />}
                            iconPosition="right"
                          >
                            Icon Right
                          </Button>
                        </div>
                      </div>
                    </motion.div>

                    <Tabs defaultValue="code" className="w-full mt-8">
                      <TabsList className="grid w-full grid-cols-2 bg-[#222831] rounded-lg mb-2">
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
                          Usage Examples
                        </TabsTrigger>
                      </TabsList>
                      <TabsContent value="code" className="mt-4">
                        <Code
                          filename="components/ui/button.tsx"
                          language="typescript"
                        >
                          {buttonCode}
                        </Code>
                      </TabsContent>
                      <TabsContent value="usage" className="mt-4">
                        <Code
                          filename="examples/button-demo.tsx"
                          language="typescript"
                        >
                          {buttonUsageCode}
                        </Code>
                      </TabsContent>
                    </Tabs>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </section>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

export default ButtonPage;
