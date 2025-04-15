import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Styles from "../../styles/LandingPage.module.css"
import { Link } from "react-router-dom";

export default function SelectionListing({
  mensProducts,
  womensProducts,
  jeweleryProducts,
  electronicProducts,
}) {
  const items = [
    mensProducts?.[1],
    womensProducts?.[0],
    jeweleryProducts?.[0],
    electronicProducts?.[0],
  ].filter(Boolean); // Remove undefined values

  return (
    <Container fluid className="m-5 p-5">
      <Row className="text-center my-4 p-4">
        <h2>Explore the Finesse Collections</h2>
      </Row>
      <Row className="g-5">
        {items.map((item, id) => (
          <Col key={id} xs={12} sm={6} md={6} lg={3} xl={3}>
            <Link to={`products/${item.category.match(/^[^\s]+/)?.[0].replace(/[^a-zA-Z]/g, '').toLowerCase() || "default"}`} className="text-dark text-decoration-none">
              <Card className={`${Styles.selectionCards} h-100 shadow`}>
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
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
