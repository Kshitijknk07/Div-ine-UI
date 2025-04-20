import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing_Page";
import IntroductionPage from "./components/HomePage/Introduction/IntroductionPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<IntroductionPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
