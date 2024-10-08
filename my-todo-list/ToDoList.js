// ToDoList.js
import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { todoItems } from './todoItems';

function getColorVariant(dueDate) {
  const today = new Date();
  const due = new Date(dueDate);
  const diffDays = (due - today) / (1000 * 3600 * 24);

  if (diffDays > 7) return 'primary';
  if (diffDays <= 7 && diffDays > 4) return 'success';
  if (diffDays <= 4 && diffDays > 2) return 'warning';
  if (diffDays <= 2) return 'danger';
}

function ToDoList() {
  return (
    <ListGroup>
      {todoItems.map((item, index) => (
        <ListGroup.Item
          key={index}
          action
          href={`#todo-${index}`}
          variant={getColorVariant(item.dueDate)}
        >
          {item.title}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default ToDoList;
