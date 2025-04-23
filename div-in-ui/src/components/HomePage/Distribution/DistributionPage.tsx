import { SidebarPage } from "../Sidebar/SidebarPage";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ExternalLink,
  Package,
  FileCode,
  Terminal,
  RefreshCw,
  Code2,
  GitBranch,
  Layers,
  Share2,
} from "lucide-react";
import { Code } from "@/components/ui/code";
import { motion } from "framer-motion";

export function DistributionPage() {
  const schemaCode = `{
  "$schema": "https://div-ine-ui.dev/schema.json",
  "name": "button",
  "version": "1.0.0",
  "description": "A button component that can be used to trigger actions",
  "framework": ["react", "vue", "svelte", "solid"],
  "dependencies": ["@div-ine/utils"],
  "files": [
    {
      "name": "button.tsx",
      "path": "./src/button.tsx"
    },
    {
      "name": "button.css",
      "path": "./src/button.css"
    }
  ],
  "exports": {
    "default": "./src/button.tsx",
    "styles": "./src/button.css"
  },
  "props": {
    "variant": {
      "type": "string",
      "enum": ["default", "outline", "ghost", "link"],
      "default": "default",
      "description": "The visual style of the button"
    },
    "size": {
      "type": "string",
      "enum": ["sm", "md", "lg"],
      "default": "md",
      "description": "The size of the button"
    }
  }
}`;

  const cliCode = `# Install the Div-ine UI CLI
npm install -g @div-ine/cli

# Initialize Div-ine UI in your project
div-ine init

# Add a component to your project
div-ine add button

# Create a custom component
div-ine create my-custom-card --from card

# Export your component for distribution
div-ine export my-custom-card

# Share your component with others
div-ine publish my-custom-card`;

  const features = [
    {
      icon: <Package className="w-5 h-5" />,
      title: "Component Schema",
      description:
        "A standardized JSON schema that defines a component's properties, dependencies, and implementation files.",
      color: "from-[#00ADB5] to-[#00ADB5]/80",
    },
    {
      icon: <Terminal className="w-5 h-5" />,
      title: "CLI Tool",
      description:
        "A powerful command-line interface for adding, creating, and publishing components with cross-framework support.",
      color: "from-[#00ADB5] to-[#00ADB5]/80",
    },
    {
      icon: <FileCode className="w-5 h-5" />,
      title: "Open Registry",
      description:
        "A central repository of components that anyone can publish to and consume from, fostering community collaboration.",
      color: "from-[#00ADB5] to-[#00ADB5]/80",
    },
    {
      icon: <RefreshCw className="w-5 h-5" />,
      title: "Framework Adapters",
      description:
        "Automatic translation layers that convert components between different frameworks while preserving their behavior.",
      color: "from-[#00ADB5] to-[#00ADB5]/80",
    },
  ];

  const benefits = [
    {
      icon: <Code2 className="w-5 h-5" />,
      title: "Framework Agnostic",
      description: "Same components work in React, Vue, Svelte, and more.",
    },
    {
      icon: <GitBranch className="w-5 h-5" />,
      title: "Community Driven",
      description: "Anyone can contribute and share components with others.",
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: "Versioned",
      description: "Track changes and updates to components over time.",
    },
    {
      icon: <Share2 className="w-5 h-5" />,
      title: "Customizable",
      description: "Fork and modify any component to fit your specific needs.",
    },
  ];

  return (
    <SidebarProvider
      className="bg-gradient-to-b from-[#222831] to-[#393E46] text-white w-full"
      style={{
        ["--sidebar-width" as any]: "19rem",
      }}
    >
      <div className="flex h-screen w-full overflow-hidden">
        <SidebarPage />
        <SidebarInset className="flex-1 flex flex-col w-full">
          <section className="flex-1 bg-gradient-to-b from-[#222831] to-[#393E46] text-white w-full h-screen overflow-y-auto">
            <div className="w-full animate-fade-in-up">
              <Card className="bg-[#222831]/60 backdrop-blur-sm border-0 shadow-xl overflow-hidden w-full rounded-none min-h-screen">
                <CardHeader className="pb-0 pt-6 px-6 lg:px-16">
                  <Badge className="w-fit mx-auto mb-3 px-4 py-1.5 text-sm font-medium bg-[#00ADB5]/10 text-[#00ADB5] border-[#00ADB5]/30 hover:bg-[#00ADB5]/20">
                    Distribution
                  </Badge>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 text-center"
                  >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ADB5] to-[#00ADB5]/80">
                      Distribution
                    </span>{" "}
                    System
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
                        Distribution
                      </span>{" "}
                      in Div-ine UI is a revolutionary approach that allows
                      component code to be shared, versioned, and adapted across
                      frameworks and projects.
                    </motion.p>

                    <div className="border-t border-[#00ADB5]/10 pt-4 mt-6"></div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <h2 className="text-2xl font-bold mt-8 text-[#00ADB5] pb-1 border-b border-[#00ADB5]/20">
                        What is the Distribution System?
                      </h2>

                      <p className="text-base leading-relaxed mt-4">
                        The Distribution System is a standardized way to
                        package, distribute, and consume UI components across
                        different projects and frameworks. Unlike traditional
                        component libraries that restrict you to a single
                        framework, our distribution system allows components to
                        work across React, Vue, Svel, and more.
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
                            <div
                              className={`rounded-full bg-gradient-to-r ${feature.color} p-2 mr-3`}
                            >
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
                        Component Schema
                      </h2>

                      <p className="text-base leading-relaxed mt-4">
                        At the heart of our distribution system is the component
                        schema. This JSON structure defines everything needed to
                        understand and use a component:
                      </p>

                      <div className="mt-6">
                        <Code filename="button.schema.json" language="json">
                          {schemaCode}
                        </Code>
                      </div>

                      <p className="text-base leading-relaxed mt-4">
                        This schema allows our tools to understand the
                        component's requirements, dependencies, and usage
                        patterns across different frameworks.
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.4 }}
                    >
                      <h2 className="text-2xl font-bold mt-8 text-[#00ADB5] pb-1 border-b border-[#00ADB5]/20">
                        Command-Line Interface
                      </h2>

                      <p className="text-base leading-relaxed mt-4">
                        Our CLI tool makes it simple to work with the
                        distribution system:
                      </p>

                      <div className="mt-6">
                        <Code filename="terminal" language="bash">
                          {cliCode}
                        </Code>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.6 }}
                    >
                      <h2 className="text-2xl font-bold mt-8 text-[#00ADB5] pb-1 border-b border-[#00ADB5]/20">
                        Benefits of the Distribution System
                      </h2>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        {benefits.map((benefit, index) => (
                          <motion.div
                            key={benefit.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.5,
                              delay: 1.8 + index * 0.1,
                            }}
                            whileHover={{ x: 5 }}
                            className="flex items-start gap-3 p-4 rounded-lg bg-[#393E46]/60 border border-[#00ADB5]/20 hover:border-[#00ADB5]/40 transition-all duration-300"
                          >
                            <div className="rounded-full bg-[#00ADB5]/10 p-2 text-[#00ADB5]">
                              {benefit.icon}
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-[#00ADB5]">
                                {benefit.title}
                              </h3>
                              <p className="text-[#EEEEEE] mt-1">
                                {benefit.description}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 2 }}
                      className="bg-[#00ADB5]/10 rounded-lg p-6 border border-[#00ADB5]/20 mt-8"
                    >
                      <h3 className="text-lg font-semibold text-[#00ADB5] mb-2">
                        Create and Share Your Own Components
                      </h3>
                      <p className="text-[#EEEEEE]">
                        Ready to contribute to the ecosystem? Create your own
                        components and share them with the community. Our
                        distribution system makes it easy to publish your work
                        and get feedback from other developers.
                      </p>
                      <div className="mt-4">
                        <Button
                          className="bg-[#00ADB5] hover:bg-[#00ADB5]/90 text-[#222831] font-medium"
                          asChild
                        >
                          <a
                            href="/docs/components"
                            className="flex items-center gap-2"
                          >
                            Read the Publishing Guide
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 2.2 }}
                      className="flex justify-center mt-10"
                    >
                      <Button
                        className="bg-gradient-to-r from-[#00ADB5] to-[#00ADB5]/80 hover:from-[#00ADB5]/90 hover:to-[#00ADB5] text-[#222831] rounded-full px-6 py-2 font-medium text-base flex items-center gap-2"
                        asChild
                      >
                        <a
                          href="/docs/components"
                          className="flex items-center gap-2"
                        >
                          Explore Components
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </Button>
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
