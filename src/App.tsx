import { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import { keepTheme } from "./components/ToggleTheme/themes"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Header } from "./components/Header/Header"
import "./App.scss"

function App() {
  useEffect(() => {
    keepTheme()
  }, [])
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
