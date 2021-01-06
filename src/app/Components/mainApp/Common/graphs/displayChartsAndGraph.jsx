import React, { Component } from "react";
import DisplayVerticalGraph from "./verticalGraph";
import DisplayPieChart from "./pieChart";
import DisplayDonutChart from "./donutChart";
import "./displayChartsAndGraph.css";
// import Button from 'react-bootstrap/Button'

class DisplayChartsAndGraphs extends Component {
  state = {};

  render() {
    return (


      <div className="wrapper">
        <div className="item item1">
          <DisplayVerticalGraph />
        </div>
        
        <div className="item item2">
          <DisplayPieChart />
        </div>
        <div className="item item3">
          <DisplayDonutChart />
        </div>
      </div>
    );
  }
}

export default DisplayChartsAndGraphs;
