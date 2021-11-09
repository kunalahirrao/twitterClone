import { useState } from "react";
import { Button, Modal, FloatingLabel, Form, Container } from "react-bootstrap";
import { useFormik } from "formik";
import axios from "../../util/axios-auth";
function ModalCom({ handleClose, show }) {
  //   let [tweet, setTweet] = useState("");
  const formik = useFormik({
    initialValues: {
      tweet: "",
    },
    onSubmit: async (values, { resetForm }) => {
      //Call API to Submit Tweet
      await axios.post("/tweet-management/tweet", {
        tweet: {
          text: values.tweet,
        },
      });      
      handleClose(resetForm);
      window.location.reload()
    },
  });
  return (
    <>
      <Modal show={show} centered>
        <Modal.Header>
          <Modal.Title>Tweet</Modal.Title>
        </Modal.Header>
        <Form onSubmit={formik.handleSubmit}>
          <Modal.Body>
            <Container>
              <FloatingLabel label="Your Thoughts">
                <Form.Control
                  id="tweet"
                  name="tweet"
                  type="text"
                  as="textarea"
                  onChange={formik.handleChange}
                  value={formik.values.tweet}
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => handleClose(formik.resetForm)}
            >
              Close
            </Button>
            <Button variant="primary" type="submit">
              Tweet
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default ModalCom;
