import React, { Component } from "react";
import ToDoList from "./ToDoList.js";
import NewTask from "./NewTask.js";
import Filter from "./Filter.js";
import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      list: [],
      newtask: "",
      count: 0,
      hide: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  handleChange(event) {
    this.setState({
      newtask: event.target.value
    });
  }

  handleButton(event) {
    this.setState(prevState => {
      let todo = {
        id: prevState.count + 1,
        checked: false,
        text: prevState.newtask
      };
      return {
        todos: [...prevState.todos, todo],
        newtask: "",
        count: prevState.count + 1
      };
    });
  }

  handleCheck(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            checked: !todo.checked
          };
        }
        return todo;
      });
      return {
        todos: updatedTodos
      };
    });
  }

  handleHide() {
    this.setState(prevState => {
      return { hide: !prevState.hide };
    });
  }

  render() {
    let todos = !this.state.hide
      ? this.state.todos
      : this.state.todos.filter(todo => !todo.checked);

    return (
      <div className="App">
        <Filter checked={this.state.hide} handleHide={this.handleHide} />
        <hr />
        <ToDoList
          todos={todos}
          handleChange={this.handleChange}
          handleCheck={this.handleCheck}
        />
        <hr />
        <NewTask
          task={this.state.newtask}
          handleChange={this.handleChange}
          handleButton={this.handleButton}
        />
        <hr />
      </div>
    );
  }
}

export default App;
