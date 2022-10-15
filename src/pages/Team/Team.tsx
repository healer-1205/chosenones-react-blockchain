import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import "./Team.scss"

export const Team: React.FC = () => {
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
          <Col sm={12} md={4} lg={4} className="team__Col"></Col>
        </Row>
      </Container>
    </div>
  )
}
