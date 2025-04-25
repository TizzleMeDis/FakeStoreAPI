import React, { useState } from "react";
import { Link } from "react-router-dom"
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import NavbarStyles from '../../styles/headerStyles/Links.module.css';

export default function HamburgerMenu() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const routeNames = ["Home", "Collection", "Mens", "Womens", "Electronics", "Jewelery", "Edit-Products"];

  return (
    <span className="mx-2">
      <Button variant="black" onClick={handleShow}><i className="bi bi-list fs-4 mx-2 text-light"></i></Button>

      <Offcanvas show={show} onHide={handleClose} className="bg-dark text-light">
        <Offcanvas.Header closeButton closeVariant="white" className="bg-black text-light">
          <Offcanvas.Title>Product Pages</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="bg-black text-light">
          {routeNames.map((link, key) => (
            <Link key={key} className={`text-light m-2 p-2 fs-4 ${NavbarStyles.navLinkHover}`} to={link === "Home" ? "/" : `/products/${link.toLowerCase()}`}>
                {link}
            </Link>
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </span>
  );
}
