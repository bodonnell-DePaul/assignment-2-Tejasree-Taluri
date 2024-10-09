import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, ListGroup, Tab } from 'react-bootstrap';
import './App.css';

const staticTodoItems = [
  {
    title: 'Complete Assignment',
    description: 'Finish the React ToDo List assignment.',
    dueDate: '10/10/2024',
  },
  {
    title: 'Buy Groceries',
    description: 'Get milk, eggs, and bread from the store.',
    dueDate: '10/15/2024',
  },
];

function App() {
  const [todoItems, setTodoItems] = useState(staticTodoItems);
  const [newTitle, setNewTitle] = useState('');
  const [newDueDate, setNewDueDate] = useState('');
  const [activeItem, setActiveItem] = useState(null);

  const handleAddTodo = () => {
    if (newTitle && newDueDate) {
      setTodoItems([
        ...todoItems,
        { title: newTitle, description: 'Click to add description', dueDate: newDueDate },
      ]);
      setNewTitle('');
      setNewDueDate('');
    }
  };

  const getVariant = (dueDate) => {
    const daysLeft = (new Date(dueDate) - new Date()) / (1000 * 60 * 60 * 24);
    if (daysLeft < 2) return 'danger';
    if (daysLeft < 4) return 'warning';
    if (daysLeft < 7) return 'success';
    return 'primary';
  };

  return (
    <Container>
      <h2>Assignment 2: Tejasree's ToDo List</h2>
      <Row>
        <Col sm={4}>
          <Form>
            <Form.Group controlId="formTitle">
              <Form.Label>ToDo Item</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter todo title"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formDueDate">
              <Form.Label>Due Date</Form.Label>
              <Form.Control
                type="date"
                value={newDueDate}
                onChange={(e) => setNewDueDate(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" onClick={handleAddTodo}>
              Add ToDo
            </Button>
          </Form>
        </Col>

        <Col sm={8}>
          <Tab.Container defaultActiveKey={0}>
            <Row>
              <Col sm={4}>
                <ListGroup>
                  {todoItems.map((item, index) => (
                    <ListGroup.Item
                      action
                      key={index}
                      eventKey={index}
                      variant={getVariant(item.dueDate)}
                      onClick={() => setActiveItem(index)}
                    >
                      {item.title}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>
              <Col sm={8}>
                <Tab.Content>
                  {activeItem !== null && (
                    <Tab.Pane eventKey={activeItem}>
                      <h5>{todoItems[activeItem].title}</h5>
                      <Form.Control
                        as="textarea"
                        value={todoItems[activeItem].description}
                        onChange={(e) => {
                          const updatedItems = [...todoItems];
                          updatedItems[activeItem].description = e.target.value;
                          setTodoItems(updatedItems);
                        }}
                        contentEditable
                      />
                      <Form.Control
                        type="date"
                        value={todoItems[activeItem].dueDate}
                        onChange={(e) => {
                          const updatedItems = [...todoItems];
                          updatedItems[activeItem].dueDate = e.target.value;
                          setTodoItems(updatedItems);
                        }}
                      />
                    </Tab.Pane>
                  )}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
