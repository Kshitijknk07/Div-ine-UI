import { SidebarPage } from "../Sidebar/SidebarPage";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code } from "@/components/ui/code";
import { motion } from "framer-motion";
import {
  ArrowRight,
  FileCode,
  Rocket,
  Terminal,
  Zap,
  Package,
  CheckCircle,
} from "lucide-react";

export function GettingStartedPage() {
  const installCode = `# Install Div-ine UI using npm
npm install @div-ine/ui

# Or using yarn
yarn add @div-ine/ui

# Or using pnpm
pnpm add @div-ine/ui`;

  const setupCode = `// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"], // Enables dark mode support
  content: [
    './pages/**/*.{ts,tsx}', // Include all pages
    './components/**/*.{ts,tsx}', // Include all components
    './app/**/*.{ts,tsx}', // Include app directory
    './src/**/*.{ts,tsx}', // Include src directory
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary))", // Primary color
          foreground: "hsl(var(--primary-foreground))", // Primary text color
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))", // Secondary color
          foreground: "hsl(var(--secondary-foreground))", // Secondary text color
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")], // Adds animation utilities
}`;

  const usageCode = `// Import components from Div-ine UI
import { Button } from "@div-ine/ui/button";
import { Badge } from "@div-ine/ui/badge";

export default function App() {
  return (
    <div>
      {/* Display a badge */}
      <Badge>New Feature</Badge>

      {/* Display a button */}
      <Button>Click me</Button>
    </div>
  );
}`;

  const steps = [
    {
      title: "Installation",
      description:
        "Install the Div-ine UI package using your preferred package manager.",
      icon: <Package className="w-5 h-5" />,
      code: installCode,
    },
    {
      title: "Configuration",
      description: "Configure your project to use Div-ine UI components.",
      icon: <FileCode className="w-5 h-5" />,
      code: setupCode,
    },
    {
      title: "Usage",
      description: "Start using Div-ine UI components in your project.",
      icon: <Zap className="w-5 h-5" />,
      code: usageCode,
    },
  ];

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
                      Getting
                    </span>{" "}
                    Started
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
                      Start building beautiful interfaces with Div-ine UI in
                      just a few minutes. Follow these simple steps to get up
                      and running quickly.
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
                      className="mt-8"
                    >
                      <div className="flex items-center gap-2 mb-6">
                        <Rocket className="w-6 h-6 text-[#00ADB5]" />
                        <h2 className="text-2xl font-bold text-[#00ADB5] m-0">
                          Quick Start Guide
                        </h2>
                      </div>

                      <div className="space-y-12 mt-8">
                        {steps.map((step, index) => (
                          <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.5,
                              delay: 0.6 + index * 0.1,
                            }}
                            className="relative"
                          >
                            <div className="flex items-start gap-4">
                              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#00ADB5]/20 flex items-center justify-center text-[#00ADB5]">
                                {step.icon}
                              </div>
                              <div className="flex-1">
                                <h3 className="text-xl font-bold text-[#EEEEEE] mb-2">
                                  {index + 1}. {step.title}
                                </h3>
                                <p className="text-[#7b7b7b] mb-4">
                                  {step.description}
                                </p>
                                <div className="bg-[#222831] rounded-lg p-1">
                                  <Code
                                    language={
                                      index === 0 ? "bash" : "javascript"
                                    }
                                  >
                                    {step.code}
                                  </Code>
                                </div>
                              </div>
                            </div>
                            {index < steps.length - 1 && (
                              <div className="absolute left-5 top-16 bottom-0 w-[1px] bg-[#00ADB5]/20"></div>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1 }}
                      className="mt-12 bg-[#222831]/50 rounded-lg border border-[#00ADB5]/20 p-6"
                    >
                      <h3 className="text-xl font-bold text-[#00ADB5] mb-4 flex items-center gap-2">
                        <Terminal className="w-5 h-5" />
                        Framework-Specific Setup
                      </h3>

                      <Tabs defaultValue="vite" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 bg-[#222831] rounded-lg mb-4">
                          <TabsTrigger
                            value="vite"
                            className="data-[state=active]:bg-[#00ADB5]/20 data-[state=active]:text-[#00ADB5] rounded-md"
                          >
                            Vite
                          </TabsTrigger>
                          <TabsTrigger
                            value="cra"
                            className="data-[state=active]:bg-[#00ADB5]/20 data-[state=active]:text-[#00ADB5] rounded-md"
                          >
                            Create React App
                          </TabsTrigger>
                        </TabsList>

                        <TabsContent value="vite" className="mt-2">
                          <p className="text-[#7b7b7b] mb-4">
                            For Vite projects, follow these additional steps:
                          </p>
                          <Code language="bash">
                            {`# Install dependencies
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p`}
                          </Code>
                        </TabsContent>

                        <TabsContent value="cra" className="mt-2">
                          <p className="text-[#7b7b7b] mb-4">
                            For Create React App projects, follow these
                            additional steps:
                          </p>
                          <Code language="bash">
                            {`# Install dependencies
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Install CRACO for configuration overrides
npm install @craco/craco`}
                          </Code>
                        </TabsContent>
                      </Tabs>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.1 }}
                      className="mt-12"
                    >
                      <h3 className="text-xl font-bold text-[#00ADB5] mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        Next Steps
                      </h3>

                      <ul className="space-y-4 mt-6">
                        <li className="flex items-start gap-3">
                          <div className="mt-1 p-1 rounded-full bg-[#00ADB5]/10 text-[#00ADB5]">
                            <ArrowRight className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-[#EEEEEE]">
                              Explore components
                            </span>{" "}
                            - Browse our component library to see what's
                            available.
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="mt-1 p-1 rounded-full bg-[#00ADB5]/10 text-[#00ADB5]">
                            <ArrowRight className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-[#EEEEEE]">
                              Read the documentation
                            </span>{" "}
                            - Learn about component APIs and customization
                            options.
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="mt-1 p-1 rounded-full bg-[#00ADB5]/10 text-[#00ADB5]">
                            <ArrowRight className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-[#EEEEEE]">
                              Join our community
                            </span>{" "}
                            - Get help and share your creations with other
                            developers.
                          </div>
                        </li>
                      </ul>

                      <div className="flex flex-wrap gap-4 mt-8">
                        <Button
                          variant="outline"
                          className="text-[#00ADB5] border-[#00ADB5]/50 hover:bg-[#00ADB5]/10"
                          icon={<FileCode className="w-4 h-4" />}
                        >
                          View Documentation
                        </Button>
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
