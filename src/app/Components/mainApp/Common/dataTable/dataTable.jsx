import React from "react";
import DataTable from "react-data-table-component";

const DisplayDataTable = ({ data }) => {
  return (
    <DataTable
      title="Recommended Actions"
      columns={data.columns}
      data={data.data}
      defaultSortField="title"
      pagination
      paginationTotalRows={data.totalElements}
      selectableRows
    />
  );
};

export default DisplayDataTable;
