import React from "react";
import Pagination from "@material-ui/lab/Pagination";

const DataTableHeader = (props) => {
  const { title, totalElements, pageCount } = props.paginationData;
  const handlePageClick = (e) => {
    console.log(e);
  };

  return (
    <div>
      <span>{title}</span>
      <span>Total : {totalElements}</span>
      <input type="text" name="search" placeholder="Search" />
      <span>Showing of 1-10</span>
      <Pagination count={10} />
    </div>
  );
};

export default DataTableHeader;
