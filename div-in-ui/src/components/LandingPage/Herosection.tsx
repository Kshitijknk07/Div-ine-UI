import { ArrowRight } from "lucide-react";

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
        className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow"
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
      <p className="max-w-2xl text-lg md:text-2xl mb-10 opacity-90">
        Accelerate your workflow with a modern, flexible, and accessible React
        component library.
        <br />
        Designed for speed, scalability, and seamless integration into your next
        project.
      </p>
      <a
        href="/docs/getting-started"
        className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200 focus:outline-none"
        style={{
          background:
            "linear-gradient(90deg, var(--primary, #000000), var(--accent, #000000))",
          color: "var(--background, #fbfbfe)",
        }}
        aria-label="Get Started"
      >
        Get Started
        <ArrowRight className="w-5 h-5" />
      </a>
      <div className="mt-16 flex flex-wrap justify-center gap-4 opacity-90">
        <FeatureBadge color="fuchsia" text="Accessible" />
        <FeatureBadge color="cyan" text="Customizable" />
        <FeatureBadge color="emerald" text="TypeScript Ready" />
        <FeatureBadge color="slate" text="Open Source" />
      </div>
    </section>
  );
}

export default HeroSection;
