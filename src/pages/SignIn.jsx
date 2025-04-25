import React, { useState } from "react";
import { Container, Row, Col, Button, FormLabel, Form } from "react-bootstrap";
export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [touched, setTouched] = useState({ email: false, password: false });

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validatePassword = (password) =>
    password.length >= 6 && /^(?=.*[A-Z])(?=.*\d).+$/.test(password);

  const emailIsValid = validateEmail(email);
  const passwordIsValid = validatePassword(password);

  return (
    <Container
      fluid
      className="vh-100 d-flex justify-content-center align-items-center bg-light"
    >
      <Form>
        <Row className="p-5 bg-white vw-100">
          <Col className="m-auto" md={12} lg={6}>
            <h1 className="text-center">Customer Login</h1>
          </Col>
          <Col
            className="border-start vh-100 p-5 d-flex flex-column justify-content-center"
            md={12}
            lg={6}
          >
            <Form.Group className="m-3">
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
                isValid={touched.email && emailIsValid}
                isInvalid={touched.email && !emailIsValid}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid email address.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="m-3">
              <Form.Control
                type="password"
                placeholder="Password (min 6 chars, 1 uppercase, 1 number)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() =>
                  setTouched((prev) => ({ ...prev, password: true }))
                }
                isValid={touched.password && passwordIsValid}
                isInvalid={touched.password && !passwordIsValid}
              />
              <Form.Control.Feedback type="invalid">
                Password must:
                <ul className="mb-0">
                  {!/[A-Z]/.test(password) && (
                    <li>Include at least one uppercase letter</li>
                  )}
                  {!/\d/.test(password) && <li>Include at least one number</li>}
                  {password.length < 6 && (
                    <li>Be at least 6 characters long</li>
                  )}
                </ul>
              </Form.Control.Feedback>
            </Form.Group>

            <Button className="m-3 w-25" variant="dark">
              LOGIN
            </Button>
            
            <FormLabel
              className="text-center m-1 text-dark"
              style={{ cursor: "pointer" }}
            >
              Forgot your password?
            </FormLabel>
            <FormLabel
              className="text-center m-1 text-dark"
              style={{ cursor: "pointer" }}
            >
              New customer? Sign up
            </FormLabel>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
