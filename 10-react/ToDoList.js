import React, { Component } from "react";
import Task from "./Task";

class ToDoList extends Component {
  render() {
    let todos = this.props.todos.map(todo => (
      <Task
        key={todo.id}
        id={todo.id}
        checked={todo.checked}
        text={todo.text}
        handleCheck={this.props.handleCheck}
      />
    ));

    return <div>{this.props.todos ? todos : "Brak todos"}</div>;
  }
}

export default ToDoList;
