import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { nfts } from "../../data/utils"
import "./Util.scss"

export const Util: React.FC = () => {
  const params = useParams()
  interface INft {
    id: number
    imageUrl: string
    title: string
    description: string
  }
  let datum: INft[] = [{ id: 0, imageUrl: "", title: "", description: "" }]
  if (params.id) {
    const id = parseInt(params.id, 10)
    datum = nfts.filter((item) => item.id === id)
  }
  const util = datum[0]
  return (
    <div className="util">
      <div className="util__container">
        <div className="util__container__bg"></div>
        <Container className="util__container__content">
          <Row>
            <Col sm={12} md={12} lg={6} className="util__container__content__description">
              <p className="nftId">0{util.id}</p>
              <p className="title">{util.title}</p>
              <p className="description">{util.description}</p>
            </Col>
            <Col sm={12} md={12} lg={6} className="util__container__content__image">
              <img src={util.imageUrl} alt="NFT" className="nftImage" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
