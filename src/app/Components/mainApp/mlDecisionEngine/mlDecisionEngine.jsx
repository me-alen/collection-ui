import React, { Component } from "react";
import ButtonFilter from "../../../core/common/buttonFilter";
import DropDownFilter from "../../../core/common/dropDownFilter";
import DisplayDataTable from "../Common/dataTable/dataTable";
import DisplayChartsAndGraphs from "../Common/graphs/displayChartsAndGraph";

import filterService from "../../../Services/filterServices";

class MLDecisionEngine extends Component {
  getMLDataFilterData = () => {
    filterService.mlFiltering().then((resolve) => {
      let data = { ...this.state.dataTable };
      data.data = resolve.content;
      data.totalElements = resolve.totalElements;
      this.setState({ dataTable: data });
    });
  };

  componentDidMount() {
    this.getMLDataFilterData();
  }

  state = {
    dataTable: {
      columns: [
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
      ],
      data: [],
      totalElements: 0,
    },
  };
  render() {
    return (
      <React.Fragment>
        <DropDownFilter />
        <div className="graph-wrapper">
          <h2 className="sub-heading">Collection Recommendations</h2>
          <DisplayChartsAndGraphs />
        </div>
        <ButtonFilter />
        <div className="table-wrapper">
          <DisplayDataTable data={this.state.dataTable} />
        </div>
      </React.Fragment>
    );
  }
}

export default MLDecisionEngine;
