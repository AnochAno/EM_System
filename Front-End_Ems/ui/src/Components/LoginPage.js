import React from 'react';
import { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const navigate = useNavigate();

  const handleSignIn = () => {
      navigate('/home');

  };
  

  return (
    <Container  style={{ minHeight: '100vh' }}>
      <Row className="justify-content-center">
        <Col md={8} lg={6} xl={4}>
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
            <FaFacebook className="me-2" style={{ fontSize: '2em', color: '#3b5998' }} />
            <FaGoogle className="me-2" style={{ fontSize: '2em', color: '#db4437' }} />
            <FaTwitter style={{ fontSize: '2em', color: '#1da1f2' }} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
