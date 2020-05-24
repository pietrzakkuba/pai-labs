import React, { Component } from "react";

class Task extends Component {
  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#cdcdcd",
      textDecoration: "line-through"
    };
    return (
      <div>
        <label style={this.props.checked ? completedStyle : null}>
          <input
            type="checkbox"
            onChange={() => this.props.handleCheck(this.props.id)}
            checked={this.props.checked}
          />
          {this.props.text}
        </label>
      </div>
    );
  }
}

export default Task;
