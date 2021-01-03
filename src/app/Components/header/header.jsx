import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      // <div className="header-wrapper">
      //   <div className="user-wrapper">
      //     <span className="userName">Victor Hugo</span>
      //     <p className="userRole">Collection Officer</p>
      //   </div>
      // </div>
      <div className="header-section">
        <div className="header-primary d-flex align-items-center justify-content-between">
          <div className="burger-icon">
            <a href="">
              <i className="fa fa-bars" aria-hidden="true"></i>
            </a>
          </div>
          <div className="avatar-wrapper">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown button
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="header-secondary d-flex align-items-center justify-content-between">
          <span className="title-text">ML Decision Engine</span>

          <div className="header-filter-wrapper d-flex">
            <div className="filter-main">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown button
              </button>
            </div>
            <div className="filter-sec">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown button
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
