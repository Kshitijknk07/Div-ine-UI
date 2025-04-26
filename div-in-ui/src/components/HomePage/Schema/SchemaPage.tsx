import { SidebarPage } from "../Sidebar/SidebarPage";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code } from "@/components/ui/code";
import { motion } from "framer-motion";
import { FileCode, Layers, Settings, Package } from "lucide-react";

export function SchemaPage() {
  const schemaExample = `{
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

  const schemaProperties = [
    {
      name: "$schema",
      type: "string",
      required: true,
      description: "The URL of the JSON schema definition",
      example: '"https://div-ine-ui.dev/schema.json"',
    },
    {
      name: "name",
      type: "string",
      required: true,
      description: "The name of the component",
      example: '"button"',
    },
    {
      name: "version",
      type: "string",
      required: true,
      description: "The version of the component following semantic versioning",
      example: '"1.0.0"',
    },
    {
      name: "description",
      type: "string",
      required: true,
      description: "A brief description of the component's purpose",
      example: '"A button component that can be used to trigger actions"',
    },
    {
      name: "framework",
      type: "string[]",
      required: true,
      description: "List of frameworks the component supports",
      example: '["react", "vue", "svelte", "solid"]',
    },
    {
      name: "dependencies",
      type: "string[]",
      required: false,
      description: "List of required dependencies",
      example: '["@div-ine/utils"]',
    },
    {
      name: "files",
      type: "object[]",
      required: true,
      description: "List of component files with their paths",
      example: '[{"name": "button.tsx", "path": "./src/button.tsx"}]',
    },
    {
      name: "exports",
      type: "object",
      required: true,
      description: "Mapping of export names to file paths",
      example: '{"default": "./src/button.tsx", "styles": "./src/button.css"}',
    },
    {
      name: "props",
      type: "object",
      required: true,
      description: "Component props definition with types and defaults",
      example:
        '{"variant": {"type": "string", "enum": ["default", "outline"]}}',
    },
  ];

  const features = [
    {
      icon: <FileCode className="w-5 h-5" />,
      title: "Standardized Format",
      description:
        "A consistent JSON schema that defines component structure and behavior.",
      color: "from-[#00ADB5] to-[#00ADB5]/80",
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: "Framework Agnostic",
      description:
        "Components can be used across different frameworks with automatic translation.",
      color: "from-[#00ADB5] to-[#00ADB5]/80",
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Type Safety",
      description:
        "Built-in type definitions and validation for component props.",
      color: "from-[#00ADB5] to-[#00ADB5]/80",
    },
    {
      icon: <Package className="w-5 h-5" />,
      title: "Dependency Management",
      description: "Clear declaration of required dependencies and versions.",
      color: "from-[#00ADB5] to-[#00ADB5]/80",
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
                      Schema Reference
                    </Badge>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 text-center"
                  >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ADB5] to-[#00ADB5]">
                      Schema Reference
                    </span>
                  </motion.h1>
                </CardHeader>

                <CardContent className="px-6 sm:px-8 lg:px-16 py-5">
                  <div className="prose max-w-4xl mx-auto text-[#EEEEEE] space-y-8">
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      className="text-lg sm:text-xl leading-relaxed text-center"
                    >
                      The Div-ine UI schema defines the structure and behavior
                      of components in a standardized format, enabling
                      cross-framework compatibility and consistent
                      documentation.
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
                    >
                      {features.map((feature, index) => (
                        <motion.div
                          key={feature.title}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.5 + index * 0.1,
                          }}
                          className="bg-[#222831]/50 p-6 rounded-lg border border-[#00ADB5]/20 hover:border-[#00ADB5]/40 transition-colors"
                        >
                          <div className="flex items-start gap-4">
                            <div className="p-2 rounded-lg bg-gradient-to-r from-[#00ADB5]/20 to-[#00ADB5]/10">
                              {feature.icon}
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-[#EEEEEE] mb-2">
                                {feature.title}
                              </h3>
                              <p className="text-[#7b7b7b]">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.9 }}
                      className="mt-12"
                    >
                      <h2 className="text-2xl font-bold text-[#EEEEEE] mb-6">
                        Schema Properties
                      </h2>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b border-[#00ADB5]/20">
                              <th className="text-left py-2 px-4 text-[#EEEEEE]">
                                Property
                              </th>
                              <th className="text-left py-2 px-4 text-[#EEEEEE]">
                                Type
                              </th>
                              <th className="text-left py-2 px-4 text-[#EEEEEE]">
                                Required
                              </th>
                              <th className="text-left py-2 px-4 text-[#EEEEEE]">
                                Description
                              </th>
                              <th className="text-left py-2 px-4 text-[#EEEEEE]">
                                Example
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {schemaProperties.map((prop) => (
                              <tr
                                key={prop.name}
                                className="border-b border-[#00ADB5]/10 last:border-0"
                              >
                                <td className="py-2 px-4 text-[#00ADB5] font-mono">
                                  {prop.name}
                                </td>
                                <td className="py-2 px-4 text-[#7b7b7b] font-mono">
                                  {prop.type}
                                </td>
                                <td className="py-2 px-4 text-[#7b7b7b]">
                                  {prop.required ? "Yes" : "No"}
                                </td>
                                <td className="py-2 px-4 text-[#7b7b7b]">
                                  {prop.description}
                                </td>
                                <td className="py-2 px-4 text-[#7b7b7b] font-mono">
                                  {prop.example}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 1 }}
                      className="mt-12"
                    >
                      <h2 className="text-2xl font-bold text-[#EEEEEE] mb-6">
                        Example Schema
                      </h2>
                      <div className="bg-[#222831]/50 rounded-lg border border-[#00ADB5]/20 p-6">
                        <Code filename="button.schema.json" language="json">
                          {schemaExample}
                        </Code>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 1.1 }}
                      className="mt-12"
                    >
                      <h2 className="text-2xl font-bold text-[#EEEEEE] mb-6">
                        Using the Schema
                      </h2>
                      <div className="space-y-6">
                        <div className="bg-[#222831]/50 rounded-lg border border-[#00ADB5]/20 p-6">
                          <h3 className="text-lg font-semibold text-[#00ADB5] mb-4">
                            Validation
                          </h3>
                          <p className="text-[#7b7b7b] mb-4">
                            Validate your component schemas using the official
                            schema validator:
                          </p>
                          <Code language="bash">
                            {`# Install the validator
npm install @div-ine/schema-validator

# Validate a schema
npx div-ine validate button.schema.json`}
                          </Code>
                        </div>

                        <div className="bg-[#222831]/50 rounded-lg border border-[#00ADB5]/20 p-6">
                          <h3 className="text-lg font-semibold text-[#00ADB5] mb-4">
                            Generation
                          </h3>
                          <p className="text-[#7b7b7b] mb-4">
                            Generate component schemas from existing components:
                          </p>
                          <Code language="bash">
                            {`# Generate schema from component
npx div-ine generate-schema ./src/components/button.tsx`}
                          </Code>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 1.2 }}
                      className="mt-12"
                    >
                      <h2 className="text-2xl font-bold text-[#EEEEEE] mb-6">
                        Best Practices
                      </h2>
                      <div className="space-y-6">
                        <div className="bg-[#222831]/50 rounded-lg border border-[#00ADB5]/20 p-6">
                          <h3 className="text-lg font-semibold text-[#00ADB5] mb-4">
                            Versioning
                          </h3>
                          <p className="text-[#7b7b7b]">
                            Follow semantic versioning for your components.
                            Update the version number when making changes that
                            affect compatibility.
                          </p>
                        </div>

                        <div className="bg-[#222831]/50 rounded-lg border border-[#00ADB5]/20 p-6">
                          <h3 className="text-lg font-semibold text-[#00ADB5] mb-4">
                            Documentation
                          </h3>
                          <p className="text-[#7b7b7b]">
                            Provide clear descriptions for all properties and
                            include examples where possible. This helps other
                            developers understand how to use your components.
                          </p>
                        </div>

                        <div className="bg-[#222831]/50 rounded-lg border border-[#00ADB5]/20 p-6">
                          <h3 className="text-lg font-semibold text-[#00ADB5] mb-4">
                            Dependencies
                          </h3>
                          <p className="text-[#7b7b7b]">
                            List all required dependencies and their versions.
                            This ensures that components can be properly
                            installed and used.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </section>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
