import React from "react";
import {
  Modal,
  Container,
  Row,
  Col,
  Form,
  Button,
  Image,
  CloseButton,
} from "react-bootstrap";
import twitterLogo from "../../Assets/twitter-logo.png";
import "./index.css";

function index() {
  return (
    <Modal show={true} backdrop="static" keyboard={false}>
      <Modal.Body>
        <Container>
          <Row>
            <Col>
              <div style={{ display: "flex", justifyContent: "start" }}>
                <Image src={twitterLogo} rounded style={{ width: "50px" }} />
              </div>
            </Col>
            <Col>
              <div style={{ display: "flex", justifyContent: "end" }}>
                <CloseButton />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>Create your account</h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="nameInput">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="emailInput">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Email" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="passwordInput">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="d-grid gap-2">
                <Button variant="primary" size="lg">
                  Sign Up
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default index;
