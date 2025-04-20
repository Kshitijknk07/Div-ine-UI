import { SidebarPage } from "../Sidebar/SidebarPage";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Code } from "@/components/ui/code";

export function OpenCodePage() {
  const buttonCode = `import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

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
);`;

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
                    Open Code
                  </Badge>

                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 text-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#678aee] to-[#a2a3f5]">
                      Open
                    </span>{" "}
                    Code Philosophy
                  </h1>
                </CardHeader>

                <CardContent className="px-6 sm:px-8 lg:px-16 py-5">
                  <div className="prose max-w-4xl mx-auto text-[#bfc9f2] space-y-6">
                    <p className="text-lg sm:text-xl leading-relaxed text-center">
                      <span className="text-[#a2a3f5] font-medium">
                        Open Code
                      </span>{" "}
                      gives you full control over your components. Unlike
                      traditional component libraries, we give you the actual
                      source code to modify, extend, and adapt to your needs.
                    </p>

                    <div className="border-t border-[#a2a3f5]/10 pt-4 mt-6"></div>

                    <h2 className="text-2xl font-bold mt-8 text-[#a2a3f5] pb-1 border-b border-[#a2a3f5]/20">
                      What is Open Code?
                    </h2>

                    <p className="text-base leading-relaxed">
                      Open Code means that the top layer of your component code
                      is accessible and modifiable. Instead of black-box
                      components that you can only style through props or CSS
                      overrides, you get the actual component code to modify as
                      needed.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 text-[#a2a3f5] pb-1 border-b border-[#a2a3f5]/20">
                      Benefits of Open Code
                    </h2>

                    <ul className="space-y-3 pl-6 list-disc text-base leading-relaxed">
                      <li>
                        <span className="text-[#678aee] font-medium">
                          Full Transparency
                        </span>{" "}
                        - See exactly how each component is built, no mysteries.
                      </li>
                      <li>
                        <span className="text-[#678aee] font-medium">
                          Complete Control
                        </span>{" "}
                        - Modify any aspect of a component to match your design
                        system.
                      </li>
                      <li>
                        <span className="text-[#678aee] font-medium">
                          No Vendor Lock-in
                        </span>{" "}
                        - Your components are yours, not tied to our updates or
                        decisions.
                      </li>
                      <li>
                        <span className="text-[#678aee] font-medium">
                          Better Learning
                        </span>{" "}
                        - Reading and modifying component code improves your
                        understanding.
                      </li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-8 text-[#a2a3f5] pb-1 border-b border-[#a2a3f5]/20">
                      Example: The Button Component
                    </h2>

                    <p className="text-base leading-relaxed">
                      Below is the actual source code for our Button component.
                      You can copy this, modify it, and make it your own:
                    </p>

                    <Code filename="button.tsx" language="tsx">
                      {buttonCode}
                    </Code>

                    <p className="text-base leading-relaxed mt-4">
                      This is just one example. With Div-ine UI, you get access
                      to the source code for every component, allowing you to
                      customize them to perfectly fit your project's needs.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 text-[#a2a3f5] pb-1 border-b border-[#a2a3f5]/20">
                      How to Use Open Code
                    </h2>

                    <p className="text-base leading-relaxed">
                      Using our Open Code approach is simple:
                    </p>

                    <ol className="space-y-3 pl-6 list-decimal text-base leading-relaxed">
                      <li>
                        <span className="text-[#bfc9f2] font-medium">
                          Copy the Component Code
                        </span>
                        : Use our CLI tool or copy directly from our
                        documentation.
                      </li>
                      <li>
                        <span className="text-[#bfc9f2] font-medium">
                          Paste Into Your Project
                        </span>
                        : Add the code to your component directory.
                      </li>
                      <li>
                        <span className="text-[#bfc9f2] font-medium">
                          Customize as Needed
                        </span>
                        : Modify the styles, behavior, or structure to match
                        your requirements.
                      </li>
                      <li>
                        <span className="text-[#bfc9f2] font-medium">
                          Use Everywhere
                        </span>
                        : Import and use your customized component throughout
                        your application.
                      </li>
                    </ol>

                    <div className="bg-[#678aee]/10 rounded-lg p-6 border border-[#a2a3f5]/20 mt-8">
                      <h3 className="text-lg font-semibold text-[#a2a3f5] mb-2">
                        New to Component Customization?
                      </h3>
                      <p className="text-[#bfc9f2]">
                        Don't worry! We provide detailed documentation on how to
                        modify components, as well as examples for common
                        customizations. Check out our guides to get started.
                      </p>
                      <div className="mt-4">
                        <Button className="bg-[#678aee]/20 hover:bg-[#678aee]/30 text-[#a2a3f5] border border-[#a2a3f5]/30">
                          View Customization Guides
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
