import React, { Component } from 'react';
import DisplayVerticalGraph from './verticalGraph';
import DisplayPieChart from './pieChart';
import DisplayDonutChart from './donutChart';
import './displayChartsAndGraph.css';
import DisplayBarGraph from './barGraph';
// import Button from 'react-bootstrap/Button'

class DisplayChartsAndGraphs extends Component {
    state = {}

    render() {
        return (
            // <div className='graphs-wrapper'>
            //     <div className="row">
            //         <div className="chart-section-title">Collection Recommendations</div>
            //     </div>
            //     <div className="row">
            //         <div className="col">
            //             <DisplayVerticalGraph />
            //         </div>
            //         <div className="col">
            //             {/* <DisplayBarGraph /> */}
            //             <DisplayPieChart />
            //         </div>
            //         <div className="col">
            //             <DisplayDonutChart />
            //         </div>
            //     </div>
            // </div>

            <div className="wrapper ">
            <div className="item item1"> <DisplayVerticalGraph /></div>
            {/* <div className="item item2"> <DisplayBarGraph /></div> */}
            <div className="item item2"> <DisplayPieChart /></div>
            <div className="item item3"><DisplayDonutChart /></div>
            </div>




        );
    }
}

export default DisplayChartsAndGraphs;