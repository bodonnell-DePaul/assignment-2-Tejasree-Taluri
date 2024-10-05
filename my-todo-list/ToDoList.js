import React from 'react';
import { ListGroup, Tab, Row, Col, Form, Button, Container } from 'react-bootstrap';
import todoItems from './todoItems';
import './ToDoList.css';


function ToDoList() {
  const getVariant = (dueDate) => {
    const daysRemaining = (new Date(dueDate) - new Date()) / (1000 * 60 * 60 * 24);
    if (daysRemaining < 2) return 'danger';
    if (daysRemaining < 4) return 'warning';
    if (daysRemaining < 7) return 'success';
    return 'primary';
  };
  
  return (
    <Container>
      <h1>Assignment 2: Tejasree Taluri ToDo List</h1>
      <Row>
        <Col sm={4}>
          <ListGroup>
            {todoItems.map((item, index) => (
              <ListGroup.Item key={index} eventKey={index} variant={getVariant(item.dueDate)}>
                {item.title}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            {todoItems.map((item, index) => (
              <Tab.Pane eventKey={index} key={index}>
                <p contentEditable>{item.description}</p>
                <input type="date" defaultValue={item.dueDate} />
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Col>
      </Row>
      <Form>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter task title" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Due Date</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
        <Button variant="primary" type="submit">Add Task</Button>
      </Form>
    </Container>
  );
}

export default ToDoList;
