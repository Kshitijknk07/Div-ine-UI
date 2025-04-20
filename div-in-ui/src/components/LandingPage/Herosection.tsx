import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type BadgeProps = {
  color: "fuchsia" | "cyan" | "emerald" | "slate";
  text: string;
};

function FeatureBadge({ color, text }: BadgeProps) {
  const colorMap: Record<BadgeProps["color"], string> = {
    fuchsia: "bg-white text-black",
    cyan: "bg-white text-black",
    emerald: "bg-white text-black",
    slate: "bg-white text-black",
  };
  return (
    <span
      className={`px-4 py-2 rounded-lg font-mono text-xs ${colorMap[color]} shadow-sm`}
    >
      {text}
    </span>
  );
}

export function HeroSection() {
  return (
    <section
      style={{
        background: "var(--background, #fbfbfe)",
        color: "var(--text, #040316)",
      }}
      className="flex flex-col items-center justify-center text-center pt-40 pb-24 px-4 min-h-screen transition-colors duration-500"
      aria-label="Hero"
    >
      <h1
        className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow animate-fade-in-up"
        style={{
          background:
            "linear-gradient(90deg, var(--primary, #000000), var(--accent, #000000))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Build Beautiful React Apps <br />
        <span
          className="underline decoration-wavy underline-offset-8"
          style={{
            textDecorationColor: "var(--primary, #000000)",
          }}
        >
          with div-ine-ui
        </span>
      </h1>
      <p
        className="max-w-2xl text-lg md:text-2xl mb-10 opacity-90 animate-fade-in-up"
        style={{ animationDelay: "0.2s" }}
      >
        Accelerate your workflow with a modern, flexible, and accessible React
        component library.
        <br />
        Designed for speed, scalability, and seamless integration into your next
        project.
      </p>
      <Link
        to="/home"
        className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200 focus:outline-none animate-fade-in-up"
        style={{
          background:
            "linear-gradient(90deg, var(--primary, #000000), var(--accent, #000000))",
          color: "var(--background, #fbfbfe)",
          animationDelay: "0.4s",
        }}
        aria-label="Get Started"
      >
        Get Started
        <ArrowRight className="w-5 h-5" />
      </Link>
      <div className="mt-16 flex flex-wrap justify-center gap-4 opacity-90">
        <span className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <FeatureBadge color="fuchsia" text="Accessible" />
        </span>
        <span className="animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
          <FeatureBadge color="cyan" text="Customizable" />
        </span>
        <span className="animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <FeatureBadge color="emerald" text="TypeScript Ready" />
        </span>
        <span className="animate-fade-in-up" style={{ animationDelay: "0.9s" }}>
          <FeatureBadge color="slate" text="Open Source" />
        </span>
      </div>
    </section>
  );
}

export default HeroSection;
