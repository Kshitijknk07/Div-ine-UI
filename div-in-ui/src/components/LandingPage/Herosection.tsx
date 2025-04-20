import { ArrowRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { JSX } from "react";

type FeatureType = {
  name: string;
  description: string;
  icon: JSX.Element;
};

const features: FeatureType[] = [
  {
    name: "Accessible",
    description:
      "ARIA-compliant components that follow WAI-ARIA best practices",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    name: "Customizable",
    description: "Fully themeable with design tokens and CSS variables",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
  },
  {
    name: "TypeScript Ready",
    description: "Built with TypeScript for the best developer experience",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    name: "Open Source",
    description: "Free and open source under MIT license",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
  },
];

export function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center pt-40 pb-24 px-4 min-h-screen overflow-hidden bg-gradient-to-b from-[#070814] to-[#09092d]"
      aria-label="Hero"
    >
      {/* Background decorative elements */}
      <div
        className="absolute top-1/3 left-1/4 w-72 h-72 bg-[#a2a3f5] rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 right-1/4 w-72 h-72 bg-[#678aee] rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-2000"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-[#ffc2e1] rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-4000"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <Badge
          variant="outline"
          className="mb-4 px-4 py-1.5 text-sm font-medium bg-[#678aee]/10 text-[#a2a3f5] border-[#a2a3f5]/30"
        >
          v1.0 Now Available
        </Badge>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white">
          Build Beautiful React Apps <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#678aee] to-[#a2a3f5] inline-block mt-2">
            with Div-ine UI
          </span>
        </h1>

        <p className="max-w-2xl text-lg md:text-xl mb-10 mx-auto text-[#bfc9f2]/90">
          Accelerate your workflow with a modern, flexible, and accessible React
          component library. Designed for speed, scalability, and seamless
          integration.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <Button
            asChild
            size="lg"
            className="rounded-full gap-2 px-8 bg-gradient-to-r from-[#678aee] to-[#a2a3f5] hover:from-[#a2a3f5] hover:to-[#678aee] border-0 text-white font-medium shadow-lg hover:shadow-xl transition-all"
          >
            <Link to="/home">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full gap-2 px-8 text-[#bfc9f2] border-[#a2a3f5]/30 bg-[#678aee]/10 hover:bg-[#678aee]/20 hover:border-[#a2a3f5]/50"
          >
            <a
              href="https://github.com/Kshitijknk07/Div-ine-UI"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {features.map((feature, index) => (
            <Card
              key={feature.name}
              className={`bg-[#070814]/50 border-[#a2a3f5]/20 hover:shadow-lg transition-all group overflow-hidden ${
                index % 2 === 0
                  ? "hover:border-[#678aee]/50"
                  : "hover:border-[#ffc2e1]/50"
              }`}
            >
              <CardContent className="p-6 text-left">
                <div
                  className={`rounded-full p-3 w-fit mb-4 ${
                    index % 2 === 0
                      ? "bg-[#678aee]/10 border border-[#678aee]/20"
                      : "bg-[#ffc2e1]/10 border border-[#ffc2e1]/20"
                  } group-hover:scale-110 transition-transform duration-300`}
                >
                  <div
                    className={`${
                      index % 2 === 0 ? "text-[#678aee]" : "text-[#ffc2e1]"
                    }`}
                  >
                    {feature.icon}
                  </div>
                </div>
                <h3 className="font-bold text-xl mb-2 text-white">
                  {feature.name}
                </h3>
                <p className="text-[#bfc9f2]/90">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
