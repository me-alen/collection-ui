import React, { Component } from "react";
import { CheckBox } from "../../Common/checkBox";
import "./customizeFiltersList.css";

class CustomizeFiltersList extends Component {
  state = { data: [] };

  handleAllChecked = (event) => {
    let items = this.props.dropDownData;
    items.forEach((item) => (item.isChecked = event.target.checked));
    this.setState({ items: items });
  };

  handleCheckChildElement = (event) => {
    let items = this.props.dropDownData;
    items.forEach((item) => {
      if (item.id === event.target.value) item.isChecked = event.target.checked;
    });
    let displayProps = items.filter((element) => {
      if (element.isChecked) {
        return element;
      }
    });
    this.setState({ data: items });
    this.props.handleOnSubmit(displayProps);
  };

  render() {
    return (
      <div className="filterList-css">
        {/* <h1> Check and Uncheck All Example </h1>
                <input type="checkbox"  value="checkedall" /> */}
        <ul>
          {this.props.dropDownData.map((item) => {
            return (
              <div key={item.id} className="listitem">
                <li>
                  <input
                    key={item.id}
                    onChange={this.handleCheckChildElement}
                    type="checkbox"
                    checked={item.isChecked}
                    value={item.id}
                  />{" "}
                  {item.description}
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CustomizeFiltersList;
