import React from "react";
import { Col, Row } from "react-bootstrap";
import Select from "../select";
import Checkbox from "../checkbox";
import "./controls.scss";

const sortList = [
  { id: 1, val: 'name', caption: "Имя" },
  { id: 2, val: 'birthday', caption: "Дата рождения" },
  { id: 3, val: 'null', caption: "Не сортировать" }
];

const filterList = [
  { id: 1, val: 'waiter', caption: "Официант" },
  { id: 2, val: 'driver', caption: "Водитель" },
  { id: 3, val: 'cook', caption: "Повар" },
  { id: 4, val: 'null', caption: "Показать всех" }
];

const Controls = () => {
  return (
    <form className="controls">
      <Row>
        <Col lg={6}>
          <div className="controls__wrap">
            <span className="controls__title">
              Фильтр
            </span>
            <Select list={ filterList }
                    placeholder={'Выберите фильтр'} />
            <Checkbox />
          </div>
        </Col>
        <Col lg={6}>
          <div className="controls__wrap">
            <span className="controls__title">
              Сортировка
            </span>
            <Select list={ sortList }
                    placeholder={'Выберите метод сортировки'} />
          </div>
        </Col>
      </Row>
    </form>
  )
};

export default Controls;