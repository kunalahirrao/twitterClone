import React from "react";
import { Container, Spinner } from "react-bootstrap";

function AppLoader() {
  return (
    <Container>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Container>
  );
}

export default AppLoader;
