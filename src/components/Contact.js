import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Jumbotron,
} from "react-bootstrap";

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <div className="jumbotron">
          <Jumbotron>
            <h1 className=" display-1">Contact Us! </h1>
            <p className="bg-none">
              There are simpler ways for us to get in touch and answer your
              questions
            </p>
          </Jumbotron>
        </div>
        <header className="Contact-header">
          <Container>
            <Form>
              <Row>
                <Col>
                  <Form.Control placeholder="First name" />
                </Col>
                <Col>
                  <Form.Control placeholder="Last name" />
                </Col>
              </Row>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Textarea</Form.Label>
                <Form.Control as="textarea" rows={6} />
              </Form.Group>
              <Button
                as="input"
                type="submit"
                variant="secondary"
                value="Submit"
              />{" "}
            </Form>
          </Container>
        </header>
      </div>
    );
  }
}
export default Contact;
