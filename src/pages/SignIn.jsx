import React from 'react'
import { Container, Row, Col, Button, FormLabel } from 'react-bootstrap'
export default function SignIn() {
  return (
    <Container fluid className='vh-100 d-flex justify-content-center align-items-center bg-light'>
      <Row className='p-5 bg-white vw-100'>
        <Col className='m-auto'>
          <h1 className='mb-4 text-center'>Customer Login</h1>
        </Col>
        <Col className='border-start vh-100 p-5 d-flex flex-column justify-content-center'>
          <input type='email' placeholder='Email' className='form-control mb-3' />
          <input type='password' placeholder='Password' className='form-control mb-3' />
          <Button className='w-100 mb-3' variant='dark'>LOGIN</Button>
          <FormLabel className='text-center mb-1 text-dark' style={{ cursor: 'pointer' }}>
            Forgot your password?
          </FormLabel>
          <FormLabel className='text-center text-dark' style={{ cursor: 'pointer' }}>
            New customer? Sign up
          </FormLabel>
        
        </Col>
      </Row>
    </Container>
  )
}
