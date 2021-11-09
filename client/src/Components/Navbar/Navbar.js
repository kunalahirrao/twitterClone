import React, { useState } from "react";
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
import ModalCom from "../Modal/Modal";
import secureStorage from "../../util/secureStorage";

function Navbar(props) {
  let [show, setShow] = useState(false);
  const onRouteChange = (route) => {
    props.children.props.history.push(route);
  };
  const modalClose = (resetForm) => {
    resetForm();
    setShow(false);
  };
  const modalShow = () => {
    console.log("clicked");
    setShow(true);
  };
  const logOut = async () => {    
    await secureStorage.clear();
    props.children.props.history.push("/");
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
        <button
          class="navButton"
          onClick={() => {
            onRouteChange("/home");
          }}
        >
          <FontAwesomeIcon icon={faHome} size="lg" /> Home
        </button>        
        <button
          class="navButton"
          onClick={() => {
            onRouteChange("/bookmarks");
          }}
        >
          <FontAwesomeIcon icon={faBookmark} size="lg" /> Bookmarks
        </button>
        <button
          class="navButton"
          onClick={() => {
            onRouteChange("/profile");
          }}
        >
          <FontAwesomeIcon icon={faUserCircle} size="lg" /> Profile
        </button>
      </div>
      <div className="d-grid gap-2">
        <Button
          variant="primary"
          size="lg"
          className="tweet-button"
          onClick={() => modalShow()}
        >
          Tweet
        </Button>
        <Button
          variant="primary"
          size="lg"
          className="tweet-button"
          onClick={() => logOut()}
        >
          Logout
        </Button>
      </div>
      <ModalCom show={show} handleClose={modalClose}></ModalCom>
    </>
  );
}

export default Navbar;
