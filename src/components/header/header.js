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
                 target="_blank"
                 rel="noopener noreferrer">
                hh.ru/resume/3a898035ff02716b960039ed1f663746394c34
              </a>
            </p>
            <p className="header__paragraph">
              <span className="header__paragraph-caption">Исходный код на Github:</span>
              <a href="https://github.com/AnarAgaev/PFTest"
                 className="header__link"
                 target="_blank"
                 rel="noopener noreferrer">
                github.com/AnarAgaev/PFTest
              </a>
            </p>
            <p className="header__paragraph">
              <span className="header__paragraph-caption">Посмотреть билд:</span>
              <a href="https://github.com/AnarAgaev/anaragaev.github.io"
                 className="header__link"
                 target="_blank"
                 rel="noopener noreferrer">
                github.com/AnarAgaev/anaragaev.github.io
              </a>
            </p>
            <h2>Задание:</h2> 
            <span className="header__subtitle">
              В рамках тестового задания необходимо реализовать вывод списка сотрудников с
              возможность фильтрации по категориям Официант, Водитель, Повар и по состоянию
              В Архиве, а также сортировки по Имени и Дате рождения.
            </span>
            <span className="header__subtitle">
              Необходимо реализовать возможность редактирования данных сотрудника
              в отдельной форме.Форма открывается по клику на сотрудника в списке сотрудников.
            </span>
            <span className="header__subtitle">
              Необходимо реализовать возможность добавление новых сотрудников.
            </span>
            <span className="header__subtitle">
              Во время работы с приложение все действия должны выводиться в консоль.
            </span>
            <span className="header__subtitle">
              Исходные данные расположены в файле employees.json
            </span>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;