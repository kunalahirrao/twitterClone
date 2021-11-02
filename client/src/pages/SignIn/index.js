import React from "react";
import { Modal, Container, Row, Col, Form, Button } from "react-bootstrap";

import "./index.css";

function index() {
  return (
    <Modal show={true} backdrop="static" keyboard={false}>
      <Modal.Body>
        <Modal.Header closeButton></Modal.Header>
        <Container>
          <Row>
            <Col>
              <h4>To get started, first enter your email</h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="emailInput">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="passwordInput">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="d-grid gap-2">
                <Button variant="primary" size="lg">
                  Sign In
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
