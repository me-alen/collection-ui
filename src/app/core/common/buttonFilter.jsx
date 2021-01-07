import React, { Component } from "react";
import CommonCustomizedBox from "../../Components/mainApp/customize/commonCustomizedBox/commonCustomizedBox";
import CustomizeCollectionRiskCategory from "../../Components/mainApp/customize/customizeCollectionRiskCat/customizeCollectionRiskCat";

// const ButtonFilter = ({ id, data, onClickButton }) => {
class ButtonFilter extends Component {
  state = { data: [] };
  handleBtnClick = (btn) => {
    this.state.data.map((element) => {
      element.active =
        element.name !== btn.name ? "list-item" : "list-item active";
      if (btn.value === element.value) {
        element.isChecked = !element.isChecked;
      }
    });
    this.getSelectedParams();
  };

  getSelectedParams = () => {
    let paramDataObject = this.state.data.filter((element) => {
      return element.isChecked === true;
    });
    let paramData = paramDataObject.map((e) => {
      return e.value;
    });
    this.props.onClickButton(this.props.data.id, paramData[0], true);
  };

  handleCheckboxClick = () => {};
  handleOnSubmit = (data) => {
    this.setState({ data: data });
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ data: this.props.data.data });
    }, 2000);
  }

  render() {
    return (
      <div className="filter-btn-section">
        <div className="heading-wrapper d-flex align-items-center justify-content-between">
          <h2 className="sub-heading">{this.props.data.title}</h2>
          {/* <span className="icon-layout-switch cp"></span> */}
          <CustomizeCollectionRiskCategory
            collectionCategory={this.props.data}
            handleOnSubmit={this.handleOnSubmit}
          />
          {/* <CommonCustomizedBox /> */}
        </div>
        <div className="btn-container">
          <ul className="btn-list-wrapper">
            {this.state.data.map((btn) => (
              <li
                key={btn.name}
                className={btn.active}
                onClick={() => {
                  this.handleBtnClick(btn);
                }}
              >
                <div>
                  <input
                    checked={btn.isChecked}
                    type="checkbox"
                    name="round-checkbox"
                    id={btn.value}
                    onChange={this.props.handleCheckboxClick}
                  />
                  <label htmlFor="chk-box"></label>
                </div>
                <span className="btn-text-wrapper">
                  <span className="list-link">{btn.name}</span>
                  <span className="badge">{btn.amt}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ButtonFilter;
