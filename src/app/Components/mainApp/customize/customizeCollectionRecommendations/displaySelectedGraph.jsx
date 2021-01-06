import React, { Component } from 'react';
import DisplayVerticalGraph from '../../Common/graphs/verticalGraph';
import DisplayPieChart from '../../Common/graphs/pieChart';
import DisplayDonutChart from '../../Common/graphs/donutChart';

class DisplaySelectedGraph extends Component {
    state = {
        id: this.props.value2
    }

    renderSwitch(){
        switch (this.props.value2) {
            case 1:
              <DisplayVerticalGraph />
            break;
      
            case 2:
              <DisplayPieChart />  
            break;
      
            case 3:
              <DisplayDonutChart />
            break;
            
            case 4:
              <DisplayVerticalGraph />
            break;
            
            case 5:
              <DisplayPieChart />
            break;
            
            case 6:
              <DisplayDonutChart />
            break;
            
            case 7:
              <DisplayVerticalGraph />
            break;
            
            case 8:
              <DisplayPieChart />
            break;
            
            case 9:
              <DisplayDonutChart />
            break;
            
            default:
                <DisplayVerticalGraph />
              break;
          }
    }
    
    render() { 
        return (
            <div>
                {<this.renderSwitch />}
            </div>
        );
    }
}
 
export default DisplaySelectedGraph;
