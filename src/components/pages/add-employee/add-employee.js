import React from "react";
import { Helmet } from "react-helmet";
import { Col, Container, Row } from "react-bootstrap";
import FormEmployee from "../../form-employee";
import "./add-employee.scss"

const AddEmployee = () => {
  return (
    <>
      <Helmet>
        <title>Добавить сотрудника</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
      </Helmet>
      <Container>
        <Row>
          <Col md={8} className="mb-3" >
            <h1>Добавить сотрудника</h1>
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            <FormEmployee btnLabel={'Добавить сотрудника'} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddEmployee;