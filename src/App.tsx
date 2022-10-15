import { useEffect, useContext } from "react"
import { Route, Routes } from "react-router-dom"
import { ThemeContext, ThemeProvider } from "./context/ThemeContext"
import { Home } from "./pages/Home"
import { Utility } from "./pages/Utility"
import { About } from "./pages/About"
import { Team } from "./pages/Team"
import { Roadmap } from "./pages/Roadmap"
import { Header } from "./components/Header/Header"
import "./App.scss"

function App() {
  const { dark } = useContext(ThemeContext)
  useEffect(() => {
    if (dark === "theme-dark") {
      document.documentElement.className = "theme-dark"
    } else document.documentElement.className = "theme-light"
  }, [dark])
  return (
    <>
      <ThemeProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/utility" element={<Utility />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/roadmap" element={<Roadmap />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
