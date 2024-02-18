import React from 'react';
import { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Handle sign-in logic here
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form>
            <h2 className="text-center mb-4">Sign In</h2>
            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button
              className="w-100 mt-3"
              variant="primary"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                handleSignIn();
              }}
            >
              Sign In
            </Button>
          </Form>
          <hr className="my-4" />
          <h6 className="text-center">Or sign in with social media</h6>
          <div className="d-flex justify-content-center mt-3">
            <Button variant="primary" className="me-2">
              Facebook
            </Button>
            <Button variant="danger" className="me-2">
              Google
            </Button>
            <Button variant="info">
              Twitter
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
