import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Styles from "../../styles/LandingPage.module.css";
export default function ProductSection({ products }) {
  return (
    <Container fluid className="bg-dark">
      <Row className="p-4">
        {products.map((item, key) => (
          <Col key={key} sm={3} className="py-2">
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
              <Card.Body>
                <div className="d-flex justify-content-center">
                  <Card.Text>{item.category}</Card.Text>
                </div>
              </Card.Body>
            </Card>
        
            <div className={Styles.overlay}></div> {/* overlay for shadowing effect */}
          </div>
        </Col>
        ))}
      </Row>
    </Container>
  );
}
