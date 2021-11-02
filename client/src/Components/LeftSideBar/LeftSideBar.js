import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, Nav, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./LeftSideBar.css";
import RightSideBar from "../RightSidebar/RightSideBar";
import Messages from "../Messages/Messages";
import Profile from "../Profile/Profile";
import Tweet from "../Tweet/Tweet";
import RootGaurd from "../Auth/RootGuard";
import {
  faHome,
  faHashtag,
  faBell,
  faEnvelope,
  faBookmark,
  faList,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

function LeftSideBar() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Nav className="flex-column">
            <Nav.Link href="/home" className="my-2">
              <FontAwesomeIcon icon={faHome} size="lg" />
              <span className="marginLeft">
                <Button to="/">Home</Button>
              </span>
            </Nav.Link>
            <Nav.Link eventKey="link-2" className="my-2">
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
              <span className="marginLeft">
                <Link to="/messages">Messages</Link>
              </span>
            </Nav.Link>
            <Nav.Link eventKey="link-2" className="my-2">
              <FontAwesomeIcon icon={faBookmark} size="lg" />
              <span className="marginLeft">
                <Link to="/bookmarks">Bookmarks</Link>
              </span>
            </Nav.Link>
            <Nav.Link eventKey="link-2" className="my-2">
              <FontAwesomeIcon icon={faUserCircle} size="lg" />
              <span className="marginLeft">
                <Link to="/profile">Profile</Link>
              </span>
            </Nav.Link>
            <Button
              variant="primary"
              className="tweetButton my-2 mx-5"
              size="lg"
            >
              Tweet
            </Button>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
}

export default LeftSideBar;
