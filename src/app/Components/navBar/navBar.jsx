import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./navBar.css";
import brand from "../../../assets/images/logo.jpeg";


class NavBar extends Component {
  changeHeaderTitle = (title) => {
    this.props.changeHeaderTitle(title);
  };
  render() {
    return (
      // <div className="navBar-wrapper">
      //   <div className="navBarElements-wrapper">
      //     <span className="header"> CreditNirvana </span>
      //     <nav className="nav nav-pills flex-column elements-wrapper">
      //     </nav>
      //   </div>
      // </div>
      <div className="sidepanel">
        <div className="brand">
          {/* <img
            src="data:image/jpeg;base64,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"
            alt=""
          /> */}
          <img src={brand} alt=""/>
        </div>
        <div className="list-section">
          <ul className="list-wrapper pl-0">
            <NavLink
              to="/home/early-warning-system"
              onClick={() => this.changeHeaderTitle("Early Warning System")}
            >
              <li className="list-item">
                <span className=" icon icon-alarm"></span>
                <span className="text">Early Warning System</span>
              </li>
            </NavLink>{" "}
            <NavLink
              to="/home/ml-decision-engine"
              onClick={() => this.changeHeaderTitle("ML Decision Engine")}
            >
              <li className="list-item">
                <span className="icon icon-decision-engine"></span>
                <span className="text">ML Decision Engine</span>
              </li>
            </NavLink>
            <NavLink
              to="/home/robo-collection"
              onClick={() => this.changeHeaderTitle("Robo Collection")}
            >
              <li className="list-item">
                <span className=" icon icon-alarm"></span>
                <span className="text">Robo Collection</span>
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;
