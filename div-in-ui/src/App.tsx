import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/Landing_Page";
import IntroductionPage from "./components/HomePage/Introduction/IntroductionPage";
import PhilosophyPage from "./components/HomePage/Philosophy/PhilosophyPage";
import GettingStartedPage from "./components/HomePage/GettingStarted/GettingStartedPage";
import { OpenCodePage } from "./components/HomePage/OpenCode/OpenCodePage";
import { ComponentsPage } from "./components/HomePage/Components/ComponentsPage";
import { CompositionPage } from "./components/HomePage/Composition/CompositionPage";
import { DistributionPage } from "./components/HomePage/Distribution/DistributionPage";
import { BeautifulDefaultsPage } from "./components/HomePage/BeautifulDefaults/BeautifulDefaultsPage";
import { VitePage } from "./components/HomePage/Installation/VitePage";
import { NextJSPage } from "./components/HomePage/Installation/NextJSPage";
import { ManualSetupPage } from "./components/HomePage/Installation/ManualSetupPage";
import { ButtonPage } from "./components/HomePage/Components/ButtonPage";
import { CardPage } from "./components/HomePage/Components/CardPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/docs">
          <Route index element={<Navigate to="/docs/home" replace />} />
          <Route path="home" element={<IntroductionPage />} />
          <Route path="philosophy" element={<PhilosophyPage />} />
          <Route path="getting-started" element={<GettingStartedPage />} />
          <Route path="open-code" element={<OpenCodePage />} />
          <Route path="components">
            <Route index element={<ComponentsPage />} />
            <Route path="button" element={<ButtonPage />} />
            <Route path="card" element={<CardPage />} />
          </Route>
          <Route path="composition" element={<CompositionPage />} />
          <Route path="distribution" element={<DistributionPage />} />
          <Route
            path="beautiful-defaults"
            element={<BeautifulDefaultsPage />}
          />
          <Route path="installation">
            <Route path="vite" element={<VitePage />} />
            <Route path="nextjs" element={<NextJSPage />} />
            <Route path="manual" element={<ManualSetupPage />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
