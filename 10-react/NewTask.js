import React, { Component } from "react";
import "./styles.css";

class NewTask extends Component {
  render() {
    return (
      <div>
        <input
          name="task"
          value={this.props.task}
          onChange={this.props.handleChange}
        />
        <button onClick={this.props.handleButton}>Add</button>
      </div>
    );
  }
}

export default NewTask;
