import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import NavbarStyles from '../../styles/headerStyles/Links.module.css';

export default function HamburgerMenu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="light" onClick={handleShow}>Menu</Button>

      <Offcanvas show={show} onHide={handleClose} className="bg-dark text-light">
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="bg-dark text-light">
          {["Mens", "Womens", "Home", "Electronics", "Jewelery"].map((link, key) => (
            <Nav.Link key={key} className={`text-light m-2 p-2 fs-4 ${NavbarStyles.navLinkHover}`} href="#">
                {link}
            </Nav.Link>
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
