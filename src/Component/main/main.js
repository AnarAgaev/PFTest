import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./main.scss";

const Main = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} lg={6}>
          Hello World!
        </Col>
        <Col xs={12} lg={6}>
          Hello Mr.Smith!
        </Col>
      </Row>
    </Container>
  );
};

export default Main;