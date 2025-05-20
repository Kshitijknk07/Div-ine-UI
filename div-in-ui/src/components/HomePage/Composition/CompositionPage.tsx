import { SidebarPage } from "../Sidebar/SidebarPage";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Layers,
  Puzzle,
  Blocks,
  Code2,
  GitBranch,
  Package,
  Component,
  LayoutGrid,
  Settings,
  Workflow,
} from "lucide-react";

export function CompositionPage() {
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
                      Composition
                    </Badge>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 text-center"
                  >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ADB5] to-[#00ADB5]">
                      Div
                    </span>
                    -ine UI Composition
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
                      Build complex interfaces through the power of{" "}
                      <span className="text-[#00ADB5] font-medium">
                        component composition
                      </span>
                      . Create flexible, reusable, and maintainable UI systems
                      that scale with your needs.
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
                      <Puzzle className="w-5 h-5" />
                      Component Composition
                    </motion.h2>

                    <motion.ul
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 }}
                      className="space-y-6 pl-6 list-none text-base leading-relaxed"
                    >
                      <motion.li
                        whileHover={{ x: 3 }}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#00ADB5]/5 transition-colors"
                      >
                        <div className="mt-1 p-2 rounded-full bg-[#00ADB5]/10 text-[#00ADB5]">
                          <Component className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[#00ADB5] font-medium">
                            Atomic Design
                          </span>{" "}
                          - Build from atoms to molecules to organisms, creating
                          complex interfaces through simple building blocks.
                        </div>
                      </motion.li>
                      <motion.li
                        whileHover={{ x: 3 }}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#00ADB5]/5 transition-colors"
                      >
                        <div className="mt-1 p-2 rounded-full bg-[#00ADB5]/10 text-[#00ADB5]">
                          <LayoutGrid className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[#00ADB5] font-medium">
                            Flexible Layouts
                          </span>{" "}
                          - Compose layouts using our powerful grid and flex
                          utilities, adapting to any screen size.
                        </div>
                      </motion.li>
                      <motion.li
                        whileHover={{ x: 3 }}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#00ADB5]/5 transition-colors"
                      >
                        <div className="mt-1 p-2 rounded-full bg-[#00ADB5]/10 text-[#00ADB5]">
                          <Settings className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[#00ADB5] font-medium">
                            Customizable Components
                          </span>{" "}
                          - Extend and modify components through props and
                          composition patterns.
                        </div>
                      </motion.li>
                    </motion.ul>

                    <motion.h2
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.7 }}
                      className="text-2xl font-bold mt-8 text-[#00ADB5] pb-1 border-b border-[#00ADB5]/30 flex items-center gap-2"
                    >
                      <Workflow className="w-5 h-5" />
                      Design System Integration
                    </motion.h2>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.8 }}
                      className="text-base leading-relaxed"
                    >
                      Seamlessly integrate with your design system:
                    </motion.p>

                    <motion.ul
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.9 }}
                      className="space-y-4 pl-6 list-none text-base leading-relaxed"
                    >
                      <motion.li
                        whileHover={{ x: 3 }}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#00ADB5]/5 transition-colors"
                      >
                        <div className="mt-1 p-2 rounded-full bg-[#00ADB5]/10 text-[#00ADB5]">
                          <Layers className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[#00ADB5] font-medium">
                            Theme Support
                          </span>
                          : Easily customize colors, typography, and spacing to
                          match your brand.
                        </div>
                      </motion.li>
                      <motion.li
                        whileHover={{ x: 3 }}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#00ADB5]/5 transition-colors"
                      >
                        <div className="mt-1 p-2 rounded-full bg-[#00ADB5]/10 text-[#00ADB5]">
                          <Blocks className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[#00ADB5] font-medium">
                            Design Tokens
                          </span>
                          : Use our design tokens to maintain consistency across
                          your application.
                        </div>
                      </motion.li>
                    </motion.ul>

                    <motion.h2
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 1 }}
                      className="text-2xl font-bold mt-8 text-[#00ADB5] pb-1 border-b border-[#00ADB5]/30 flex items-center gap-2"
                    >
                      <Code2 className="w-5 h-5" />
                      Development Workflow
                    </motion.h2>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 1.1 }}
                      className="text-base leading-relaxed"
                    >
                      Streamline your development process:
                    </motion.p>

                    <motion.ul
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 1.2 }}
                      className="space-y-4 pl-6 list-none text-base leading-relaxed"
                    >
                      <motion.li
                        whileHover={{ x: 3 }}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#00ADB5]/5 transition-colors"
                      >
                        <div className="mt-1 p-2 rounded-full bg-[#00ADB5]/10 text-[#00ADB5]">
                          <GitBranch className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[#00ADB5] font-medium">
                            Version Control
                          </span>
                          : Track changes and manage versions using Git.
                        </div>
                      </motion.li>
                      <motion.li
                        whileHover={{ x: 3 }}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#00ADB5]/5 transition-colors"
                      >
                        <div className="mt-1 p-2 rounded-full bg-[#00ADB5]/10 text-[#00ADB5]">
                          <Package className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[#00ADB5] font-medium">
                            Package Management
                          </span>
                          : Use npm, yarn, or pnpm to manage dependencies.
                        </div>
                      </motion.li>
                    </motion.ul>
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

export default CompositionPage;
