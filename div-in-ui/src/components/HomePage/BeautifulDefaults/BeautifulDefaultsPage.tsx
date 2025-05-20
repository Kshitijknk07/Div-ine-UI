import { SidebarPage } from "../Sidebar/SidebarPage";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Paintbrush, Palette, Sparkles, Wand2 } from "lucide-react";

export function BeautifulDefaultsPage() {
  const features = [
    {
      icon: <Paintbrush className="w-5 h-5" />,
      title: "Design Language",
      description:
        "A cohesive visual system with consistent spacing, typography, and interactive states that creates harmony across all components.",
    },
    {
      icon: <Palette className="w-5 h-5" />,
      title: "Color Theory",
      description:
        "Carefully selected color palettes that work well together and provide appropriate contrast for accessibility.",
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Subtle Animation",
      description:
        "Thoughtful motion design that enhances usability and adds delight without being distracting or overwhelming.",
    },
    {
      icon: <Wand2 className="w-5 h-5" />,
      title: "Refined Details",
      description:
        "Precise shadows, borders, and states that create depth and hierarchy while maintaining a clean aesthetic.",
    },
  ];

  const designPrinciples = [
    {
      number: "01",
      title: "Aesthetics + Function",
      description:
        "Beauty shouldn't come at the expense of usability. Every component is designed to be both visually appealing and highly functional.",
    },
    {
      number: "02",
      title: "Consistency By Default",
      description:
        "Components share visual characteristics and interaction patterns, creating a unified experience that users can learn once and apply everywhere.",
    },
    {
      number: "03",
      title: "Accessible First",
      description:
        "Beautiful defaults include appropriate contrast ratios, focus indicators, and semantic structure to ensure accessibility is built-in.",
    },
    {
      number: "04",
      title: "Adaptive Foundations",
      description:
        "Our defaults look great but are designed to be easily customized through design tokens and CSS variables that cascade through the entire system.",
    },
  ];

  return (
    <SidebarProvider
      className="bg-gradient-to-b from-[#222831] to-[#393E46] text-white w-full"
      style={{ ["--sidebar-width" as any]: "19rem" }}
    >
      <div className="flex h-screen w-full overflow-hidden">
        <SidebarPage />
        <SidebarInset className="flex-1 flex flex-col w-full">
          <section className="flex-1 bg-gradient-to-b from-[#222831] to-[#393E46] text-white w-full h-screen overflow-y-auto">
            <div className="w-full animate-fade-in-up">
              <Card className="bg-[#222831]/60 backdrop-blur-sm border-0 shadow-xl overflow-hidden w-full rounded-none min-h-screen">
                <CardHeader className="pb-0 pt-6 px-6 lg:px-16">
                  <Badge className="w-fit mx-auto mb-3 px-4 py-1.5 text-sm font-medium bg-[#00ADB5]/10 text-[#00ADB5] border-[#00ADB5]/30 hover:bg-[#00ADB5]/20">
                    Beautiful Defaults
                  </Badge>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 text-center"
                  >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ADB5] to-[#00ADB5]/80">
                      Beautiful
                    </span>{" "}
                    Defaults
                  </motion.h1>
                </CardHeader>

                <CardContent className="px-6 sm:px-8 lg:px-16 py-5">
                  <div className="prose max-w-4xl mx-auto text-[#EEEEEE] space-y-8">
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-lg sm:text-xl leading-relaxed text-center"
                    >
                      <span className="text-[#00ADB5] font-medium">
                        Beautiful Defaults
                      </span>{" "}
                      means components that look and feel polished right out of
                      the box, while still being fully customizable to match
                      your brand.
                    </motion.p>

                    <div className="border-t border-[#00ADB5]/10 pt-4 mt-6"></div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <h2 className="text-2xl font-bold mt-8 text-[#00ADB5] pb-1 border-b border-[#00ADB5]/20">
                        Why Beautiful Defaults Matter
                      </h2>

                      <p className="text-base leading-relaxed mt-4">
                        Most component libraries either focus on functionality
                        at the expense of design, or they're so opinionated that
                        they're difficult to customize. Div-ine UI takes a
                        different approach: components that are visually refined
                        from the start, but built to be adapted to your needs.
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
                    >
                      {features.map((feature, index) => (
                        <motion.div
                          key={feature.title}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.8 + index * 0.1,
                          }}
                          whileHover={{ y: -5 }}
                          className="bg-[#393E46]/60 rounded-lg p-6 border border-[#00ADB5]/20 hover:border-[#00ADB5]/40 transition-all duration-300"
                        >
                          <div className="flex items-center mb-4">
                            <div className="rounded-full bg-[#00ADB5]/10 p-2 mr-3 text-[#00ADB5]">
                              {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#00ADB5]">
                              {feature.title}
                            </h3>
                          </div>
                          <p className="text-[#EEEEEE]">
                            {feature.description}
                          </p>
                        </motion.div>
                      ))}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.2 }}
                    >
                      <h2 className="text-2xl font-bold mt-8 text-[#00ADB5] pb-1 border-b border-[#00ADB5]/20">
                        Our Design Principles
                      </h2>

                      <div className="space-y-6 mt-6">
                        {designPrinciples.map((principle, index) => (
                          <motion.div
                            key={principle.number}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.5,
                              delay: 1.4 + index * 0.1,
                            }}
                            className="flex gap-6"
                          >
                            <div className="flex-shrink-0">
                              <div className="w-12 h-12 rounded-full bg-[#00ADB5]/10 flex items-center justify-center text-xl font-bold text-[#00ADB5] border border-[#00ADB5]/30">
                                {principle.number}
                              </div>
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-[#00ADB5] mb-2">
                                {principle.title}
                              </h3>
                              <p className="text-[#EEEEEE]">
                                {principle.description}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
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

export default BeautifulDefaultsPage;
