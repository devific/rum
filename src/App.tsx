import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { AgeGate } from "@/components/layout/AgeGate";
import { useScrollProgress } from "@/hooks/useScrollProgress";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import RumListing from "@/pages/RumListing";
import RumDetail from "@/pages/RumDetail";
import StoreLocator from "@/pages/StoreLocator";
import DistilleryTour from "@/pages/DistilleryTour";
import { ScrollToTop } from "./components/ScrollToTop";

function ScrollProgressBar() {
  const progress = useScrollProgress();
  return (
    <motion.div
      className="fixed top-0 left-0 h-[3px] z-[100] origin-left"
      style={{
        width: `${progress}%`,
        background: "linear-gradient(to right, #F5A623, #FF5C35, #C8F135)",
      }}
    />
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} className="flex-grow flex flex-col">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rums" element={<RumListing />} />
          <Route path="/rums/:id" element={<RumDetail />} />
          <Route path="/stores" element={<StoreLocator />} />
          <Route path="/distillery" element={<DistilleryTour />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AgeGate />
      <CustomCursor />
      <div className="grain-overlay" />
      <ScrollProgressBar />

      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
