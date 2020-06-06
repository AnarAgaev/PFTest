import React from "react";
import { Helmet } from "react-helmet";
import { Col, Container, Row } from "react-bootstrap";
import FormEmployee from "../../form-employee";
import "./edit-employee.scss"

const EditEmployee = ({ employeeId }) => {
  return (
    <>
      <Helmet>
        <title>Редактирование данных сотрудника</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
      </Helmet>
      <Container>
        <Row>
          <Col md={8} className="mb-3" >
            <h1>Редактирование данных сотрудника</h1>
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            <FormEmployee employeeId={ employeeId } btnLabel={'Сохранить изменения'} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EditEmployee;