import * as React from "react";
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
} from "lucide-react";
import { Code } from "@/components/ui/code";

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
                    Distribution
                  </Badge>

                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 text-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#678aee] to-[#a2a3f5]">
                      Distribution
                    </span>{" "}
                    System
                  </h1>
                </CardHeader>

                <CardContent className="px-6 sm:px-8 lg:px-16 py-5">
                  <div className="prose max-w-4xl mx-auto text-[#bfc9f2] space-y-6">
                    <p className="text-lg sm:text-xl leading-relaxed text-center">
                      <span className="text-[#a2a3f5] font-medium">
                        Distribution
                      </span>{" "}
                      in Div-ine UI is a revolutionary approach that allows
                      component code to be shared, versioned, and adapted across
                      frameworks and projects.
                    </p>

                    <div className="border-t border-[#a2a3f5]/10 pt-4 mt-6"></div>

                    <h2 className="text-2xl font-bold mt-8 text-[#a2a3f5] pb-1 border-b border-[#a2a3f5]/20">
                      What is the Distribution System?
                    </h2>

                    <p className="text-base leading-relaxed">
                      The Distribution System is a standardized way to package,
                      distribute, and consume UI components across different
                      projects and frameworks. Unlike traditional component
                      libraries that restrict you to a single framework, our
                      distribution system allows components to work across
                      React, Vue, Svelte, and more.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <div className="bg-[#0d101e]/60 rounded-lg p-6 border border-[#a2a3f5]/20 flex flex-col">
                        <div className="flex items-center mb-4">
                          <div className="rounded-full bg-[#678aee]/20 p-2 mr-3">
                            <Package className="w-5 h-5 text-[#a2a3f5]" />
                          </div>
                          <h3 className="text-xl font-bold text-[#a2a3f5]">
                            Component Schema
                          </h3>
                        </div>
                        <p className="text-[#bfc9f2] mb-4">
                          A standardized JSON schema that defines a component's
                          properties, dependencies, and implementation files.
                        </p>
                      </div>

                      <div className="bg-[#0d101e]/60 rounded-lg p-6 border border-[#a2a3f5]/20 flex flex-col">
                        <div className="flex items-center mb-4">
                          <div className="rounded-full bg-[#678aee]/20 p-2 mr-3">
                            <Terminal className="w-5 h-5 text-[#a2a3f5]" />
                          </div>
                          <h3 className="text-xl font-bold text-[#a2a3f5]">
                            CLI Tool
                          </h3>
                        </div>
                        <p className="text-[#bfc9f2] mb-4">
                          A powerful command-line interface for adding,
                          creating, and publishing components with
                          cross-framework support.
                        </p>
                      </div>

                      <div className="bg-[#0d101e]/60 rounded-lg p-6 border border-[#a2a3f5]/20 flex flex-col">
                        <div className="flex items-center mb-4">
                          <div className="rounded-full bg-[#678aee]/20 p-2 mr-3">
                            <FileCode className="w-5 h-5 text-[#a2a3f5]" />
                          </div>
                          <h3 className="text-xl font-bold text-[#a2a3f5]">
                            Open Registry
                          </h3>
                        </div>
                        <p className="text-[#bfc9f2] mb-4">
                          A central repository of components that anyone can
                          publish to and consume from, fostering community
                          collaboration.
                        </p>
                      </div>

                      <div className="bg-[#0d101e]/60 rounded-lg p-6 border border-[#a2a3f5]/20 flex flex-col">
                        <div className="flex items-center mb-4">
                          <div className="rounded-full bg-[#678aee]/20 p-2 mr-3">
                            <RefreshCw className="w-5 h-5 text-[#a2a3f5]" />
                          </div>
                          <h3 className="text-xl font-bold text-[#a2a3f5]">
                            Framework Adapters
                          </h3>
                        </div>
                        <p className="text-[#bfc9f2] mb-4">
                          Automatic translation layers that convert components
                          between different frameworks while preserving their
                          behavior.
                        </p>
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold mt-8 text-[#a2a3f5] pb-1 border-b border-[#a2a3f5]/20">
                      Component Schema
                    </h2>

                    <p className="text-base leading-relaxed">
                      At the heart of our distribution system is the component
                      schema. This JSON structure defines everything needed to
                      understand and use a component:
                    </p>

                    <Code filename="button.schema.json" language="json">
                      {schemaCode}
                    </Code>

                    <p className="text-base leading-relaxed">
                      This schema allows our tools to understand the component's
                      requirements, dependencies, and usage patterns across
                      different frameworks.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 text-[#a2a3f5] pb-1 border-b border-[#a2a3f5]/20">
                      Command-Line Interface
                    </h2>

                    <p className="text-base leading-relaxed">
                      Our CLI tool makes it simple to work with the distribution
                      system:
                    </p>

                    <Code filename="terminal" language="bash">
                      {cliCode}
                    </Code>

                    <h2 className="text-2xl font-bold mt-8 text-[#a2a3f5] pb-1 border-b border-[#a2a3f5]/20">
                      Benefits of the Distribution System
                    </h2>

                    <ul className="space-y-3 pl-6 list-disc text-base leading-relaxed">
                      <li>
                        <span className="text-[#678aee] font-medium">
                          Framework Agnostic
                        </span>{" "}
                        - Same components work in React, Vue, Svelte, and more.
                      </li>
                      <li>
                        <span className="text-[#678aee] font-medium">
                          Community Driven
                        </span>{" "}
                        - Anyone can contribute and share components with
                        others.
                      </li>
                      <li>
                        <span className="text-[#678aee] font-medium">
                          Versioned
                        </span>{" "}
                        - Track changes and updates to components over time.
                      </li>
                      <li>
                        <span className="text-[#678aee] font-medium">
                          Customizable
                        </span>{" "}
                        - Fork and modify any component to fit your specific
                        needs.
                      </li>
                    </ul>

                    <div className="bg-[#678aee]/10 rounded-lg p-6 border border-[#a2a3f5]/20 mt-8">
                      <h3 className="text-lg font-semibold text-[#a2a3f5] mb-2">
                        Create and Share Your Own Components
                      </h3>
                      <p className="text-[#bfc9f2]">
                        Ready to contribute to the ecosystem? Create your own
                        components and share them with the community. Our
                        distribution system makes it easy to publish your work
                        and get feedback from other developers.
                      </p>
                      <div className="mt-4">
                        <Button className="bg-[#678aee]/20 hover:bg-[#678aee]/30 text-[#a2a3f5] border border-[#a2a3f5]/30">
                          Read the Publishing Guide
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
