import React from 'react';
import './TodoList.css';
export const TodoList = ({ todos, onDeleteTodo }) => (
  <ul className="TodoList">
    {todos.map(({ id, text }) => (
      <li key={id} className="TodoList__item">
        <p>{text}</p>
        <button onClick={() => onDeleteTodo(id)}>Видалити</button>
      </li>
    ))}
  </ul>
);
