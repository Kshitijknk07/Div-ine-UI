import { SidebarPage } from "../Sidebar/SidebarPage";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code } from "@/components/ui/code";
import { ExternalLink } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  User,
  Heart,
  MoreVertical,
  CheckCircle,
  MessageCircle,
  Share2,
  TrendingUp,
  Calendar,
  Users,
  Activity,
} from "lucide-react";

export function CardPage() {
  const cardCode = `import * as React from "react";
import { cn } from "@/lib/utils";

function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "bg-background/40 backdrop-blur-sm rounded-lg border shadow-md",
        className
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("p-6 pt-0", className)} {...props} />
  );
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent }`;

  const usageCode = `import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

function CardExample() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
    </Card>
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
                    Components
                  </Badge>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 text-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#678aee] to-[#a2a3f5]">
                      Card
                    </span>
                  </h1>
                  <p className="text-center text-[#bfc9f2] text-lg max-w-2xl mx-auto mt-2">
                    Explore a suite of innovative, production-ready Card
                    components designed for modern UIs. Each card is accessible,
                    responsive, and highly customizable.
                  </p>
                </CardHeader>

                <CardContent className="px-6 sm:px-8 lg:px-16 py-5">
                  <div className="prose max-w-4xl mx-auto text-[#bfc9f2] space-y-6">
                    <p className="text-lg sm:text-xl leading-relaxed text-center">
                      The{" "}
                      <span className="text-[#a2a3f5] font-medium">Card</span>{" "}
                      component is a flexible container for displaying content
                      with a clean, modern look.
                    </p>

                    <div className="border-t border-[#a2a3f5]/10 pt-4 mt-6"></div>

                    <h2 className="text-2xl font-bold mt-8 text-[#a2a3f5] pb-1 border-b border-[#a2a3f5]/20">
                      Examples
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-6">
                      {/* Basic Card */}
                      <Card className="bg-gradient-to-br from-[#23244a]/80 to-[#070814]/60 border-[#a2a3f5]/30 shadow-xl hover:shadow-2xl transition-shadow duration-300 group relative overflow-hidden">
                        <div
                          className="absolute inset-0 pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                          style={{
                            background:
                              "radial-gradient(circle at 80% 20%, #678aee33 0%, transparent 70%)",
                          }}
                        />
                        <CardHeader>
                          <h3 className="text-xl font-bold text-[#a2a3f5] flex items-center gap-2">
                            <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-[#678aee] to-[#a2a3f5] animate-pulse" />
                            Basic Card
                          </h3>
                        </CardHeader>
                        <CardContent>
                          <p className="text-[#bfc9f2]">
                            This is a simple card with a header and content.
                          </p>
                        </CardContent>
                      </Card>
                      {/* Card with Image */}
                      <Card className="bg-gradient-to-br from-[#23244a]/80 to-[#070814]/60 border-[#a2a3f5]/30 shadow-xl hover:shadow-2xl transition-shadow duration-300 group relative overflow-hidden">
                        <div
                          className="absolute inset-0 pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                          style={{
                            background:
                              "radial-gradient(circle at 30% 80%, #a2a3f533 0%, transparent 70%)",
                          }}
                        />
                        <CardHeader>
                          <h3 className="text-xl font-bold text-[#a2a3f5] flex items-center gap-2">
                            <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-[#a2a3f5] to-[#678aee] animate-pulse" />
                            Card with Image
                          </h3>
                        </CardHeader>
                        <CardContent>
                          <div className="aspect-video bg-[#121226] rounded-lg mb-4 shadow-inner group-hover:scale-[1.03] transition-transform duration-300" />
                          <p className="text-[#bfc9f2]">
                            Cards can contain images and other media.
                          </p>
                        </CardContent>
                      </Card>
                      {/* Profile Card */}
                      <Card className="bg-gradient-to-br from-[#23244a]/80 to-[#070814]/60 border-[#a2a3f5]/30 shadow-xl hover:shadow-2xl transition-shadow duration-300 group relative overflow-hidden">
                        <CardHeader className="flex flex-row items-center gap-4 p-6 pb-2">
                          <Avatar className="h-14 w-14 border-2 border-[#a2a3f5]/30">
                            <AvatarImage
                              src="https://randomuser.me/api/portraits/men/32.jpg"
                              alt="User"
                            />
                            <AvatarFallback>JD</AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="text-lg font-bold text-[#a2a3f5] flex items-center gap-2">
                              John Doe{" "}
                              <CheckCircle className="w-4 h-4 text-[#678aee]" />
                            </h3>
                            <p className="text-[#bfc9f2] text-sm">
                              UI Engineer
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            className="ml-auto"
                            icon={<MoreVertical className="w-4 h-4" />}
                          />
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-[#bfc9f2] mb-2">
                            Passionate about building beautiful interfaces and
                            delightful user experiences.
                          </p>
                          <div className="flex gap-2 mt-2">
                            <Button
                              size="sm"
                              variant="outline"
                              icon={<MessageCircle className="w-4 h-4" />}
                            >
                              Message
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              icon={<Share2 className="w-4 h-4" />}
                            >
                              Share
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                      {/* Stats Card */}
                      <Card className="bg-gradient-to-br from-[#23244a]/80 to-[#070814]/60 border-[#a2a3f5]/30 shadow-xl hover:shadow-2xl transition-shadow duration-300 group relative overflow-hidden">
                        <CardHeader className="flex flex-row items-center gap-4 p-6 pb-2">
                          <div className="bg-[#678aee]/20 p-3 rounded-lg">
                            <TrendingUp className="w-6 h-6 text-[#678aee]" />
                          </div>
                          <div>
                            <p className="text-[#bfc9f2] text-sm">Growth</p>
                            <h3 className="text-2xl font-bold text-[#a2a3f5]">
                              +24.5%
                            </h3>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <Progress
                            value={80}
                            className="h-2 bg-[#23244a]/40"
                          />
                          <p className="text-[#bfc9f2] text-xs mt-2">
                            Compared to last month
                          </p>
                        </CardContent>
                      </Card>
                      {/* Card with Actions */}
                      <Card className="bg-gradient-to-br from-[#23244a]/80 to-[#070814]/60 border-[#a2a3f5]/30 shadow-xl hover:shadow-2xl transition-shadow duration-300 group relative overflow-hidden">
                        <CardHeader className="flex flex-row items-center gap-4 p-6 pb-2">
                          <div className="bg-[#a2a3f5]/20 p-3 rounded-lg">
                            <Calendar className="w-6 h-6 text-[#a2a3f5]" />
                          </div>
                          <div>
                            <p className="text-[#bfc9f2] text-sm">
                              Upcoming Event
                            </p>
                            <h3 className="text-lg font-bold text-[#a2a3f5]">
                              Design Review
                            </h3>
                          </div>
                          <Button
                            variant="ghost"
                            className="ml-auto"
                            icon={<MoreVertical className="w-4 h-4" />}
                          />
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="flex gap-2 mt-2">
                            <Button
                              size="sm"
                              variant="outline"
                              icon={<User className="w-4 h-4" />}
                            >
                              Join
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              icon={<Heart className="w-4 h-4" />}
                            >
                              Like
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                      {/* Team Card */}
                      <Card className="bg-gradient-to-br from-[#23244a]/80 to-[#070814]/60 border-[#a2a3f5]/30 shadow-xl hover:shadow-2xl transition-shadow duration-300 group relative overflow-hidden">
                        <CardHeader className="flex flex-row items-center gap-4 p-6 pb-2">
                          <div className="bg-[#678aee]/20 p-3 rounded-lg">
                            <Users className="w-6 h-6 text-[#678aee]" />
                          </div>
                          <div>
                            <p className="text-[#bfc9f2] text-sm">Team</p>
                            <h3 className="text-lg font-bold text-[#a2a3f5]">
                              Div-ine UI
                            </h3>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="flex -space-x-3">
                            <Avatar className="h-8 w-8 border-2 border-[#a2a3f5]/30">
                              <AvatarImage src="https://randomuser.me/api/portraits/men/33.jpg" />
                              <AvatarFallback>AB</AvatarFallback>
                            </Avatar>
                            <Avatar className="h-8 w-8 border-2 border-[#a2a3f5]/30">
                              <AvatarImage src="https://randomuser.me/api/portraits/women/44.jpg" />
                              <AvatarFallback>CD</AvatarFallback>
                            </Avatar>
                            <Avatar className="h-8 w-8 border-2 border-[#a2a3f5]/30">
                              <AvatarImage src="https://randomuser.me/api/portraits/men/45.jpg" />
                              <AvatarFallback>EF</AvatarFallback>
                            </Avatar>
                            <span className="ml-4 text-[#bfc9f2] text-xs">
                              +5 more
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                      {/* Activity Card */}
                      <Card className="bg-gradient-to-br from-[#23244a]/80 to-[#070814]/60 border-[#a2a3f5]/30 shadow-xl hover:shadow-2xl transition-shadow duration-300 group relative overflow-hidden">
                        <CardHeader className="flex flex-row items-center gap-4 p-6 pb-2">
                          <div className="bg-[#a2a3f5]/20 p-3 rounded-lg">
                            <Activity className="w-6 h-6 text-[#a2a3f5]" />
                          </div>
                          <div>
                            <p className="text-[#bfc9f2] text-sm">Activity</p>
                            <h3 className="text-lg font-bold text-[#a2a3f5]">
                              New Signups
                            </h3>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-[#bfc9f2]">
                            32 new users joined today.
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    <Tabs defaultValue="code" className="w-full mt-8">
                      <TabsList className="grid w-full grid-cols-2 bg-[#0d101e]/70 rounded-lg mb-2">
                        <TabsTrigger
                          value="code"
                          className="data-[state=active]:bg-[#678aee]/20 data-[state=active]:text-[#a2a3f5] rounded-md"
                        >
                          Component Code
                        </TabsTrigger>
                        <TabsTrigger
                          value="usage"
                          className="data-[state=active]:bg-[#678aee]/20 data-[state=active]:text-[#a2a3f5] rounded-md"
                        >
                          Usage Example
                        </TabsTrigger>
                      </TabsList>

                      <TabsContent value="code" className="mt-2">
                        <Code filename="card.tsx" language="tsx">
                          {cardCode}
                        </Code>
                      </TabsContent>

                      <TabsContent value="usage" className="mt-2">
                        <Code filename="example.tsx" language="tsx">
                          {usageCode}
                        </Code>
                      </TabsContent>
                    </Tabs>

                    <div className="bg-[#678aee]/10 rounded-lg p-6 border border-[#a2a3f5]/20 mt-12">
                      <h3 className="text-lg font-semibold text-[#a2a3f5] mb-2">
                        Accessibility & Best Practices
                      </h3>
                      <ul className="space-y-2 ml-6 list-disc text-[#bfc9f2]">
                        <li>
                          Use semantic HTML (header, section, etc) for
                          structure.
                        </li>
                        <li>
                          Ensure sufficient color contrast for text and
                          backgrounds.
                        </li>
                        <li>
                          Provide clear focus states for all interactive
                          elements.
                        </li>
                        <li>Support keyboard navigation and screen readers.</li>
                        <li>Keep content concise and meaningful.</li>
                      </ul>
                      <div className="mt-4">
                        <Button
                          variant="outline"
                          className="text-sm"
                          icon={<ExternalLink className="h-4 w-4" />}
                        >
                          ARIA Card Guidelines
                        </Button>
                      </div>
                    </div>

                    <div className="flex justify-center mt-10">
                      <Button
                        className="bg-gradient-to-r from-[#678aee] to-[#a2a3f5] hover:from-[#a2a3f5] hover:to-[#678aee] text-white rounded-full px-6 py-2 font-medium text-base"
                        asChild
                      >
                        <a href="/components">Back to Components</a>
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

export default CardPage;
