import { SidebarPage } from "../Sidebar/SidebarPage";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code } from "@/components/ui/code";
import { motion } from "framer-motion";
import {
  BookOpen,
  Code2,
  FileText,
  Terminal,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

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

  const apiReference = {
    Button: {
      props: [
        {
          name: "variant",
          type: "'default' | 'outline' | 'solid' | 'destructive' | 'success' | 'secondary' | 'ghost' | 'link' | 'soft' | 'glossy'",
          default: "'default'",
          description: "Visual style variant of the button",
        },
        {
          name: "size",
          type: "'default' | 'sm' | 'lg' | 'xl' | 'icon' | 'pill' | 'sm-pill' | 'lg-pill' | 'xl-pill'",
          default: "'default'",
          description: "Size of the button",
        },
        {
          name: "icon",
          type: "ReactNode",
          default: "undefined",
          description: "Optional icon to display",
        },
        {
          name: "iconPosition",
          type: "'left' | 'right'",
          default: "'left'",
          description: "Position of the icon",
        },
        {
          name: "loading",
          type: "boolean",
          default: "false",
          description: "Shows loading spinner when true",
        },
        {
          name: "animation",
          type: "'none' | 'pulse' | 'bounce' | 'glow'",
          default: "'none'",
          description: "Animation effect",
        },
        {
          name: "disabled",
          type: "boolean",
          default: "false",
          description: "Disables the button",
        },
        {
          name: "asChild",
          type: "boolean",
          default: "false",
          description: "Merge props onto child element",
        },
      ],
    },
    Badge: {
      props: [
        {
          name: "variant",
          type: "'default' | 'secondary' | 'destructive' | 'outline'",
          default: "'default'",
          description: "Visual style variant of the badge",
        },
        {
          name: "size",
          type: "'default' | 'sm' | 'lg'",
          default: "'default'",
          description: "Size of the badge",
        },
      ],
    },
    Card: {
      props: [
        {
          name: "variant",
          type: "'default' | 'outline' | 'ghost'",
          default: "'default'",
          description: "Visual style variant of the card",
        },
        {
          name: "size",
          type: "'default' | 'sm' | 'lg'",
          default: "'default'",
          description: "Size of the card",
        },
      ],
    },
  };

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
                    className="prose max-w-4xl mx-auto text-[#EEEEEE] space-y-6"
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
                      className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
                    >
                      {features.map((feature, index) => (
                        <motion.div
                          key={feature.title}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.5 + index * 0.1,
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

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.9 }}
                      className="mt-12"
                    >
                      <h2 className="text-2xl font-bold text-[#EEEEEE] mb-6">
                        API Reference
                      </h2>
                      <div className="space-y-8">
                        {Object.entries(apiReference).map(
                          ([component, { props }]) => (
                            <motion.div
                              key={component}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3 }}
                              className="bg-[#222831]/50 rounded-lg border border-[#00ADB5]/20 p-6"
                            >
                              <h3 className="text-xl font-semibold text-[#00ADB5] mb-4">
                                {component}
                              </h3>
                              <div className="overflow-x-auto">
                                <table className="w-full">
                                  <thead>
                                    <tr className="border-b border-[#00ADB5]/20">
                                      <th className="text-left py-2 px-4 text-[#EEEEEE]">
                                        Prop
                                      </th>
                                      <th className="text-left py-2 px-4 text-[#EEEEEE]">
                                        Type
                                      </th>
                                      <th className="text-left py-2 px-4 text-[#EEEEEE]">
                                        Default
                                      </th>
                                      <th className="text-left py-2 px-4 text-[#EEEEEE]">
                                        Description
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {props.map((prop) => (
                                      <tr
                                        key={prop.name}
                                        className="border-b border-[#00ADB5]/10 last:border-0"
                                      >
                                        <td className="py-2 px-4 text-[#00ADB5] font-mono">
                                          {prop.name}
                                        </td>
                                        <td className="py-2 px-4 text-[#7b7b7b] font-mono">
                                          {prop.type}
                                        </td>
                                        <td className="py-2 px-4 text-[#7b7b7b] font-mono">
                                          {prop.default}
                                        </td>
                                        <td className="py-2 px-4 text-[#7b7b7b]">
                                          {prop.description}
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </motion.div>
                          )
                        )}
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 1 }}
                      className="mt-12"
                    >
                      <h2 className="text-2xl font-bold text-[#EEEEEE] mb-6">
                        Quick Start
                      </h2>
                      <Tabs defaultValue="quickstart" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 bg-[#222831]/70 rounded-lg mb-2">
                          <TabsTrigger
                            value="quickstart"
                            className="data-[state=active]:bg-[#00ADB5]/20 data-[state=active]:text-[#00ADB5] rounded-md"
                          >
                            Installation
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
                          <Code
                            filename="MyComponent.tsx"
                            language="typescript"
                          >
                            {componentUsageCode}
                          </Code>
                        </TabsContent>
                      </Tabs>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 1.1 }}
                      className="mt-12"
                    >
                      <h2 className="text-2xl font-bold text-[#EEEEEE] mb-6">
                        Getting Started
                      </h2>
                      <div className="space-y-6">
                        <div className="bg-[#222831]/50 rounded-lg border border-[#00ADB5]/20 p-6">
                          <h3 className="text-lg font-semibold text-[#00ADB5] mb-4">
                            Installation
                          </h3>
                          <p className="text-[#7b7b7b] mb-4">
                            Install Div-ine UI using your preferred package
                            manager.
                          </p>
                          <Button
                            className="bg-[#00ADB5] hover:bg-[#00ADB5]/90 text-[#222831] font-medium"
                            asChild
                          >
                            <a
                              href="/docs/installation"
                              className="flex items-center gap-2"
                            >
                              Installation Guide
                              <ChevronRight className="w-4 h-4" />
                            </a>
                          </Button>
                        </div>

                        <div className="bg-[#222831]/50 rounded-lg border border-[#00ADB5]/20 p-6">
                          <h3 className="text-lg font-semibold text-[#00ADB5] mb-4">
                            Components
                          </h3>
                          <p className="text-[#7b7b7b] mb-4">
                            Explore our collection of beautifully designed
                            components.
                          </p>
                          <Button
                            className="bg-[#00ADB5] hover:bg-[#00ADB5]/90 text-[#222831] font-medium"
                            asChild
                          >
                            <a
                              href="/docs/components"
                              className="flex items-center gap-2"
                            >
                              View Components
                              <ChevronRight className="w-4 h-4" />
                            </a>
                          </Button>
                        </div>

                        <div className="bg-[#222831]/50 rounded-lg border border-[#00ADB5]/20 p-6">
                          <h3 className="text-lg font-semibold text-[#00ADB5] mb-4">
                            Examples
                          </h3>
                          <p className="text-[#7b7b7b] mb-4">
                            Check out real-world examples and use cases.
                          </p>
                          <Button
                            className="bg-[#00ADB5] hover:bg-[#00ADB5]/90 text-[#222831] font-medium"
                            asChild
                          >
                            <a
                              href="/docs/examples"
                              className="flex items-center gap-2"
                            >
                              View Examples
                              <ChevronRight className="w-4 h-4" />
                            </a>
                          </Button>
                        </div>
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

export default DocumentationPage;
