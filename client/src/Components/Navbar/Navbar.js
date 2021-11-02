import React from "react";
import { Container, Nav, Button, Row, Col, Image } from "react-bootstrap";
import twitterLogo from "../../Assets/twitter-logo.png";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faHashtag,
  faBell,
  faEnvelope,
  faBookmark,
  faList,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { history } from "../../util/history";

function Navbar(props) {
  const onRouteChange = (route) => {
    props.history.push(route);
  };
  return (
    <>
      <Image
        src={twitterLogo}
        rounded
        style={{ width: "50px" }}
        className="mt-2 mb-4"
      />
      <div className="nav-button-group flex-column mb-4">
        <button class="navButton" onClick={onRouteChange("/home")}>
          <FontAwesomeIcon icon={faHome} size="lg" /> Home
        </button>
        <button class="navButton">
          <FontAwesomeIcon icon={faHashtag} size="lg" /> Messages
        </button>
        <button class="navButton">
          <FontAwesomeIcon icon={faBookmark} size="lg" /> Bookmarks
        </button>
        <button class="navButton">
          <FontAwesomeIcon icon={faUserCircle} size="lg" /> Profile
        </button>
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" size="lg" className="tweet-button">
          Tweet
        </Button>
      </div>
    </>
  );
}

export default Navbar;
