import React, { Component } from "react";
import DropDownFilter from "../../../core/common/dropDownFilter";
import DisplayDataTable from "../Common/dataTable/dataTable";
import DisplayChartsAndGraphs from "../Common/graphs/displayChartsAndGraph";
import Button from 'react-bootstrap/Button';
import customizationIcon from "../../../Images/Icon1.svg";
import StaticModalWithoutAnimation from "../Common/modals/staticModalNoAnimation";
import CustomizeMLDecisionEngine from '../customize/customizeMLDecisionEngine/customizeMLDecisionEngine';
import CustomizeFilter from '../customize/customizeFilter/customizeFilter';
import CustomizeFilterList from '../customize/customizeFilter/customizeFilterList';
import MainCustomization from '../customize/mainCustomization';

class MLDecisionEngine extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="graph-wrapper">
          <h2 className="sub-heading">Collection Recommendations</h2>
          <CustomizeMLDecisionEngine />
          <CustomizeFilter />
          {/* <CustomizeFilterList /> */}
          {/* <MainCustomization /> */}
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
