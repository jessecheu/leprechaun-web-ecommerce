import React from "react";
import { Row, Col, Toast } from "react-bootstrap";

const ToastMessage = ({ show, message }) =>
  show && (
    <Row>
      <Col xs={6}>
        <Toast>
          <Toast.Body>{message}</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );

export default ToastMessage;
