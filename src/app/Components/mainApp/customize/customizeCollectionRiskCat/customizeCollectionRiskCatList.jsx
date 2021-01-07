import React, { Component } from "react";
import "./customizeCollectionRiskCatList.scss";

class CustomizeCollectionRiskCategoryList extends Component {
  state = { data: [] };

  handleAllChecked = (event) => {
    let items = this.props.collectionCategory.data;
    items.forEach((item) => (item.isChecked = event.target.checked));
    this.setState({ data: items });
  };

  handleCheckChildElement = (event) => {
    let items = this.props.collectionCategory.data;
    items.forEach((item) => {
      if (item.value === event.target.value)
        item.isChecked = event.target.checked;
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
        <ul>
          {this.props.collectionCategory.data.map((item) => {
            return (
              <div className="listitem">
                <li>
                  {/* <input key={props.key} onClick={props.handleCheckChildElement} type="checkbox" checked={props.isChecked} value={props.value} /> {props.value} */}
                  <input
                    key={item.id}
                    onChange={this.handleCheckChildElement}
                    type="checkbox"
                    checked={item.isChecked}
                    value={item.value}
                  />{" "}
                  {item.name}
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CustomizeCollectionRiskCategoryList;
