import React, { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <div>
        <label><input
          type="checkbox"
          onChange={this.props.handleHide}
          checked={this.props.checked}
        />hide completed</label>
      </div>
    );
  }
}

export default Filter;
