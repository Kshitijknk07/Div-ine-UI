import { SidebarPage } from "../Sidebar/SidebarPage";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Code,
  FileCode,
  GitBranch,
  Github,
  Globe,
  Lock,
  Package,
  Share2,
  Terminal,
  Unlock,
} from "lucide-react";

export function OpenCodePage() {
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
                      Open Code
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
                    -ine UI Open Code
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
                      At{" "}
                      <span className="text-[#00ADB5] font-medium">
                        Div-ine UI
                      </span>
                      , we believe in complete transparency and collaboration.
                      Our open-source philosophy ensures that every component is
                      accessible, modifiable, and reusable, empowering
                      developers to create exceptional user interfaces.
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
                      <Unlock className="w-5 h-5" />
                      Full Code Access
                    </motion.h2>

                    <motion.ul
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 }}
                      className="space-y-6 pl-6 list-none text-base leading-relaxed"
                    >
                      <motion.li className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#00ADB5]/5 transition-colors">
                        <div className="mt-1 p-2 rounded-full bg-[#00ADB5]/10 text-[#00ADB5]">
                          <Code className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[#00ADB5] font-medium">
                            Complete Transparency
                          </span>{" "}
                          - Every component's source code is available for
                          inspection and modification.
                        </div>
                      </motion.li>
                      <motion.li className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#00ADB5]/5 transition-colors">
                        <div className="mt-1 p-2 rounded-full bg-[#00ADB5]/10 text-[#00ADB5]">
                          <FileCode className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[#00ADB5] font-medium">
                            Direct Modification
                          </span>{" "}
                          - Edit components directly in your project without any
                          abstraction layers.
                        </div>
                      </motion.li>
                      <motion.li className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#00ADB5]/5 transition-colors">
                        <div className="mt-1 p-2 rounded-full bg-[#00ADB5]/10 text-[#00ADB5]">
                          <Lock className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[#00ADB5] font-medium">
                            No Black Boxes
                          </span>{" "}
                          - No hidden implementation details or locked
                          functionality.
                        </div>
                      </motion.li>
                    </motion.ul>

                    <motion.h2
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.7 }}
                      className="text-2xl font-bold mt-8 text-[#00ADB5] pb-1 border-b border-[#00ADB5]/30 flex items-center gap-2"
                    >
                      <GitBranch className="w-5 h-5" />
                      Version Control
                    </motion.h2>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.8 }}
                      className="text-base leading-relaxed"
                    >
                      Manage your component versions with ease:
                    </motion.p>

                    <motion.ul
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.9 }}
                      className="space-y-4 pl-6 list-none text-base leading-relaxed"
                    >
                      <motion.li className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#00ADB5]/5 transition-colors">
                        <div className="mt-1 p-2 rounded-full bg-[#00ADB5]/10 text-[#00ADB5]">
                          <Github className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[#00ADB5] font-medium">
                            Git Integration
                          </span>{" "}
                          - Track changes and manage versions using your
                          preferred version control system.
                        </div>
                      </motion.li>
                      <motion.li className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#00ADB5]/5 transition-colors">
                        <div className="mt-1 p-2 rounded-full bg-[#00ADB5]/10 text-[#00ADB5]">
                          <Package className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[#00ADB5] font-medium">
                            Package Management
                          </span>{" "}
                          - Use npm, yarn, or pnpm to manage dependencies and
                          updates.
                        </div>
                      </motion.li>
                    </motion.ul>

                    <motion.h2
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 1 }}
                      className="text-2xl font-bold mt-8 text-[#00ADB5] pb-1 border-b border-[#00ADB5]/30 flex items-center gap-2"
                    >
                      <Globe className="w-5 h-5" />
                      Community & Collaboration
                    </motion.h2>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 1.1 }}
                      className="text-base leading-relaxed"
                    >
                      Join our growing community of developers:
                    </motion.p>

                    <motion.ul
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 1.2 }}
                      className="space-y-4 pl-6 list-none text-base leading-relaxed"
                    >
                      <motion.li className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#00ADB5]/5 transition-colors">
                        <div className="mt-1 p-2 rounded-full bg-[#00ADB5]/10 text-[#00ADB5]">
                          <Share2 className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[#00ADB5] font-medium">
                            Share Your Modifications
                          </span>{" "}
                          - Contribute back to the community with your
                          improvements.
                        </div>
                      </motion.li>
                      <motion.li className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#00ADB5]/5 transition-colors">
                        <div className="mt-1 p-2 rounded-full bg-[#00ADB5]/10 text-[#00ADB5]">
                          <Terminal className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[#00ADB5] font-medium">
                            Open Source
                          </span>{" "}
                          - Everything is open source and available for everyone
                          to use and improve.
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

export default OpenCodePage;
