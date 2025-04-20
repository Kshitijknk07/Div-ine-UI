import { SidebarPage } from "../Sidebar/SidebarPage";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Code as CodeComponent } from "@/components/ui/code";

export function CompositionPage() {
  const compositionCode = `// A basic composable button component
import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

// Button component that can be composed with various props
export function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  ...props
}: ButtonProps) {
  // Classes based on variants and sizes
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50",
  };

  const sizeClasses = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };

  // Combine all classes
  const buttonClass = \`\${variantClasses[variant]} \${sizeClasses[size]} rounded focus:outline-none focus:ring-2 \${className || ""}\`;

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
}`;

  const usageCode = `// Examples of composing the Button component
import { Button } from "./Button";

export function ButtonUsage() {
  return (
    <div className="space-y-4">
      {/* Basic usage */}
      <Button>Default Button</Button>
      
      {/* With different variants */}
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="outline">Outline Button</Button>
      
      {/* With different sizes */}
      <Button size="sm">Small Button</Button>
      <Button size="lg">Large Button</Button>
      
      {/* Combined with icons */}
      <Button>
        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
        With Icon
      </Button>
      
      {/* With additional props */}
      <Button 
        onClick={() => alert('Clicked!')} 
        className="font-bold"
      >
        Custom Button
      </Button>
    </div>
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
                    Composition
                  </Badge>

                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 text-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#678aee] to-[#a2a3f5]">
                      Composition
                    </span>{" "}
                    Over Inheritance
                  </h1>
                </CardHeader>

                <CardContent className="px-6 sm:px-8 lg:px-16 py-5">
                  <div className="prose max-w-4xl mx-auto text-[#bfc9f2] space-y-6">
                    <p className="text-lg sm:text-xl leading-relaxed text-center">
                      <span className="text-[#a2a3f5] font-medium">
                        Composition
                      </span>{" "}
                      is a powerful pattern that allows you to build complex UI
                      components from smaller, reusable pieces. It promotes
                      flexibility and maintainability.
                    </p>

                    <div className="border-t border-[#a2a3f5]/10 pt-4 mt-6"></div>

                    <h2 className="text-2xl font-bold mt-8 text-[#a2a3f5] pb-1 border-b border-[#a2a3f5]/20">
                      What is Composition?
                    </h2>

                    <p className="text-base leading-relaxed">
                      Composition is a design principle where complex objects
                      are built by combining simpler ones. In UI development, it
                      means creating components that can be easily combined and
                      configured to create more complex interfaces, rather than
                      relying on inheritance or complex class hierarchies.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 text-[#a2a3f5] pb-1 border-b border-[#a2a3f5]/20">
                      Benefits of Composition
                    </h2>

                    <ul className="space-y-3 pl-6 list-disc text-base leading-relaxed">
                      <li>
                        <span className="text-[#678aee] font-medium">
                          Flexibility
                        </span>{" "}
                        - Components can be combined in countless ways without
                        modifying their code.
                      </li>
                      <li>
                        <span className="text-[#678aee] font-medium">
                          Predictability
                        </span>{" "}
                        - Clear interfaces make it obvious how components should
                        interact.
                      </li>
                      <li>
                        <span className="text-[#678aee] font-medium">
                          Reusability
                        </span>{" "}
                        - Components are designed with reuse in mind, reducing
                        duplication.
                      </li>
                      <li>
                        <span className="text-[#678aee] font-medium">
                          Maintainability
                        </span>{" "}
                        - Smaller, focused components are easier to test, debug,
                        and update.
                      </li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-8 text-[#a2a3f5] pb-1 border-b border-[#a2a3f5]/20">
                      Example: Composable Button
                    </h2>

                    <p className="text-base leading-relaxed">
                      Here's an example of a composable button component. Note
                      how it accepts various props that can be combined to
                      create different variations:
                    </p>

                    <CodeComponent filename="button.tsx" language="tsx">
                      {compositionCode}
                    </CodeComponent>

                    <h2 className="text-2xl font-bold mt-8 text-[#a2a3f5] pb-1 border-b border-[#a2a3f5]/20">
                      Usage Example
                    </h2>

                    <p className="text-base leading-relaxed">
                      Here's how you can use composition to create various
                      button styles from the same base component:
                    </p>

                    <CodeComponent filename="button-usage.tsx" language="tsx">
                      {usageCode}
                    </CodeComponent>

                    <h2 className="text-2xl font-bold mt-8 text-[#a2a3f5] pb-1 border-b border-[#a2a3f5]/20">
                      Composition in Div-ine UI
                    </h2>

                    <p className="text-base leading-relaxed">
                      All components in Div-ine UI are built with composition in
                      mind. This allows you to:
                    </p>

                    <ul className="space-y-3 pl-6 list-disc text-base leading-relaxed">
                      <li>Combine components to create complex interfaces</li>
                      <li>Pass children to components for nested content</li>
                      <li>Use props to configure behavior and appearance</li>
                      <li>
                        Extend components with custom styles or functionality
                      </li>
                    </ul>

                    <div className="bg-[#678aee]/10 rounded-lg p-6 border border-[#a2a3f5]/20 mt-8">
                      <h3 className="text-lg font-semibold text-[#a2a3f5] mb-2">
                        Want to Learn More?
                      </h3>
                      <p className="text-[#bfc9f2]">
                        Dive deeper into composition patterns and how they can
                        improve your component architecture. Check out our
                        advanced guides for more examples and best practices.
                      </p>
                      <div className="mt-4">
                        <Button className="bg-[#678aee]/20 hover:bg-[#678aee]/30 text-[#a2a3f5] border border-[#a2a3f5]/30">
                          View Advanced Composition Guide
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>

                    <div className="flex justify-center mt-10">
                      <Button
                        className="bg-gradient-to-r from-[#678aee] to-[#a2a3f5] hover:from-[#a2a3f5] hover:to-[#678aee] text-white rounded-full px-6 py-2 font-medium text-base"
                        asChild
                      >
                        <a href="/components">
                          Explore Components
                          <ArrowRight className="w-4 h-4 ml-2" />
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
