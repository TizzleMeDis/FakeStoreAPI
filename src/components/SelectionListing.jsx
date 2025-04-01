import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

export default function SelectionListing({
  products
}) {
  console.log("From ListingSelection: ", products);
  return (
    <Container fluid className="m-5 p-5">
      <Row className="text-center my-4 p-4">
        <h2>Explore the Finess Collections</h2>
      </Row>
      <Row className="g-5">
        {products.map((item, id) => (
          <Col key={id} xs={12} sm={6} md={4} lg={3}>
            <Card className="h-100 shadow">
              <Card.Img variant="top" src={item.image} alt={item.title} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
