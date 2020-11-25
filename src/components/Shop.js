import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col, Card } from "react-bootstrap";

class Shop extends Component {
  render() {
    return (
      <div>
        <h2>COFFEE SHOP</h2>
        <Container>
          <Row>
            <Col md>
              <Card className="mb-3" style={{ marginTop: "10px" }}>
                <Card.Img src="https://t4.ftcdn.net/jpg/02/38/79/73/240_F_238797359_zRkVuiIlQDmvqtHlFb8TtGAXp9n1yKfn.jpg" />
                <Card.Body>
                  <Card.Title>Start Your Day With A Cup Of Coffee.</Card.Title>
                  <Card.Text></Card.Text>
                  {/* <Button variant ="primary"> Read More </Button> */}
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md>
              <Card className="mb-2" style={{ marginTop: "10px" }}>
                <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPFS3o3Yo2Ht587lDoMyg2mm-r8pRCmT3E0g&usqp=CAU" />
                <Card.Body>
                  <Card.Title>ESPRESSO</Card.Title>
                  <Card.Text>Coffee Makes Everything Possible.</Card.Text>
                  {/* <Button variant ="primary"> Read More </Button> */}
                </Card.Body>
              </Card>
            </Col>

            <Col md>
              <Card className="mb-3" style={{ marginTop: "10px" }}>
                <Card.Img src="https://st2.depositphotos.com/5822754/9450/v/600/depositphotos_94502290-stock-illustration-types-of-coffee-vector-illustration.jpg" />
                <Card.Body>
                  <Card.Title>TYPES OF COFFEE</Card.Title>
                  <Card.Text>TASTE THE DIFFERENCE</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md>
              <Card className="mb-3" style={{ marginTop: "10px" }}>
                <Card.Img src="https://static.wixstatic.com/media/10bc3b_47f1468921734ced9081a587787ed97d~mv2.png/v1/fit/w_500,h_500,q_90/file.png" />
                <Card.Body>
                  <Card.Title>CINNAMON RAISIN BAGEL</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md>
              <Card className="mb-3" style={{ marginTop: "10px" }}>
                <Card.Img src="https://cdn.shopify.com/s/files/1/0004/8300/0371/products/Best_Seller_ATD_Scones_LemonBlueberry_010_ddae9dcd-afb6-48c5-9bce-bf3086cec8df_1200x_copy_400x.jpg?v=1558927187" />
                <Card.Body>
                  <Card.Title>BLUEBERRY SCONE</Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col md>
              <Card className="mb-3" style={{ marginTop: "10px" }}>
                <Card.Img src="https://bakerpedia.com/wp-content/uploads/2019/05/Muffins_baking-processes-e1558742176566-400x400.jpg" />
                <Card.Body>
                  <Card.Title>PUMPKIN MUFFIN</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Shop;
