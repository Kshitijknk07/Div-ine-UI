import { type ReactElement } from "react";
import { NavbarSection } from "../components/LandingPage/NavbarSection";
import { HeroSection } from "../components/LandingPage/Herosection";

/**
 * Landing page component that serves as the main entry point of the application
 *
 * @returns {ReactElement} The landing page component
 *
 * @example
 * ```tsx
 * <LandingPage />
 * ```
 */
const LandingPage = (): ReactElement => {
  return (
    <div className="overflow-hidden h-screen w-screen">
      {" "}
      <NavbarSection />
      <HeroSection />
    </div>
  );
};

export default LandingPage;
