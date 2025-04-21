import { SidebarPage } from "../Sidebar/SidebarPage";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ExternalLink,
  Terminal,
  FileCode,
  Layers,
  Settings,
} from "lucide-react";
import { Code } from "@/components/ui/code";

export function ManualSetupPage() {
  const dependenciesCommand = `# Using npm
npm install tailwindcss postcss autoprefixer
npm install @radix-ui/react-dialog @radix-ui/react-slot clsx class-variance-authority tailwind-merge
npm install lucide-react

# Using pnpm
pnpm add tailwindcss postcss autoprefixer
pnpm add @radix-ui/react-dialog @radix-ui/react-slot clsx class-variance-authority tailwind-merge
pnpm add lucide-react

# Using yarn
yarn add tailwindcss postcss autoprefixer
yarn add @radix-ui/react-dialog @radix-ui/react-slot clsx class-variance-authority tailwind-merge
yarn add lucide-react`;

  const initTailwindCommand = `# Initialize Tailwind CSS
npx tailwindcss init -p`;

  const cnUtilCode = `// lib/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`;

  const tailwindConfigCode = `// tailwind.config.js
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

  const buttonComponentCode = `// components/ui/button.tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }`;

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
                      Manual
                    </span>{" "}
                    Setup
                  </h1>
                </CardHeader>

                <CardContent className="px-6 sm:px-8 lg:px-16 py-5">
                  <div className="prose max-w-4xl mx-auto text-[#bfc9f2] space-y-6">
                    <p className="text-lg sm:text-xl leading-relaxed text-center">
                      This guide will walk you through manually setting up
                      Div-ine UI components in your React project. This approach
                      gives you full control over your component implementation.
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
                            - Version 14+ or higher. Download from{" "}
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
                              React Project
                            </span>{" "}
                            - An existing React project where you want to add
                            the components
                          </span>
                        </li>
                        <li>
                          <span className="text-[#bfc9f2]">
                            <span className="text-[#a2a3f5] font-medium">
                              Basic Knowledge
                            </span>{" "}
                            - Familiarity with React, TypeScript, and Tailwind
                            CSS
                          </span>
                        </li>
                      </ul>
                    </div>

                    <h2 className="text-2xl font-bold mt-8 text-[#a2a3f5] pb-1 border-b border-[#a2a3f5]/20 flex items-center">
                      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#678aee]/20 text-[#a2a3f5] border border-[#a2a3f5]/30 mr-3 text-sm">
                        1
                      </span>
                      Install Dependencies
                    </h2>

                    <p className="text-base leading-relaxed">
                      First, install the necessary dependencies for Div-ine UI
                      components:
                    </p>

                    <Code filename="terminal" language="bash">
                      {dependenciesCommand}
                    </Code>

                    <p className="text-base leading-relaxed">
                      These packages provide the foundation for the component
                      system:
                    </p>

                    <ul className="space-y-3 pl-6 list-disc text-base leading-relaxed">
                      <li>
                        <span className="text-[#678aee] font-medium">
                          tailwindcss, postcss, autoprefixer
                        </span>{" "}
                        - Core Tailwind CSS packages
                      </li>
                      <li>
                        <span className="text-[#678aee] font-medium">
                          @radix-ui
                        </span>{" "}
                        - Accessible UI primitives for components
                      </li>
                      <li>
                        <span className="text-[#678aee] font-medium">
                          clsx, class-variance-authority, tailwind-merge
                        </span>{" "}
                        - Utilities for composing class names and creating
                        variants
                      </li>
                      <li>
                        <span className="text-[#678aee] font-medium">
                          lucide-react
                        </span>{" "}
                        - Icon library used in components
                      </li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-8 text-[#a2a3f5] pb-1 border-b border-[#a2a3f5]/20 flex items-center">
                      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#678aee]/20 text-[#a2a3f5] border border-[#a2a3f5]/30 mr-3 text-sm">
                        2
                      </span>
                      Set Up Tailwind CSS
                    </h2>

                    <p className="text-base leading-relaxed">
                      Initialize Tailwind CSS in your project:
                    </p>

                    <Code filename="terminal" language="bash">
                      {initTailwindCommand}
                    </Code>

                    <p className="text-base leading-relaxed">
                      Update your Tailwind configuration file with the Div-ine
                      UI design system settings:
                    </p>

                    <Code filename="tailwind.config.js" language="javascript">
                      {tailwindConfigCode}
                    </Code>

                    <h2 className="text-2xl font-bold mt-8 text-[#a2a3f5] pb-1 border-b border-[#a2a3f5]/20 flex items-center">
                      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#678aee]/20 text-[#a2a3f5] border border-[#a2a3f5]/30 mr-3 text-sm">
                        3
                      </span>
                      Add CSS Variables
                    </h2>

                    <p className="text-base leading-relaxed">
                      Add the following CSS variables to your global CSS file
                      (e.g.,{" "}
                      <code className="bg-[#070814]/60 rounded px-1 py-0.5">
                        index.css
                      </code>{" "}
                      or{" "}
                      <code className="bg-[#070814]/60 rounded px-1 py-0.5">
                        globals.css
                      </code>
                      ):
                    </p>

                    <Code filename="index.css" language="css">
                      {cssVariablesCode}
                    </Code>

                    <h2 className="text-2xl font-bold mt-8 text-[#a2a3f5] pb-1 border-b border-[#a2a3f5]/20 flex items-center">
                      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#678aee]/20 text-[#a2a3f5] border border-[#a2a3f5]/30 mr-3 text-sm">
                        4
                      </span>
                      Create Utility Functions
                    </h2>

                    <p className="text-base leading-relaxed">
                      Create a{" "}
                      <code className="bg-[#070814]/60 rounded px-1 py-0.5">
                        utils.ts
                      </code>{" "}
                      file in your project's lib directory:
                    </p>

                    <Code filename="lib/utils.ts" language="typescript">
                      {cnUtilCode}
                    </Code>

                    <div className="bg-[#0d101e]/40 rounded-lg p-4 border-l-4 border-[#678aee]">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <FileCode
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
                              Make sure your project has a proper path alias
                              setup for{" "}
                              <code className="bg-[#070814]/60 rounded px-1 py-0.5">
                                @/lib/utils
                              </code>{" "}
                              in your{" "}
                              <code className="bg-[#070814]/60 rounded px-1 py-0.5">
                                tsconfig.json
                              </code>{" "}
                              file. If not, use relative imports instead.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold mt-8 text-[#a2a3f5] pb-1 border-b border-[#a2a3f5]/20 flex items-center">
                      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#678aee]/20 text-[#a2a3f5] border border-[#a2a3f5]/30 mr-3 text-sm">
                        5
                      </span>
                      Create Component Files
                    </h2>

                    <p className="text-base leading-relaxed">
                      Create a directory structure for your components. We
                      recommend organizing them like this:
                    </p>

                    <Code filename="directory" language="bash">
                      {`src/
  ├── components/
  │   └── ui/
  │       ├── button.tsx
  │       ├── card.tsx
  │       └── ...more components
  └── lib/
      └── utils.ts`}
                    </Code>

                    <p className="text-base leading-relaxed">
                      Here's an example of a Button component implementation:
                    </p>

                    <Code filename="components/ui/button.tsx" language="tsx">
                      {buttonComponentCode}
                    </Code>

                    <h2 className="text-2xl font-bold mt-8 text-[#a2a3f5] pb-1 border-b border-[#a2a3f5]/20 flex items-center">
                      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#678aee]/20 text-[#a2a3f5] border border-[#a2a3f5]/30 mr-3 text-sm">
                        6
                      </span>
                      Usage in Your Project
                    </h2>

                    <p className="text-base leading-relaxed">
                      Now you can use your components in your React application:
                    </p>

                    <Code filename="App.tsx" language="tsx">
                      {`import { Button } from './components/ui/button';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Div-ine UI App</h1>
      <div className="flex gap-4">
        <Button>Default Button</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
    </div>
  );
}

export default App;`}
                    </Code>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                      <div className="bg-[#0d101e]/60 rounded-lg p-5 border border-[#a2a3f5]/20">
                        <h3 className="text-lg font-bold text-[#a2a3f5] mb-2 flex items-center">
                          <Layers className="w-5 h-5 mr-2 text-[#678aee]" />
                          Modular Approach
                        </h3>
                        <p className="text-[#bfc9f2] text-sm">
                          This manual approach gives you full control over your
                          components. You can add only what you need and
                          customize each component to fit your project
                          requirements.
                        </p>
                      </div>
                      <div className="bg-[#0d101e]/60 rounded-lg p-5 border border-[#a2a3f5]/20">
                        <h3 className="text-lg font-bold text-[#a2a3f5] mb-2 flex items-center">
                          <Settings className="w-5 h-5 mr-2 text-[#678aee]" />
                          Customization
                        </h3>
                        <p className="text-[#bfc9f2] text-sm">
                          You can modify the components' code directly to align
                          with your project's design system, add or remove
                          variants, and tailor the behavior to your specific
                          requirements.
                        </p>
                      </div>
                    </div>

                    <div className="bg-[#678aee]/10 rounded-lg p-6 border border-[#a2a3f5]/20 mt-12">
                      <h3 className="text-lg font-semibold text-[#a2a3f5] mb-2">
                        Need More Help?
                      </h3>
                      <p className="text-[#bfc9f2]">
                        For more advanced components and additional
                        customization options, check out our comprehensive
                        documentation or component reference.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-3">
                        <Button className="bg-[#678aee]/20 hover:bg-[#678aee]/30 text-[#a2a3f5] border border-[#a2a3f5]/30 flex items-center gap-2">
                          Component Reference
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                        <Button className="bg-[#678aee]/20 hover:bg-[#678aee]/30 text-[#a2a3f5] border border-[#a2a3f5]/30 flex items-center gap-2">
                          Advanced Customization
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

export default ManualSetupPage;
