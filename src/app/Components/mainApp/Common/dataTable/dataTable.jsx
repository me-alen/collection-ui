import React, { Component } from "react";
import DataTable from "react-data-table-component";
import filterService from "../../../../Services/filterServices";

const columns = [
  {
    name: "Unique Ref Number",
    selector: "accountNumber",
    sortable: true,
  },
  {
    name: "Name",
    selector: "customerName",
    sortable: true,
  },
  {
    name: "Customer Type",
    selector: "customerType",
    sortable: true,
  },
  {
    name: "Collection Category",
    selector: "collectionCategory",
    sortable: true,
  },
  {
    name: "Branch",
    selector: "branch",
    sortable: true,
  },
];

let data = [];

class DisplayDataTable extends Component {
  getMLDataFilterData = () => {
    filterService.mlFiltering().then((resolve) => {
      this.setState({
        data: resolve.content,
        totalElements: resolve.totalElements,
      });
    });
  };

  componentDidMount() {
    this.getMLDataFilterData();
  }
  state = { data: data, totalElements: 0 };
  render() {
    return (
      <DataTable
        title="Recommended Actions"
        columns={columns}
        data={this.state.data}
        defaultSortField="title"
        pagination
        paginationTotalRows={this.state.totalElements}
        selectableRows
      />
    );
  }
}

export default DisplayDataTable;
