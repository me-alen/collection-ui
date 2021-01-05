import React from "react";

const ButtonFilter = ({ data }) => {
  return (
    <div className="filter-btn-section">
      <div className="heading-wrapper d-flex align-items-center justify-content-between">
        <h2 className="sub-heading">Collection Recommendations</h2>
        <span className="icon-layout-switch cp"></span>
      </div>
      <div className="btn-container">
        <ul className="btn-list-wrapper">
          {data.data.map((btn) => (
            <li className="list-item">
              <span className="btn-text-wrapper">
                <a className="list-link" href="">
                  {btn.btnLabel}
                </a>
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
