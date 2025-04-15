import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container, Navbar } from "react-bootstrap";
import Styles from "../../styles/headerStyles/Links.module.css";
export default function NavbarLayerTwo() {
  return (
    <Navbar
      bg="black"
      variant="dark"
      expand="lg"
      className="p-2 text-white border border-dark d-none d-xl-flex"
    >
      <Container fluid className="justify-content-center">
        <Row className="w-25 flex-nowrap my-2 mx-4 p-2 justify-content-center align-items-center text-center">
          <Col className="">
            <Link to={"products/mens"} className={Styles.link}>Men</Link>
          </Col>
          <Col className="">
            <Link to={"products/womens"} className={Styles.link}>Women</Link>
          </Col>
          <Col className="">
            <Link to={"/"} className={Styles.link}>Home</Link>
          </Col>
          <Col className="">
            <Link to={"products/electronics"} className={Styles.link}>Digital</Link>
          </Col>
          <Col className="">
            <Link to={"products/jewelery"} className={Styles.link}>Accessories</Link>
          </Col>
          <Col className="">
            <Link to={"products/collection"} className={Styles.link}>Products</Link>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}
