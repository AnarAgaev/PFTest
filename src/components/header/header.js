import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './header.scss';

const Header = () => {
  return (
    <header className="header" >
      <Container>
        <Row>
          <Col>
            <h1>Агаев Анар</h1>
            <p className="header__paragraph">
              <span className="header__paragraph-caption">Резюме на hh.ru:</span>
              <a href="https://hh.ru/resume/3a898035ff02716b960039ed1f663746394c34"
                 className="header__link"
                 target="_blank" >
                hh.ru/resume/3a898035ff02716b960039ed1f663746394c34
              </a>
            </p>
            <p className="header__paragraph">
              <span className="header__paragraph-caption">Исходный код на Github:</span>
              <a href="https://github.com/AnarAgaev/PFTest"
                 className="header__link"
                 target="_blank" >
                github.com/AnarAgaev/PFTest
              </a>
            </p>
            <p className="header__paragraph">
              <span className="header__paragraph-caption">Посмотреть реализацию:</span>
              <a href="https://anaragaev.github.io"
                 className="header__link"
                 target="_blank" >
                anaragaev.github.io
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;