import React, { useContext, useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { ThemeContext } from "../../context/ThemeContext"
import { NFTs } from "../../assets"
import "./Utility.scss"

export const Utility: React.FC = () => {
  const { dark } = useContext(ThemeContext)
  const [isDarkImage, setIsDarkImage] = useState(true)
  useEffect(() => {
    if (dark === "theme-dark") {
      setIsDarkImage(true)
    } else setIsDarkImage(false)
  }, [dark])
  return (
    <div className="utility">
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <p className="utility__title">UTILITY</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <p className="utility__description">
              We took the time to curate a specific set of utility items to benefit our community in a multifaceted way.
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col sm={12} md={4} lg={4} className="utility__Col">
            <img src={NFTs.NFT01} alt="#01" className="utility__NFT" />
          </Col>
          <Col sm={12} md={4} lg={4} className="utility__Col">
            <img src={NFTs.NFT02} alt="#02" className="utility__NFT" />
          </Col>
          <Col sm={12} md={4} lg={4} className="utility__Col">
            <img src={NFTs.NFT03} alt="#03" className="utility__NFT" />
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={4} lg={4} className="utility__Col">
            <img src={NFTs.NFT04} alt="#04" className="utility__NFT" />
          </Col>
          <Col sm={12} md={4} lg={4} className="utility__Col">
            <img src={NFTs.NFT05} alt="#05" className="utility__NFT" />
          </Col>
          <Col sm={12} md={4} lg={4} className="utility__Col">
            <img src={NFTs.NFT06} alt="#06" className="utility__NFT" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
