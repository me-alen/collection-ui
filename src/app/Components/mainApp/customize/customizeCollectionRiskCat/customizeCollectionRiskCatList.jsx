import React, { Component } from "react";
import "./customizeCollectionRiskCatList.scss";

class CustomizeCollectionRiskCategoryList extends Component {
  state = { data: [] };

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     item: [
  //       { id: 1, value: "All", isChecked: false },
  //       { id: 2, value: "VP_to_Pay", isChecked: false },
  //       { id: 3, value: "HP_to_pay", isChecked: false },
  //       { id: 4, value: "LP_to_pay", isChecked: false },
  //       { id: 5, value: "VHP_to_pay", isChecked: false },
  //       { id: 6, value: "Filter option 7", isChecked: false },
  //       { id: 7, value: "Filter option 8", isChecked: false },
  //     ],
  //   };
  // }

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
