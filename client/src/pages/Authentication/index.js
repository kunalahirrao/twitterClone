import React from "react";
import { Row, Col, Image, Button, Stack } from "react-bootstrap";
import NonAuthLayout from "../../layout/NonAuthLayout";
import twitterimage from "../../Assets/twitter.png";
import twitterLogo from "../../Assets/twitter-logo.png";

import "./index.css";

function index() {
  const signIn = () => {
    setTimeout(() => {
      console.log("Rendering");
    }, 10000);
  };
  return (
    <div>
      <NonAuthLayout>
        <div className="row">
          <Row className="align-items-center">
            <Col>
              <Image src={twitterimage} />
            </Col>
            <Col fluid>
              <div className="col-md-10">
                <Image src={twitterLogo} rounded style={{ width: "50px" }} />
                <p style={{ "font-size": "60px", "font-weight": "bold" }}>
                  Happening Now
                </p>
                <p style={{ "font-size": "30px", "font-weight": "bold" }}>
                  Join Today
                </p>
              </div>
              <Stack gap={2} className="col-md-6">
                <Button
                  variant="outline-dark"
                  className="button"
                  onClick={signIn}
                >
                  Sign In
                </Button>
                <Button variant="outline-dark" className="button">
                  Sign Out
                </Button>
              </Stack>
            </Col>
          </Row>
        </div>
      </NonAuthLayout>
    </div>
  );
}

export default index;
