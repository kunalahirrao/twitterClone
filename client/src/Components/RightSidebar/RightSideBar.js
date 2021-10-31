import React from "react";
import Trending from "./Trending";
import WhoToFollow from "./WhoToFollow";
import { Container } from "react-bootstrap";

function RightSideBar() {
  return (
    <Container fluid>
      <h4 className="font-weight-bold">Trends For You</h4>
      <Trending></Trending>
      <h4 className="font-weight-bold">Who to Follow</h4>
      <WhoToFollow></WhoToFollow>
    </Container>
  );
}

export default RightSideBar;
