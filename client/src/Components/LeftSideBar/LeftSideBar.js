import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, Nav, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./LeftSideBar.css";
import RightSideBar from "../RightSidebar/RightSideBar";
import Messages from "../Messages/Messages";
import Profile from "../Profile/Profile";
import Tweet from "../Tweet/Tweet";
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
      <Router>
        <Row>
          <Col>
            <Nav className="flex-column">
              <Nav.Link href="/home" className="my-2">
                <FontAwesomeIcon icon={faHome} size="lg" />
                <span className="marginLeft">
                  <Link to="/">Home</Link>
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
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <>
                  <Col xs={6} className="mt-2">
                    <Tweet></Tweet>
                    <Tweet></Tweet>
                    <Tweet></Tweet>
                    <Tweet></Tweet>
                  </Col>
                  <Col>
                    <RightSideBar></RightSideBar>
                  </Col>
                </>
              )}
            />
            <Route path="/messages">
              <Col xs={8} className="mt-2">
                <Messages />
              </Col>
            </Route>
            <Route path="/bookmarks">
              <Col xs={8} className="mt-2">
                <Messages />
              </Col>
            </Route>
            <Route path="/profile">
              <Col xs={6} className="mt-2">
                <Profile />
              </Col>
              <Col>
                <RightSideBar></RightSideBar>
              </Col>
            </Route>
          </Switch>
        </Row>
      </Router>
    </Container>
  );
}

export default LeftSideBar;
