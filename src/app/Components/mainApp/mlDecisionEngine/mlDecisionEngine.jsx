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
        selected: false,
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
        selected: true,
      });
      this.setState({ collectionRiskFilter: data });
    });
  };

  //ML-Filterr
  // Data-Table

  getMLDataTableFilterData = (e) => {
    const params = { collectionCategory: e !== "All" ? e : null };
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
    MLFilter: {
      data: [
        {
          label: "Deliquency",
          value: [
            { optLbl: "All", value: "null" },
            { optLbl: "Bucket One", value: 1 },
            { optLbl: "Bucket Two", value: 2 },
            { optLbl: "Bucket Three", value: 3 },
          ],
        },
        {
          label: "Cycle",
          value: [
            { optLbl: "All", value: null },
            { optLbl: "Cycle One", value: 2 },
            { optLbl: "Cycle Two", value: 10 },
            { optLbl: "Cycle Three", value: 20 },
          ],
        },
        {
          label: "Customer Type",
          value: [
            { optLbl: "All", value: null },
            { optLbl: "Retail", value: "RETAIL" },
            { optLbl: "FTU", value: "FTU" },
          ],
        },
        {
          label: "Branch",
          value: [
            { optLbl: "All", value: null },
            { optLbl: "Agra", value: "AGRA" },
            { optLbl: "Ahmedabad", value: "AHMEDABAD" },
            { optLbl: "Ahmednagar", value: "AHMEDNAGAR" },
            { optLbl: "Ajmer", value: "AJMER" },
            { optLbl: "Ambala", value: "AMBALA" },
            { optLbl: "Amritsar", value: "AMRITSAR" },
            { optLbl: "Aurangabad", value: "AURANGABAD" },
            { optLbl: "Mumbai", value: "MUMBAI" },
          ],
        },
      ],
    },
  };
  render() {
    return (
      <React.Fragment>
        <DropDownFilter data={this.state.MLFilter} />
        <div className="graph-wrapper">
          <div className="heading-wrapper d-flex align-items-center justify-content-between">
            <h2 className="sub-heading">Collection Recommendations</h2>
            <span className="icon-layout-switch cp"></span>
          </div>
          <DisplayChartsAndGraphs />
        </div>
        <ButtonFilter
          data={this.state.collectionRiskFilter}
          onClickButton={this.getMLDataTableFilterData}
        />
        <div className="table-wrapper">
          <DisplayDataTable data={this.state.dataTable} />
        </div>
      </React.Fragment>
    );
  }
}

export default MLDecisionEngine;
