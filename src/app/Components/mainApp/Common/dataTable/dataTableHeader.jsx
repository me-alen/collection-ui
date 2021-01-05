import React from "react";
import Pagination from "@material-ui/lab/Pagination";

const DataTableHeader = (props) => {
  const { title, totalElements, pageCount } = props.paginationData;
  const handlePageClick = (e) => {
    console.log(e);
  };

  return (
    <div className="table-header-container d-flex align-items-center justify-content-between">
      <div className="left-section d-flex align-items-center">
        <h2 className="table-heading">{title}</h2>
        <div className="count">
          {" "}
          <p className="total">
            Total : <span className="value"> {totalElements}</span>
          </p>
        </div>
        <div className="search-wrapper">
          <input type="text" name="search" placeholder="Search" />
          <span class="icon-search"></span>
        </div>
      </div>

      <div className="right-section d-flex align-items-center">
        <span className="current-result">Showing of 1-10</span>
        <div className="pagination-wrapper">
          <Pagination count={10} />
        </div>
        <span class="icon-layout-switch cp"></span>
      </div>
    </div>
  );
};

export default DataTableHeader;
