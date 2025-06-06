import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Styles from '../styles/headerStyles/Links.module.css'
export default function Footer() {
    const links = ['Collection', 'Mens', 'Womens', 'Electronics', 'Jewelery']
  return (
    <Container fluid className='bg-black text-light pt-5 p-5'>
        <Row className=''>
            <Col>
                <h6>Pages</h6>
                {links.map((link, key) => (
                    <Link key={key} to={`products/${link.toLowerCase()}`} className={Styles.footerLink}>{link}</Link>
                ))}
            </Col>
            <Col>
                <h6 className=''>Information</h6>
                <p>Returns</p>
                <p>Shipping</p>
                <p>Terms</p>
                <p>Privacy</p>
                <p>FAQ</p>
                <p>Stores</p>
            </Col>
            <Col>
                <h6 className=''>More</h6>
                <p>Contact</p>
                <p>Blog</p>
                <p>About</p>
                <p>Affiliate Program</p>
                <p>Member</p>
                <p>Wholesale</p>
            </Col>
            <Col>
                <h6 className=''>Follow us</h6>
                <p>Twitter</p>
                <p>Facebook</p>
                <p>Pinterest</p>
                <p>Instagram</p>
                <p>TikTok</p>
            </Col>
        </Row>
        <hr />
        <Row className='align-items-center w-100 justify-content-between'>
            <Col xs={12} sm={12} md={2} lg={2} xl={2}>
                <p>Language</p>
                <select>
                    <option>English</option>
                </select>
            </Col>
            <Col xs={12} sm={12} md={2} lg={2} xl={2}>
                <p>Country/Region</p>
                <select>
                    <option>United States(USD $)</option>
                </select>
            </Col>
            <Col className='text-end' xs={12} sm={12} md={8} lg={8} xl={8}>
                <p>Copyright &copy; 2025 AntMan</p>
            </Col>
        </Row>
    </Container>
  )
}
