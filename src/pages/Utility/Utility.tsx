import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { nfts } from "../../data/utils"
import "./Utility.scss"

export const Utility: React.FC = () => {
  const navigate = useNavigate()
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
          {nfts.map((nft) => {
            return (
              <Col key={nft.id} sm={12} md={4} lg={4} className="utility__Col">
                <img
                  src={nft.imageUrl}
                  alt="NFT"
                  className="utility__NFT"
                  onClick={(e) => {
                    e.preventDefault()
                    navigate(`/utility/${nft.id}`)
                  }}
                />
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}
