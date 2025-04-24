import { SidebarPage } from "../Sidebar/SidebarPage";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code } from "@/components/ui/code";
import { motion } from "framer-motion";
import { CheckCircle, AlertCircle, XCircle, Info } from "lucide-react";

export function BadgePage() {
  const badgeCode = `import * as React from "react";
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
        success:
          "border-transparent bg-[#00ADB5]/20 text-[#00ADB5] border-[#00ADB5]/50 hover:bg-[#00ADB5]/30",
        warning:
          "border-transparent bg-[#FFB800]/20 text-[#FFB800] border-[#FFB800]/50 hover:bg-[#FFB800]/30",
        error:
          "border-transparent bg-[#FF3B30]/20 text-[#FF3B30] border-[#FF3B30]/50 hover:bg-[#FF3B30]/30",
        info:
          "border-transparent bg-[#007AFF]/20 text-[#007AFF] border-[#007AFF]/50 hover:bg-[#007AFF]/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  icon?: React.ReactNode;
}

function Badge({ className, variant, icon, children, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {icon && <span className="mr-1">{icon}</span>}
      {children}
    </div>
  );
}

export { Badge, badgeVariants };`;

  const badgeUsageCode = `import { Badge } from "./badge";
import { Star, Heart, CheckCircle, AlertCircle, XCircle, Info, Bell, Tag } from "lucide-react";

export function BadgeDemo() {
  return (
    <div className="flex flex-wrap gap-4">
      {/* Default Badge */}
      <Badge>Default</Badge>

      {/* Secondary Badge */}
      <Badge variant="secondary">Secondary</Badge>

      {/* Success Badge */}
      <Badge variant="success" icon={<CheckCircle className="h-3 w-3" />}>
        Success
      </Badge>

      {/* Warning Badge */}
      <Badge variant="warning" icon={<AlertCircle className="h-3 w-3" />}>
        Warning
      </Badge>

      {/* Error Badge */}
      <Badge variant="error" icon={<XCircle className="h-3 w-3" />}>
        Error
      </Badge>

      {/* Info Badge */}
      <Badge variant="info" icon={<Info className="h-3 w-3" />}>
        Info
      </Badge>

      {/* Custom Badge */}
      <Badge className="bg-gradient-to-r from-[#00ADB5] to-[#007AFF] text-white border-0">
        Custom
      </Badge>
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
              <div className="bg-[#222831]/80 backdrop-blur-sm border-0 shadow-xl overflow-hidden w-full rounded-none min-h-screen">
                <div className="pb-0 pt-6 px-6 lg:px-16">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Badge className="w-fit mx-auto mb-3 px-4 py-1.5 text-sm font-medium bg-[#00ADB5]/20 text-[#00ADB5] border-[#00ADB5]/50 hover:bg-[#00ADB5]/30">
                      Badge Components
                    </Badge>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 text-center"
                  >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ADB5] to-[#00ADB5]">
                      Badge
                    </span>
                    Components
                  </motion.h1>
                </div>

                <div className="px-6 sm:px-8 lg:px-16 py-5">
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
                      Create beautiful, responsive badges with our flexible
                      badge components. Perfect for displaying status, labels,
                      and notifications.
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                      className="border-t border-[#00ADB5]/30 pt-4 mt-6"
                    ></motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                      className="flex flex-wrap gap-4 justify-center mt-6"
                    >
                      {/* Default Badge */}
                      <Badge>Default</Badge>

                      {/* Secondary Badge */}
                      <Badge variant="secondary">Secondary</Badge>

                      {/* Success Badge */}
                      <Badge
                        variant="success"
                        icon={<CheckCircle className="h-3 w-3" />}
                      >
                        Success
                      </Badge>

                      {/* Warning Badge */}
                      <Badge
                        variant="warning"
                        icon={<AlertCircle className="h-3 w-3" />}
                      >
                        Warning
                      </Badge>

                      {/* Error Badge */}
                      <Badge
                        variant="error"
                        icon={<XCircle className="h-3 w-3" />}
                      >
                        Error
                      </Badge>

                      {/* Info Badge */}
                      <Badge variant="info" icon={<Info className="h-3 w-3" />}>
                        Info
                      </Badge>

                      {/* Custom Badge */}
                      <Badge className="bg-gradient-to-r from-[#00ADB5] to-[#007AFF] text-white border-0">
                        Custom
                      </Badge>
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
                          filename="components/ui/badge.tsx"
                          language="typescript"
                        >
                          {badgeCode}
                        </Code>
                      </TabsContent>
                      <TabsContent value="usage" className="mt-4">
                        <Code
                          filename="examples/badge-demo.tsx"
                          language="typescript"
                        >
                          {badgeUsageCode}
                        </Code>
                      </TabsContent>
                    </Tabs>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 }}
                      className="mt-8 space-y-6"
                    >
                      <h2 className="text-2xl font-bold text-[#EEEEEE]">
                        Features
                      </h2>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#00ADB5] mr-2 mt-1" />
                          <div>
                            <h3 className="text-lg font-semibold text-[#EEEEEE]">
                              Multiple Variants
                            </h3>
                            <p className="text-[#7b7b7b]">
                              Choose from default, secondary, destructive,
                              outline, success, warning, error, and info
                              variants.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#00ADB5] mr-2 mt-1" />
                          <div>
                            <h3 className="text-lg font-semibold text-[#EEEEEE]">
                              Icon Support
                            </h3>
                            <p className="text-[#7b7b7b]">
                              Add icons to your badges for better visual
                              communication.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#00ADB5] mr-2 mt-1" />
                          <div>
                            <h3 className="text-lg font-semibold text-[#EEEEEE]">
                              Custom Styling
                            </h3>
                            <p className="text-[#7b7b7b]">
                              Extend and customize badges with your own styles
                              using className prop.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.7 }}
                      className="mt-8 space-y-6"
                    >
                      <h2 className="text-2xl font-bold text-[#EEEEEE]">
                        Props
                      </h2>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="border-b border-[#00ADB5]/30">
                              <th className="py-2 px-4 text-left text-[#EEEEEE]">
                                Prop
                              </th>
                              <th className="py-2 px-4 text-left text-[#EEEEEE]">
                                Type
                              </th>
                              <th className="py-2 px-4 text-left text-[#EEEEEE]">
                                Default
                              </th>
                              <th className="py-2 px-4 text-left text-[#EEEEEE]">
                                Description
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-[#00ADB5]/10">
                              <td className="py-2 px-4 text-[#7b7b7b]">
                                variant
                              </td>
                              <td className="py-2 px-4 text-[#7b7b7b]">
                                'default' | 'secondary' | 'destructive' |
                                'outline' | 'success' | 'warning' | 'error' |
                                'info'
                              </td>
                              <td className="py-2 px-4 text-[#7b7b7b]">
                                'default'
                              </td>
                              <td className="py-2 px-4 text-[#7b7b7b]">
                                Visual style variant
                              </td>
                            </tr>
                            <tr className="border-b border-[#00ADB5]/10">
                              <td className="py-2 px-4 text-[#7b7b7b]">icon</td>
                              <td className="py-2 px-4 text-[#7b7b7b]">
                                React.ReactNode
                              </td>
                              <td className="py-2 px-4 text-[#7b7b7b]">-</td>
                              <td className="py-2 px-4 text-[#7b7b7b]">
                                Optional icon to display
                              </td>
                            </tr>
                            <tr className="border-b border-[#00ADB5]/10">
                              <td className="py-2 px-4 text-[#7b7b7b]">
                                className
                              </td>
                              <td className="py-2 px-4 text-[#7b7b7b]">
                                string
                              </td>
                              <td className="py-2 px-4 text-[#7b7b7b]">-</td>
                              <td className="py-2 px-4 text-[#7b7b7b]">
                                Additional CSS classes
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </section>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

export default BadgePage;
