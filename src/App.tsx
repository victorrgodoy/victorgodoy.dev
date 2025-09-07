import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "./components/ui/Splash";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Footer from "./components/layout/Footer";
import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";

function App() {
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowHome(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <AnimatePresence>{!showHome && <Splash />}</AnimatePresence>

      {showHome && (
        <div className="max-w-[1840px] mx-auto px-4 flex flex-col min-h-screen overflow-hidden">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </BrowserRouter>
  );
}
export default App;
