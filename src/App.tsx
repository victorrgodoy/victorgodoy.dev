import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/layout/Footer";
import Animation from "./components/interface/Animation";
import { AnimatePresence } from "motion/react";
import { useState } from "react";

function App() {
  const [showAnimation, setShowAnimation] = useState(true);

  return (
    <BrowserRouter>
    <AnimatePresence mode="wait">
      {showAnimation && ( <Animation key="animation" setShowAnimation={setShowAnimation}/> )}
    </AnimatePresence>

    {!showAnimation && (
      <div className="flex flex-col h-svh overflow-hidden">
          <Navbar/>
          <AnimatePresence mode="wait">
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home key="home"/>} />
              </Routes>
            </main>
            <Footer/>
          </AnimatePresence>
        </div>
    )}
    </BrowserRouter>
  );
}
export default App;

// fewf


