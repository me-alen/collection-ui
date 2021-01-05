import React from "react";
import DataTable from "react-data-table-component";
import DataTableHeader from "./dataTableHeader";

const DisplayDataTable = ({ data }) => {
  const paginationData = {
    title: data.title,
    totalElements: data.totalElements,
    pageCount: "100",
  };
  return (
    <React.Fragment>
      <DataTableHeader paginationData={paginationData} />
      <DataTable
        columns={data.columns}
        data={data.data}
        defaultSortField="title"
        selectableRows
      />
    </React.Fragment>
  );
};

export default DisplayDataTable;
