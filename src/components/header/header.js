import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './header.scss';

const Header = () => {
  return (
    <header className="header" >
      <Container>
        <Row>
          <Col>
            Header
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;