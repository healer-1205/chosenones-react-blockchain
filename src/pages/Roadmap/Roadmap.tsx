import React from "react"
import { Col, Container, Row } from "react-bootstrap"
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
    </div>
  )
}
