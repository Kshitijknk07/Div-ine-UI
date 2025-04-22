import { SidebarPage } from "../Sidebar/SidebarPage";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Copy,
  Check,
  Terminal,
  Sparkles,
  Wand2,
  Play,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export function GettingStartedPage() {
  const [copied, setCopied] = useState<string | null>(null);
  const [magicCommand, setMagicCommand] = useState(
    "divinity summon components"
  );
  const [magicAnimation, setMagicAnimation] = useState(false);

  const [cliBase, setCliBase] = useState("divine-wand");

  const [commandVerb, setCommandVerb] = useState("conjure");

  const magicCommands = [
    "divinity summon components",
    "divine-craft manifest ui",
    "dui conjure button card",
    "div-wand create mystical-ui",
    "divine-incantation render",
    "div-genesis spawn interface",
    "dui-magic materialize",
    "divinify assembleComponents",
    "div-enchant build ui",
  ];

  const generateMagicCommand = () => {
    setMagicAnimation(true);
    const randomCommand =
      magicCommands[Math.floor(Math.random() * magicCommands.length)];
    setMagicCommand(randomCommand);

    const parts = randomCommand.split(" ");
    const newCliBase = parts[0];
    const newCommandVerb = parts.length > 1 ? parts[1] : "conjure";

    setCliBase(newCliBase);
    setCommandVerb(newCommandVerb);

    setTimeout(() => {
      setMagicAnimation(false);
    }, 1000);
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const CodeBlock = ({ code, id }: { code: string; id: string }) => {
    return (
      <div className="relative">
        <pre className="bg-[#121226] p-4 rounded-lg overflow-x-auto text-[#e4e7fa] text-sm font-mono">
          <code>{code}</code>
        </pre>
        <button
          onClick={() => copyToClipboard(code, id)}
          className="absolute top-3 right-3 p-1.5 rounded-md bg-[#1d1d3a] hover:bg-[#2a2a4a] transition-colors duration-200"
          aria-label="Copy code"
        >
          {copied === id ? (
            <Check className="h-4 w-4 text-green-400" />
          ) : (
            <Copy className="h-4 w-4 text-[#a2a3f5]" />
          )}
        </button>
      </div>
    );
  };

  const [installProgress, setInstallProgress] = useState(0);
  const [installationStarted, setInstallationStarted] = useState(false);
  const [installComplete, setInstallComplete] = useState(false);

  const startInstallation = () => {
    if (!installationStarted) {
      setInstallationStarted(true);
      setInstallProgress(0);
      setInstallComplete(false);

      const interval = setInterval(() => {
        setInstallProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setInstallComplete(true);
            return 100;
          }
          return prev + Math.floor(Math.random() * 15) + 5;
        });
      }, 600);
    }
  };

  const getInstallCommand = () => `npm install -g ${cliBase}-cli`;
  const getViteInitCommand = () => `${cliBase} ${commandVerb} components`;
  const getNextInitCommand = () =>
    `${cliBase} ${commandVerb === "conjure" ? "enchant" : commandVerb} --next`;
  const getComponentsCommand = () =>
    `${cliBase} ${commandVerb} mystical-button arcane-card enchanted-sidebar magical-badge`;
  const getManualComponentCommand = () =>
    `${cliBase} ${commandVerb} button card sidebar`;

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
                    Getting Started
                  </Badge>

                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 text-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#678aee] to-[#a2a3f5]">
                      Unleash the Magic of Div-ine UI
                    </span>
                  </h1>
                </CardHeader>

                <CardContent className="px-6 sm:px-8 lg:px-16 py-5">
                  <div className="prose max-w-4xl mx-auto text-[#bfc9f2] space-y-6">
                    <p className="text-lg sm:text-xl leading-relaxed text-center">
                      Forget boring component libraries.{" "}
                      <span className="text-[#a2a3f5] font-medium">
                        Div-ine UI
                      </span>{" "}
                      brings magic to your development workflow with a unique
                      approach to UI components.
                    </p>

                    <div className="border-t border-[#a2a3f5]/10 pt-4 mt-6"></div>

                    <div className="bg-gradient-to-r from-[#121231] to-[#1E1E3F] rounded-xl p-6 border border-[#a2a3f5]/20 shadow-lg relative overflow-hidden">
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJzdGFycyIgd2lkdGg9IjcwIiBoZWlnaHQ9IjcwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48Y2lyY2xlIGN4PSIyIiBjeT0iMiIgcj0iMSIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjc3RhcnMpIi8+PC9zdmc+')] opacity-30"></div>

                      <h3 className="text-xl text-[#ffc2e1] font-bold mb-4 flex items-center">
                        <Wand2 className="mr-2 h-5 w-5" />
                        The Magic CLI Command Generator
                      </h3>

                      <p className="text-[#e4e7fa] mb-6">
                        Tired of the same old CLI commands? Our magical command
                        generator creates fun, whimsical commands that do
                        exactly the same thing but feel more... divine.
                      </p>

                      <div className="relative">
                        <div className="bg-[#0d0d1f] rounded-lg p-4 mb-4 font-mono text-[#e4e7fa] flex items-center relative overflow-hidden">
                          <Terminal className="mr-3 h-5 w-5 text-[#a2a3f5]" />
                          <span
                            className={`transition-opacity duration-300 ${
                              magicAnimation ? "opacity-0" : "opacity-100"
                            }`}
                          >
                            {magicCommand}
                          </span>
                          {magicAnimation && (
                            <span className="absolute left-12 animate-pulse text-[#ffc2e1]">
                              ✨ Generating magic... ✨
                            </span>
                          )}
                        </div>

                        <div className="flex flex-row items-center gap-4 mt-2">
                          <Button
                            onClick={generateMagicCommand}
                            className="flex items-center gap-2 bg-gradient-to-r from-[#a64fe4] to-[#6a82fb] hover:from-[#7e42a8] hover:to-[#5262c1] text-white rounded-lg px-4 py-2 font-medium"
                          >
                            <Sparkles className="h-5 w-5" />
                            <span>Generate Magic Command</span>
                          </Button>

                          <Button
                            onClick={() =>
                              copyToClipboard(magicCommand, "magic-command")
                            }
                            className="flex items-center gap-2 bg-[#1d1d3a] hover:bg-[#2a2a4a] text-[#a2a3f5] rounded-lg px-4 py-2 font-medium"
                          >
                            {copied === "magic-command" ? (
                              <>
                                <Check className="h-5 w-5" />
                                <span>Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="h-5 w-5" />
                                <span>Copy Command</span>
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold mt-8 text-[#a2a3f5] pb-1 border-b border-[#a2a3f5]/20">
                      The Divine Installation
                    </h2>

                    <p className="text-base leading-relaxed">
                      Start by summoning the Div-ine UI power to your
                      environment. This isn't your ordinary CLI installation!
                    </p>

                    <div className="mt-4 mb-6">
                      <div className="flex items-center justify-between bg-[#121226] py-2 px-4 rounded-t-lg">
                        <div className="flex items-center">
                          <Terminal className="mr-2 h-4 w-4 text-[#a2a3f5]" />
                          <span className="text-sm font-medium text-[#e4e7fa]">
                            Magical Terminal
                          </span>
                        </div>
                        <Badge className="bg-[#7134ca]/30 text-[#d4a6ff] border-[#d4a6ff]/30 hover:bg-[#7134ca]/40">
                          Enchanted Shell
                        </Badge>
                      </div>
                      <CodeBlock id="install-cli" code={getInstallCommand()} />
                    </div>

                    {/* Interactive Installation Simulator */}
                    <div className="bg-[#121226] rounded-lg overflow-hidden">
                      <div className="flex items-center justify-between py-2 px-4 bg-[#1a1a36]">
                        <span className="text-sm font-medium text-[#e4e7fa]">
                          Installation Simulator
                        </span>
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                      </div>
                      <div className="px-4 py-3 font-mono text-sm">
                        <div className="text-[#6ce5bd]">$ {magicCommand}</div>

                        {!installationStarted && (
                          <Button
                            onClick={startInstallation}
                            className="flex items-center gap-2 mt-3 bg-[#1d1d3a] hover:bg-[#2a2a4a] text-[#a2a3f5] rounded-md text-xs px-3 py-2 font-medium"
                          >
                            <Play className="w-4 h-4" />
                            <span>Run Installation</span>
                          </Button>
                        )}

                        {installComplete && (
                          <Button
                            onClick={() => {
                              setInstallationStarted(false);
                              setInstallComplete(false);
                            }}
                            className="flex items-center gap-2 mt-3 bg-[#1d1d3a] hover:bg-[#2a2a4a] text-[#a2a3f5] rounded-md text-xs px-3 py-2 font-medium"
                          >
                            <span>Reset Simulation</span>
                          </Button>
                        )}

                        {installationStarted && (
                          <>
                            <div className="text-[#e4e7fa] mt-2">
                              <div>🧙‍♂️ Preparing the magical components...</div>
                              {installProgress >= 20 && (
                                <div>✨ Enchanting base styles...</div>
                              )}
                              {installProgress >= 40 && (
                                <div>🔮 Brewing utility mixins...</div>
                              )}
                              {installProgress >= 60 && (
                                <div>
                                  🌟 Infusing components with divine power...
                                </div>
                              )}
                              {installProgress >= 80 && (
                                <div>🎨 Painting with magical gradients...</div>
                              )}
                              {installComplete && (
                                <div className="text-[#6ce5bd] font-bold">
                                  🎉 Divine installation complete! Your UI is
                                  now blessed with magical powers!
                                </div>
                              )}
                            </div>

                            <div className="w-full bg-[#0d0d1f] rounded-full h-2 mt-3">
                              <div
                                className="bg-gradient-to-r from-[#678aee] to-[#a2a3f5] h-2 rounded-full transition-all duration-300"
                                style={{
                                  width: `${Math.min(installProgress, 100)}%`,
                                }}
                              ></div>
                            </div>

                            {!installComplete && (
                              <div className="text-[#bfc9f2] text-xs mt-1 text-right">
                                {Math.min(installProgress, 100)}% complete
                              </div>
                            )}

                            {installComplete && (
                              <Button
                                onClick={() => {
                                  setInstallationStarted(false);
                                  setInstallComplete(false);
                                }}
                                className="mt-3 bg-[#1d1d3a] hover:bg-[#2a2a4a] text-[#a2a3f5] rounded-md text-xs px-3 py-1"
                              >
                                Reset Simulation
                              </Button>
                            )}
                          </>
                        )}
                      </div>
                    </div>

                    <Tabs defaultValue="vite" className="w-full mt-8">
                      <TabsList className="grid w-full grid-cols-3 mb-6 bg-[#121226]/80">
                        <TabsTrigger
                          value="vite"
                          className="data-[state=active]:bg-[#a2a3f5]/20 data-[state=active]:text-[#a2a3f5] text-[#bfc9f2]"
                        >
                          Vite
                        </TabsTrigger>
                        <TabsTrigger
                          value="next"
                          className="data-[state=active]:bg-[#a2a3f5]/20 data-[state=active]:text-[#a2a3f5] text-[#bfc9f2]"
                        >
                          Next.js
                        </TabsTrigger>
                        <TabsTrigger
                          value="manual"
                          className="data-[state=active]:bg-[#a2a3f5]/20 data-[state=active]:text-[#a2a3f5] text-[#bfc9f2]"
                        >
                          Manual Setup
                        </TabsTrigger>
                      </TabsList>

                      <TabsContent value="vite" className="space-y-4">
                        <h3 className="text-xl font-bold text-[#a2a3f5]">
                          Enchanting a Vite Project
                        </h3>
                        <p className="text-base leading-relaxed">
                          Conjure a new Vite project with React and TypeScript:
                        </p>
                        <CodeBlock
                          id="vite-create"
                          code="npm create vite@latest my-divine-app -- --template react-ts"
                        />
                        <p className="text-base leading-relaxed mt-4">
                          Teleport to your project directory:
                        </p>
                        <CodeBlock id="vite-cd" code="cd my-divine-app" />
                        <p className="text-base leading-relaxed mt-4">
                          Cast the divine spell to initialize your UI:
                        </p>
                        <CodeBlock id="vite-init" code={getViteInitCommand()} />
                        <p className="text-base leading-relaxed mt-4">
                          Awaken your magical creation:
                        </p>
                        <CodeBlock id="vite-dev" code="npm run dev" />
                      </TabsContent>

                      <TabsContent value="next" className="space-y-4">
                        <h3 className="text-xl font-bold text-[#a2a3f5]">
                          Infusing Next.js with Divinity
                        </h3>
                        <p className="text-base leading-relaxed">
                          Summon a new Next.js project:
                        </p>
                        <CodeBlock
                          id="next-create"
                          code="npx create-next-app@latest my-divine-next-app --typescript"
                        />
                        <p className="text-base leading-relaxed mt-4">
                          Enter your creation's domain:
                        </p>
                        <CodeBlock id="next-cd" code="cd my-divine-next-app" />
                        <p className="text-base leading-relaxed mt-4">
                          Infuse divine power into your Next.js project:
                        </p>
                        <CodeBlock id="next-init" code={getNextInitCommand()} />
                        <p className="text-base leading-relaxed mt-4">
                          Bring your creation to life:
                        </p>
                        <CodeBlock id="next-dev" code="npm run dev" />
                      </TabsContent>

                      <TabsContent value="manual" className="space-y-4">
                        <h3 className="text-xl font-bold text-[#a2a3f5]">
                          Crafting a Manual Spell
                        </h3>
                        <p className="text-base leading-relaxed">
                          Gather your magical ingredients:
                        </p>
                        <CodeBlock
                          id="manual-deps"
                          code={`npm install tailwindcss postcss autoprefixer ${cliBase}-components`}
                        />
                        <p className="text-base leading-relaxed mt-4">
                          Prepare your magical parchment (config):
                        </p>
                        <CodeBlock
                          id="manual-tailwind"
                          code="npx tailwindcss init -p"
                        />
                        <p className="text-base leading-relaxed mt-4">
                          Inscribe the divine configuration:
                        </p>
                        <CodeBlock
                          id="manual-config"
                          code={`{
                            "$schema": "https://divine-ui.com/schema.json",
                            "style": "mystical",
                            "rsc": false,
                            "tsx": true,
                            "tailwind": {
                              "config": "tailwind.config.js",
                              "css": "src/index.css",
                              "baseColor": "arcane",
                              "cssVariables": true
                            },
                            "aliases": {
                              "components": "@/components",
                              "utils": "@/lib/utils"
                            }
                          }`}
                        />
                        <p className="text-base leading-relaxed mt-4">
                          Summon your first component:
                        </p>
                        <CodeBlock
                          id="manual-component"
                          code={getManualComponentCommand()}
                        />
                      </TabsContent>
                    </Tabs>

                    <h2 className="text-2xl font-bold mt-8 text-[#a2a3f5] pb-1 border-b border-[#a2a3f5]/20">
                      Summoning Components
                    </h2>

                    <p className="text-base leading-relaxed">
                      With the divine power flowing through your project, you
                      can now summon components at will:
                    </p>

                    <CodeBlock
                      id="add-component"
                      code={getComponentsCommand()}
                    />

                    <p className="text-base leading-relaxed mt-4">
                      This spell will bring forth multiple components at once.
                      You can then channel them in your application:
                    </p>

                    <CodeBlock
                      id="use-component"
                      code={`import { Button } from "@/components/ui/button";

                      function MagicalComponent() {
                        return (
                          <Button variant="enchanted">
                            ✨ Click to Cast Spell ✨
                          </Button>
                        );
                      }`}
                    />

                    <h2 className="text-2xl font-bold mt-8 text-[#a2a3f5] pb-1 border-b border-[#a2a3f5]/20">
                      Transmuting Components
                    </h2>

                    <p className="text-base leading-relaxed">
                      The true power of Div-ine UI is the ability to transmute
                      components to your will. Once summoned, your component
                      grimoire is located at:
                    </p>

                    <CodeBlock
                      id="component-path"
                      code="src/components/ui/button.tsx"
                    />

                    <p className="text-base leading-relaxed mt-4">
                      Alter the arcane code to customize your components. For
                      example, add a new magical variant:
                    </p>

                    <CodeBlock
                      id="customize-component"
                      code={`// Enhance your button with magical properties
                    const buttonVariants = cva(
                      "inline-flex items-center justify-center whitespace-nowrap rounded-md...",
                      {
                        variants: {
                          variant: {
                            default: "bg-primary text-primary-foreground...",
                            destructive: "bg-destructive text-destructive-foreground...",
                            outline: "border border-input bg-transparent...",
                            // Add your enchanted variant
                            enchanted: "bg-gradient-to-r from-[#7d4dff] to-[#00ffaa] text-white font-bold shadow-[0_0_15px_rgba(125,77,255,0.5)] hover:shadow-[0_0_25px_rgba(125,77,255,0.7)] transition-all duration-300",
                          },
                          // ... other magical properties
                        },
                      }
                    );`}
                    />

                    <div className="flex justify-center mt-10">
                      <Button
                        className="bg-gradient-to-r from-[#678aee] to-[#a2a3f5] hover:from-[#a2a3f5] hover:to-[#678aee] text-white rounded-full px-6 py-2 font-medium text-base"
                        asChild
                      >
                        <a
                          href="/components"
                          className="flex items-center gap-2"
                        >
                          <span>Explore Components</span>
                          <ArrowRight className="w-5 h-5" />
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

export default GettingStartedPage;
