import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Images } from "../../assets"
import "./Roadmap.scss"

export const Roadmap: React.FC = () => {
  return (
    <div className="roadmap">
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <p className="roadmap__title">ROADMAP</p>
          </Col>
        </Row>
      </Container>
      <div className="roadmap__container">
        <div className="roadmap__container__bg"></div>
        <Container className="roadmap__container__image">
          <Row>
            <Col sm={12} md={6} lg={6} className="image-container">
              <img src={Images.roadmap01} alt="roadmap1" className="roadmap-image" />
            </Col>
            <Col sm={12} md={6} lg={6} className="image-container">
              <img src={Images.roadmap02} alt="roadmap2" className="roadmap-image" />
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6} lg={6} className="image-container">
              <img src={Images.roadmap03} alt="roadmap3" className="roadmap-image" />
            </Col>
            <Col sm={12} md={6} lg={6} className="image-container">
              <img src={Images.roadmap04} alt="roadmap4" className="roadmap-image" />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="roadmap__container">
        <div className="roadmap__container__bg"></div>
        <Container className="roadmap__container__image">
          <Row>
            <Col sm={12} md={6} lg={6} className="image-container">
              <img src={Images.roadmap05} alt="roadmap5" className="roadmap-image" />
            </Col>
            <Col sm={12} md={6} lg={6} className="image-container">
              <img src={Images.roadmap06} alt="roadmap6" className="roadmap-image" />
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6} lg={6} className="image-container">
              <img src={Images.roadmap07} alt="roadmap7" className="roadmap-image" />
            </Col>
            <Col sm={12} md={6} lg={6} className="image-container">
              <img src={Images.roadmap08} alt="roadmap8" className="roadmap-image" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
