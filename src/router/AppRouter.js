import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import pages
import Splash from "../pages/PageSplash";
import PageHome from "../pages/PageHome";
import PageSingle from "../pages/PageSingle";
// import AnimatedRoutes from "./AnimatedRoutes";
//Import Components
import Header from "../components/Header";
import Footer from "../components/Footer";

//sass
import "../scss/styles.scss";

function AppRouter() {
  return (
    <div className="site-wrapper">
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Splash />} />
        </Routes>
        <Routes>
          <Route path="/home" element={<Header />} />
          <Route path="/single/:projectId" element={<Header />} />
        </Routes>
        <main>
          <Routes>
            <Route path="/home" element={<PageHome />} />
            <Route path="/single/:projectId" element={<PageSingle />} />
          </Routes>
        </main>
        <Routes>
          <Route path="/home" element={<Footer />} />
          <Route path="/single/:projectId" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;
