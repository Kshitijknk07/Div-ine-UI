import { type ReactElement } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/Landing_Page";
import {
  IntroductionPage,
  PhilosophyPage,
  GettingStartedPage,
  OpenCodePage,
  ComponentsPage,
  CompositionPage,
  DistributionPage,
  BeautifulDefaultsPage,
  VitePage,
  NextJSPage,
  ManualSetupPage,
  ButtonPage,
  CardPage,
  BadgePage,
  DocumentationPage,
  ExamplesPage,
  SchemaPage,
} from "./components/HomePage";

/**
 * Main application component that handles routing
 *
 * @returns {ReactElement} The application component
 */
const App = (): ReactElement => {
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
            <Route path="badge" element={<BadgePage />} />
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
          <Route path="documentation" element={<DocumentationPage />} />
          <Route path="schema" element={<SchemaPage />} />
          <Route path="examples" element={<ExamplesPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
