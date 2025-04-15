import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function ShoppingBag() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <span className="mx-2">
      <Button variant="black" onClick={handleShow}>
        <i className="bi bi-bag fs-4 mx-2 text-white"></i>
      </Button>
      <Offcanvas
        show={show}
        placement="end"
        onHide={handleClose}
        className="bg-light text-dark"
      >
        <Offcanvas.Header closeButton closeVariant="black">
          <Offcanvas.Title>Shopping List</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="bg-light text-dark"></Offcanvas.Body>
      </Offcanvas>
    </span>
  );
}
