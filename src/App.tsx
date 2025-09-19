import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./pages/home/Home";
import Project from "./pages/project/Project";
import Footer from "./components/layout/Footer";
import Animation from "./components/interface/StartAnimation";
import { AnimatePresence } from "motion/react";
import { useState } from "react";
import Navbar from "./components/interface/Navbar";

function App() {
  const [showAnimation, setShowAnimation] = useState(true);

  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        {showAnimation && (
          <Animation key="animation" setShowAnimation={setShowAnimation} />
        )}
      </AnimatePresence>

      {!showAnimation && (
        <div className="h-dvh flex flex-col px-10 py-7">
          <Header />
          <AnimatePresence mode="wait">
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home key="home" />} />
                <Route path="/project" element={<Project key="project" />} />
              </Routes>
            </main>
            <Navbar />
          </AnimatePresence>
          <Footer />
        </div>
      )}
    </BrowserRouter>
  );
}
export default App;
