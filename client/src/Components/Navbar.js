import { useState } from "react";
import { Container, Nav, Navbar, Button, Image } from "react-bootstrap";
import Avatar from "react-avatar";
import "./Navbar.css";
import ModalCom from "./Modal/Modal";
function Navigationbar() {
  let [show, setShow] = useState(false);
  let handleClose = () => setShow(false);
  let handleShow = () => {
    console.log("clicked");
    setShow(true);
  };
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container fluid>
          <Navbar.Brand href="#home">T Clone</Navbar.Brand>
          <Nav className="justify-content-end">
            <Button>Logout</Button>
          </Nav>
        </Container>
      </Navbar>
      <ModalCom show={show} handleClose={handleClose}></ModalCom>
    </>
  );
}

export default Navigationbar;
