import React, { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import { Images, svgIcons } from "../../assets"
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
        <img src={Images.homeMainBgDark} alt="MainBG" className="home__bgImg" />
      ) : (
        <img src={Images.homeMainBgLight} alt="MainBG" className="home__bgImg" />
      )}
      <div className="home__socials">
        {isDarkImage ? (
          <div>
            <img src={svgIcons.darkTwitterIcon} alt="Twitter" width="30" height="30" className="home__socials__icon" />
            <img src={svgIcons.darkMsgIcon} alt="Message" width="30" height="30" className="home__socials__icon" />
            <img
              src={svgIcons.darkFacebookIcon}
              alt="Facebook"
              width="30"
              height="30"
              className="home__socials__icon"
            />
            <img src={svgIcons.darkBeIcon} alt="Be" className="home__socials__icon" />
          </div>
        ) : (
          <div>
            <img src={svgIcons.lightTwitterIcon} alt="Twitter" className="home__socials__icon" />
            <img src={svgIcons.lightMsgIcon} alt="Message" className="home__socials__icon" />
            <img
              src={svgIcons.lightFacebookIcon}
              alt="Facebook"
              width="30"
              height="30"
              className="home__socials__icon"
            />
            <img src={svgIcons.lightBeIcon} alt="Be" className="home__socials__icon" />
          </div>
        )}
      </div>
      <p className="home__introduction1">WE ARE THE ONES WHO</p>
      <p className="home__introduction2">REFUSED TO GIVE UP.</p>
    </div>
  )
}
