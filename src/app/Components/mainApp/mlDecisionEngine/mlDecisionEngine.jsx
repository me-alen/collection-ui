import React, { Component } from "react";
import ButtonFilter from "../../../core/common/buttonFilter";
import DropDownFilter from "../../../core/common/dropDownFilter";
import DisplayDataTable from "../Common/dataTable/dataTable";
import DisplayChartsAndGraphs from "../Common/graphs/displayChartsAndGraph";
import filterService from "../../../Services/filterServices";
import CustomizeCollectionRecommendations from '../customize/customizeCollectionRecommendations/customizeCollectionRecommendations';

let filterData = {};
class MLDecisionEngine extends Component {
  //Button-Filter

  getButtonFilterData = () => {
    filterService.buttonFilterData().then((resolve) => {
      let data = { ...this.state.collectionRiskFilter };
      data.data = resolve.data.map((e) => {
        let mapValue = Object.assign({}, e);
        mapValue.active = "list-item";
        return mapValue;
      });
      data.data.unshift({
        name: "All",
        value: null,
        amt: data.data
          .map((val) => {
            return parseInt(val.amt);
          })
          .reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
          }),
        active: "list-item active",
      });
      this.setState({ collectionRiskFilter: data });
    });
  };

  //ML-Filterr
  setFilterData = (param, value) => {
    filterData[param] = value;
    this.getMLDataTableFilterData(filterData);
  };

  // Data-Table

  getMLDataTableFilterData = (filterData) => {
    filterService.mlFilteringDataTable(filterData).then((resolve) => {
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
          name: "Deliquency",
          selector: "bucket",
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
        {
          name: "Action",
          selector: "action",
          sortable: true,
        },
      ],
      data: [],
      totalElements: 0,
      pageCount: 10,
      title: "Recommended Actions",
    },
    collectionRiskFilter: {
      id: "collectionCategory",
      title: "Collection Risk Categories",
      data: [],
    },
    MLFilter: {
      data: [
        {
          id: "bucket",
          label: "Deliquency",
          value: [
            { optLbl: "All", value: "null" },
            { optLbl: "Bucket One", value: 1 },
            { optLbl: "Bucket Two", value: 2 },
            { optLbl: "Bucket Three", value: 3 },
          ],
        },
        {
          id: "cycle",
          label: "Cycle",
          value: [
            { optLbl: "All", value: null },
            { optLbl: "Cycle One", value: 2 },
            { optLbl: "Cycle Two", value: 10 },
            { optLbl: "Cycle Three", value: 20 },
          ],
        },
        {
          id: "customerType",
          label: "Customer Type",
          value: [
            { optLbl: "All", value: null },
            { optLbl: "Retail", value: "RETAIL" },
            { optLbl: "FTU", value: "FTU" },
          ],
        },
        {
          id: "branch",
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
        <DropDownFilter
          data={this.state.MLFilter}
          onClickButton={this.setFilterData}
        />
        <div className="graph-wrapper">
          <div className="heading-wrapper d-flex align-items-center justify-content-between">
            <h2 className="sub-heading">Collection Recommendations</h2>
            {/* <span className="icon-layout-switch cp"></span> */}
            <CustomizeCollectionRecommendations />
          </div>
          <DisplayChartsAndGraphs />
        </div>
        <ButtonFilter
          data={this.state.collectionRiskFilter}
          onClickButton={this.setFilterData}
        />
        <div className="table-wrapper">
          <DisplayDataTable
            data={this.state.dataTable}
            onPageChange={this.setFilterData}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default MLDecisionEngine;
