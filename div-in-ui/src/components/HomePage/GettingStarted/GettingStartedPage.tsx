import { SidebarPage } from "../Sidebar/SidebarPage";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Download,
  Terminal,
  Package,
  FileCode,
  Settings,
  Play,
  CheckCircle2,
  ArrowRight,
  Github,
} from "lucide-react";

export function GettingStartedPage() {
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
                      Getting Started
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
                    -ine UI Quick Start
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
                      Get started with{" "}
                      <span className="text-[#00ADB5] font-medium">
                        Div-ine UI
                      </span>{" "}
                      in just a few simple steps.
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
                      <Download className="w-5 h-5" />
                      Installation
                    </motion.h2>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 }}
                      className="space-y-4"
                    >
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button className="flex-1 h-12 bg-[#00ADB5] hover:bg-[#00ADB5]/90 text-white flex items-center justify-center gap-2">
                          <Package className="w-5 h-5" />
                          npm install div-in-ui
                        </Button>
                        <Button className="flex-1 h-12 bg-[#00ADB5] hover:bg-[#00ADB5]/90 text-white flex items-center justify-center gap-2">
                          <Github className="w-5 h-5" />
                          Clone Repository
                        </Button>
                      </div>
                    </motion.div>

                    <motion.h2
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.7 }}
                      className="text-2xl font-bold mt-8 text-[#00ADB5] pb-1 border-b border-[#00ADB5]/30 flex items-center gap-2"
                    >
                      <Terminal className="w-5 h-5" />
                      Quick Start Guide
                    </motion.h2>

                    <motion.ul
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.8 }}
                      className="space-y-6 pl-6 list-none text-base leading-relaxed"
                    >
                      <motion.li
                        whileHover={{ x: 3 }}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#00ADB5]/5 transition-colors"
                      >
                        <div className="mt-1 p-2 rounded-full bg-[#00ADB5]/10 text-[#00ADB5]">
                          <FileCode className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[#00ADB5] font-medium">
                            Step 1: Import Components
                          </span>
                          <p className="mt-1 text-sm bg-[#222831] p-3 rounded-lg font-mono">
                            import {"{ Button }"} from "div-in-ui";
                          </p>
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
                            Step 2: Configure Your Project
                          </span>
                          <p className="mt-1 text-sm bg-[#222831] p-3 rounded-lg font-mono">
                            // Add to your tailwind.config.js
                            <br />
                            plugins: [require("div-in-ui")],
                          </p>
                        </div>
                      </motion.li>
                      <motion.li
                        whileHover={{ x: 3 }}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#00ADB5]/5 transition-colors"
                      >
                        <div className="mt-1 p-2 rounded-full bg-[#00ADB5]/10 text-[#00ADB5]">
                          <Play className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[#00ADB5] font-medium">
                            Step 3: Start Building
                          </span>
                          <p className="mt-1 text-sm bg-[#222831] p-3 rounded-lg font-mono">
                            {"<Button>Click me</Button>"}
                          </p>
                        </div>
                      </motion.li>
                    </motion.ul>

                    <motion.h2
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.9 }}
                      className="text-2xl font-bold mt-8 text-[#00ADB5] pb-1 border-b border-[#00ADB5]/30 flex items-center gap-2"
                    >
                      <Package className="w-5 h-5" />
                      Available Components
                    </motion.h2>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 1 }}
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                    >
                      {[
                        {
                          name: "Buttons",
                          icon: <Button className="w-4 h-4" />,
                        },
                        { name: "Cards", icon: <Card className="w-4 h-4" /> },
                        {
                          name: "Forms",
                          icon: <FileCode className="w-4 h-4" />,
                        },
                        {
                          name: "Modals",
                          icon: <Settings className="w-4 h-4" />,
                        },
                        {
                          name: "Navigation",
                          icon: <ArrowRight className="w-4 h-4" />,
                        },
                        {
                          name: "Layout",
                          icon: <Package className="w-4 h-4" />,
                        },
                      ].map((component, index) => (
                        <motion.div
                          key={component.name}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: 1.1 + index * 0.1,
                          }}
                          className="p-4 rounded-lg bg-[#222831] hover:bg-[#00ADB5]/5 transition-colors flex items-center gap-3"
                        >
                          <div className="p-2 rounded-full bg-[#00ADB5]/10 text-[#00ADB5]">
                            {component.icon}
                          </div>
                          <span className="text-[#EEEEEE]">
                            {component.name}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 1.7 }}
                      className="mt-8 p-6 rounded-lg bg-[#00ADB5]/5 border border-[#00ADB5]/20"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#00ADB5] mt-1" />
                        <div>
                          <h3 className="text-lg font-medium text-[#00ADB5]">
                            Ready to Get Started?
                          </h3>
                          <p className="mt-2 text-[#7b7b7b]">
                            Check out our comprehensive documentation for
                            detailed guides, examples, and API references.
                          </p>
                          <Button className="mt-4 bg-[#00ADB5] hover:bg-[#00ADB5]/90 text-white flex items-center gap-2">
                            View Documentation
                            <ArrowRight className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
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

export default GettingStartedPage;
