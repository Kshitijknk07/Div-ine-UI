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
            <div className="w-full animate-fade-in-up">
              <Card className="bg-[#070814]/60 backdrop-blur-sm border-0 shadow-xl overflow-hidden w-full rounded-none min-h-screen">
                <CardHeader className="pb-0 pt-6 px-6 lg:px-16">
                  <Badge className="w-fit mx-auto mb-3 px-4 py-1.5 text-sm font-medium bg-[#678aee]/10 text-[#a2a3f5] border-[#a2a3f5]/30 hover:bg-[#678aee]/20">
                    Documentation
                  </Badge>

                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 text-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#678aee] to-[#a2a3f5]">
                      Div
                    </span>
                    -ine UI
                  </h1>
                </CardHeader>

                <CardContent className="px-6 sm:px-8 lg:px-16 py-5">
                  <div className="prose max-w-4xl mx-auto text-[#bfc9f2] space-y-6">
                    <p className="text-lg sm:text-xl leading-relaxed text-center">
                      <span className="text-[#a2a3f5] font-medium">
                        Div-ine UI
                      </span>{" "}
                      is a set of beautifully-designed, accessible components
                      and a code distribution platform. Works with your favorite
                      frameworks and AI models. Open Source. Open Code.
                    </p>

                    <p className="text-lg sm:text-xl leading-relaxed text-[#ffc2e1] font-medium text-center">
                      This is not a component library. It is how you build your
                      component library.
                    </p>

                    <div className="border-t border-[#a2a3f5]/10 pt-4 mt-6"></div>

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
                      This is what{" "}
                      <span className="text-[#a2a3f5] font-medium">
                        Div-ine UI
                      </span>{" "}
                      aims to solve. It is built around the following
                      principles:
                    </p>

                    <ul className="space-y-3 pl-6 list-disc text-base leading-relaxed">
                      <li>
                        <span className="text-[#678aee] font-medium">
                          Open Code
                        </span>{" "}
                        - The top layer of your component code is open for
                        modification.
                      </li>
                      <li>
                        <span className="text-[#678aee] font-medium">
                          Composition
                        </span>{" "}
                        - Every component uses a common, composable interface,
                        making them predictable.
                      </li>
                      <li>
                        <span className="text-[#678aee] font-medium">
                          Distribution
                        </span>{" "}
                        - A flat-file schema and command-line tool make it easy
                        to distribute components.
                      </li>
                      <li>
                        <span className="text-[#678aee] font-medium">
                          Beautiful Defaults
                        </span>{" "}
                        - Carefully chosen default styles, so you get great
                        design out-of-the-box.
                      </li>
                      <li>
                        <span className="text-[#678aee] font-medium">
                          AI-Ready
                        </span>{" "}
                        - Open code for LLMs to read, understand, and improve.
                      </li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-8 text-[#a2a3f5] pb-1 border-b border-[#a2a3f5]/20">
                      Open Code
                    </h2>

                    <p className="text-base leading-relaxed">
                      <span className="text-[#a2a3f5] font-medium">
                        Div-ine UI
                      </span>{" "}
                      hands you the actual component code. You have full control
                      to customize and extend the components to your needs. This
                      means:
                    </p>

                    <ul className="space-y-3 pl-6 list-disc text-base leading-relaxed">
                      <li>
                        <span className="text-[#bfc9f2] font-medium">
                          Full Transparency
                        </span>
                        : You see exactly how each component is built.
                      </li>
                      <li>
                        <span className="text-[#bfc9f2] font-medium">
                          Easy Customization
                        </span>
                        : Modify any part of a component to fit your design and
                        functionality requirements.
                      </li>
                      <li>
                        <span className="text-[#bfc9f2] font-medium">
                          AI Integration
                        </span>
                        : Access to the code makes it straightforward for LLMs
                        to read, understand, and even improve your components.
                      </li>
                    </ul>

                    <p className="text-base leading-relaxed">
                      In a typical library, if you need to change a button's
                      behavior, you have to override styles or wrap the
                      component. With{" "}
                      <span className="text-[#a2a3f5] font-medium">
                        Div-ine UI
                      </span>
                      , you simply edit the button code directly.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 text-[#a2a3f5] pb-1 border-b border-[#a2a3f5]/20">
                      Composition
                    </h2>

                    <p className="text-base leading-relaxed">
                      Every component in{" "}
                      <span className="text-[#a2a3f5] font-medium">
                        Div-ine UI
                      </span>{" "}
                      shares a common, composable interface. If a component does
                      not exist, we bring it in, make it composable, and adjust
                      its style to match and work with the rest of the design
                      system.
                    </p>

                    <p className="text-base leading-relaxed">
                      A shared, composable interface means it's predictable for
                      both your team and LLMs. You are not learning different
                      APIs for every new component. Even for third-party ones.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 text-[#a2a3f5] pb-1 border-b border-[#a2a3f5]/20">
                      Distribution
                    </h2>

                    <p className="text-base leading-relaxed">
                      <span className="text-[#a2a3f5] font-medium">
                        Div-ine UI
                      </span>{" "}
                      is also a code distribution system. It defines a schema
                      for components and a CLI to distribute them.
                    </p>

                    <ul className="space-y-3 pl-6 list-disc text-base leading-relaxed">
                      <li>
                        <span className="text-[#bfc9f2] font-medium">
                          Schema
                        </span>
                        : A flat-file structure that defines the components,
                        their dependencies, and properties.
                      </li>
                      <li>
                        <span className="text-[#bfc9f2] font-medium">CLI</span>:
                        A command-line tool to distribute and install components
                        across projects with cross-framework support.
                      </li>
                    </ul>

                    <p className="text-base leading-relaxed">
                      You can use the schema to distribute your components to
                      other projects or have AI generate completely new
                      components based on existing schema.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 text-[#a2a3f5] pb-1 border-b border-[#a2a3f5]/20">
                      Beautiful Defaults
                    </h2>

                    <p className="text-base leading-relaxed">
                      <span className="text-[#a2a3f5] font-medium">
                        Div-ine UI
                      </span>{" "}
                      comes with a large collection of components that have
                      carefully chosen default styles. They are designed to look
                      good on their own and to work well together as a
                      consistent system:
                    </p>

                    <ul className="space-y-3 pl-6 list-disc text-base leading-relaxed">
                      <li>
                        <span className="text-[#bfc9f2] font-medium">
                          Good Out-of-the-Box
                        </span>
                        : Your UI has a clean and minimal look without extra
                        work.
                      </li>
                      <li>
                        <span className="text-[#bfc9f2] font-medium">
                          Unified Design
                        </span>
                        : Components naturally fit with one another. Each
                        component is built to match the others, keeping your UI
                        consistent.
                      </li>
                      <li>
                        <span className="text-[#bfc9f2] font-medium">
                          Easily Customizable
                        </span>
                        : If you want to change something, it's simple to
                        override and extend the defaults.
                      </li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-8 text-[#a2a3f5] pb-1 border-b border-[#a2a3f5]/20">
                      AI-Ready Architecture
                    </h2>

                    <p className="text-base leading-relaxed">
                      The design of{" "}
                      <span className="text-[#a2a3f5] font-medium">
                        Div-ine UI
                      </span>{" "}
                      makes it easy for AI tools to work with your code. Its
                      open code and consistent API allow AI models to read,
                      understand, and even generate new components.
                    </p>

                    <p className="text-base leading-relaxed">
                      An AI model can learn how your components work and suggest
                      improvements or even create new components that integrate
                      with your existing design.
                    </p>

                    <div className="flex justify-center mt-10">
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
