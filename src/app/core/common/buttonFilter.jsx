import React, { Component } from "react";

class ButtonFilter extends Component {
  state = {};
  render() {
    return (
     <div className="filter-btn-section">
        <div className="heading-wrapper d-flex align-items-center justify-content-between">
            <h2 className="sub-heading">Collection Recommendations</h2>
           <span class="icon-layout-switch cp"></span>
          </div>
          <div className="btn-container">
          <ul className ="btn-list-wrapper">
            <li className="list-item"><a className="list-link" href="">btn</a></li>
            <li className="list-item"><a className="list-link" href="">btn</a></li>
            <li className="list-item"><a className="list-link" href="">btn</a></li>
            <li className="list-item"><a className="list-link" href="">btn</a></li>
            <li className="list-item"><a className="list-link" href="">btn</a></li>
          </ul>
          </div>
     </div>
    );
  }
}

export default ButtonFilter;
