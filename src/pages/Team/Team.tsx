import React, { useContext, useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { ThemeContext } from "../../context/ThemeContext"
import { Images, svgIcons } from "../../assets"
import "./Team.scss"

export const Team: React.FC = () => {
  const { dark } = useContext(ThemeContext)
  const [isDarkImage, setIsDarkImage] = useState(true)
  useEffect(() => {
    if (dark === "theme-dark") {
      setIsDarkImage(true)
    } else setIsDarkImage(false)
  }, [dark])
  return (
    <div className="team">
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <p className="team__title">TEAM</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <p className="team__description">A big old spiel about our utility etc</p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col sm={12} md={4} lg={4} className="team__Col">
            <div className="team__container">
              <img src={Images.team1} alt="team1" className="team__container__image" />
              {isDarkImage ? (
                <div className="team__container__socials">
                  <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                    <img src={svgIcons.darkTwitterIcon} alt="Twitter" className="team__container__socials__icon" />
                  </a>
                  <a href="https://www.google.com/" target="_blank" rel="noreferrer">
                    <img src={svgIcons.darkMsgIcon} alt="Msg" className="team__container__socials__icon" />
                  </a>
                  <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                    <img src={svgIcons.darkFacebookIcon} alt="Facebook" className="team__container__socials__icon" />
                  </a>
                  <a href="https://www.google.com/" target="_blank" rel="noreferrer">
                    <img src={svgIcons.darkBeIcon} alt="Be" className="team__container__socials__icon" />
                  </a>
                </div>
              ) : (
                <div className="team__container__socials">
                  <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                    <img src={svgIcons.lightTwitterIcon} alt="Twitter" className="team__container__socials__icon" />
                  </a>
                  <a href="https://www.google.com/" target="_blank" rel="noreferrer">
                    <img src={svgIcons.lightMsgIcon} alt="Msg" className="team__container__socials__icon" />
                  </a>
                  <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                    <img src={svgIcons.lightFacebookIcon} alt="Facebook" className="team__container__socials__icon" />
                  </a>
                  <a href="https://www.google.com/" target="_blank" rel="noreferrer">
                    <img src={svgIcons.lightBeIcon} alt="Be" className="team__container__socials__icon" />
                  </a>
                </div>
              )}
            </div>
          </Col>
          <Col sm={12} md={4} lg={4} className="team__Col">
            <div className="team__container">
              <img src={Images.team2} alt="team1" className="team__container__image" />
              {isDarkImage ? (
                <div className="team__container__socials">
                  <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                    <img src={svgIcons.darkTwitterIcon} alt="Twitter" className="team__container__socials__icon" />
                  </a>
                  <a href="https://www.google.com/" target="_blank" rel="noreferrer">
                    <img src={svgIcons.darkMsgIcon} alt="Msg" className="team__container__socials__icon" />
                  </a>
                  <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                    <img src={svgIcons.darkFacebookIcon} alt="Facebook" className="team__container__socials__icon" />
                  </a>
                  <a href="https://www.google.com/" target="_blank" rel="noreferrer">
                    <img src={svgIcons.darkBeIcon} alt="Be" className="team__container__socials__icon" />
                  </a>
                </div>
              ) : (
                <div className="team__container__socials">
                  <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                    <img src={svgIcons.lightTwitterIcon} alt="Twitter" className="team__container__socials__icon" />
                  </a>
                  <a href="https://www.google.com/" target="_blank" rel="noreferrer">
                    <img src={svgIcons.lightMsgIcon} alt="Msg" className="team__container__socials__icon" />
                  </a>
                  <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                    <img src={svgIcons.lightFacebookIcon} alt="Facebook" className="team__container__socials__icon" />
                  </a>
                  <a href="https://www.google.com/" target="_blank" rel="noreferrer">
                    <img src={svgIcons.lightBeIcon} alt="Be" className="team__container__socials__icon" />
                  </a>
                </div>
              )}
            </div>
          </Col>
          <Col sm={12} md={4} lg={4} className="team__Col">
            <div className="team__container">
              <img src={Images.team3} alt="team1" className="team__container__image" />
              {isDarkImage ? (
                <div className="team__container__socials">
                  <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                    <img src={svgIcons.darkTwitterIcon} alt="Twitter" className="team__container__socials__icon" />
                  </a>
                  <a href="https://www.google.com/" target="_blank" rel="noreferrer">
                    <img src={svgIcons.darkMsgIcon} alt="Msg" className="team__container__socials__icon" />
                  </a>
                  <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                    <img src={svgIcons.darkFacebookIcon} alt="Facebook" className="team__container__socials__icon" />
                  </a>
                  <a href="https://www.google.com/" target="_blank" rel="noreferrer">
                    <img src={svgIcons.darkBeIcon} alt="Be" className="team__container__socials__icon" />
                  </a>
                </div>
              ) : (
                <div className="team__container__socials">
                  <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                    <img src={svgIcons.lightTwitterIcon} alt="Twitter" className="team__container__socials__icon" />
                  </a>
                  <a href="https://www.google.com/" target="_blank" rel="noreferrer">
                    <img src={svgIcons.lightMsgIcon} alt="Msg" className="team__container__socials__icon" />
                  </a>
                  <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                    <img src={svgIcons.lightFacebookIcon} alt="Facebook" className="team__container__socials__icon" />
                  </a>
                  <a href="https://www.google.com/" target="_blank" rel="noreferrer">
                    <img src={svgIcons.lightBeIcon} alt="Be" className="team__container__socials__icon" />
                  </a>
                </div>
              )}
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={4} lg={4} className="team__Col">
            <div className="team__container">
              <img src={Images.team4} alt="team1" className="team__container__image" />
              {isDarkImage ? (
                <div className="team__container__socials">
                  <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                    <img src={svgIcons.darkTwitterIcon} alt="Twitter" className="team__container__socials__icon" />
                  </a>
                  <a href="https://www.google.com/" target="_blank" rel="noreferrer">
                    <img src={svgIcons.darkMsgIcon} alt="Msg" className="team__container__socials__icon" />
                  </a>
                  <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                    <img src={svgIcons.darkFacebookIcon} alt="Facebook" className="team__container__socials__icon" />
                  </a>
                  <a href="https://www.google.com/" target="_blank" rel="noreferrer">
                    <img src={svgIcons.darkBeIcon} alt="Be" className="team__container__socials__icon" />
                  </a>
                </div>
              ) : (
                <div className="team__container__socials">
                  <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                    <img src={svgIcons.lightTwitterIcon} alt="Twitter" className="team__container__socials__icon" />
                  </a>
                  <a href="https://www.google.com/" target="_blank" rel="noreferrer">
                    <img src={svgIcons.lightMsgIcon} alt="Msg" className="team__container__socials__icon" />
                  </a>
                  <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                    <img src={svgIcons.lightFacebookIcon} alt="Facebook" className="team__container__socials__icon" />
                  </a>
                  <a href="https://www.google.com/" target="_blank" rel="noreferrer">
                    <img src={svgIcons.lightBeIcon} alt="Be" className="team__container__socials__icon" />
                  </a>
                </div>
              )}
            </div>
          </Col>
          <Col sm={12} md={4} lg={4} className="team__Col">
            <div className="team__container">
              <img src={Images.team5} alt="team1" className="team__container__image" />
              {isDarkImage ? (
                <div className="team__container__socials">
                  <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                    <img src={svgIcons.darkTwitterIcon} alt="Twitter" className="team__container__socials__icon" />
                  </a>
                  <a href="https://www.google.com/" target="_blank" rel="noreferrer">
                    <img src={svgIcons.darkMsgIcon} alt="Msg" className="team__container__socials__icon" />
                  </a>
                  <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                    <img src={svgIcons.darkFacebookIcon} alt="Facebook" className="team__container__socials__icon" />
                  </a>
                  <a href="https://www.google.com/" target="_blank" rel="noreferrer">
                    <img src={svgIcons.darkBeIcon} alt="Be" className="team__container__socials__icon" />
                  </a>
                </div>
              ) : (
                <div className="team__container__socials">
                  <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                    <img src={svgIcons.lightTwitterIcon} alt="Twitter" className="team__container__socials__icon" />
                  </a>
                  <a href="https://www.google.com/" target="_blank" rel="noreferrer">
                    <img src={svgIcons.lightMsgIcon} alt="Msg" className="team__container__socials__icon" />
                  </a>
                  <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                    <img src={svgIcons.lightFacebookIcon} alt="Facebook" className="team__container__socials__icon" />
                  </a>
                  <a href="https://www.google.com/" target="_blank" rel="noreferrer">
                    <img src={svgIcons.lightBeIcon} alt="Be" className="team__container__socials__icon" />
                  </a>
                </div>
              )}
            </div>
          </Col>
          <Col sm={12} md={4} lg={4} className="team__Col">
            <div className="team__container">
              <img src={Images.team6} alt="team1" className="team__container__image" />
              {isDarkImage ? (
                <div className="team__container__socials">
                  <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                    <img src={svgIcons.darkTwitterIcon} alt="Twitter" className="team__container__socials__icon" />
                  </a>
                  <a href="https://www.google.com/" target="_blank" rel="noreferrer">
                    <img src={svgIcons.darkMsgIcon} alt="Msg" className="team__container__socials__icon" />
                  </a>
                  <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                    <img src={svgIcons.darkFacebookIcon} alt="Facebook" className="team__container__socials__icon" />
                  </a>
                  <a href="https://www.google.com/" target="_blank" rel="noreferrer">
                    <img src={svgIcons.darkBeIcon} alt="Be" className="team__container__socials__icon" />
                  </a>
                </div>
              ) : (
                <div className="team__container__socials">
                  <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                    <img src={svgIcons.lightTwitterIcon} alt="Twitter" className="team__container__socials__icon" />
                  </a>
                  <a href="https://www.google.com/" target="_blank" rel="noreferrer">
                    <img src={svgIcons.lightMsgIcon} alt="Msg" className="team__container__socials__icon" />
                  </a>
                  <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                    <img src={svgIcons.lightFacebookIcon} alt="Facebook" className="team__container__socials__icon" />
                  </a>
                  <a href="https://www.google.com/" target="_blank" rel="noreferrer">
                    <img src={svgIcons.lightBeIcon} alt="Be" className="team__container__socials__icon" />
                  </a>
                </div>
              )}
              <div></div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
