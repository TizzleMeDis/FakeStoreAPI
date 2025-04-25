import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Styles from "../../styles/LandingPage.module.css";
import { Link } from "react-router-dom";
export default function ProductSection({ products }) {
  return (
    <Container fluid className="bg-dark">
      <Row className="p-4">
        {products.map((item, key) => (
          <Col key={key} sm={12} md={6} lg={6} xl={3} className="py-2">
          <Link to={`/product-details/${item.id}`}>
          <div className={Styles.cardWrapper}> {/* wraps the animations for card and overlay */}
            <Card className={`${Styles.selectionCards} h-100 shadow bg-light`}>
              <Card.Img
                className="p-5"
                variant="top"
                width={300}
                style={{ height: "500px", objectFit: "contain" }}
                src={item.image}
                alt={item.title}
              />
            </Card>
        
            <div className={`${Styles.overlay} d-flex flex-column justify-content-center align-items-center text-white`}>
                <h6 className={Styles.overlayText}>{item.title}</h6>
                <h6 className={Styles.overlayText}>${item.price.toFixed(2)}</h6>    
            </div> {/* overlay for shadowing effect */}
          </div>
        </Link>
        </Col>
        ))}
      </Row>
    </Container>
  );
}
