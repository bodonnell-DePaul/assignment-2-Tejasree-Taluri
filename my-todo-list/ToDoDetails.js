// ToDoDetails.js
import React from 'react';
import { Tab, Row, Col } from 'react-bootstrap';
import { todoItems } from './todoItems';

function ToDoDetails() {
  return (
    <Tab.Container defaultActiveKey="#todo-0">
      <Row>
        <Col sm={12}>
          <Tab.Content>
            {todoItems.map((item, index) => (
              <Tab.Pane key={index} eventKey={`#todo-${index}`}>
                <h4 contentEditable>{item.description}</h4>
                <input
                  type="date"
                  defaultValue={item.dueDate}
                  onChange={() => { /* handle date change */ }}
                />
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default ToDoDetails;
