import React from "react";

const ButtonFilter = ({ id, data, onClickButton }) => {
  const handleBtnClick = (btn) => {
    data.data.map((element) => {
      element.active =
        element.name !== btn.name ? "list-item" : "list-item active";
    });
    onClickButton(data.id, btn.value);
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
              key={btn.name}
              className={btn.active}
              onClick={() => {
                handleBtnClick(btn);
              }}
            >
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
