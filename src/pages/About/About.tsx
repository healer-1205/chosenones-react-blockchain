import React, { useContext, useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { ThemeContext } from "../../context/ThemeContext"
import "./About.scss"
import { Images, svgIcons } from "../../assets"

export const About: React.FC = () => {
  const { dark } = useContext(ThemeContext)
  const [isDarkImage, setIsDarkImage] = useState(true)
  useEffect(() => {
    if (dark === "theme-dark") {
      setIsDarkImage(true)
    } else setIsDarkImage(false)
  }, [dark])
  return (
    <div className="about">
      {isDarkImage ? (
        <img src={Images.aboutMainBgDark} alt="MainBG" className="bgImg" />
      ) : (
        <img src={Images.aboutMainBgLight} alt="MainBG" className="bgImg" />
      )}
      <Container className="content-container">
        <Row>
          <Col xs={12} lg={12}>
            <p className="title">WHO ARE WE?</p>
            <p className="description">
              Innovative, progressive and inspirational, The Chosen Ones look to redifine the approach of real world
              utility by drawing on years of collective knowledge and experience while striving to build a culture
              driven identity.
            </p>
            <p className="description">
              Our purpose, vision, and attitude guide the way we run our company, how we work with our partners, and how
              we engage with our community. They define who we are.
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="content-container">
        <Row>
          <Col xs={12} lg={12}>
            <p className="title">OUR VISION</p>
            <p className="description">
              The Chosen One’s vision is to inspire, educate and entertain you in ways you never thought possible and
              knew you needed. We want to build a community that encourages and supports one another through all walks
              of life, and a network that helps them get there.
            </p>
            <p className="description">
              Using our industry connections and business experience, we will partner up with some of the biggest names
              across multiple industries to give back to our community. The NFT space is contiously evolving but one
              thing that will always remain constant in our vision and beliefs, is educating others in the hopes of
              providing knowledge and success into their lives.
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="content-container">
        <Row>
          <Col xs={12} lg={12}>
            <p className="title">OUR MISSION</p>
            <p className="description">
              Using our industry connections and business experience, we have partnered up with some of the biggest
              names across multiple industries to give back to our community. The NFT space is contiously evolving but
              one thing that will always remain constant in our vision and beliefs, is educating others in the hopes of
              providing knowledge and success into their lives.
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="content-container">
        <Row>
          <Col xs={12} lg={12}>
            <p className="title">OUR STRATEGY</p>
            <p className="description">
              1. We will continue to grow The Chosen One’s brand globally through a variety of partnerships,
              collaborations and by bringing value to our community and the NFT space as a whole. <br />
              2. We will continue to invest in inspiring and educating as many people as we can. Through NFT’s, we have
              the power and opportunities to change lives.
              <br />
              3.Our strategy is all about changing at pace, inspiring and innovating for the future with a passion and
              vision for our community and industry.
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="content-container">
        <Row style={{ marginBottom: "5%" }}>
          <Col xs={12} lg={12}>
            <p className="title">OUR COMMUNITY DELIVERABLES</p>
          </Col>
        </Row>
        <Row style={{ marginBottom: "5%" }}>
          <Col xs={12} md={12} lg={6} xl={6}>
            {isDarkImage ? (
              <img src={svgIcons.darkHome} alt="HomeSvg" className="svgIcon" />
            ) : (
              <img src={svgIcons.lightHome} alt="HomeSvg" className="svgIcon" />
            )}
            <p className="description">
              Real Estate
              <br />
              <br />
              In a constant effort to add more utility for the $ONE token, We will create tradable lands on maps you can
              buy/sell/trade only with $ONE tokens.
            </p>
          </Col>
          <Col xs={12} md={12} lg={6} xl={6}>
            {isDarkImage ? (
              <img src={svgIcons.darkShare} alt="ShareSvg" className="svgIcon" />
            ) : (
              <img src={svgIcons.lightShare} alt="ShareSvg" className="svgIcon" />
            )}
            <p className="description">
              Cascade - Simplify your taxes
              <br />
              <br />
              The Tax offices have put Crypto Currencies on notice, and it can be daunting to new and experienced
              traders trying to collect years of past transactions and your capital gains tax. Cascade can automatically
              pull 600+ Exchanges and Wallets to give your comprehensive tax report
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} lg={6} xl={6}>
            {isDarkImage ? (
              <img src={svgIcons.darkCreate} alt="CreateSvg" className="svgIcon" />
            ) : (
              <img src={svgIcons.lightCreate} alt="CreateSvg" className="svgIcon" />
            )}
            <p className="description">
              Create to Earn Accelerator Program
              <br />
              <br />
              In a constant effort to add more utility for the $ONE token, We will create tradable lands on maps you can
              buy/sell/trade only with $ONE tokens.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
