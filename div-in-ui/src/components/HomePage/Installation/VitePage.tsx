import { SidebarPage } from "../Sidebar/SidebarPage";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ExternalLink,
  Check,
  Terminal,
  Clipboard,
  FileCode,
  Package,
  Settings,
  Play,
} from "lucide-react";
import { Code } from "@/components/ui/code";
import { motion } from "framer-motion";

export function VitePage() {
  const installCommand = `# Using npm
npm create vite my-div-ine-app --template react-ts
cd my-div-ine-app

# Using pnpm
pnpm create vite my-div-ine-app --template react-ts
cd my-div-ine-app

# Using yarn
yarn create vite my-div-ine-app --template react-ts
cd my-div-ine-app`;

  const divIneInstallCommand = `# Using npm
npm install @div-ine/cli
npx div-ine init

# Using pnpm
pnpm add @div-ine/cli
pnpm dlx div-ine init

# Using yarn
yarn add @div-ine/cli
yarn dlx div-ine init`;

  const addComponentsCommand = `# Add button component
npx div-ine add button

# Add multiple components at once
npx div-ine add button card badge

# Add with specific configuration
npx div-ine add button --with-variants --with-animations`;

  const basicUsageCode = `import { Button } from '@/components/ui/button';

function App() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">My Div-ine UI App</h1>
      <Button>Click me</Button>
    </div>
  );
}

export default App;`;

  const configTailwindCode = `// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}`;

  const cssVariablesCode = `@tailwind base;
@tailwind components;
@tailwind utilities;
 
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
 
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
 
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
 
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
 
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
 
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
 
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
 
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
 
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
 
    --radius: 0.5rem;
  }
 
  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
 
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
 
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
 
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
 
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
 
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
 
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
 
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
 
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }
}
 
@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}`;

  const steps = [
    {
      number: "1",
      title: "Create a New Vite Project",
      description:
        "First, create a new Vite project with React and TypeScript template.",
      icon: <Package className="w-5 h-5" />,
      code: installCommand,
      tip: "Replace 'my-div-ine-app' with your preferred project name. The '--template react-ts' flag ensures your project is set up with React and TypeScript.",
    },
    {
      number: "2",
      title: "Install Dependencies",
      description:
        "Install the Div-ine UI CLI tool and initialize your project.",
      icon: <Settings className="w-5 h-5" />,
      code: divIneInstallCommand,
      tip: "This will install the Div-ine UI CLI tool and initialize your project with the necessary configuration files.",
    },
    {
      number: "3",
      title: "Add Components",
      description: "Add Div-ine UI components to your project using the CLI.",
      icon: <FileCode className="w-5 h-5" />,
      code: addComponentsCommand,
      tip: "The CLI will add the selected components to your project in the 'src/components/ui' directory.",
    },
    {
      number: "4",
      title: "Start Using Components",
      description: "Import and use the components in your React application.",
      icon: <Play className="w-5 h-5" />,
      code: basicUsageCode,
      tip: "You can now use the components in your application. Each component is fully customizable.",
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
                      Vite
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
                      This guide will walk you through setting up a new React
                      project with Vite and integrating Div-ine UI components.
                      Vite offers an extremely fast development experience.
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
                            - Version 14.18+ or 16+. Download from{" "}
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
                              Code Editor
                            </span>{" "}
                            - We recommend{" "}
                            <a
                              href="https://code.visualstudio.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#00ADB5] hover:underline inline-flex items-center"
                            >
                              Visual Studio Code
                              <ExternalLink className="w-3 h-3 ml-1" />
                            </a>
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
                      <h3 className="text-lg font-semibold text-[#00ADB5] mb-2">
                        Configuration Details
                      </h3>
                      <p className="text-[#EEEEEE]">
                        Below are the key configuration files that the Div-ine
                        UI initialization creates or modifies:
                      </p>

                      <div className="mt-6">
                        <h4 className="text-base font-medium text-[#00ADB5] flex items-center">
                          <Clipboard className="w-5 h-5 mr-2" />
                          Tailwind Configuration
                        </h4>
                        <Code
                          filename="tailwind.config.js"
                          language="javascript"
                        >
                          {configTailwindCode}
                        </Code>
                      </div>

                      <div className="mt-6">
                        <h4 className="text-base font-medium text-[#00ADB5] flex items-center">
                          <Clipboard className="w-5 h-5 mr-2" />
                          CSS Variables
                        </h4>
                        <Code filename="src/index.css" language="css">
                          {cssVariablesCode}
                        </Code>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.4 }}
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
