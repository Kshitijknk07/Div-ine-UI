import { SidebarPage } from "../Sidebar/SidebarPage";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function IntroductionPage() {
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
            <div className="w-full mx-auto py-6 animate-fade-in-up">
              <Card className="bg-[#070814]/30 backdrop-blur-sm border-0 border-b border-[#a2a3f5]/20 shadow-lg overflow-hidden w-full rounded-none">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#678aee]/80 to-[#ffc2e1]/60"></div>

                <CardHeader className="pb-0 pt-6 px-6 sm:px-8">
                  <Badge className="w-fit mx-auto mb-4 px-3 py-1 bg-[#678aee]/10 text-[#a2a3f5] border-[#a2a3f5]/30 hover:bg-[#678aee]/20">
                    Documentation
                  </Badge>

                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#678aee] to-[#a2a3f5]">Div</span>-ine UI
                  </h1>
                </CardHeader>

                <CardContent className="px-6 sm:px-8 py-6">
                  <div className="prose max-w-none text-[#bfc9f2]/90 space-y-6">
                    <p className="text-base sm:text-lg leading-relaxed">
                      <span className="text-[#a2a3f5]">Div</span>-ine UI is a
                      set of beautifully-designed, accessible components and a
                      code distribution platform. Works with your favorite
                      frameworks and AI models. Open Source. Open Code.
                    </p>

                    <p className="text-base sm:text-lg leading-relaxed text-[#ffc2e1] font-medium">
                      This is not a component library. It is how you build your
                      component library.
                    </p>

                    <p className="text-base leading-relaxed">
                      You know how most traditional component libraries work:
                      you install a package from NPM, import the components, and
                      use them in your app.
                    </p>

                    <p className="text-base leading-relaxed">
                      This approach works well until you need to customize a
                      component to fit your design system or require one that
                      isn't included in the library. Often, you end up wrapping
                      library components, writing workarounds to override
                      styles, or mixing components from different libraries with
                      incompatible APIs.
                    </p>

                    <p className="text-base leading-relaxed">
                      This is what <span className="text-[#a2a3f5]">Div</span>
                      -ine UI aims to solve. It is built around the following
                      principles:
                    </p>

                    <ul className="space-y-2 pl-6 list-disc text-base leading-relaxed">
                      <li>
                        <span className="text-[#678aee] font-medium">
                          Open Code:
                        </span>{" "}
                        The top layer of your component code is open for
                        modification.
                      </li>
                      <li>
                        <span className="text-[#678aee] font-medium">
                          Composition:
                        </span>{" "}
                        Every component uses a common, composable interface,
                        making them predictable.
                      </li>
                      <li>
                        <span className="text-[#678aee] font-medium">
                          Distribution:
                        </span>{" "}
                        A flat-file schema and command-line tool make it easy to
                        distribute components.
                      </li>
                      <li>
                        <span className="text-[#678aee] font-medium">
                          Beautiful Defaults:
                        </span>{" "}
                        Carefully chosen default styles, so you get great design
                        out-of-the-box.
                      </li>
                      <li>
                        <span className="text-[#678aee] font-medium">
                          AI-Ready:
                        </span>{" "}
                        Open code for LLMs to read, understand, and improve.
                      </li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-8 text-[#a2a3f5]">
                      Open Code
                    </h2>
                    
                    <p className="text-base leading-relaxed">
                      <span className="text-[#a2a3f5]">Div</span>-ine UI hands
                      you the actual component code. You have full control to
                      customize and extend the components to your needs. This
                      means:
                    </p>

                    <ul className="space-y-2 pl-6 list-disc text-base leading-relaxed">
                      <li>
                        Full Transparency: You see exactly how each component is
                        built.
                      </li>
                      <li>
                        Easy Customization: Modify any part of a component to
                        fit your design and functionality requirements.
                      </li>
                      <li>
                        AI Integration: Access to the code makes it
                        straightforward for LLMs to read, understand, and even
                        improve your components.
                      </li>
                    </ul>

                    <p className="text-base leading-relaxed">
                      In a typical library, if you need to change a button's
                      behavior, you have to override styles or wrap the
                      component. With{" "}
                      <span className="text-[#a2a3f5]">Div</span>-ine UI, you
                      simply edit the button code directly.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 text-[#a2a3f5]">
                      Composition
                    </h2>

                    <p className="text-base leading-relaxed">
                      Every component in{" "}
                      <span className="text-[#a2a3f5]">Div</span>-ine UI shares
                      a common, composable interface. If a component does not
                      exist, we bring it in, make it composable, and adjust its
                      style to match and work with the rest of the design
                      system.
                    </p>

                    <p className="text-base leading-relaxed">
                      A shared, composable interface means it's predictable for
                      both your team and LLMs. You are not learning different
                      APIs for every new component. Even for third-party ones.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 text-[#a2a3f5]">
                      Distribution
                    </h2>

                    <p className="text-base leading-relaxed">
                      <span className="text-[#a2a3f5]">Div</span>-ine UI is also
                      a code distribution system. It defines a schema for
                      components and a CLI to distribute them.
                    </p>

                    <ul className="space-y-2 pl-6 list-disc text-base leading-relaxed">
                      <li>
                        Schema: A flat-file structure that defines the
                        components, their dependencies, and properties.
                      </li>
                      <li>
                        CLI: A command-line tool to distribute and install
                        components across projects with cross-framework support.
                      </li>
                    </ul>

                    <p className="text-base leading-relaxed">
                      You can use the schema to distribute your components to
                      other projects or have AI generate completely new
                      components based on existing schema.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 text-[#a2a3f5]">
                      Beautiful Defaults
                    </h2>

                    <p className="text-base leading-relaxed">
                      <span className="text-[#a2a3f5]">Div</span>-ine UI comes
                      with a large collection of components that have carefully
                      chosen default styles. They are designed to look good on
                      their own and to work well together as a consistent
                      system:
                    </p>

                    <ul className="space-y-2 pl-6 list-disc text-base leading-relaxed">
                      <li>
                        Good Out-of-the-Box: Your UI has a clean and minimal
                        look without extra work.
                      </li>
                      <li>
                        Unified Design: Components naturally fit with one
                        another. Each component is built to match the others,
                        keeping your UI consistent.
                      </li>
                      <li>
                        Easily Customizable: If you want to change something,
                        it's simple to override and extend the defaults.
                      </li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-8 text-[#a2a3f5]">
                      AI-Ready Architecture
                    </h2>

                    <p className="text-base leading-relaxed">
                      The design of <span className="text-[#a2a3f5]">Div</span>
                      -ine UI makes it easy for AI tools to work with your code.
                      Its open code and consistent API allow AI models to read,
                      understand, and even generate new components.
                    </p>

                    <p className="text-base leading-relaxed">
                      An AI model can learn how your components work and suggest
                      improvements or even create new components that integrate
                      with your existing design.
                    </p>

                    <div className="flex justify-center mt-8">
                      <Button className="bg-gradient-to-r from-[#678aee] to-[#a2a3f5] hover:from-[#a2a3f5] hover:to-[#678aee] text-white rounded-full px-6 py-2 font-medium text-base">
                        Start Building 
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

export default IntroductionPage;
