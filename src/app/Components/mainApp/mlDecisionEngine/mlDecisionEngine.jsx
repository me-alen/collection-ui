import React, { Component } from "react";
import ButtonFilter from "../../../core/common/buttonFilter";
import DropDownFilter from "../../../core/common/dropDownFilter";
import DisplayDataTable from "../Common/dataTable/dataTable";
import DisplayChartsAndGraphs from "../Common/graphs/displayChartsAndGraph";

class MLDecisionEngine extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <DropDownFilter />
        <div className="graph-wrapper">
          <div className="heading-wrapper d-flex align-items-center justify-content-between">
            <h2 className="sub-heading">Collection Recommendations</h2>
           <span class="icon-layout-switch cp"></span>
          </div>
          <DisplayChartsAndGraphs />
        </div>
        <ButtonFilter />
        <div className="table-wrapper">
          <DisplayDataTable />
        </div>
      </React.Fragment>
    );
  }
}

export default MLDecisionEngine;
