import { SidebarPage } from "../Sidebar/SidebarPage";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export function IntroductionPage() {
  return (
    <SidebarProvider
      style={{
        background: "#eae0d5",
        color: "#250902",
        ["--sidebar-width" as any]: "19rem",
      }}
    >
      <div className="flex min-h-screen overflow-hidden">
        <SidebarPage />
        <SidebarInset>
          <section
            style={{
              background: "#eae0d5",
              color: "#250902",
              height: "calc(100vh - 4rem)",
            }}
            className="flex-1 p-8"
          >
            <div className="max-w-4xl mx-auto h-full">
              <Card className="bg-[#eae0d5] border-[#250902]/20 h-full">
                <CardHeader>
                  <h1
                    className="text-5xl md:text-6xl font-extrabold mb-8 text-center"
                    style={{
                      background: "linear-gradient(90deg, #250902, #250902)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Welcome to Div-ine UI
                  </h1>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="prose max-w-none mx-auto text-center">
                    <p className="text-lg leading-relaxed">
                      Div-ine UI is a set of beautifully-designed, accessible
                      components and a code distribution platform. Works with
                      your favorite frameworks and AI models. Open Source. Open
                      Code.
                    </p>
                    <p className="text-lg leading-relaxed">
                      This is not a component library. It is how you build your
                      component library.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <Card className="bg-[#250902]/10 border-[#250902]/20">
                      <CardHeader>
                        <h3 className="text-xl font-semibold mb-2">
                          Open Code
                        </h3>
                      </CardHeader>
                      <CardContent>
                        <p className="text-base leading-relaxed">
                          Full access to component source code for complete
                          customization and transparency.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="bg-[#250902]/10 border-[#250902]/20">
                      <CardHeader>
                        <h3 className="text-xl font-semibold mb-2">
                          Composition
                        </h3>
                      </CardHeader>
                      <CardContent>
                        <p className="text-base leading-relaxed">
                          Consistent API across all components for predictable
                          development.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="bg-[#250902]/10 border-[#250902]/20">
                      <CardHeader>
                        <h3 className="text-xl font-semibold mb-2">
                          Distribution
                        </h3>
                      </CardHeader>
                      <CardContent>
                        <p className="text-base leading-relaxed">
                          Flat-file schema and CLI tool for easy component
                          distribution.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="bg-[#250902]/10 border-[#250902]/20">
                      <CardHeader>
                        <h3 className="text-xl font-semibold mb-2">
                          Beautiful Defaults
                        </h3>
                      </CardHeader>
                      <CardContent>
                        <p className="text-base leading-relaxed">
                          Carefully designed components that look great out of
                          the box.
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="bg-[#250902]/10 border-[#250902]/20">
                    <CardHeader>
                      <h2 className="text-3xl font-bold mb-4 text-center">
                        AI-Ready Architecture
                      </h2>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg leading-relaxed text-center">
                        The design of Div-ine UI makes it easy for AI tools to
                        work with your code. Its open code and consistent API
                        allow AI models to read, understand, and even generate
                        new components.
                      </p>
                    </CardContent>
                  </Card>
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
