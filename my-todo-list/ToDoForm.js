// ToDoForm.js
import React from 'react';
import { Form, Button } from 'react-bootstrap';

function ToDoForm() {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter ToDo title" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Due Date</Form.Label>
        <Form.Control type="date" />
      </Form.Group>
      <Button variant="primary" type="submit" className="my-3">
        Add ToDo
      </Button>
    </Form>
  );
}

export default ToDoForm;
