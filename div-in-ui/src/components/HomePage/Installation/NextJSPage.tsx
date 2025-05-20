import { SidebarPage } from "../Sidebar/SidebarPage";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code } from "@/components/ui/code";
import { motion } from "framer-motion";
import {
  Terminal,
  Package,
  Settings,
  FileCode,
  Play,
  Info,
  Check,
  ExternalLink,
} from "lucide-react";

export function NextJSPage() {
  // Command to create a new Next.js project
  const installCommand = `# Using npm
npx create-next-app@latest my-div-ine-app
cd my-div-ine-app

# Using pnpm
pnpm create next-app my-div-ine-app
cd my-div-ine-app

# Using yarn
yarn create next-app my-div-ine-app
cd my-div-ine-app`;

  // Prompt options during Next.js project creation
  const promptOptions = `✔ Would you like to use TypeScript? … Yes
✔ Would you like to use ESLint? … Yes
✔ Would you like to use Tailwind CSS? … Yes
✔ Would you like to use "src/" directory? … Yes
✔ Would you like to use App Router? (recommended) … Yes
✔ Would you like to customize the default import alias (@/*)? … Yes`;

  // Command to install Div-ine UI CLI and initialize the project
  const divIneInstallCommand = `# Using npm
npm install @div-ine/cli
npx div-ine init --next

# Using pnpm
pnpm add @div-ine/cli
pnpm dlx div-ine init --next

# Using yarn
yarn add @div-ine/cli
yarn dlx div-ine init --next`;

  // Command to add components using the CLI
  const addComponentsCommand = `# Add button component
npx div-ine add button

# Add multiple components at once
npx div-ine add button card badge

# Add with specific configuration
npx div-ine add button --with-variants --with-animations`;

  // Example of using a component in a Next.js project
  const basicUsageCode = `import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">My Div-ine UI App</h1>
      <Button>Click me</Button>
    </main>
  );
}`;

  const steps = [
    {
      number: "1",
      title: "Create a New Next.js Project",
      description:
        "First, create a new Next.js project with the recommended settings.",
      icon: <Package className="w-5 h-5" />,
      code: installCommand,
      tip: "Make sure to enable Tailwind CSS and TypeScript during project creation. These are required for Div-ine UI to work properly.",
      prompt: promptOptions,
    },
    {
      number: "2",
      title: "Install Dependencies",
      description:
        "Install the Div-ine UI CLI tool and initialize your project.",
      icon: <Settings className="w-5 h-5" />,
      code: divIneInstallCommand,
      tip: "The --next flag tells the CLI to configure specifically for Next.js, ensuring proper setup for the App Router and server components.",
    },
    {
      number: "3",
      title: "Add Components",
      description: "Add Div-ine UI components to your project using the CLI.",
      icon: <FileCode className="w-5 h-5" />,
      code: addComponentsCommand,
      tip: "Components are added to your project with all necessary dependencies and configurations. They'll be available in the src/components/ui directory.",
    },
    {
      number: "4",
      title: "Start Using Components",
      description:
        "Import and use the components in your Next.js pages or components.",
      icon: <Play className="w-5 h-5" />,
      code: basicUsageCode,
      tip: "Components are configured to work with Next.js Server Components by default. Stateful components automatically include 'use client' directives where needed.",
    },
  ];

  const features = [
    {
      icon: <Info className="w-5 h-5" />,
      title: "Server Components Support",
      description:
        "Components are designed to work with React Server Components. Stateful components automatically include 'use client' directives where needed.",
    },
    {
      icon: <Info className="w-5 h-5" />,
      title: "Metadata Integration",
      description:
        "Components like dialog and sheet are designed to work with Next.js metadata API for improved SEO and accessibility.",
    },
    {
      icon: <Info className="w-5 h-5" />,
      title: "Image Optimization",
      description:
        "Image components are configured to work with Next.js Image component for optimal performance and lazy loading.",
    },
    {
      icon: <Info className="w-5 h-5" />,
      title: "Dark Mode Support",
      description:
        "Built-in support for both system preference-based and manual dark mode switching, with Next.js cookies for server-side rendering.",
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
                    Installation
                  </Badge>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 text-center"
                  >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ADB5] to-[#00ADB5]/80">
                      Next.js
                    </span>{" "}
                    Installation
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
                      This guide will walk you through setting up Div-ine UI in
                      a Next.js project. Next.js offers a powerful React
                      framework with server-side rendering and static site
                      generation.
                    </motion.p>

                    <div className="border-t border-[#00ADB5]/10 pt-4 mt-6"></div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="bg-[#393E46]/60 rounded-lg p-6 border border-[#00ADB5]/20"
                    >
                      <h2 className="text-2xl font-bold text-[#00ADB5] mb-4 flex items-center">
                        <Terminal className="w-6 h-6 mr-2" />
                        Prerequisites
                      </h2>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <Check className="w-4 h-4 text-[#00ADB5] mr-2" />
                          <span>
                            <span className="text-[#00ADB5] font-medium">
                              Node.js
                            </span>{" "}
                            - Version 16.8 or later. Download from{" "}
                            <a
                              href="https://nodejs.org"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#00ADB5] hover:underline inline-flex items-center"
                            >
                              nodejs.org
                              <ExternalLink className="w-3 h-3 ml-1" />
                            </a>
                          </span>
                        </li>
                        <li className="flex items-center">
                          <Check className="w-4 h-4 text-[#00ADB5] mr-2" />
                          <span>
                            <span className="text-[#00ADB5] font-medium">
                              Package Manager
                            </span>{" "}
                            - npm (comes with Node.js), pnpm, or yarn
                          </span>
                        </li>
                        <li className="flex items-center">
                          <Check className="w-4 h-4 text-[#00ADB5] mr-2" />
                          <span>
                            <span className="text-[#00ADB5] font-medium">
                              Basic Knowledge
                            </span>{" "}
                            - Familiarity with React and Next.js concepts
                          </span>
                        </li>
                      </ul>
                    </motion.div>

                    {steps.map((step, index) => (
                      <motion.div
                        key={step.number}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      >
                        <h2 className="text-2xl font-bold mt-8 text-[#00ADB5] pb-1 border-b border-[#00ADB5]/20 flex items-center">
                          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-r from-[#00ADB5]/20 to-[#00ADB5]/10 text-[#00ADB5] border border-[#00ADB5]/30 mr-3 text-sm">
                            {step.number}
                          </span>
                          {step.title}
                        </h2>

                        <p className="text-base leading-relaxed mt-4">
                          {step.description}
                        </p>

                        <Code filename="terminal" language="bash">
                          {step.code}
                        </Code>

                        {step.prompt && (
                          <Code filename="terminal" language="bash">
                            {step.prompt}
                          </Code>
                        )}

                        <div className="flex mt-4">
                          <div className="flex-shrink-0">
                            <div className="rounded-full bg-[#00ADB5]/10 p-2 text-[#00ADB5]">
                              {step.icon}
                            </div>
                          </div>
                          <div className="ml-3">
                            <h3 className="text-sm font-medium text-[#00ADB5]">
                              Pro Tip
                            </h3>
                            <div className="mt-2 text-sm text-[#EEEEEE]">
                              <p>{step.tip}</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.2 }}
                      className="bg-[#00ADB5]/10 rounded-lg p-6 border border-[#00ADB5]/20 mt-8"
                    >
                      <h3 className="text-lg font-semibold text-[#00ADB5] mb-4">
                        Advanced Features
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {features.map((feature, index) => (
                          <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.5,
                              delay: 1.4 + index * 0.1,
                            }}
                            className="bg-[#393E46]/60 rounded-lg p-4 border border-[#00ADB5]/20"
                          >
                            <div className="flex items-start gap-3">
                              <div className="rounded-full bg-[#00ADB5]/10 p-2 text-[#00ADB5]">
                                {feature.icon}
                              </div>
                              <div>
                                <h4 className="text-base font-medium text-[#00ADB5]">
                                  {feature.title}
                                </h4>
                                <p className="text-sm text-[#EEEEEE] mt-1">
                                  {feature.description}
                                </p>
                              </div>
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

export default NextJSPage;
