import React from "react";
import { Container, Alert, Row, Col } from "reactstrap";

const App = () => (
  <Container>
    <Row>
      <Col xs={12}>
        <Alert color="secondary" fade={false}>
          <h1>Welcome to Code.Hub Dashboard!</h1>
          <p className="lead">Manage everything and have fun!</p>
        </Alert>
      </Col>
    </Row>
  </Container>
);

export default App;
