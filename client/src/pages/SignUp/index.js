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
import { useFormik } from "formik";
import twitterLogo from "../../Assets/twitter-logo.png";
import "./index.css";
import axios from "../../util/axios-auth";

function Index(props) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      await axios.post("/user-management/user", {
        user: {
          ...values,
        },
      });
      props.history.push("/signin");
    },
  });
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
          <Form onSubmit={formik.handleSubmit}>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    id="name"
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="emailInput">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Email"
                    id="email"
                    name="email"
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
                    type="password"
                    placeholder="Password"
                    id="password"
                    name="password"
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
                    Sign Up
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
