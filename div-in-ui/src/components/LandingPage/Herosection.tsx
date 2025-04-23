import { ArrowRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { JSX } from "react";
import { motion } from "framer-motion";

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
      className="relative flex flex-col items-center pt-40 pb-24 px-4 min-h-screen bg-gradient-to-b from-[#222831] to-[#393E46]"
      aria-label="Hero"
    >
      {/* Animated Background Blobs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 overflow-hidden"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 left-1/4 w-72 h-72 bg-[#00ADB5] rounded-full mix-blend-overlay filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-1/4 w-72 h-72 bg-[#00ADB5] rounded-full mix-blend-overlay filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-[#00ADB5] rounded-full mix-blend-overlay filter blur-3xl opacity-20"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Badge
            variant="outline"
            className="mb-4 px-4 py-1.5 text-sm font-medium bg-[#00ADB5]/10 text-[#00ADB5] border-[#00ADB5]/30 hover:bg-[#00ADB5]/20"
          >
            v1.0 Now Available
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-[#EEEEEE]"
        >
          Build Beautiful React Apps <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ADB5] to-[#00ADB5] inline-block mt-2">
            with Div-ine UI
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-2xl text-lg md:text-xl mb-10 mx-auto text-[#7b7b7b]"
        >
          Accelerate your workflow with a modern, flexible, and accessible React
          component library. Designed for speed, scalability, and seamless
          integration.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto rounded-full gap-2 px-8 bg-gradient-to-r from-[#00ADB5] to-[#00ADB5] hover:from-[#00ADB5] hover:to-[#00ADB5] border-0 text-[#222831] font-medium shadow-lg hover:shadow-xl transition-all"
            >
              <Link
                to="/home"
                className="flex items-center justify-center gap-2"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-full px-8 text-[#7b7b7b] border-[#00ADB5]/30 bg-[#00ADB5]/10 hover:bg-[#00ADB5]/20 hover:border-[#00ADB5]/50"
            >
              <a
                href="https://github.com/Kshitijknk07/Div-ine-UI"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-7xl mx-auto px-4"
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <Card className="bg-[#393E46]/50 border-[#00ADB5]/20 hover:border-[#00ADB5]/50 hover:shadow-lg transition-all group overflow-hidden">
              <CardContent className="p-6 text-left">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="rounded-full p-3 w-fit mb-4 bg-[#00ADB5]/10 border border-[#00ADB5]/20 group-hover:scale-110 transition-transform duration-300"
                >
                  <div className="text-[#00ADB5]">{feature.icon}</div>
                </motion.div>
                <h3 className="font-bold text-xl mb-2 text-[#EEEEEE]">
                  {feature.name}
                </h3>
                <p className="text-[#7b7b7b]">{feature.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default HeroSection;
