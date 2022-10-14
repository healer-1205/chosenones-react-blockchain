import React from "react"
import MainBGImage from "../../assets/images/home-mainbg-dark.png"

export const Home: React.FC = () => {
  return (
    <div className="home">
      <img src={MainBGImage} alt="MainBG" className="bgImg" />
    </div>
  )
}
