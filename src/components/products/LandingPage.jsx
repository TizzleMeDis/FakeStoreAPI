import React from 'react'
import  Container from 'react-bootstrap/Container'

export default function LandingPage({image, caption}) {
  return (
    <Container fluid className="text-light d-flex justify-content-center align-items-center fs-1" style={
        { 
            height: '75vh',
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }
    }>
        {caption}
    </Container>
  )
}
