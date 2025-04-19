import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container, Navbar, Button } from "react-bootstrap";
import { HamburgerMenu, ShoppingBag } from "./index";

import Logo from "../../assets/ChatGPTImageLogo.png"

export default function NavbarLayerOne() {
  return (
    <Navbar
      bg="black"
      variant="dark"
      expand="lg"
      className="p-4 text-white sticky-top"
    >
      <Container fluid>
        <Row className="w-100">
          <Col span={1} className="text-left">
            <HamburgerMenu />
            <Button className="bg-black text-white border-black">
              <i className="bi bi-search fs-4 mx-2"></i>
            </Button>
          </Col>

          <Col span={10} className="text-center overflow-hidden">
            <Link to="/">
                <img src={Logo} style={{ width: "3rem", scale: "3" }} alt="Logo" />
            </Link>
          </Col>

          <Col span={1} className="text-end">
            <Button className="bg-black text-white border-black">
              <i className="bi bi-person fs-4 mx-2"></i>
            </Button>
            <ShoppingBag />
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}
