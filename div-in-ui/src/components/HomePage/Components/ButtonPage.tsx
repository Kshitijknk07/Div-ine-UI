import { SidebarPage } from "../Sidebar/SidebarPage";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code } from "@/components/ui/code";
import {
  BookOpen,
  Code as CodeIcon,
  Copy,
  Layers,
  Check,
  FileCode,
  ExternalLink,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
      
      {/* Variant */}
      <Button variant="destructive" icon={<Trash2 className="h-4 w-4" />}>
        Delete Item
      </Button>
      
      {/* Size */}
      <Button size="lg">Large Button</Button>
      
      {/* Pill shape */}
      <Button size="pill" variant="secondary">
        Pill Button
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
                    Component
                  </Badge>

                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 text-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#678aee] to-[#a2a3f5]">
                      Button
                    </span>{" "}
                    Component
                  </h1>
                </CardHeader>

                <CardContent className="px-6 sm:px-8 lg:px-16 py-5">
                  <div className="prose max-w-4xl mx-auto text-[#bfc9f2] space-y-8">
                    <p className="text-lg sm:text-xl leading-relaxed text-center">
                      A versatile button component with support for multiple
                      variants, sizes, icons, and loading states. Designed for
                      both functionality and aesthetic appeal.
                    </p>

                    <div className="my-8 flex flex-wrap gap-3 justify-center">
                      <Button variant="default">Default</Button>
                      <Button variant="outline">Outline</Button>
                      <Button variant="solid">Solid</Button>
                      <Button variant="destructive">Destructive</Button>
                      <Button variant="success">Success</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="ghost">Ghost</Button>
                      <Button variant="link">Link</Button>
                      <Button variant="soft">Soft</Button>
                      <Button variant="glossy">Glossy</Button>
                    </div>

                    <Tabs defaultValue="preview" className="w-full">
                      <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 bg-[#0d101e]/70 rounded-lg mb-2">
                        <TabsTrigger
                          value="preview"
                          className="data-[state=active]:bg-[#678aee]/20 data-[state=active]:text-[#a2a3f5] rounded-md flex items-center gap-2"
                        >
                          <Layers className="h-4 w-4" />
                          <span>Preview</span>
                        </TabsTrigger>
                        <TabsTrigger
                          value="code"
                          className="data-[state=active]:bg-[#678aee]/20 data-[state=active]:text-[#a2a3f5] rounded-md flex items-center gap-2"
                        >
                          <CodeIcon className="h-4 w-4" />
                          <span>Code</span>
                        </TabsTrigger>
                        <TabsTrigger
                          value="usage"
                          className="data-[state=active]:bg-[#678aee]/20 data-[state=active]:text-[#a2a3f5] rounded-md flex items-center gap-2"
                        >
                          <BookOpen className="h-4 w-4" />
                          <span>Usage</span>
                        </TabsTrigger>
                      </TabsList>

                      <TabsContent value="preview" className="mt-4">
                        <div className="space-y-8">
                          {/* Button Variants */}
                          <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-[#a2a3f5]">
                              Variants
                            </h3>
                            <div className="flex flex-wrap gap-4 p-4 border border-[#a2a3f5]/20 rounded-md bg-[#070814]/70">
                              <Button variant="default">Default</Button>
                              <Button variant="outline">Outline</Button>
                              <Button variant="solid">Solid</Button>
                              <Button variant="destructive">Destructive</Button>
                              <Button variant="success">Success</Button>
                              <Button variant="secondary">Secondary</Button>
                              <Button variant="ghost">Ghost</Button>
                              <Button variant="link">Link</Button>
                              <Button variant="soft">Soft</Button>
                              <Button variant="glossy">Glossy</Button>
                            </div>
                          </div>

                          {/* Button Sizes */}
                          <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-[#a2a3f5]">
                              Sizes
                            </h3>
                            <div className="flex flex-wrap items-center gap-4 p-4 border border-[#a2a3f5]/20 rounded-md bg-[#070814]/70">
                              <Button size="sm">Small</Button>
                              <Button size="default">Default</Button>
                              <Button size="lg">Large</Button>
                              <Button size="xl">Extra Large</Button>
                            </div>
                          </div>

                          {/* Pill Buttons */}
                          <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-[#a2a3f5]">
                              Pill Shapes
                            </h3>
                            <div className="flex flex-wrap items-center gap-4 p-4 border border-[#a2a3f5]/20 rounded-md bg-[#070814]/70">
                              <Button size="sm-pill">Small Pill</Button>
                              <Button size="pill">Pill</Button>
                              <Button size="lg-pill">Large Pill</Button>
                              <Button size="xl-pill">XL Pill</Button>
                            </div>
                          </div>

                          {/* Icon Buttons */}
                          <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-[#a2a3f5]">
                              With Icons
                            </h3>
                            <div className="flex flex-wrap items-center gap-4 p-4 border border-[#a2a3f5]/20 rounded-md bg-[#070814]/70">
                              <Button icon={<Copy className="h-4 w-4" />}>
                                Copy
                              </Button>
                              <Button
                                icon={<Check className="h-4 w-4" />}
                                iconPosition="right"
                                variant="success"
                              >
                                Confirm
                              </Button>
                              <Button size="icon" variant="ghost">
                                <Copy className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>

                          {/* States */}
                          <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-[#a2a3f5]">
                              States
                            </h3>
                            <div className="flex flex-wrap items-center gap-4 p-4 border border-[#a2a3f5]/20 rounded-md bg-[#070814]/70">
                              <Button disabled>Disabled</Button>
                              <Button loading>Loading</Button>
                              <Button animation="pulse" variant="destructive">
                                Pulse
                              </Button>
                            </div>
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="code" className="mt-4">
                        <div className="bg-[#0d101e]/40 rounded-lg p-4 border-l-4 border-[#678aee]">
                          <div className="flex items-start">
                            <div className="flex-shrink-0 mt-1">
                              <FileCode className="h-5 w-5 text-[#678aee]" />
                            </div>
                            <div className="ml-3">
                              <h3 className="text-sm font-medium text-[#a2a3f5]">
                                Component Code
                              </h3>
                              <div className="mt-2 text-sm text-[#bfc9f2]">
                                <p>
                                  This is the full implementation of our custom
                                  Button component with support for variants,
                                  sizes, icons, and loading states.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Code
                          filename="button.tsx"
                          language="tsx"
                          className="mt-4"
                        >
                          {buttonCode}
                        </Code>
                      </TabsContent>

                      <TabsContent value="usage" className="mt-4">
                        <div className="bg-[#0d101e]/40 rounded-lg p-4 border-l-4 border-[#678aee]">
                          <div className="flex">
                            <div className="flex-shrink-0">
                              <BookOpen className="h-5 w-5 text-[#678aee]" />
                            </div>
                            <div className="ml-3">
                              <h3 className="text-sm font-medium text-[#a2a3f5]">
                                Usage Examples
                              </h3>
                              <div className="mt-2 text-sm text-[#bfc9f2]">
                                <p>
                                  Here are examples of how to use the Button
                                  component with different props and
                                  configurations.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Code
                          filename="button-demo.tsx"
                          language="tsx"
                          className="mt-4"
                        >
                          {buttonUsageCode}
                        </Code>
                      </TabsContent>
                    </Tabs>

                    <div className="mt-12">
                      <h2 className="text-2xl font-bold text-[#a2a3f5] mb-4">
                        API Reference
                      </h2>
                      <div className="overflow-hidden rounded-md border border-[#a2a3f5]/20">
                        <Table>
                          <TableHeader className="bg-[#0d101e]/80">
                            <TableRow className="border-b border-[#a2a3f5]/20 hover:bg-[#0d101e]/50">
                              <TableHead className="text-[#a2a3f5]">
                                Prop
                              </TableHead>
                              <TableHead className="text-[#a2a3f5]">
                                Type
                              </TableHead>
                              <TableHead className="text-[#a2a3f5]">
                                Default
                              </TableHead>
                              <TableHead className="text-[#a2a3f5] w-[50%]">
                                Description
                              </TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow className="border-b border-[#a2a3f5]/20 hover:bg-[#0d101e]/50">
                              <TableCell className="font-mono text-sm">
                                variant
                              </TableCell>
                              <TableCell className="text-[#bfc9f2]">
                                <code className="bg-[#070814]/60 rounded px-1 py-0.5 text-xs">
                                  'default' | 'outline' | 'solid' |
                                  'destructive' | 'success' | 'secondary' |
                                  'ghost' | 'link' | 'soft' | 'glossy'
                                </code>
                              </TableCell>
                              <TableCell className="text-[#bfc9f2]">
                                <code className="bg-[#070814]/60 rounded px-1 py-0.5 text-xs">
                                  'default'
                                </code>
                              </TableCell>
                              <TableCell className="text-[#bfc9f2]">
                                Changes the visual style of the button.
                              </TableCell>
                            </TableRow>
                            <TableRow className="border-b border-[#a2a3f5]/20 hover:bg-[#0d101e]/50">
                              <TableCell className="font-mono text-sm">
                                size
                              </TableCell>
                              <TableCell className="text-[#bfc9f2]">
                                <code className="bg-[#070814]/60 rounded px-1 py-0.5 text-xs">
                                  'default' | 'sm' | 'lg' | 'xl' | 'icon' |
                                  'pill' | 'sm-pill' | 'lg-pill' | 'xl-pill'
                                </code>
                              </TableCell>
                              <TableCell className="text-[#bfc9f2]">
                                <code className="bg-[#070814]/60 rounded px-1 py-0.5 text-xs">
                                  'default'
                                </code>
                              </TableCell>
                              <TableCell className="text-[#bfc9f2]">
                                Changes the size of the button. The 'icon' size
                                makes a square button suitable for just an icon.
                              </TableCell>
                            </TableRow>
                            <TableRow className="border-b border-[#a2a3f5]/20 hover:bg-[#0d101e]/50">
                              <TableCell className="font-mono text-sm">
                                icon
                              </TableCell>
                              <TableCell className="text-[#bfc9f2]">
                                <code className="bg-[#070814]/60 rounded px-1 py-0.5 text-xs">
                                  ReactNode
                                </code>
                              </TableCell>
                              <TableCell className="text-[#bfc9f2]">
                                <code className="bg-[#070814]/60 rounded px-1 py-0.5 text-xs">
                                  undefined
                                </code>
                              </TableCell>
                              <TableCell className="text-[#bfc9f2]">
                                Optional icon to display within the button.
                              </TableCell>
                            </TableRow>
                            <TableRow className="border-b border-[#a2a3f5]/20 hover:bg-[#0d101e]/50">
                              <TableCell className="font-mono text-sm">
                                iconPosition
                              </TableCell>
                              <TableCell className="text-[#bfc9f2]">
                                <code className="bg-[#070814]/60 rounded px-1 py-0.5 text-xs">
                                  'left' | 'right'
                                </code>
                              </TableCell>
                              <TableCell className="text-[#bfc9f2]">
                                <code className="bg-[#070814]/60 rounded px-1 py-0.5 text-xs">
                                  'left'
                                </code>
                              </TableCell>
                              <TableCell className="text-[#bfc9f2]">
                                Controls the position of the icon within the
                                button.
                              </TableCell>
                            </TableRow>
                            <TableRow className="border-b border-[#a2a3f5]/20 hover:bg-[#0d101e]/50">
                              <TableCell className="font-mono text-sm">
                                loading
                              </TableCell>
                              <TableCell className="text-[#bfc9f2]">
                                <code className="bg-[#070814]/60 rounded px-1 py-0.5 text-xs">
                                  boolean
                                </code>
                              </TableCell>
                              <TableCell className="text-[#bfc9f2]">
                                <code className="bg-[#070814]/60 rounded px-1 py-0.5 text-xs">
                                  false
                                </code>
                              </TableCell>
                              <TableCell className="text-[#bfc9f2]">
                                When true, displays a loading spinner and hides
                                the button content.
                              </TableCell>
                            </TableRow>
                            <TableRow className="border-b border-[#a2a3f5]/20 hover:bg-[#0d101e]/50">
                              <TableCell className="font-mono text-sm">
                                animation
                              </TableCell>
                              <TableCell className="text-[#bfc9f2]">
                                <code className="bg-[#070814]/60 rounded px-1 py-0.5 text-xs">
                                  'none' | 'pulse' | 'bounce' | 'glow'
                                </code>
                              </TableCell>
                              <TableCell className="text-[#bfc9f2]">
                                <code className="bg-[#070814]/60 rounded px-1 py-0.5 text-xs">
                                  'none'
                                </code>
                              </TableCell>
                              <TableCell className="text-[#bfc9f2]">
                                Adds CSS animations to the button for visual
                                effects.
                              </TableCell>
                            </TableRow>
                            <TableRow className="hover:bg-[#0d101e]/50">
                              <TableCell className="font-mono text-sm">
                                asChild
                              </TableCell>
                              <TableCell className="text-[#bfc9f2]">
                                <code className="bg-[#070814]/60 rounded px-1 py-0.5 text-xs">
                                  boolean
                                </code>
                              </TableCell>
                              <TableCell className="text-[#bfc9f2]">
                                <code className="bg-[#070814]/60 rounded px-1 py-0.5 text-xs">
                                  false
                                </code>
                              </TableCell>
                              <TableCell className="text-[#bfc9f2]">
                                When true, button styling is applied to its
                                child component instead.
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </div>

                    <div className="bg-[#678aee]/10 rounded-lg p-6 border border-[#a2a3f5]/20 mt-12">
                      <h3 className="text-lg font-semibold text-[#a2a3f5] mb-2">
                        Accessibility
                      </h3>
                      <p className="text-[#bfc9f2] mb-4">
                        The Button component follows WAI-ARIA guidelines to
                        ensure accessibility:
                      </p>
                      <ul className="space-y-2 ml-6 list-disc text-[#bfc9f2]">
                        <li>Properly handles disabled states</li>
                        <li>
                          Maintains focus indicators for keyboard navigation
                        </li>
                        <li>
                          Sets appropriate ARIA attributes in loading states
                        </li>
                        <li>Supports keyboard activation</li>
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
