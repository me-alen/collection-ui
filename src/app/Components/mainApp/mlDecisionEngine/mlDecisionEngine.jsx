import React, { Component } from "react";
import ButtonFilter from "../../../core/common/buttonFilter";
import DropDownFilter from "../../../core/common/dropDownFilter";
import DisplayDataTable from "../Common/dataTable/dataTable";
import DisplayChartsAndGraphs from "../Common/graphs/displayChartsAndGraph";

import filterService from "../../../Services/filterServices";

class MLDecisionEngine extends Component {
  //Button-Filter

  getButtonFilterData = () => {
    filterService.buttonFilterData().then((resolve) => {
      let data = { ...this.state.collectionRiskFilter };
      data.data = Object.entries(resolve).map((e) => ({
        btnLabel: e[0],
        value: e[1],
      }));
      data.data.unshift({
        btnLabel: "All",
        value: data.data
          .map((val) => {
            return val.value;
          })
          .reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
          }),
      });
      this.setState({ collectionRiskFilter: data });
    });
  };

  handleOnButtonClick = (e) => {
    console.log(e);
  };

  // Data-Table

  getMLDataTableFilterData = (e) => {
    const params = { collectionCategory: "ehp_to_Pay" };
    filterService.mlFilteringDataTable(params).then((resolve) => {
      let data = { ...this.state.dataTable };
      data.data = resolve.content;
      data.totalElements = resolve.totalElements;
      this.setState({ dataTable: data });
    });
  };

  componentDidMount() {
    this.getMLDataTableFilterData(null);
    this.getButtonFilterData();
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
      title: "Recommended Actions",
    },
    collectionRiskFilter: {
      data: [],
    },
  };
  render() {
    return (
      <React.Fragment>
        <DropDownFilter />
        <div className="graph-wrapper">
          <div className="heading-wrapper d-flex align-items-center justify-content-between">
            <h2 className="sub-heading">Collection Recommendations</h2>
            <span className="icon-layout-switch cp"></span>
          </div>
          <DisplayChartsAndGraphs />
        </div>
        <ButtonFilter
          data={this.state.collectionRiskFilter}
          onClickButton={this.handleOnButtonClick}
        />
        <div className="table-wrapper">
          <DisplayDataTable data={this.state.dataTable} />
        </div>
      </React.Fragment>
    );
  }
}

export default MLDecisionEngine;
