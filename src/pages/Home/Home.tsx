import React, { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import MainDarkBGImage from "../../assets/images/home-mainbg-dark.png"
import MainLightBGImage from "../../assets/images/home-mainbg-light.png"
import "./Home.scss"

export const Home: React.FC = () => {
  const { dark } = useContext(ThemeContext)
  const [isDarkImage, setIsDarkImage] = useState(true)
  useEffect(() => {
    if (dark === "theme-dark") {
      setIsDarkImage(true)
    } else setIsDarkImage(false)
  }, [dark])
  return (
    <div className="home">
      {isDarkImage ? (
        <img src={MainDarkBGImage} alt="MainBG" className="home__bgImg" />
      ) : (
        <img src={MainLightBGImage} alt="MainBG" className="home__bgImg" />
      )}
    </div>
  )
}
