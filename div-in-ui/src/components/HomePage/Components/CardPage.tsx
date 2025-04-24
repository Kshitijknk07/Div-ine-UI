import { SidebarPage } from "../Sidebar/SidebarPage";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code } from "@/components/ui/code";
import { motion } from "framer-motion";
import { Heart, Share2, MessageCircle, ArrowRight } from "lucide-react";

export function CardPage() {
  const cardCode = `import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardContent, CardFooter };`;

  const cardUsageCode = `import { Card, CardHeader, CardContent, CardFooter } from "./card";

export function CardDemo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Basic Card */}
      <Card className="bg-[#222831]/80 backdrop-blur-sm border-[#00ADB5]/20">
        <CardHeader>
          <h3 className="text-xl font-semibold text-[#00ADB5]">Basic Card</h3>
        </CardHeader>
        <CardContent>
          <p className="text-[#7b7b7b]">
            A simple card component with header and content sections.
          </p>
        </CardContent>
      </Card>

      {/* Card with Footer */}
      <Card className="bg-[#222831]/80 backdrop-blur-sm border-[#00ADB5]/20">
        <CardHeader>
          <h3 className="text-xl font-semibold text-[#00ADB5]">Card with Footer</h3>
        </CardHeader>
        <CardContent>
          <p className="text-[#7b7b7b]">
            This card includes a footer section with action buttons.
          </p>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <button className="px-4 py-2 text-sm text-[#00ADB5] hover:text-[#00ADB5]/80">
            Cancel
          </button>
          <button className="px-4 py-2 text-sm bg-[#00ADB5] text-white rounded-md hover:bg-[#00ADB5]/90">
            Submit
          </button>
        </CardFooter>
      </Card>

      {/* Interactive Card */}
      <Card className="bg-[#222831]/80 backdrop-blur-sm border-[#00ADB5]/20 hover:border-[#00ADB5]/40 transition-colors">
        <CardHeader>
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-[#00ADB5]">Interactive Card</h3>
            <button className="text-[#00ADB5] hover:text-[#00ADB5]/80">
              <Share2 className="h-5 w-5" />
            </button>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-[#7b7b7b]">
            This card demonstrates interactive elements and hover effects.
          </p>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="text-[#00ADB5] hover:text-[#00ADB5]/80">
              <Heart className="h-5 w-5" />
            </button>
            <button className="text-[#00ADB5] hover:text-[#00ADB5]/80">
              <MessageCircle className="h-5 w-5" />
            </button>
          </div>
          <button className="text-[#00ADB5] hover:text-[#00ADB5]/80">
            <ArrowRight className="h-5 w-5" />
          </button>
        </CardFooter>
      </Card>
    </div>
  );
}`;

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
                      Card Components
                    </Badge>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 text-center"
                  >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ADB5] to-[#00ADB5]">
                      Card
                    </span>
                    Components
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
                      Create beautiful, responsive cards with our flexible card
                      components. Perfect for displaying content in a clean and
                      organized way.
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
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"
                    >
                      {/* Basic Card */}
                      <Card className="bg-[#222831]/80 backdrop-blur-sm border-[#00ADB5]/20">
                        <CardHeader>
                          <h3 className="text-xl font-semibold text-[#00ADB5]">
                            Basic Card
                          </h3>
                        </CardHeader>
                        <CardContent>
                          <p className="text-[#7b7b7b]">
                            A simple card component with header and content
                            sections.
                          </p>
                        </CardContent>
                      </Card>

                      {/* Card with Footer */}
                      <Card className="bg-[#222831]/80 backdrop-blur-sm border-[#00ADB5]/20">
                        <CardHeader>
                          <h3 className="text-xl font-semibold text-[#00ADB5]">
                            Card with Footer
                          </h3>
                        </CardHeader>
                        <CardContent>
                          <p className="text-[#7b7b7b]">
                            This card includes a footer section with action
                            buttons.
                          </p>
                        </CardContent>
                        <CardFooter className="flex justify-end gap-2">
                          <button className="px-4 py-2 text-sm text-[#00ADB5] hover:text-[#00ADB5]/80">
                            Cancel
                          </button>
                          <button className="px-4 py-2 text-sm bg-[#00ADB5] text-white rounded-md hover:bg-[#00ADB5]/90">
                            Submit
                          </button>
                        </CardFooter>
                      </Card>

                      {/* Interactive Card */}
                      <Card className="bg-[#222831]/80 backdrop-blur-sm border-[#00ADB5]/20 hover:border-[#00ADB5]/40 transition-colors">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <h3 className="text-xl font-semibold text-[#00ADB5]">
                              Interactive Card
                            </h3>
                            <button className="text-[#00ADB5] hover:text-[#00ADB5]/80">
                              <Share2 className="h-5 w-5" />
                            </button>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-[#7b7b7b]">
                            This card demonstrates interactive elements and
                            hover effects.
                          </p>
                        </CardContent>
                        <CardFooter className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <button className="text-[#00ADB5] hover:text-[#00ADB5]/80">
                              <Heart className="h-5 w-5" />
                            </button>
                            <button className="text-[#00ADB5] hover:text-[#00ADB5]/80">
                              <MessageCircle className="h-5 w-5" />
                            </button>
                          </div>
                          <button className="text-[#00ADB5] hover:text-[#00ADB5]/80">
                            <ArrowRight className="h-5 w-5" />
                          </button>
                        </CardFooter>
                      </Card>
                    </motion.div>

                    <Tabs defaultValue="code" className="w-full mt-8">
                      <TabsList className="grid w-full grid-cols-2 bg-[#222831] rounded-lg mb-2">
                        <TabsTrigger
                          value="code"
                          className="data-[state=active]:bg-[#00ADB5]/20 data-[state=active]:text-[#00ADB5] rounded-md"
                        >
                          Component Code
                        </TabsTrigger>
                        <TabsTrigger
                          value="usage"
                          className="data-[state=active]:bg-[#00ADB5]/20 data-[state=active]:text-[#00ADB5] rounded-md"
                        >
                          Usage Examples
                        </TabsTrigger>
                      </TabsList>
                      <TabsContent value="code" className="mt-4">
                        <Code
                          filename="components/ui/card.tsx"
                          language="typescript"
                        >
                          {cardCode}
                        </Code>
                      </TabsContent>
                      <TabsContent value="usage" className="mt-4">
                        <Code
                          filename="examples/card-demo.tsx"
                          language="typescript"
                        >
                          {cardUsageCode}
                        </Code>
                      </TabsContent>
                    </Tabs>
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

export default CardPage;
