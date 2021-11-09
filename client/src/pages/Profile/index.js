import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { Modal, Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "../../util/axios-auth";
function Index() {
  const [userDetails, setUserDetails] = useState({
    email: "",
    name: "",
    mobileNo: "",
  });
  useEffect(async () => {
    let getUserDetails = async () => {
      try {
        let { data } = await axios.get("/user-management/user");
        console.log(data);
        const { name, email, mobileNo } = data.result[0];
        setUserDetails({ name, email, mobileNo });
      } catch (error) {
        console.log(error);
      }
    };
    await getUserDetails();
    console.log(userDetails);
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: userDetails.email,
      name: userDetails.name,
      mobileNo: userDetails.mobileNo,
    },
    onSubmit: async (values) => {
      let { data } = await axios.patch("/update/user", { ...values });
      const { name, email, password, mobileNo } = data.result[0];
      setUserDetails({ name, email, password, mobileNo });
    },
  });
  const fields = [
    {
      label: "Name",
      id: "name",
      placeholder: "Enter your name",
    },

    {
      label: "Mobile No",
      id: "mobileNo",
      placeholder: "Enter your mobile no",
    },
    {
      label: "Email Address",
      id: "email",
      placeholder: "name@example.com",
    },
  ];
  return (
    <Container>
      <Row>
        <Col>
          <h4>Profile</h4>
        </Col>
      </Row>
      <Form onSubmit={formik.handleSubmit}>
        <Row className="mx-5">
          <Col>
            {fields.map((field) => {
              const fieldId = field.id;
              return (
                <Form.Group className="mb-3">
                  <Form.Label>{field.label}</Form.Label>
                  <Form.Control
                    id={field.id}
                    name={field.id}
                    type={field.id}
                    placeholder={field.placeholder}
                    onChange={formik.handleChange}
                    value={formik.values[`${fieldId}`]}
                  />
                </Form.Group>
              );
            })}
          </Col>
        </Row>

        <Row className="mx-5">
          <Col>
            <div className="d-grid gap-2">
              <Button variant="primary" size="lg" type="submit">
                Update
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default Index;
