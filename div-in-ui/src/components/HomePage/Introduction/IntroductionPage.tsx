import { SidebarPage } from "../Sidebar/SidebarPage";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Box,
  Share2,
  FileCode,
  Layers,
  Package,
  Sparkles,
} from "lucide-react";

export function IntroductionPage() {
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
                      Documentation
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
                    -ine UI
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
                      is a set of beautifully-designed, accessible components
                      and a code distribution platform. Works with your favorite
                      frameworks. Open Source. Open Code.
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                      className="text-lg sm:text-xl leading-relaxed text-[#00ADB5] font-medium text-center"
                    >
                      This is not a component library. It is how you build your
                      component library.
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                      className="border-t border-[#00ADB5]/30 pt-4 mt-6"
                    ></motion.div>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 }}
                      className="text-base leading-relaxed"
                    >
                      You know how most traditional component libraries work:
                      you install a package from NPM, import the components, and
                      use them in your app.
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.7 }}
                      className="text-base leading-relaxed"
                    >
                      This approach works well until you need to customize a
                      component to fit your design system or require one that
                      isn't included in the library. Often, you end up wrapping
                      library components, writing workarounds to override
                      styles, or mixing components from different libraries with
                      incompatible APIs.
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.8 }}
                      className="text-base leading-relaxed"
                    >
                      This is what{" "}
                      <span className="text-[#00ADB5] font-medium">
                        Div-ine UI
                      </span>{" "}
                      aims to solve. It is built around the following
                      principles:
                    </motion.p>

                    <motion.ul
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.9 }}
                      className="space-y-6 pl-6 list-none text-base leading-relaxed"
                    >
                      <motion.li
                        whileHover={{ x: 3 }}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#00ADB5]/5 transition-colors"
                      >
                        <div className="mt-1 p-2 rounded-full bg-[#00ADB5]/10 text-[#00ADB5]">
                          <Code className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[#00ADB5] font-medium">
                            Open Code
                          </span>{" "}
                          - The top layer of your component code is open for
                          modification.
                        </div>
                      </motion.li>
                      <motion.li
                        whileHover={{ x: 3 }}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#00ADB5]/5 transition-colors"
                      >
                        <div className="mt-1 p-2 rounded-full bg-[#00ADB5]/10 text-[#00ADB5]">
                          <Palette className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[#00ADB5] font-medium">
                            Composition
                          </span>{" "}
                          - Every component uses a common, composable interface,
                          making them predictable.
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
                            Distribution
                          </span>{" "}
                          - A flat-file schema and command-line tool make it
                          easy to distribute components.
                        </div>
                      </motion.li>
                      <motion.li
                        whileHover={{ x: 3 }}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#00ADB5]/5 transition-colors"
                      >
                        <div className="mt-1 p-2 rounded-full bg-[#00ADB5]/10 text-[#00ADB5]">
                          <Box className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[#00ADB5] font-medium">
                            Beautiful Defaults
                          </span>{" "}
                          - Components come with beautiful, accessible defaults
                          that you can build upon.
                        </div>
                      </motion.li>
                    </motion.ul>

                    <motion.h2
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 1 }}
                      className="text-2xl font-bold mt-8 text-[#00ADB5] pb-1 border-b border-[#00ADB5]/30 flex items-center gap-2"
                    >
                      <FileCode className="w-5 h-5" />
                      Open Code
                    </motion.h2>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 1.1 }}
                      className="text-base leading-relaxed"
                    >
                      <span className="text-[#00ADB5] font-medium">
                        Div-ine UI
                      </span>{" "}
                      hands you the actual component code. You have full control
                      to customize and extend the components to your needs. This
                      means:
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
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[#00ADB5] font-medium">
                            Full Transparency
                          </span>
                          : You see exactly how each component is built.
                        </div>
                      </motion.li>
                      <motion.li
                        whileHover={{ x: 3 }}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#00ADB5]/5 transition-colors"
                      >
                        <div className="mt-1 p-2 rounded-full bg-[#00ADB5]/10 text-[#00ADB5]">
                          <Palette className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[#00ADB5] font-medium">
                            Easy Customization
                          </span>
                          : Modify any part of a component to fit your design
                          and functionality requirements.
                        </div>
                      </motion.li>
                      <motion.li
                        whileHover={{ x: 3 }}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#00ADB5]/5 transition-colors"
                      >
                        <div className="mt-1 p-2 rounded-full bg-[#00ADB5]/10 text-[#00ADB5]">
                          <Code className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[#00ADB5] font-medium">
                            Complete Control
                          </span>
                          : Access to the code gives you full control over every
                          aspect of your components.
                        </div>
                      </motion.li>
                    </motion.ul>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 1.3 }}
                      className="text-base leading-relaxed"
                    >
                      In a typical library, if you need to change a button's
                      behavior, you have to override styles or wrap the
                      component. With{" "}
                      <span className="text-[#00ADB5] font-medium">
                        Div-ine UI
                      </span>
                      , you simply edit the button code directly.
                    </motion.p>

                    <motion.h2
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 1.4 }}
                      className="text-2xl font-bold mt-8 text-[#00ADB5] pb-1 border-b border-[#00ADB5]/30 flex items-center gap-2"
                    >
                      <Layers className="w-5 h-5" />
                      Composition
                    </motion.h2>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 1.5 }}
                      className="text-base leading-relaxed"
                    >
                      Every component in{" "}
                      <span className="text-[#00ADB5] font-medium">
                        Div-ine UI
                      </span>{" "}
                      shares a common, composable interface. If a component does
                      not exist, we bring it in, make it composable, and adjust
                      its style to match and work with the rest of the design
                      system.
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 1.6 }}
                      className="text-base leading-relaxed"
                    >
                      A shared, composable interface means it's predictable for
                      your team. You are not learning different APIs for every
                      new component. Even for third-party ones.
                    </motion.p>

                    <motion.h2
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 1.7 }}
                      className="text-2xl font-bold mt-8 text-[#00ADB5] pb-1 border-b border-[#00ADB5]/30 flex items-center gap-2"
                    >
                      <Package className="w-5 h-5" />
                      Distribution
                    </motion.h2>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 1.8 }}
                      className="text-base leading-relaxed"
                    >
                      <span className="text-[#00ADB5] font-medium">
                        Div-ine UI
                      </span>{" "}
                      is also a code distribution system. It defines a schema
                      for components and a CLI to distribute them.
                    </motion.p>

                    <motion.ul
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 1.9 }}
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
                            Schema
                          </span>
                          : A flat-file structure that defines the components,
                          their dependencies, and properties.
                        </div>
                      </motion.li>
                      <motion.li
                        whileHover={{ x: 3 }}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#00ADB5]/5 transition-colors"
                      >
                        <div className="mt-1 p-2 rounded-full bg-[#00ADB5]/10 text-[#00ADB5]">
                          <Code className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[#00ADB5] font-medium">
                            CLI
                          </span>
                          : A command-line tool to distribute and install
                          components across projects with cross-framework
                          support.
                        </div>
                      </motion.li>
                    </motion.ul>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 2 }}
                      className="text-base leading-relaxed"
                    >
                      You can use the schema to distribute your components to
                      other projects and create completely new components based
                      on existing schema.
                    </motion.p>

                    <motion.h2
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 2.1 }}
                      className="text-2xl font-bold mt-8 text-[#00ADB5] pb-1 border-b border-[#00ADB5]/30 flex items-center gap-2"
                    >
                      <Sparkles className="w-5 h-5" />
                      Beautiful Defaults
                    </motion.h2>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 2.2 }}
                      className="text-base leading-relaxed"
                    >
                      <span className="text-[#00ADB5] font-medium">
                        Div-ine UI
                      </span>{" "}
                      comes with a large collection of components that have
                      carefully chosen default styles. They are designed to look
                      good on their own and to work well together as a
                      consistent system:
                    </motion.p>

                    <motion.ul
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 2.3 }}
                      className="space-y-4 pl-6 list-none text-base leading-relaxed"
                    >
                      <motion.li
                        whileHover={{ x: 3 }}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#00ADB5]/5 transition-colors"
                      >
                        <div className="mt-1 p-2 rounded-full bg-[#00ADB5]/10 text-[#00ADB5]">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[#00ADB5] font-medium">
                            Good Out-of-the-Box
                          </span>
                          : Your UI has a clean and minimal look without extra
                          work.
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
                            Unified Design
                          </span>
                          : Components naturally fit with one another. Each
                          component is built to match the others, keeping your
                          UI consistent.
                        </div>
                      </motion.li>
                      <motion.li
                        whileHover={{ x: 3 }}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#00ADB5]/5 transition-colors"
                      >
                        <div className="mt-1 p-2 rounded-full bg-[#00ADB5]/10 text-[#00ADB5]">
                          <Palette className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[#00ADB5] font-medium">
                            Easily Customizable
                          </span>
                          : If you want to change something, it's simple to
                          override and extend the defaults.
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

export default IntroductionPage;
