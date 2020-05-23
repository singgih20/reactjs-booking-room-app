import React, { Component } from "react";

import InputDate from "elements/InputDate";

export default class Example extends Component {
  state = {
    value: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    return (
      <div className="container">
        <InputDate
          max={30}
          onChange={this.handleChange}
          name="value"
          value={this.state.value}
        />
      </div>
    );
  }
}
