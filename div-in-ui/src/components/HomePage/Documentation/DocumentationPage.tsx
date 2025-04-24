import { SidebarPage } from "../Sidebar/SidebarPage";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code } from "@/components/ui/code";
import { motion } from "framer-motion";
import { BookOpen, Code2, FileText, Terminal } from "lucide-react";

export function DocumentationPage() {
  const features = [
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Comprehensive Guides",
      description:
        "Detailed documentation covering every aspect of Div-ine UI, from installation to advanced usage.",
      color: "from-[#00ADB5] to-[#00ADB5]/80",
    },
    {
      icon: <Code2 className="w-5 h-5" />,
      title: "Code Examples",
      description:
        "Real-world examples and snippets to help you implement components quickly and correctly.",
      color: "from-[#00ADB5] to-[#00ADB5]/80",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "API Reference",
      description:
        "Complete API documentation for all components, props, and utilities.",
      color: "from-[#00ADB5] to-[#00ADB5]/80",
    },
    {
      icon: <Terminal className="w-5 h-5" />,
      title: "CLI Tools",
      description:
        "Command-line tools to help you scaffold, build, and deploy your applications.",
      color: "from-[#00ADB5] to-[#00ADB5]/80",
    },
  ];

  const quickStartCode = `# Install Div-ine UI
npm install @div-ine/ui

# Or using yarn
yarn add @div-ine/ui

# Or using pnpm
pnpm add @div-ine/ui`;

  const componentUsageCode = `import { Button } from "@div-ine/ui/button";
import { Badge } from "@div-ine/ui/badge";
import { Card } from "@div-ine/ui/card";

export function MyComponent() {
  return (
    <Card>
      <Badge>New</Badge>
      <Button>Click me</Button>
    </Card>
  );}`;

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
                      Documentation
                    </span>
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
                      Welcome to the Div-ine UI documentation. Here you'll find
                      everything you need to know about using our components,
                      from installation to advanced customization.
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
                      className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
                    >
                      {features.map((feature, index) => (
                        <motion.div
                          key={feature.title}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.6 + index * 0.1,
                          }}
                          className="bg-[#222831]/50 p-6 rounded-lg border border-[#00ADB5]/20 hover:border-[#00ADB5]/40 transition-colors"
                        >
                          <div className="flex items-start gap-4">
                            <div className="p-2 rounded-lg bg-gradient-to-r from-[#00ADB5]/20 to-[#00ADB5]/10">
                              {feature.icon}
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-[#EEEEEE] mb-2">
                                {feature.title}
                              </h3>
                              <p className="text-[#7b7b7b]">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>

                    <Tabs defaultValue="quickstart" className="w-full mt-8">
                      <TabsList className="grid w-full grid-cols-2 bg-[#222831] rounded-lg mb-2">
                        <TabsTrigger
                          value="quickstart"
                          className="data-[state=active]:bg-[#00ADB5]/20 data-[state=active]:text-[#00ADB5] rounded-md"
                        >
                          Quick Start
                        </TabsTrigger>
                        <TabsTrigger
                          value="usage"
                          className="data-[state=active]:bg-[#00ADB5]/20 data-[state=active]:text-[#00ADB5] rounded-md"
                        >
                          Component Usage
                        </TabsTrigger>
                      </TabsList>
                      <TabsContent value="quickstart" className="mt-4">
                        <Code filename="quickstart.sh" language="bash">
                          {quickStartCode}
                        </Code>
                      </TabsContent>
                      <TabsContent value="usage" className="mt-4">
                        <Code filename="MyComponent.tsx" language="typescript">
                          {componentUsageCode}
                        </Code>
                      </TabsContent>
                    </Tabs>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.7 }}
                      className="mt-8 space-y-6"
                    >
                      <h2 className="text-2xl font-bold text-[#EEEEEE]">
                        Getting Started
                      </h2>
                      <ol className="space-y-4 list-decimal list-inside text-[#7b7b7b]">
                        <li className="flex items-start">
                          <div>
                            <h3 className="text-lg font-semibold text-[#EEEEEE]">
                              Installation
                            </h3>
                            <p>
                              Install Div-ine UI using your preferred package
                              manager.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div>
                            <h3 className="text-lg font-semibold text-[#EEEEEE]">
                              Setup
                            </h3>
                            <p>
                              Configure your project to use Div-ine UI
                              components.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div>
                            <h3 className="text-lg font-semibold text-[#EEEEEE]">
                              Usage
                            </h3>
                            <p>Start using components in your application.</p>
                          </div>
                        </li>
                      </ol>
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

export default DocumentationPage;
