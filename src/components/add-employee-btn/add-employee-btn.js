import React from "react";
import "./add-employee-btn.scss";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const AddEmployeeBtn = () => {
  return (
    <Row>
      <Col className="my-5" >
        <Link className="button" to="/add-employee">
          Добавить сотрудника
        </Link>
      </Col>
    </Row>
  );
};

export default AddEmployeeBtn;