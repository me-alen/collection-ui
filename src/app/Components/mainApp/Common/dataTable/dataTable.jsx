import React from "react";
import DataTable from "react-data-table-component";
import DataTableHeader from "./dataTableHeader";

const DisplayDataTable = ({ data, onPageChange }) => {
  const paginationData = {
    title: data.title,
    totalElements: data.totalElements,
    pageCount: "10",
    displayCount: Math.ceil(data.totalElements / data.pageCount),
  };
  return (
    <React.Fragment>
      <div className="data-table-container">
        <DataTableHeader
          paginationData={paginationData}
          onPageChange={onPageChange}
        />
        <DataTable
          columns={data.columns}
          data={data.data}
          defaultSortField="title"
          selectableRows
        />
        <div className="loader-comp-wrapper">
          <span class="loader-comp"></span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DisplayDataTable;
