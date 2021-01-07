import React from "react";
import CommonCustomizedBox from "../../Components/mainApp/customize/commonCustomizedBox/commonCustomizedBox";
import CustomizeCollectionRiskCategory from "../../Components/mainApp/customize/customizeCollectionRiskCat/customizeCollectionRiskCat";

const ButtonFilter = ({ id, data, onClickButton }) => {
  const handleBtnClick = (btn) => {
    data.data.map((element) => {
      element.active =
        element.name !== btn.name ? "list-item" : "list-item active";
      if (btn.value === element.value) {
        element.isChecked = !element.isChecked;
      }
    });
    getSelectedParams();
  };
  const getSelectedParams = () => {
    let paramDataObject = data.data.filter((element) => {
      return element.isChecked === true;
    });
    let paramData = paramDataObject.map((e) => {
      return e.value;
    });
    onClickButton(data.id, paramData[0], true);
  };
  const handleCheckboxClick = () => {};
  return (
    <div className="filter-btn-section">
      <div className="heading-wrapper d-flex align-items-center justify-content-between">
        <h2 className="sub-heading">{data.title}</h2>
        {/* <span className="icon-layout-switch cp"></span> */}
        <CustomizeCollectionRiskCategory />
        {/* <CommonCustomizedBox /> */}
      </div>
      <div className="btn-container">
        <ul className="btn-list-wrapper">
          {data.data.map((btn) => (
            <li
              key={btn.name}
              className={btn.active}
              onClick={() => {
                handleBtnClick(btn);
              }}
            >
              <div>
                <input
                  checked={btn.isChecked}
                  type="checkbox"
                  name="round-checkbox"
                  id={btn.value}
                  onChange={handleCheckboxClick}
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
};

export default ButtonFilter;
