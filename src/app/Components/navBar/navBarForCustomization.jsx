import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./navBarForCustomization.css";

class NavBarForCustomization extends Component {
  state = {};

  render() {
    return (
      <div className="navBarCustom-wrapper">
        <div className="navBarElementsCustom-wrapper">
          <span className="customHeader"> CreditNirvana </span>
          <nav className="nav nav-pills flex-column custom-elements-wrapper">
            <NavLink to="/home/ml-decision-engine">ML Decision Engine</NavLink>
          </nav>
        </div>
      </div>
    );
  }
}

export default NavBarForCustomization;
