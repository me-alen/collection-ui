import React from "react";
// import ReactPaginate from "react-paginate";

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
      {/* <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      /> */}
    </div>
  );
};

export default DataTableHeader;
