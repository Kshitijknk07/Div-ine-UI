import { SidebarPage } from "../Sidebar/SidebarPage";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PhilosophyPage() {
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
                    Philosophy
                  </Badge>

                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 text-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#678aee] to-[#a2a3f5]">
                      Our Philosophy
                    </span>
                  </h1>
                </CardHeader>

                <CardContent className="px-6 sm:px-8 lg:px-16 py-5">
                  <div className="prose max-w-4xl mx-auto text-[#bfc9f2] space-y-6">
                    <p className="text-lg sm:text-xl leading-relaxed text-center">
                      <span className="text-[#a2a3f5] font-medium">
                        Div-ine UI
                      </span>{" "}
                      was built with a fundamental belief: developers should
                      have full control over their component code without
                      sacrificing quality, consistency, or speed.
                    </p>

                    <div className="border-t border-[#a2a3f5]/10 pt-4 mt-6"></div>

                    <h2 className="text-2xl font-bold mt-8 text-[#a2a3f5] pb-1 border-b border-[#a2a3f5]/20">
                      The Problem with Traditional Libraries
                    </h2>

                    <p className="text-base leading-relaxed">
                      The component library ecosystem has followed a pattern for
                      years:
                    </p>

                    <ul className="space-y-3 pl-6 list-disc text-base leading-relaxed">
                      <li>
                        <span className="text-[#bfc9f2] font-medium">
                          Black Boxes
                        </span>
                        : Most libraries hide their implementation details,
                        forcing you to work around limitations rather than
                        addressing them directly.
                      </li>
                      <li>
                        <span className="text-[#bfc9f2] font-medium">
                          Compromise
                        </span>
                        : You either accept a component as-is or build your own
                        from scratch.
                      </li>
                      <li>
                        <span className="text-[#bfc9f2] font-medium">
                          Inconsistency
                        </span>
                        : Mixing multiple libraries leads to inconsistent APIs
                        and styles.
                      </li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-8 text-[#a2a3f5] pb-1 border-b border-[#a2a3f5]/20">
                      A New Approach
                    </h2>

                    <p className="text-base leading-relaxed">
                      We believe the next generation of UI development should be
                      built on these principles:
                    </p>

                    <ul className="space-y-3 pl-6 list-disc text-base leading-relaxed">
                      <li>
                        <span className="text-[#bfc9f2] font-medium">
                          Transparency
                        </span>
                        : Code should be accessible, readable, and modifiable.
                      </li>
                      <li>
                        <span className="text-[#bfc9f2] font-medium">
                          Adaptability
                        </span>
                        : Components should be easy to customize to your exact
                        needs.
                      </li>
                      <li>
                        <span className="text-[#bfc9f2] font-medium">
                          Consistency
                        </span>
                        : All components should share a common interface and
                        design language.
                      </li>
                      <li>
                        <span className="text-[#bfc9f2] font-medium">
                          Scalability
                        </span>
                        : Your component system should grow with your project
                        without friction.
                      </li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-8 text-[#a2a3f5] pb-1 border-b border-[#a2a3f5]/20">
                      Beyond the Traditional Library
                    </h2>

                    <p className="text-base leading-relaxed">
                      <span className="text-[#a2a3f5] font-medium">
                        Div-ine UI
                      </span>{" "}
                      isn't just a collection of pre-built components—it's a new
                      way to think about UI development:
                    </p>

                    <ul className="space-y-3 pl-6 list-disc text-base leading-relaxed">
                      <li>
                        <span className="text-[#bfc9f2] font-medium">
                          Component Ownership
                        </span>
                        : When you add a component from Div-ine UI, you own it.
                        It lives in your codebase.
                      </li>
                      <li>
                        <span className="text-[#bfc9f2] font-medium">
                          Design System as Code
                        </span>
                        : Your design system is expressed directly in code, not
                        abstracted away in a package.
                      </li>
                      <li>
                        <span className="text-[#bfc9f2] font-medium">
                          Distribution, Not Dependency
                        </span>
                        : Components are distributed as code, not as
                        dependencies that lock you in.
                      </li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-8 text-[#a2a3f5] pb-1 border-b border-[#a2a3f5]/20">
                      The Power of Control
                    </h2>

                    <p className="text-base leading-relaxed">
                      The fundamental principle behind Div-ine UI is control.
                      When developers have control over their UI components:
                    </p>

                    <ul className="space-y-3 pl-6 list-disc text-base leading-relaxed">
                      <li>
                        <span className="text-[#bfc9f2] font-medium">
                          Debugging becomes simpler
                        </span>
                        : You can see exactly what's happening in your
                        components.
                      </li>
                      <li>
                        <span className="text-[#bfc9f2] font-medium">
                          Customization becomes seamless
                        </span>
                        : No more hacking around limitations—just change the
                        code directly.
                      </li>
                      <li>
                        <span className="text-[#bfc9f2] font-medium">
                          Learning curves flatten
                        </span>
                        : With consistent patterns, each new component becomes
                        more intuitive.
                      </li>
                      <li>
                        <span className="text-[#bfc9f2] font-medium">
                          Maintenance becomes manageable
                        </span>
                        : When you control the code, you control the update
                        cycle.
                      </li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-8 text-[#a2a3f5] pb-1 border-b border-[#a2a3f5]/20">
                      Built for the Future
                    </h2>

                    <p className="text-base leading-relaxed">
                      Div-ine UI isn't just solving today's problems—it's built
                      for the future of UI development:
                    </p>

                    <ul className="space-y-3 pl-6 list-disc text-base leading-relaxed">
                      <li>
                        <span className="text-[#bfc9f2] font-medium">
                          Cross-framework compatibility
                        </span>
                        : The principles work across React, Vue, Svelte, and
                        more.
                      </li>
                      <li>
                        <span className="text-[#bfc9f2] font-medium">
                          Team collaboration
                        </span>
                        : A shared component system creates a common language
                        for designers and developers.
                      </li>
                      <li>
                        <span className="text-[#bfc9f2] font-medium">
                          Sustainable development
                        </span>
                        : Avoid the constant churn of framework and library
                        updates.
                      </li>
                    </ul>

                    <div className="flex justify-center mt-10">
                      <Button className="bg-gradient-to-r from-[#678aee] to-[#a2a3f5] hover:from-[#a2a3f5] hover:to-[#678aee] text-white rounded-full px-6 py-2 font-medium text-base">
                        Explore Components
                        <ArrowRight className="w-4 h-4 ml-2" />
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

export default PhilosophyPage;
