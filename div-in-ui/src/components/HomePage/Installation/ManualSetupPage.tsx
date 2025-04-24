import { SidebarPage } from "../Sidebar/SidebarPage";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Terminal,
  FileCode,
  Layers,
  Settings,
  Package,
  Download,
  CheckCircle2,
} from "lucide-react";
import { Code } from "@/components/ui/code";
import { motion } from "framer-motion";

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
                      Manual Setup
                    </Badge>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 text-center"
                  >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ADB5] to-[#00ADB5]">
                      Manual
                    </span>
                    Setup Guide
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
                      Set up{" "}
                      <span className="text-[#00ADB5] font-medium">
                        Div-ine UI
                      </span>{" "}
                      manually in your project with these step-by-step
                      instructions.
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                      className="border-t border-[#00ADB5]/30 pt-4 mt-6"
                    ></motion.div>

                    <motion.h2
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                      className="text-2xl font-bold mt-8 text-[#00ADB5] pb-1 border-b border-[#00ADB5]/30 flex items-center gap-2"
                    >
                      <Download className="w-5 h-5" />
                      Install Dependencies
                    </motion.h2>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 }}
                      className="space-y-4"
                    >
                      <Code filename="terminal" language="bash">
                        {dependenciesCommand}
                      </Code>
                    </motion.div>

                    <motion.h2
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.7 }}
                      className="text-2xl font-bold mt-8 text-[#00ADB5] pb-1 border-b border-[#00ADB5]/30 flex items-center gap-2"
                    >
                      <Terminal className="w-5 h-5" />
                      Initialize Tailwind CSS
                    </motion.h2>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.8 }}
                      className="space-y-4"
                    >
                      <Code filename="terminal" language="bash">
                        {initTailwindCommand}
                      </Code>
                    </motion.div>

                    <motion.h2
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.9 }}
                      className="text-2xl font-bold mt-8 text-[#00ADB5] pb-1 border-b border-[#00ADB5]/30 flex items-center gap-2"
                    >
                      <FileCode className="w-5 h-5" />
                      Configure Your Project
                    </motion.h2>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 1 }}
                      className="space-y-6"
                    >
                      <div className="bg-[#222831] p-6 rounded-lg border border-[#00ADB5]/20">
                        <h3 className="text-lg font-medium text-[#00ADB5] mb-4 flex items-center gap-2">
                          <Settings className="w-5 h-5" />
                          Utility Function
                        </h3>
                        <Code filename="lib/utils.ts" language="typescript">
                          {cnUtilCode}
                        </Code>
                      </div>

                      <div className="bg-[#222831] p-6 rounded-lg border border-[#00ADB5]/20">
                        <h3 className="text-lg font-medium text-[#00ADB5] mb-4 flex items-center gap-2">
                          <Layers className="w-5 h-5" />
                          Tailwind Configuration
                        </h3>
                        <Code
                          filename="tailwind.config.js"
                          language="javascript"
                        >
                          {tailwindConfigCode}
                        </Code>
                      </div>

                      <div className="bg-[#222831] p-6 rounded-lg border border-[#00ADB5]/20">
                        <h3 className="text-lg font-medium text-[#00ADB5] mb-4 flex items-center gap-2">
                          <FileCode className="w-5 h-5" />
                          CSS Variables
                        </h3>
                        <Code filename="globals.css" language="css">
                          {cssVariablesCode}
                        </Code>
                      </div>
                    </motion.div>

                    <motion.h2
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 1.1 }}
                      className="text-2xl font-bold mt-8 text-[#00ADB5] pb-1 border-b border-[#00ADB5]/30 flex items-center gap-2"
                    >
                      <Package className="w-5 h-5" />
                      Create Components
                    </motion.h2>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 1.2 }}
                      className="space-y-4"
                    >
                      <Code
                        filename="components/ui/button.tsx"
                        language="typescript"
                      >
                        {buttonComponentCode}
                      </Code>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 1.3 }}
                      className="mt-8 p-6 rounded-lg bg-[#00ADB5]/5 border border-[#00ADB5]/20"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#00ADB5] mt-1" />
                        <div>
                          <h3 className="text-lg font-medium text-[#00ADB5]">
                            Ready to Build?
                          </h3>
                          <p className="mt-2 text-[#7b7b7b]">
                            You've successfully set up Div-ine UI in your
                            project. Start building beautiful interfaces with
                            our components.
                          </p>
                        </div>
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

export default ManualSetupPage;
