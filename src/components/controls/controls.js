import React from "react";
import { connect } from "react-redux";
import { Col, Row } from "react-bootstrap";
import Select from "../select";
import { getPosition } from "../../utils/get-position";
import getSortMethod from "../../utils/get-sort-method";
import Checkbox from "../checkbox";
import { filterItemsByRole, sortItemsBy } from "../../actions";
import "./controls.scss";

const sortList = [
  { id: 1, val: 'name', caption: "Имя" },
  { id: 2, val: 'birthday', caption: "Дата рождения" },
  { id: 3, val: false, caption: "Не сортировать" }
];

const filterList = [
  { id: 1, val: 'waiter', caption: "Официант" },
  { id: 2, val: 'driver', caption: "Водитель" },
  { id: 3, val: 'cook', caption: "Повар" },
  { id: 4, val: false, caption: "Показать всех" }
];

const Controls = ({ filterRole, sortMethod }) => {
  return (
    <form className="controls">
      <Row>
        <Col lg={6}>
          <div className="controls__wrap">
            <span className="controls__title">
              Фильтр
            </span>
            <Select list={ filterList }
              actionFunc={ filterItemsByRole }
              value={ getPosition(filterRole) || '' }
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
              actionFunc={ sortItemsBy }
              value={ getSortMethod(sortMethod) || '' }
              placeholder={'Выберите метод сортировки'} />
          </div>
        </Col>
      </Row>
    </form>
  )
};

const mapStateToProps = ({ filterRole, sortMethod }) => {
  return { filterRole, sortMethod };
};

export default connect(
  mapStateToProps
)(Controls);