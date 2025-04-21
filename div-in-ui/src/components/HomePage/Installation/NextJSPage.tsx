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
  Info,
} from "lucide-react";
import { Code } from "@/components/ui/code";

export function NextJSPage() {
  const installCommand = `# Using npm
npx create-next-app@latest my-div-ine-app
cd my-div-ine-app

# Using pnpm
pnpm create next-app my-div-ine-app
cd my-div-ine-app

# Using yarn
yarn create next-app my-div-ine-app
cd my-div-ine-app`;

  const promptOptions = `✔ Would you like to use TypeScript? … Yes
✔ Would you like to use ESLint? … Yes
✔ Would you like to use Tailwind CSS? … Yes
✔ Would you like to use "src/" directory? … Yes
✔ Would you like to use App Router? (recommended) … Yes
✔ Would you like to customize the default import alias (@/*)? … Yes`;

  const divIneInstallCommand = `# Using npm
npm install @div-ine/cli
npx div-ine init --next

# Using pnpm
pnpm add @div-ine/cli
pnpm dlx div-ine init --next

# Using yarn
yarn add @div-ine/cli
yarn dlx div-ine init --next`;

  const addComponentsCommand = `# Add button component
npx div-ine add button

# Add multiple components at once
npx div-ine add button card badge

# Add with specific configuration
npx div-ine add button --with-variants --with-animations`;

  const basicUsageCode = `import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">My Div-ine UI App</h1>
      <Button>Click me</Button>
    </main>
  );
}`;

  const tailwindConfigCode = `// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
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
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;`;

  const globalCssCode = `@tailwind base;
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

  const layoutTsxCode = `import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Div-ine UI Next.js App",
  description: "A beautiful UI built with Div-ine UI components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}`;

  return (
    <SidebarProvider
      className="bg-gradient-to-b from-[#070814] to-[#09092d] text-white w-full"
      style={{
        ["--sidebar-width" as any]: "19rem",
      }}
    >
      <div className="flex h-screen w-full overflow-hidden">
        <SidebarPage />
        <SidebarInset className="flex-1 flex flex-col w-full">
          <section className="flex-1 bg-gradient-to-b from-[#070814] to-[#09092d] text-white w-full h-screen overflow-y-auto">
            <div className="w-full animate-fade-in-up">
              <Card className="bg-[#070814]/60 backdrop-blur-sm border-0 shadow-xl overflow-hidden w-full rounded-none min-h-screen">
                <CardHeader className="pb-0 pt-6 px-6 lg:px-16">
                  <Badge className="w-fit mx-auto mb-3 px-4 py-1.5 text-sm font-medium bg-[#678aee]/10 text-[#a2a3f5] border-[#a2a3f5]/30 hover:bg-[#678aee]/20">
                    Installation
                  </Badge>

                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 text-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#678aee] to-[#a2a3f5]">
                      Next.js
                    </span>{" "}
                    Installation
                  </h1>
                </CardHeader>

                <CardContent className="px-6 sm:px-8 lg:px-16 py-5">
                  <div className="prose max-w-4xl mx-auto text-[#bfc9f2] space-y-6">
                    <p className="text-lg sm:text-xl leading-relaxed text-center">
                      This guide will walk you through setting up Div-ine UI in
                      a Next.js project. Next.js offers a powerful React
                      framework with server-side rendering and static site
                      generation.
                    </p>

                    <div className="border-t border-[#a2a3f5]/10 pt-4 mt-6"></div>

                    <div className="bg-[#0d101e]/60 rounded-lg p-6 border border-[#a2a3f5]/20">
                      <h2 className="text-2xl font-bold text-[#a2a3f5] mb-4 flex items-center">
                        <Terminal className="w-6 h-6 mr-2 text-[#678aee]" />
                        Prerequisites
                      </h2>
                      <ul className="space-y-3 pl-6 list-disc text-base">
                        <li>
                          <span className="text-[#bfc9f2]">
                            <span className="text-[#a2a3f5] font-medium">
                              Node.js
                            </span>{" "}
                            - Version 16.8 or later. Download from{" "}
                            <a
                              href="https://nodejs.org"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#678aee] hover:underline inline-flex items-center"
                            >
                              nodejs.org
                              <ExternalLink className="w-3 h-3 ml-1" />
                            </a>
                          </span>
                        </li>
                        <li>
                          <span className="text-[#bfc9f2]">
                            <span className="text-[#a2a3f5] font-medium">
                              Package Manager
                            </span>{" "}
                            - npm (comes with Node.js), pnpm, or yarn
                          </span>
                        </li>
                        <li>
                          <span className="text-[#bfc9f2]">
                            <span className="text-[#a2a3f5] font-medium">
                              Basic Knowledge
                            </span>{" "}
                            - Familiarity with React and Next.js concepts
                          </span>
                        </li>
                      </ul>
                    </div>

                    <h2 className="text-2xl font-bold mt-8 text-[#a2a3f5] pb-1 border-b border-[#a2a3f5]/20 flex items-center">
                      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#678aee]/20 text-[#a2a3f5] border border-[#a2a3f5]/30 mr-3 text-sm">
                        1
                      </span>
                      Create a New Next.js Project
                    </h2>

                    <p className="text-base leading-relaxed">
                      First, create a new Next.js project. Open your terminal
                      and run one of the following commands:
                    </p>

                    <Code filename="terminal" language="bash">
                      {installCommand}
                    </Code>

                    <p className="text-base leading-relaxed">
                      During the installation, you'll be prompted with several
                      configuration options. We recommend the following settings
                      for optimal Div-ine UI integration:
                    </p>

                    <Code filename="terminal" language="bash">
                      {promptOptions}
                    </Code>

                    <div className="bg-[#0d101e]/40 rounded-lg p-4 border-l-4 border-[#678aee]">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <Info
                            className="h-5 w-5 text-[#678aee]"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-[#a2a3f5]">
                            Important
                          </h3>
                          <div className="mt-2 text-sm text-[#bfc9f2]">
                            <p>
                              Make sure to enable Tailwind CSS during project
                              creation since Div-ine UI is built on top of
                              Tailwind. We also recommend using TypeScript for
                              better type safety and autocomplete features.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold mt-8 text-[#a2a3f5] pb-1 border-b border-[#a2a3f5]/20 flex items-center">
                      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#678aee]/20 text-[#a2a3f5] border border-[#a2a3f5]/30 mr-3 text-sm">
                        2
                      </span>
                      Install Div-ine UI CLI
                    </h2>

                    <p className="text-base leading-relaxed">
                      After creating your Next.js project, navigate to the
                      project directory and install the Div-ine UI CLI:
                    </p>

                    <Code filename="terminal" language="bash">
                      {divIneInstallCommand}
                    </Code>

                    <p className="text-base leading-relaxed">
                      Note the{" "}
                      <code className="bg-[#070814]/60 rounded px-1 py-0.5">
                        --next
                      </code>{" "}
                      flag tells the CLI to configure specifically for Next.js.
                      This ensures proper setup for the App Router and server
                      components.
                    </p>

                    <p className="text-base leading-relaxed">
                      The initialization process will:
                    </p>

                    <ul className="space-y-3 pl-6 list-disc text-base leading-relaxed">
                      <li>
                        <span className="text-[#678aee] font-medium">
                          Update Tailwind Configuration
                        </span>{" "}
                        - Add the necessary plugins and theme configuration
                      </li>
                      <li>
                        <span className="text-[#678aee] font-medium">
                          Add CSS Variables
                        </span>{" "}
                        - Update or create the global CSS file with design
                        tokens
                      </li>
                      <li>
                        <span className="text-[#678aee] font-medium">
                          Create Utility Functions
                        </span>{" "}
                        - Add necessary utility functions for the components
                      </li>
                      <li>
                        <span className="text-[#678aee] font-medium">
                          Configure Path Aliases
                        </span>{" "}
                        - Set up proper import paths for the components
                      </li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-8 text-[#a2a3f5] pb-1 border-b border-[#a2a3f5]/20 flex items-center">
                      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#678aee]/20 text-[#a2a3f5] border border-[#a2a3f5]/30 mr-3 text-sm">
                        3
                      </span>
                      Add Components
                    </h2>

                    <p className="text-base leading-relaxed">
                      Now, add Div-ine UI components to your project using the
                      CLI:
                    </p>

                    <Code filename="terminal" language="bash">
                      {addComponentsCommand}
                    </Code>

                    <p className="text-base leading-relaxed">
                      Each component will be added to your project with all
                      necessary dependencies and configurations. You'll find the
                      components in the{" "}
                      <code className="bg-[#070814]/60 rounded px-1 py-0.5">
                        src/components/ui
                      </code>{" "}
                      directory.
                    </p>

                    <div className="bg-[#0d101e]/40 rounded-lg p-4 border-l-4 border-[#678aee]">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <Check
                            className="h-5 w-5 text-[#678aee]"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-[#a2a3f5]">
                            Next.js Integration
                          </h3>
                          <div className="mt-2 text-sm text-[#bfc9f2]">
                            <p>
                              By default, components are configured to work with
                              Next.js Server Components. If you need to use
                              state or hooks, the components will automatically
                              include a "use client" directive where needed.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold mt-8 text-[#a2a3f5] pb-1 border-b border-[#a2a3f5]/20 flex items-center">
                      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#678aee]/20 text-[#a2a3f5] border border-[#a2a3f5]/30 mr-3 text-sm">
                        4
                      </span>
                      Using Components in Your Pages
                    </h2>

                    <p className="text-base leading-relaxed">
                      Now you can use the components in your Next.js pages or
                      components:
                    </p>

                    <Code filename="src/app/page.tsx" language="tsx">
                      {basicUsageCode}
                    </Code>

                    <h2 className="text-2xl font-bold mt-8 text-[#a2a3f5] pb-1 border-b border-[#a2a3f5]/20 flex items-center">
                      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#678aee]/20 text-[#a2a3f5] border border-[#a2a3f5]/30 mr-3 text-sm">
                        5
                      </span>
                      Start the Development Server
                    </h2>

                    <p className="text-base leading-relaxed">
                      Start your development server to see your app with the
                      Div-ine UI components:
                    </p>

                    <Code filename="terminal" language="bash">
                      {`# Using npm
npm run dev

# Using pnpm
pnpm dev

# Using yarn
yarn dev`}
                    </Code>

                    <p className="text-base leading-relaxed">
                      Once the server starts, you can view your application at{" "}
                      <code className="bg-[#070814]/60 rounded px-1 py-0.5">
                        http://localhost:3000
                      </code>
                      .
                    </p>

                    <h2 className="text-2xl font-bold mt-12 text-[#a2a3f5] pb-1 border-b border-[#a2a3f5]/20">
                      Key Configuration Files
                    </h2>

                    <p className="text-base leading-relaxed">
                      Here are the main configuration files that Div-ine UI
                      modifies or creates in your Next.js project:
                    </p>

                    <h3 className="text-xl font-bold mt-6 text-[#a2a3f5] flex items-center">
                      <Clipboard className="w-5 h-5 mr-2 text-[#678aee]" />
                      Tailwind Configuration
                    </h3>

                    <p className="text-base leading-relaxed">
                      Tailwind config with the design system settings:
                    </p>

                    <Code filename="tailwind.config.ts" language="typescript">
                      {tailwindConfigCode}
                    </Code>

                    <h3 className="text-xl font-bold mt-6 text-[#a2a3f5] flex items-center">
                      <Clipboard className="w-5 h-5 mr-2 text-[#678aee]" />
                      Global CSS
                    </h3>

                    <p className="text-base leading-relaxed">
                      CSS variables and base styles:
                    </p>

                    <Code filename="src/app/globals.css" language="css">
                      {globalCssCode}
                    </Code>

                    <h3 className="text-xl font-bold mt-6 text-[#a2a3f5] flex items-center">
                      <Clipboard className="w-5 h-5 mr-2 text-[#678aee]" />
                      Root Layout
                    </h3>

                    <p className="text-base leading-relaxed">
                      The root layout file that includes the global styles:
                    </p>

                    <Code filename="src/app/layout.tsx" language="tsx">
                      {layoutTsxCode}
                    </Code>

                    <h2 className="text-2xl font-bold mt-12 text-[#a2a3f5] pb-1 border-b border-[#a2a3f5]/20">
                      Advanced Features
                    </h2>

                    <p className="text-base leading-relaxed">
                      Div-ine UI provides several advanced features specifically
                      for Next.js projects:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      <div className="bg-[#0d101e]/60 rounded-lg p-5 border border-[#a2a3f5]/20">
                        <h3 className="text-lg font-bold text-[#a2a3f5] mb-2">
                          Server Components Support
                        </h3>
                        <p className="text-[#bfc9f2] text-sm">
                          Components are designed to work with React Server
                          Components. Stateful components automatically include
                          "use client" directives where needed.
                        </p>
                      </div>

                      <div className="bg-[#0d101e]/60 rounded-lg p-5 border border-[#a2a3f5]/20">
                        <h3 className="text-lg font-bold text-[#a2a3f5] mb-2">
                          Metadata Integration
                        </h3>
                        <p className="text-[#bfc9f2] text-sm">
                          Components like dialog and sheet are designed to work
                          with Next.js metadata API for improved SEO and
                          accessibility.
                        </p>
                      </div>

                      <div className="bg-[#0d101e]/60 rounded-lg p-5 border border-[#a2a3f5]/20">
                        <h3 className="text-lg font-bold text-[#a2a3f5] mb-2">
                          Image Optimization
                        </h3>
                        <p className="text-[#bfc9f2] text-sm">
                          Image components are configured to work with Next.js
                          Image component for optimal performance and lazy
                          loading.
                        </p>
                      </div>

                      <div className="bg-[#0d101e]/60 rounded-lg p-5 border border-[#a2a3f5]/20">
                        <h3 className="text-lg font-bold text-[#a2a3f5] mb-2">
                          Dark Mode Support
                        </h3>
                        <p className="text-[#bfc9f2] text-sm">
                          Built-in support for both system preference-based and
                          manual dark mode switching, with Next.js cookies for
                          server-side rendering.
                        </p>
                      </div>
                    </div>

                    <div className="bg-[#678aee]/10 rounded-lg p-6 border border-[#a2a3f5]/20 mt-12">
                      <h3 className="text-lg font-semibold text-[#a2a3f5] mb-2">
                        Need More Help with Next.js?
                      </h3>
                      <p className="text-[#bfc9f2]">
                        Check out our specialized Next.js documentation and
                        examples for more detailed instructions on advanced use
                        cases, authentication integration, and deployment
                        strategies.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-3">
                        <Button className="bg-[#678aee]/20 hover:bg-[#678aee]/30 text-[#a2a3f5] border border-[#a2a3f5]/30 flex items-center gap-2">
                          View Next.js Examples
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                        <Button className="bg-[#678aee]/20 hover:bg-[#678aee]/30 text-[#a2a3f5] border border-[#a2a3f5]/30 flex items-center gap-2">
                          Deployment Guide
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="flex justify-center mt-10">
                      <Button
                        className="bg-gradient-to-r from-[#678aee] to-[#a2a3f5] hover:from-[#a2a3f5] hover:to-[#678aee] text-white rounded-full px-6 py-2 font-medium text-base"
                        asChild
                      >
                        <a
                          href="/components"
                          className="flex items-center gap-3"
                        >
                          Explore Components
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
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
