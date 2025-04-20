import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing_Page";
import IntroductionPage from "./components/HomePage/Introduction/IntroductionPage";
import PhilosophyPage from "./components/HomePage/Philosophy/PhilosophyPage";
import GettingStartedPage from "./components/HomePage/GettingStarted/GettingStartedPage";
import { OpenCodePage } from "./components/HomePage/OpenCode/OpenCodePage";
import { ComponentsPage } from "./components/HomePage/Components/ComponentsPage";
import { CompositionPage } from "./components/HomePage/Composition/CompositionPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<IntroductionPage />} />
        <Route path="/philosophy" element={<PhilosophyPage />} />
        <Route path="/getting-started" element={<GettingStartedPage />} />
        <Route path="/open-code" element={<OpenCodePage />} />
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/composition" element={<CompositionPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
