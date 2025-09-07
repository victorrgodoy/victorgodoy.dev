import { BrowserRouter, Routes, Route } from "react-router-dom"
import Splash from "./components/ui/Splash"
import Navbar from "./components/layout/Navbar"
import Home from "./pages/Home"
import Footer from "./components/layout/Footer"

function App() {
  return (
    <BrowserRouter>
      <Splash/>
      <div className="max-w-[1840px] mx-auto px-4 flex flex-col min-h-screen">
        <Navbar/>
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
