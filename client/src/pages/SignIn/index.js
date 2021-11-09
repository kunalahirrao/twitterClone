import React from "react";
import { Modal, Container, Row, Col, Form, Button } from "react-bootstrap";
import "./index.css";
import { useFormik } from "formik";
import { logIn } from "../../store/actions/authAction";
import store from "../../store/store";

function Index(props) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      await store.dispatch(logIn(values));
      props.history.push("/home");
    },
  });
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
          <Form onSubmit={formik.handleSubmit}>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@example.com"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="d-grid gap-2">
                  <Button variant="primary" size="lg" type="submit">
                    Sign In
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default Index;
