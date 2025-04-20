import { ArrowRight } from "lucide-react";

type BadgeProps = {
  color: "fuchsia" | "cyan" | "emerald" | "slate";
  text: string;
};

function FeatureBadge({ color, text }: BadgeProps) {
  const colorMap: Record<BadgeProps["color"], string> = {
    fuchsia:
      "bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900 dark:text-fuchsia-200",
    cyan: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-200",
    emerald:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-200",
    slate: "bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-200",
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
      className="flex flex-col items-center justify-center text-center pt-40 pb-24 px-4 min-h-screen bg-gradient-to-br from-fuchsia-100 via-cyan-100 to-emerald-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-500"
      aria-label="Hero"
    >
      <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-fuchsia-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent mb-6 drop-shadow">
        Build Beautiful React Apps <br />
        <span className="underline decoration-wavy decoration-fuchsia-400 underline-offset-8">
          with div-ine-ui
        </span>
      </h1>
      <p className="max-w-2xl text-lg md:text-2xl text-slate-700 dark:text-slate-200 mb-10 opacity-90">
        Accelerate your workflow with a modern, flexible, and accessible React
        component library.
        <br />
        Designed for speed, scalability, and seamless integration into your next
        project.
      </p>
      <a
        href="/docs/getting-started"
        className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-emerald-500 text-white font-bold text-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
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
