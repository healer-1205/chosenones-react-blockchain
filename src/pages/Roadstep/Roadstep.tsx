import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { roads } from "../../data/roads"
import "./Roadstep.scss"

export const Roadstep: React.FC = () => {
  const params = useParams()
  interface IRoad {
    id: number
    imageUrl: string
    roadTitle: string
    roadDescription: string
    backgroundColor: string
  }
  let datum: IRoad[] = [{ id: 0, imageUrl: "", roadTitle: "", roadDescription: "", backgroundColor: "" }]
  if (params.id) {
    const id = parseInt(params.id, 10)
    datum = roads.filter((item) => item.id === id)
  }
  const road = datum[0]
  return (
    <div className="roadstep">
      <div className="roadstep__container">
        <div className="roadstep__container__bg"></div>
        <Container className="roadstep__container__content">
          <Row>
            <Col sm={12} md={12} lg={6} className="roadstep__container__content__description">
              <p className="roadId">0{road.id}</p>
              <p className="title">{road.roadTitle}</p>
              <p className="description">{road.roadDescription}</p>
            </Col>
            <Col sm={12} md={12} lg={6} className="roadstep__container__content__image">
              <img src={road.imageUrl} alt="ROAD" className="roadImage" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
