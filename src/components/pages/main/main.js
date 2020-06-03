import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Col, Container, Row } from "react-bootstrap";
import './main.scss';

export default class Main extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Main page</title>
          <meta name="description" content="" />
          <meta name="keywords" content="" />
        </Helmet>
        <Container>
          <Row>
            <Col>
              Hello world!
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}