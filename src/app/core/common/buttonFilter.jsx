import React from "react";

const ButtonFilter = ({ id, data, onClickButton }) => {
  const handleBtnClick = (btn) => {
    data.data.map((element) => {
      element.active =
        element.btnLabel !== btn.btnLabel ? "list-item" : "list-item active";
    });
    onClickButton(data.id, btn.btnLabel);
  };
  return (
    <div className="filter-btn-section">
      <div className="heading-wrapper d-flex align-items-center justify-content-between">
        <h2 className="sub-heading">{data.title}</h2>
        <span className="icon-layout-switch cp"></span>
      </div>
      <div className="btn-container">
        <ul className="btn-list-wrapper">
          {data.data.map((btn) => (
            <li
              key={btn.btnLabel}
              className={btn.active}
              onClick={() => {
                handleBtnClick(btn);
              }}
            >
              <span className="btn-text-wrapper">
                <span className="list-link">{btn.btnLabel}</span>
                <span className="badge">{btn.value}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ButtonFilter;
