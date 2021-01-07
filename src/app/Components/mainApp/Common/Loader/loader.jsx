import React from "react";

const Loader = ({ showHideLoader }) => {
  let displayLoader = showHideLoader
    ? "loader-comp-wrapper"
    : "loader-comp-wrapper d-none";
  return (
    <div className={displayLoader}>
      <span className="loader-comp"></span>
    </div>
  );
};

export default Loader;
