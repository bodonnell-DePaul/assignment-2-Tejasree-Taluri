// App.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Header';
import ToDoList from './ToDoList';
import ToDoDetails from './ToDoDetails';
import ToDoForm from './ToDoForm';
import './App.css';

function App() {
  return (
    <Container>
      <Header />
      <Row>
        <Col sm={8}>
          <ToDoForm />
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <ToDoList />
        </Col>
        <Col sm={8}>
          <ToDoDetails />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
