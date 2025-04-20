import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing_Page";
import Sidebar_Page from "./components/HomePage/Sidebar_Page";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Sidebar_Page />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
