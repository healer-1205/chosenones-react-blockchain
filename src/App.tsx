import { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
// import { keepTheme } from "./components/ToggleTheme/themes"
import { ThemeProvider } from "./context/ThemeContext"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Header } from "./components/Header/Header"
import "./App.scss"

function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
