import React, { Component } from "react";
import DropDownFilter from "../../../core/common/dropDownFilter";
import DisplayDataTable from "../Common/dataTable/dataTable";
import DisplayChartsAndGraphs from "../Common/graphs/displayChartsAndGraph";
import Button from 'react-bootstrap/Button';
import customizationIcon from "../../../Images/Icon1.svg";
import StaticModalWithoutAnimation from "../Common/modals/staticModalNoAnimation";
import CustomizeMLDecisionEngine from '../customize/customizeMLDecisionEngine/customizeMLDecisionEngine';
import CustomizeCollectionRiskCategory from '../customize/customizeCollectionRiskCat/customizeCollectionRiskCat';
import CustomizeCollectionRiskCategoryList from '../customize/customizeCollectionRiskCat/customizeCollectionRiskCatList';
import MainCustomization from '../customize/mainCustomization';
import CustomizeGrid from '../customize/customizeGrid/customizeGrid';
import CustomizeFilters from '../customize/customizeFilters/customizeFilters';
import CustomizeCollectionRecommendations from "../customize/customizeCollectionRecommendations/customizeCollectionRecommendations";

class MLDecisionEngine extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="graph-wrapper">
          <h2 className="sub-heading">Collection Recommendations</h2>
          <CustomizeMLDecisionEngine />
          <CustomizeFilters />
          <CustomizeCollectionRecommendations />
          <CustomizeCollectionRiskCategory />
          <CustomizeGrid />
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
