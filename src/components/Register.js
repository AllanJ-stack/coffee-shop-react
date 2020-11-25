import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Form,
  
} from "react-bootstrap";

class Register extends Component {
  render() {
    return (
      <div className="register">
        <Container>
          <Form>
            <Row>
              <Col md>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Example@email.com" />
                  <Form.Text className="text-muted">
                    We'll never share your email address.
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Col>
            </Row>
            <Button variant="dark">Login</Button>{" "}
            <Button variant="dark">Sign-up</Button>{" "}
          </Form>
          <Card className="mb-3" style={{ marginTop: "30px" }}>
            <Card.Img src="https://picsum.photos/200/70" />
            <Card.Body>
              <Card.Title>
                <h2 className="display-4">Please Join Us</h2>
              </Card.Title>
              <Card.Text>Be part of our team!</Card.Text>
              <Button variant="secondary"> Read More </Button>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
}

export default Register;
