import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col>
            Footer
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;