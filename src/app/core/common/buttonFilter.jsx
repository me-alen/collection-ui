import React from "react";

const ButtonFilter = ({ data, onClickButton }) => {
  const handleBtnClick = (btn) => {
    btn.selected = true;
    onClickButton(btn.btnLabel);
  };
  const activeClass = "list-item active";
  return (
    <div className="filter-btn-section">
      <div className="heading-wrapper d-flex align-items-center justify-content-between">
        <h2 className="sub-heading">Collection Recommendations</h2>
        <span className="icon-layout-switch cp"></span>
      </div>
      <div className="btn-container">
        <ul className="btn-list-wrapper">
          {data.data.map((btn) => (
            <li
              key={btn.btnLabel}
              className={activeClass}
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
