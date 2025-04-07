import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

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
        <h2>Explore the Finess Collections</h2>
      </Row>
      <Row className="g-5">
        {items.map((item, id) => (
          <Col key={id} xs={12} sm={6} md={6} lg={3} xl={3}>
            <Card className="h-100 shadow">
              <Card.Img
                className="p-5"
                variant="top"
                width={300}
                height={500}
                src={item.image}
                alt={item.title}
              />
              <Card.Body>
                <div className="d-flex justify-content-center">
                  <Card.Text>{item.category}</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
