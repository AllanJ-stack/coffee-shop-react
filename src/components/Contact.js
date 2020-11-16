import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap'




class Contact extends Component {
    render() {
        return (
            <div className="Contact">
                <header className="Contact-header">
                    <Container>
                    <Form >
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
                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="pasword" placeholder="Password" />
                        </Form.Group>
                            </Col>
                            </Row>
                        <Button variant ="secondary" type="submit">Login</Button>
                    </Form>
                    <Card className="mb-3" style={{ marginTop: "30px"}}>
                       <Card.Img src="https://picsum.photos/200/70"/>
                       <Card.Body>
                           <Card.Title>
                                Card Example
                           </Card.Title>
                           <Card.Text>
                                This is an example of react bootstrap card.
                           </Card.Text>
                           <Button variant ="primary"> Read More </Button>
                       </Card.Body>
                    </Card>
                    {/* <Breadcrumb>
                        <Breadcrumb.Item>Test 1</Breadcrumb.Item>
                        <Breadcrumb.Item>Test 2</Breadcrumb.Item>
                        <Breadcrumb.Item active>Test 3</Breadcrumb.Item>
                    </Breadcrumb>
                    <Alert variant="success"> This is a button</Alert>
                    <Button> Test Button </Button> */}
                    </Container>
                </header>
                
                
            </div>
        );
    }
    
}
export default Contact