import React from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Col, Row, Container } from 'react-bootstrap';

export default function NavigationBar() {
  return (
    <>
        <Navbar bg="black" variant="dark" expand="lg" className="p-4 text-white">
            <Container fluid>
            <Row className="w-100">
                <Col xs={1} sm={1} md={1} lg={1} className='text-left'>Hamburger Menu</Col>
                <Col xs={1} sm={1} md={1} lg={1} className='text-left'>Search Function</Col>
                <Col xs={8} sm={8} md={8} lg={8} className='text-center'>Brand Logo</Col>
                <Col xs={1} sm={1} md={1} lg={1} className='text-end'>Sign up</Col>
                <Col xs={1} sm={1} md={1} lg={1} className='text-end'>Shopping Cart</Col>
            </Row>
            </Container>
        </Navbar>

        <Navbar bg="black" variant="dark" expand="lg" className="p-2 text-white border border-dark">
        <Container fluid className='justify-content-center'>
            <Row className="w-25 my-2 mx-4 p-2 justify-content-center align-items-center text-center">
                <Col  xs={1} sm={1} md={1} lg={1} className=''>Men</Col>
                <Col  xs={1} sm={1} md={1} lg={1} className=''>Women</Col>
                <Col  xs={1} sm={1} md={1} lg={1} className=''>Home</Col>
                <Col  xs={1} sm={1} md={1} lg={1} className=''>Digital</Col>
                <Col  xs={1} sm={1} md={1} lg={1} className=''>Collab</Col>
                <Col  xs={1} sm={1} md={1} lg={1} className=''>Outlet</Col>
            </Row>
        </Container>
        </Navbar>
    </>
  )
}
