import { SidebarPage } from "../Sidebar/SidebarPage";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Brain,
  Lightbulb,
  Target,
  Heart,
  Code,
  Palette,
  Box,
  Share2,
  FileCode,
  Layers,
  Package,
  Sparkles,
} from "lucide-react";

export function PhilosophyPage() {
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
                      Philosophy
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
                    -ine UI Philosophy
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
                      <span className="text-[#00ADB5] font-medium">
                        Div-ine UI
                      </span>{" "}
                      is built on a foundation of core principles that guide
                      every aspect of its design and development. Our goal is to
                      empower developers to create stunning, accessible, and
                      reusable components with ease.
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
                      <Brain className="w-5 h-5" />
                      Core Principles
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
                          <Lightbulb className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[#00ADB5] font-medium">
                            Simplicity First
                          </span>{" "}
                          - Every component is designed to be intuitive and
                          straightforward, ensuring a seamless developer
                          experience.
                        </div>
                      </motion.li>
                      <motion.li
                        whileHover={{ x: 3 }}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#00ADB5]/5 transition-colors"
                      >
                        <div className="mt-1 p-2 rounded-full bg-[#00ADB5]/10 text-[#00ADB5]">
                          <Target className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[#00ADB5] font-medium">
                            Purpose-Driven Design
                          </span>{" "}
                          - Each component solves a specific problem and serves
                          a clear purpose.
                        </div>
                      </motion.li>
                      <motion.li
                        whileHover={{ x: 3 }}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#00ADB5]/5 transition-colors"
                      >
                        <div className="mt-1 p-2 rounded-full bg-[#00ADB5]/10 text-[#00ADB5]">
                          <Heart className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[#00ADB5] font-medium">
                            User-Centric Approach
                          </span>{" "}
                          - Accessibility and usability are at the heart of
                          every design decision.
                        </div>
                      </motion.li>
                    </motion.ul>

                    <motion.h2
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.7 }}
                      className="text-2xl font-bold mt-8 text-[#00ADB5] pb-1 border-b border-[#00ADB5]/30 flex items-center gap-2"
                    >
                      <Code className="w-5 h-5" />
                      Development Philosophy
                    </motion.h2>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.8 }}
                      className="text-base leading-relaxed"
                    >
                      Our development philosophy emphasizes clean, maintainable
                      code and modularity:
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
                          <FileCode className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[#00ADB5] font-medium">
                            Clean Code
                          </span>{" "}
                          - We prioritize readability and maintainability in
                          every line of code.
                        </div>
                      </motion.li>
                      <motion.li
                        whileHover={{ x: 3 }}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#00ADB5]/5 transition-colors"
                      >
                        <div className="mt-1 p-2 rounded-full bg-[#00ADB5]/10 text-[#00ADB5]">
                          <Layers className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[#00ADB5] font-medium">
                            Modular Architecture
                          </span>{" "}
                          - Components are designed to be independent and
                          reusable across projects.
                        </div>
                      </motion.li>
                      <motion.li
                        whileHover={{ x: 3 }}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#00ADB5]/5 transition-colors"
                      >
                        <div className="mt-1 p-2 rounded-full bg-[#00ADB5]/10 text-[#00ADB5]">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[#00ADB5] font-medium">
                            Continuous Improvement
                          </span>{" "}
                          - We evolve based on user feedback and emerging
                          trends.
                        </div>
                      </motion.li>
                    </motion.ul>

                    <motion.h2
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 1 }}
                      className="text-2xl font-bold mt-8 text-[#00ADB5] pb-1 border-b border-[#00ADB5]/30 flex items-center gap-2"
                    >
                      <Palette className="w-5 h-5" />
                      Design Philosophy
                    </motion.h2>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 1.1 }}
                      className="text-base leading-relaxed"
                    >
                      Our design philosophy ensures that components are both
                      visually appealing and highly functional:
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
                          <Box className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[#00ADB5] font-medium">
                            Minimalist Aesthetics
                          </span>{" "}
                          - Clean, uncluttered designs that prioritize
                          functionality.
                        </div>
                      </motion.li>
                      <motion.li
                        whileHover={{ x: 3 }}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#00ADB5]/5 transition-colors"
                      >
                        <div className="mt-1 p-2 rounded-full bg-[#00ADB5]/10 text-[#00ADB5]">
                          <Share2 className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[#00ADB5] font-medium">
                            Consistent Language
                          </span>{" "}
                          - A unified design language across all components.
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
                            Adaptable Design
                          </span>{" "}
                          - Components that seamlessly fit into various contexts
                          and use cases.
                        </div>
                      </motion.li>
                    </motion.ul>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 1.3 }}
                      className="text-base leading-relaxed mt-8"
                    >
                      These principles guide every decision we make in the
                      development of{" "}
                      <span className="text-[#00ADB5] font-medium">
                        Div-ine UI
                      </span>
                      , ensuring that we create components that are not only
                      beautiful and functional but also maintainable and
                      scalable.
                    </motion.p>
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

export default PhilosophyPage;
