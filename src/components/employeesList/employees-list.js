import React from "react";
import { Col, Row } from "react-bootstrap";
import Employee from "../employee";
import renderElementList from "../../utils/render-element-list";
import "./employees-list.scss";

const EmployeesList = ({ data }) => {
  const employeesList = renderElementList(data, Employee);

  return (
    <Row>
      <Col>
        <table className="employees-list">
          <tbody>
            { employeesList }
          </tbody>
        </table>
      </Col>
    </Row>
  );
};

export default EmployeesList;