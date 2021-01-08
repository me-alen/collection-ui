import React, { Component } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import CustomizeMLDecisionEngine2 from '../mainApp/customize/customizeMLDecisionEngine/customizeMLDecisionEngine2';

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
            <div className="avatar-icon">
              <img
                src="https://cdn4.iconfinder.com/data/icons/man-user-human-person-business-profile-avatar/100/20A-1User-512.png"
                alt=""
              />
            </div>
            <DropdownButton
              id="dropdown-basic-button"
              title="Victor Hansen "
              variant="secondary"
            >
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
        <div className="header-secondary d-flex align-items-center justify-content-between">
          <span className="title-text">{this.props.headerTitle}</span>

          <div className="header-filter-wrapper d-flex align-items-center">
            <div className="filter-main">
              <DropdownButton
                id="dropdown-basic-button"
                title="Export"
                variant="secondary"
              >
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>
            </div>

            <div className="filter-sec cp">
              <span className="icon-window-plus"></span>
              {/* <CustomizeMLDecisionEngine2 /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
