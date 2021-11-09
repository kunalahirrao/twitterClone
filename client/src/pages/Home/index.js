import React, { useEffect } from "react";
import { Container, Nav, Button, Row, Col } from "react-bootstrap";
import Navbar from "../../Components/Navbar/Navbar";
import Suggestions from "../../Components/Suggestions/Suggestions";
import Tweets from "../../Components/Tweets/Tweets";
import axios from "../../util/axios-auth";

function Index(props) {
  useEffect(async () => {
    await getTweets();
    async function getTweets() {
      await axios.get();
    }
  }, []);
  return (
    <>
      <Container
        style={{ overflow: "scroll", height: "930px", overflowX: "hidden" }}
      >
        <Row className="mt-2">
          <Col>
            <Tweets></Tweets>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Index;
