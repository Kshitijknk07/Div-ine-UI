import { type ReactElement } from "react";
import { SidebarPage } from "../Sidebar/SidebarPage";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Code, Palette, Box, Share2 } from "lucide-react";

/**
 * Feature item interface for the introduction page
 */
interface FeatureItem {
  /** Icon component for the feature */
  icon: ReactElement;
  /** Title of the feature */
  title: string;
  /** Description of the feature */
  description: string;
}

/**
 * Introduction page component that showcases the key features of Div-ine UI
 *
 * @returns {ReactElement} The introduction page component
 *
 * @example
 * ```tsx
 * <IntroductionPage />
 * ```
 */
export function IntroductionPage(): ReactElement {
  const features: FeatureItem[] = [
    {
      icon: <Code className="w-4 h-4" />,
      title: "Open Code",
      description: "Access and customize component code easily.",
    },
    {
      icon: <Palette className="w-4 h-4" />,
      title: "Composable Design",
      description: "Reusable components with predictable interfaces.",
    },
    {
      icon: <Box className="w-4 h-4" />,
      title: "Beautiful Defaults",
      description:
        "Components look great out of the box and are easy to adapt.",
    },
    {
      icon: <Share2 className="w-4 h-4" />,
      title: "Easy Distribution",
      description:
        "Share components across projects with a simple schema and CLI.",
    },
  ];

  return (
    <SidebarProvider
      className="bg-gradient-to-b from-[#222831] to-[#393E46] text-[#EEEEEE] w-full"
      style={{ ["--sidebar-width" as any]: "19rem" }}
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
                      is a collection of beautifully designed, accessible
                      components. It is open source, works seamlessly with
                      popular frameworks, and helps you build your own component
                      library effortlessly.
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                      className="text-lg sm:text-xl leading-relaxed text-[#00ADB5] font-medium text-center"
                    >
                      Build and share reusable components with ease.
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                      className="border-t border-[#00ADB5]/30 pt-4 mt-6"
                    ></motion.div>

                    <motion.h2
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 }}
                      className="text-2xl font-bold mt-8 text-[#00ADB5] pb-1 border-b border-[#00ADB5]/30 flex items-center gap-2"
                    >
                      <Code className="w-5 h-5" />
                      Key Features
                    </motion.h2>

                    <motion.ul
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.7 }}
                      className="space-y-6 pl-6 list-none text-base leading-relaxed"
                    >
                      {features.map((feature, index) => (
                        <motion.li
                          key={feature.title}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.7 + index * 0.1,
                          }}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#00ADB5]/5 transition-colors"
                        >
                          <div className="mt-1 p-2 rounded-full bg-[#00ADB5]/10 text-[#00ADB5]">
                            {feature.icon}
                          </div>
                          <div>
                            <span className="text-[#00ADB5] font-medium">
                              {feature.title}
                            </span>{" "}
                            - {feature.description}
                          </div>
                        </motion.li>
                      ))}
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
