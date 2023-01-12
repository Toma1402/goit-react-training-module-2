import { Counter } from './Counter';
import { Dropdown } from './Dropdown';
import { ColorPicker } from './ColorPicker';
import { TodoList } from './TodoList';
import React, { Component } from 'react';
const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#008000' },
  { label: 'blue', color: '#0000FF' },
  { label: 'grey', color: '#A9A9A9' },
  { label: 'pink', color: '#FFC0CB' },
  { label: 'indigo', color: '#4B0082' },
];
export class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Todo 1', completed: false },
      { id: 'id-2', text: 'Todo 2', completed: true },
      { id: 'id-3', text: 'Todo 3', completed: false },
    ],
  };
  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };
  render() {
    const { todos } = this.state;
    return (
      <>
        <Counter initialValue={0} />
        <Dropdown />
        <ColorPicker options={colorPickerOptions} />
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}
