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
            <li className="list-item">
              <span className="btn-text-wrapper">
                <a className="list-link" href="">All</a>
             <span className="badge">2769</span>
              </span>
             </li>
               <li className="list-item active">
              <span className="btn-text-wrapper">
                <a className="list-link" href="">VLP_to_Pay</a>
             <span className="badge">895</span>
              </span>
             </li>
                <li className="list-item ">
              <span className="btn-text-wrapper">
                <a className="list-link" href="">HP_to_Pay</a>
             <span className="badge">746</span>
              </span>
             </li>
               <li className="list-item ">
              <span className="btn-text-wrapper">
                <a className="list-link" href="">LP_to_Pay</a>
             <span className="badge">590</span>
              </span>
             </li>
                <li className="list-item ">
              <span className="btn-text-wrapper">
                <a className="list-link" href="">VHP_to_Pay</a>
             <span className="badge">39</span>
              </span>
             </li>

          </ul>
          </div>
     </div>
    );
  }
}

export default ButtonFilter;
