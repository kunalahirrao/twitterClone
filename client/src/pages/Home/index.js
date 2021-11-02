import React from "react";
import { Container, Nav, Button, Row, Col } from "react-bootstrap";
import Navbar from "../../Components/Navbar/Navbar";
import Suggestions from "../../Components/Suggestions/Suggestions";
import Tweets from "../../Components/Tweets/Tweets";

function index(props) {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Navbar></Navbar>
          </Col>
          <Col xs={7}>
            <Tweets></Tweets>
          </Col>
          <Col>
            <Suggestions></Suggestions>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default index;
