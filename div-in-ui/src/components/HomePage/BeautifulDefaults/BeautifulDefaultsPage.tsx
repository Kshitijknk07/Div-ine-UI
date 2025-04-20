import { SidebarPage } from "../Sidebar/SidebarPage";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ExternalLink,
  Paintbrush,
  Palette,
  Sparkles,
  Wand2,
} from "lucide-react";

export function BeautifulDefaultsPage() {
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
                    Beautiful Defaults
                  </Badge>

                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 text-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#678aee] to-[#a2a3f5]">
                      Beautiful
                    </span>{" "}
                    Defaults
                  </h1>
                </CardHeader>

                <CardContent className="px-6 sm:px-8 lg:px-16 py-5">
                  <div className="prose max-w-4xl mx-auto text-[#bfc9f2] space-y-6">
                    <p className="text-lg sm:text-xl leading-relaxed text-center">
                      <span className="text-[#a2a3f5] font-medium">
                        Beautiful Defaults
                      </span>{" "}
                      means components that look and feel polished right out of
                      the box, while still being fully customizable to match
                      your brand.
                    </p>

                    <div className="border-t border-[#a2a3f5]/10 pt-4 mt-6"></div>

                    <h2 className="text-2xl font-bold mt-8 text-[#a2a3f5] pb-1 border-b border-[#a2a3f5]/20">
                      Why Beautiful Defaults Matter
                    </h2>

                    <p className="text-base leading-relaxed">
                      Most component libraries either focus on functionality at
                      the expense of design, or they're so opinionated that
                      they're difficult to customize. Div-ine UI takes a
                      different approach: components that are visually refined
                      from the start, but built to be adapted to your needs.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <div className="bg-[#0d101e]/60 rounded-lg p-6 border border-[#a2a3f5]/20 flex flex-col">
                        <div className="flex items-center mb-4">
                          <div className="rounded-full bg-[#678aee]/20 p-2 mr-3">
                            <Paintbrush className="w-5 h-5 text-[#a2a3f5]" />
                          </div>
                          <h3 className="text-xl font-bold text-[#a2a3f5]">
                            Design Language
                          </h3>
                        </div>
                        <p className="text-[#bfc9f2] mb-4">
                          A cohesive visual system with consistent spacing,
                          typography, and interactive states that creates
                          harmony across all components.
                        </p>
                      </div>

                      <div className="bg-[#0d101e]/60 rounded-lg p-6 border border-[#a2a3f5]/20 flex flex-col">
                        <div className="flex items-center mb-4">
                          <div className="rounded-full bg-[#678aee]/20 p-2 mr-3">
                            <Palette className="w-5 h-5 text-[#a2a3f5]" />
                          </div>
                          <h3 className="text-xl font-bold text-[#a2a3f5]">
                            Color Theory
                          </h3>
                        </div>
                        <p className="text-[#bfc9f2] mb-4">
                          Carefully selected color palettes that work well
                          together and provide appropriate contrast for
                          accessibility.
                        </p>
                      </div>

                      <div className="bg-[#0d101e]/60 rounded-lg p-6 border border-[#a2a3f5]/20 flex flex-col">
                        <div className="flex items-center mb-4">
                          <div className="rounded-full bg-[#678aee]/20 p-2 mr-3">
                            <Sparkles className="w-5 h-5 text-[#a2a3f5]" />
                          </div>
                          <h3 className="text-xl font-bold text-[#a2a3f5]">
                            Subtle Animation
                          </h3>
                        </div>
                        <p className="text-[#bfc9f2] mb-4">
                          Thoughtful motion design that enhances usability and
                          adds delight without being distracting or
                          overwhelming.
                        </p>
                      </div>

                      <div className="bg-[#0d101e]/60 rounded-lg p-6 border border-[#a2a3f5]/20 flex flex-col">
                        <div className="flex items-center mb-4">
                          <div className="rounded-full bg-[#678aee]/20 p-2 mr-3">
                            <Wand2 className="w-5 h-5 text-[#a2a3f5]" />
                          </div>
                          <h3 className="text-xl font-bold text-[#a2a3f5]">
                            Refined Details
                          </h3>
                        </div>
                        <p className="text-[#bfc9f2] mb-4">
                          Precise shadows, borders, and states that create depth
                          and hierarchy while maintaining a clean aesthetic.
                        </p>
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold mt-12 text-[#a2a3f5] pb-1 border-b border-[#a2a3f5]/20">
                      Our Design Principles
                    </h2>

                    <div className="space-y-8 mt-6">
                      <DesignPrinciple
                        number="01"
                        title="Aesthetics + Function"
                        description="Beauty shouldn't come at the expense of usability. Every component is designed to be both visually appealing and highly functional."
                      />

                      <DesignPrinciple
                        number="02"
                        title="Consistency By Default"
                        description="Components share visual characteristics and interaction patterns, creating a unified experience that users can learn once and apply everywhere."
                      />

                      <DesignPrinciple
                        number="03"
                        title="Accessible First"
                        description="Beautiful defaults include appropriate contrast ratios, focus indicators, and semantic structure to ensure accessibility is built-in."
                      />

                      <DesignPrinciple
                        number="04"
                        title="Adaptive Foundations"
                        description="Our defaults look great but are designed to be easily customized through design tokens and CSS variables that cascade through the entire system."
                      />
                    </div>

                    <h2 className="text-2xl font-bold mt-12 text-[#a2a3f5] pb-1 border-b border-[#a2a3f5]/20">
                      Custom Components Showcase
                    </h2>

                    <p className="text-base leading-relaxed">
                      Here are some examples of our Beautiful Defaults in
                      action:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <div className="bg-gradient-to-br from-[#0d101e]/90 to-[#141b36]/90 rounded-lg p-6 border border-[#a2a3f5]/20 group hover:border-[#678aee]/50 transition-all">
                        <h3 className="text-xl font-bold text-[#a2a3f5] mb-3">
                          Gradient Cards
                        </h3>

                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-gradient-to-br from-[#678aee]/20 to-[#a2a3f5]/20 rounded-lg p-4 border border-[#678aee]/20 hover:shadow-lg hover:shadow-[#678aee]/5 transition-all cursor-pointer group-hover:from-[#678aee]/30 group-hover:to-[#a2a3f5]/30">
                            <div className="h-16 flex items-center justify-center text-[#678aee]">
                              <Sparkles className="w-6 h-6" />
                            </div>
                          </div>
                          <div className="bg-gradient-to-br from-[#ffc2e1]/20 to-[#a2a3f5]/10 rounded-lg p-4 border border-[#ffc2e1]/20 hover:shadow-lg hover:shadow-[#ffc2e1]/5 transition-all cursor-pointer group-hover:from-[#ffc2e1]/30 group-hover:to-[#a2a3f5]/20">
                            <div className="h-16 flex items-center justify-center text-[#ffc2e1]">
                              <Wand2 className="w-6 h-6" />
                            </div>
                          </div>
                        </div>

                        <p className="text-[#bfc9f2] mt-4 text-sm">
                          Subtle gradients add depth and visual interest without
                          overwhelming the content.
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-[#0d101e]/90 to-[#141b36]/90 rounded-lg p-6 border border-[#a2a3f5]/20 group hover:border-[#678aee]/50 transition-all">
                        <h3 className="text-xl font-bold text-[#a2a3f5] mb-3">
                          Button Variations
                        </h3>

                        <div className="flex flex-wrap gap-3">
                          <button className="px-4 py-2 bg-gradient-to-r from-[#678aee] to-[#a2a3f5] rounded-md text-white hover:opacity-90 transition-all">
                            Primary
                          </button>
                          <button className="px-4 py-2 bg-transparent border border-[#678aee] text-[#678aee] rounded-md hover:bg-[#678aee]/10 transition-all">
                            Secondary
                          </button>
                          <button className="px-4 py-2 bg-[#0d101e] border border-[#0d101e] text-[#bfc9f2] rounded-md hover:bg-[#161b2e] transition-all">
                            Tertiary
                          </button>
                        </div>

                        <p className="text-[#bfc9f2] mt-4 text-sm">
                          Our button system offers consistent styling with
                          multiple variants for different contexts.
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-[#0d101e]/90 to-[#141b36]/90 rounded-lg p-6 border border-[#a2a3f5]/20 group hover:border-[#678aee]/50 transition-all">
                        <h3 className="text-xl font-bold text-[#a2a3f5] mb-3">
                          Custom Inputs
                        </h3>

                        <div className="space-y-3">
                          <div className="relative">
                            <input
                              type="text"
                              placeholder="Search..."
                              className="w-full bg-[#070814]/50 border border-[#a2a3f5]/30 rounded-md py-2 px-4 text-[#bfc9f2] placeholder-[#bfc9f2]/50 focus:outline-none focus:border-[#678aee] transition-colors"
                            />
                          </div>

                          <div className="relative">
                            <div className="bg-[#070814]/50 border border-[#a2a3f5]/30 rounded-md py-2 px-4 text-[#bfc9f2] flex items-center justify-between cursor-pointer hover:border-[#678aee]/50 transition-colors">
                              <span>Select an option</span>
                              <ArrowRight className="w-4 h-4 rotate-90" />
                            </div>
                          </div>
                        </div>

                        <p className="text-[#bfc9f2] mt-4 text-sm">
                          Form inputs with thoughtful states and consistent
                          styling for a better user experience.
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-[#0d101e]/90 to-[#141b36]/90 rounded-lg p-6 border border-[#a2a3f5]/20 group hover:border-[#678aee]/50 transition-all">
                        <h3 className="text-xl font-bold text-[#a2a3f5] mb-3">
                          Badge System
                        </h3>

                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-[#678aee]/10 text-[#678aee] rounded-full text-xs font-medium border border-[#678aee]/20">
                            New
                          </span>
                          <span className="px-3 py-1 bg-[#48bb78]/10 text-[#48bb78] rounded-full text-xs font-medium border border-[#48bb78]/20">
                            Success
                          </span>
                          <span className="px-3 py-1 bg-[#ed8936]/10 text-[#ed8936] rounded-full text-xs font-medium border border-[#ed8936]/20">
                            Warning
                          </span>
                          <span className="px-3 py-1 bg-[#f56565]/10 text-[#f56565] rounded-full text-xs font-medium border border-[#f56565]/20">
                            Error
                          </span>
                          <span className="px-3 py-1 bg-[#805ad5]/10 text-[#805ad5] rounded-full text-xs font-medium border border-[#805ad5]/20">
                            Info
                          </span>
                        </div>

                        <p className="text-[#bfc9f2] mt-4 text-sm">
                          Semantic badge colors that convey meaning while
                          maintaining visual harmony.
                        </p>
                      </div>
                    </div>

                    <div className="bg-[#678aee]/10 rounded-lg p-6 border border-[#a2a3f5]/20 mt-12">
                      <h3 className="text-lg font-semibold text-[#a2a3f5] mb-2">
                        Customize Your Aesthetics
                      </h3>
                      <p className="text-[#bfc9f2]">
                        While our defaults are designed to look great right
                        away, every aspect of the design system can be
                        customized to match your brand's identity. Our design
                        token system makes it easy to change colors, typography,
                        spacing, and more.
                      </p>
                      <div className="mt-4">
                        <Button className="bg-[#678aee]/20 hover:bg-[#678aee]/30 text-[#a2a3f5] border border-[#a2a3f5]/30">
                          Read the Customization Guide
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

// Custom component for design principles
function DesignPrinciple({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#678aee]/20 to-[#a2a3f5]/20 flex items-center justify-center text-xl font-bold text-[#a2a3f5] border border-[#a2a3f5]/30">
          {number}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold text-[#a2a3f5] mb-2">{title}</h3>
        <p className="text-[#bfc9f2]">{description}</p>
      </div>
    </div>
  );
}
