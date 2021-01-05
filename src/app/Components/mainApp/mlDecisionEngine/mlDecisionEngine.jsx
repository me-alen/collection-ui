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
import CustomizeMLDecisionEngine2 from '../customize/customizeMLDecisionEngine/customizeMLDecisionEngine2';
import DisplayFilters from "../Common/filters/filters";

class MLDecisionEngine extends Component {
  state = {};

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <CustomizeMLDecisionEngine2 />
        <div className="filter-wrapper">
          <h2 className="sub-heading">Filters</h2>
          <CustomizeFilters />
          <DisplayFilters />
        </div>
        <div className="graph-wrapper">
          <h2 className="sub-heading">Collection Recommendations</h2>
          <CustomizeCollectionRecommendations />
          <DisplayChartsAndGraphs csstext={this.props.text} />
          <CustomizeCollectionRiskCategory />
          <CustomizeGrid />
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
