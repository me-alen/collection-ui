import React, { Component } from "react";
import DropDownFilter from "../../../core/common/dropDownFilter";
import DisplayDataTable from "../Common/dataTable/dataTable";
import DisplayChartsAndGraphs from "../Common/graphs/displayChartsAndGraph";

class MLDecisionEngine extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="graph-wrapper">
          <h2 className="sub-heading">Collection Recommendations</h2>
          <DisplayChartsAndGraphs />
        </div>
        <DropDownFilter />
        <div className="table-wrapper">
          <DisplayDataTable />
        </div>



      </React.Fragment>
    );
  }
}

export default MLDecisionEngine;
