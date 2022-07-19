import { Routes, Route, useLocation } from "react-router-dom";
import PageHome from "../pages/PageHome";
import PageSingle from "../pages/PageSingle";

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation;
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/home" element={<PageHome />} />
        <Route path="/single/:projectId" element={<PageSingle />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
