import React, { Component } from "react";
import "./trial.module.scss";

class Trial extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="css1">
          <p>This line should be red.</p>
        </div>
        <div className="css2">
          <p>This line should be green.</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Trial;
