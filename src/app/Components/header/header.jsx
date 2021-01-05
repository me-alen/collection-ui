import React, { Component } from "react";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

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
          <div
            className="burger-icon cp"
            onClick={this.props.onChangeSidePanelClass}
          >
            <i className="fa fa-bars" aria-hidden="true"></i>
          </div>
     



          <div className="avatar-wrapper">
            {/* <div className="dropdown">
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
            </div> */}
            <DropdownButton id="dropdown-basic-button" title="Dropdown button" variant="secondary">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
        <div className="header-secondary d-flex align-items-center justify-content-between">
          <span className="title-text">{this.props.headerTitle}</span>

          <div className="header-filter-wrapper d-flex">
            <div className="filter-main">
            
              <DropdownButton id="dropdown-basic-button" title="Export" variant="secondary">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>
            </div>


            <div className="filter-sec">
              <img src="../../../assets/images/window-plus.svg" alt=""/>
              {/* <DropdownButton id="dropdown-basic-button" title="Dropdown button" variant="secondary">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
