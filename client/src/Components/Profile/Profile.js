import React from "react";
import { useFormik } from "formik";
import { FloatingLabel, Form, Container, Button } from "react-bootstrap";
import "./Profile.css";
function Profile() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobileNo: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Container>
      <h4 className="font-weight-bold mx-auto">Profile</h4>
      <form onSubmit={formik.handleSubmit}>
        <FloatingLabel controlId="name" label="Name" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter you name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </FloatingLabel>
        <FloatingLabel controlId="email" label="Email address" className="mb-3">
          <Form.Control
            type="email"
            placeholder="name@example.com"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </FloatingLabel>
        <FloatingLabel controlId="mobileNo" label="Mobile No" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Mobile No"
            onChange={formik.handleChange}
            value={formik.values.mobileNo}
          />
        </FloatingLabel>
        <FloatingLabel controlId="password" label="Password" className="mb-3">
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </FloatingLabel>
        <Button variant="primary" type="submit" className="ml-10">
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default Profile;
