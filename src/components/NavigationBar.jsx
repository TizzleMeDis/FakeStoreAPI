import React from "react";
import { NavLink } from "react-router-dom";
import { Col, Row, Container, NavDropdown, Nav, Navbar } from "react-bootstrap";
import { HamburgerMenu } from "./navbar/index";
import Styles from "../styles/headerStyles/Navigation.module.css";
export default function NavigationBar() {
  return (
    <>
      <Navbar
        bg="black"
        variant="dark"
        expand="lg"
        className="p-4 text-white sticky-top"
      >
        <Container fluid>
          <Row className="w-100 gap-0">
            <Col xs={1} sm={1} md={1} lg={1} className={`text-left`}>
              <HamburgerMenu />
            </Col>
            <Col xs={1} sm={1} md={1} lg={1} className="text-left">
                <i className="bi bi-search custom-icon"></i>
            </Col>
            <Col xs={8} sm={8} md={8} lg={8} className="text-center">
              Brand Logo
            </Col>
            <Col xs={1} sm={1} md={1} lg={1} className="text-end">
              Sign up
            </Col>
            <Col xs={1} sm={1} md={1} lg={1} className="text-end">
              Shopping Cart
            </Col>
          </Row>
        </Container>
      </Navbar>

      <Navbar
        bg="black"
        variant="dark"
        expand="lg"
        className="p-2 text-white border border-dark d-none d-xl-flex"
      >
        <Container fluid className="justify-content-center">
          <Row className="w-25 my-2 mx-4 p-2 justify-content-center align-items-center text-center">
            <Col xs={0} sm={0} md={2} lg={2} className="">
              Men
            </Col>
            <Col xs={0} sm={0} md={2} lg={2} className="">
              Women
            </Col>
            <Col xs={0} sm={0} md={2} lg={2} className="">
              Home
            </Col>
            <Col xs={0} sm={0} md={2} lg={2} className="">
              Digital
            </Col>
            <Col xs={0} sm={0} md={2} lg={2} className="">
              Collab
            </Col>
            <Col xs={0} sm={0} md={2} lg={2} className="">
              Outlet
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
}