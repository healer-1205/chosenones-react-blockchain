import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { NFTs } from "../../assets"
import "./Utility.scss"

export const Utility: React.FC = () => {
  const nfts = [NFTs.NFT01, NFTs.NFT02, NFTs.NFT03, NFTs.NFT04, NFTs.NFT05, NFTs.NFT06]
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
          {nfts.map((nft, index) => {
            return (
              <Col key={index} sm={12} md={4} lg={4} className="utility__Col">
                <img
                  src={nft}
                  alt="NFT"
                  className="utility__NFT"
                  onClick={(e) => {
                    e.preventDefault()
                    navigate("/util")
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
