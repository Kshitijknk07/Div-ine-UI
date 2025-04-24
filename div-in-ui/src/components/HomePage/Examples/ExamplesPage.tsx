import { SidebarPage } from "../Sidebar/SidebarPage";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import { Code } from "@/components/ui/code";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  ShoppingCart,
  MessageSquare,
  CheckCircle,
} from "lucide-react";

export function ExamplesPage() {
  const dashboardExample = `import { Card, CardHeader, CardContent } from "@div-ine/ui/card";
import { Badge } from "@div-ine/ui/badge";
import { Button } from "@div-ine/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@div-ine/ui/tabs";

export function DashboardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <Badge variant="success">Active</Badge>
          <h3>Dashboard Overview</h3>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <p>Dashboard content here</p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}`;

  const ecommerceExample = `import { Card, CardHeader, CardContent } from "@div-ine/ui/card";
import { Badge } from "@div-ine/ui/badge";
import { Button } from "@div-ine/ui/button";
import { Input } from "@div-ine/ui/input";

export function EcommerceExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <Badge variant="secondary">New</Badge>
          <h3>Product Card</h3>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input placeholder="Search products..." />
            <Button>Add to Cart</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}`;

  const chatExample = `import { Card, CardHeader, CardContent } from "@div-ine/ui/card";
import { Badge } from "@div-ine/ui/badge";
import { Button } from "@div-ine/ui/button";
import { Input } from "@div-ine/ui/input";

export function ChatExample() {
  return (
    <div className="flex flex-col h-[500px]">
      <Card className="flex-1">
        <CardHeader>
          <Badge variant="info">Online</Badge>
          <h3>Chat Window</h3>
        </CardHeader>
        <CardContent className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto">
            {/* Chat messages here */}
          </div>
          <div className="mt-4">
            <Input placeholder="Type a message..." />
            <Button className="mt-2">Send</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}`;

  const examples = [
    {
      icon: <LayoutDashboard className="w-5 h-5" />,
      title: "Dashboard",
      description: "A modern dashboard layout with cards, badges, and tabs.",
      code: dashboardExample,
      preview: (
        <div className="bg-[#222831]/50 p-4 rounded-lg">
          <Badge variant="success" className="mb-2">
            Active
          </Badge>
          <h3 className="text-lg font-semibold text-[#EEEEEE] mb-4">
            Dashboard Overview
          </h3>
          <div className="space-y-4">
            <div className="h-2 bg-[#00ADB5]/20 rounded"></div>
            <div className="h-2 bg-[#00ADB5]/20 rounded w-3/4"></div>
          </div>
        </div>
      ),
    },
    {
      icon: <ShoppingCart className="w-5 h-5" />,
      title: "E-commerce",
      description: "Product cards and shopping interface components.",
      code: ecommerceExample,
      preview: (
        <div className="bg-[#222831]/50 p-4 rounded-lg">
          <Badge variant="secondary" className="mb-2">
            New
          </Badge>
          <h3 className="text-lg font-semibold text-[#EEEEEE] mb-4">
            Product Card
          </h3>
          <div className="space-y-4">
            <div className="h-8 bg-[#00ADB5]/20 rounded"></div>
            <div className="h-10 bg-[#00ADB5]/20 rounded"></div>
          </div>
        </div>
      ),
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "Chat Interface",
      description: "Real-time chat interface with message history.",
      code: chatExample,
      preview: (
        <div className="bg-[#222831]/50 p-4 rounded-lg">
          <Badge variant="info" className="mb-2">
            Online
          </Badge>
          <h3 className="text-lg font-semibold text-[#EEEEEE] mb-4">
            Chat Window
          </h3>
          <div className="space-y-4">
            <div className="h-32 bg-[#00ADB5]/20 rounded"></div>
            <div className="h-8 bg-[#00ADB5]/20 rounded"></div>
          </div>
        </div>
      ),
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
              <div className="bg-[#222831]/80 backdrop-blur-sm border-0 shadow-xl overflow-hidden w-full rounded-none min-h-screen">
                <div className="pb-0 pt-6 px-6 lg:px-16">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Badge className="w-fit mx-auto mb-3 px-4 py-1.5 text-sm font-medium bg-[#00ADB5]/20 text-[#00ADB5] border-[#00ADB5]/50 hover:bg-[#00ADB5]/30">
                      Examples
                    </Badge>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 text-center"
                  >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ADB5] to-[#00ADB5]">
                      Examples
                    </span>
                  </motion.h1>
                </div>

                <div className="px-6 sm:px-8 lg:px-16 py-5">
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
                      Explore real-world examples of Div-ine UI components in
                      action. See how they can be combined to create beautiful
                      and functional interfaces.
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                      className="border-t border-[#00ADB5]/30 pt-4 mt-6"
                    ></motion.div>

                    <div className="space-y-8">
                      {examples.map((example, index) => (
                        <motion.div
                          key={example.title}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.5 + index * 0.1,
                          }}
                          className="bg-[#222831]/50 p-6 rounded-lg border border-[#00ADB5]/20 hover:border-[#00ADB5]/40 transition-colors"
                        >
                          <div className="flex items-start gap-4 mb-6">
                            <div className="p-2 rounded-lg bg-gradient-to-r from-[#00ADB5]/20 to-[#00ADB5]/10">
                              {example.icon}
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-[#EEEEEE] mb-2">
                                {example.title}
                              </h3>
                              <p className="text-[#7b7b7b]">
                                {example.description}
                              </p>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                              <h4 className="text-sm font-medium text-[#EEEEEE]">
                                Preview
                              </h4>
                              {example.preview}
                            </div>
                            <div className="space-y-4">
                              <h4 className="text-sm font-medium text-[#EEEEEE]">
                                Code
                              </h4>
                              <Code
                                filename={`${example.title
                                  .toLowerCase()
                                  .replace(/\s+/g, "-")}.tsx`}
                                language="typescript"
                              >
                                {example.code}
                              </Code>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.7 }}
                      className="mt-8 space-y-6"
                    >
                      <h2 className="text-2xl font-bold text-[#EEEEEE]">
                        Best Practices
                      </h2>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#00ADB5] mr-2 mt-1" />
                          <div>
                            <h3 className="text-lg font-semibold text-[#EEEEEE]">
                              Component Composition
                            </h3>
                            <p className="text-[#7b7b7b]">
                              Combine components to create complex interfaces
                              while maintaining consistency.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#00ADB5] mr-2 mt-1" />
                          <div>
                            <h3 className="text-lg font-semibold text-[#EEEEEE]">
                              Responsive Design
                            </h3>
                            <p className="text-[#7b7b7b]">
                              Ensure your interfaces work well across all device
                              sizes.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#00ADB5] mr-2 mt-1" />
                          <div>
                            <h3 className="text-lg font-semibold text-[#EEEEEE]">
                              Accessibility
                            </h3>
                            <p className="text-[#7b7b7b]">
                              Follow accessibility best practices to make your
                              applications usable by everyone.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </section>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

export default ExamplesPage;
