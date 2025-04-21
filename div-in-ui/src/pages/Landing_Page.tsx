import { NavbarSection } from "../components/LandingPage/NavbarSection";
import { HeroSection } from "../components/LandingPage/Herosection";

const LandingPage = () => {
  return (
    <div className="overflow-hidden h-screen w-screen">
      {" "}
      <NavbarSection />
      <HeroSection />
    </div>
  );
};

export default LandingPage;
