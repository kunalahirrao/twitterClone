import { Col, Container, Row } from "react-bootstrap";
import Navbar from "../Components/Navbar/Navbar";
import Suggestions from "../Components/Suggestions/Suggestions";
import React, { Component } from "react";
import routeGuard from "../routes/route-guard";
import AppLoader from "./AppLoader";

class AuthLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showChildren: false,
    };
  }

  componentDidMount = async () => {
    await routeGuard(this.props).then((result) => {
      if (result.isAllowed) {
        this.setState({ showChildren: true });
      } else {
        window.location.replace(result.newLocation);
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        {!this.state.showChildren ? (
          <AppLoader />
        ) : (
          <Container>
            <Row>
              <Col xs={3}>
                <Navbar {...this.props} />
              </Col>
              <Col xs={6}>
                <>{this.props.children}</>
              </Col>
              <Col col={3}>
                <Suggestions></Suggestions>
              </Col>
            </Row>
          </Container>
        )}
      </React.Fragment>
    );
  }
}

export default AuthLayout;
