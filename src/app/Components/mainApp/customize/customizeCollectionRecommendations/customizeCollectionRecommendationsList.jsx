import React, { Component } from 'react';
import { CheckBox } from '../../Common/checkBox';
import DisplayPieChart from '../../Common/graphs/pieChart';
import DisplayVerticalGraph from '../../Common/graphs/verticalGraph';
import "./customizeCollectionRecommendationsList.scss";
import DisplayDonutChart from '../../Common/graphs/donutChart';
import CustomizeCollectionRecommendations from './customizeCollectionRecommendations';
import DisplaySelectedGraph from './displaySelectedGraph';
import TrialFn from './trialfn';

class CustomizeCollectionRecommendationsList extends Component {
    state = {  }

    constructor(props) {
        super(props)
        this.state = {
          items: [
            {id: "CR1", value: "Probability to Default", isChecked: true},
            {id: "CR2", value: "Recommended Action Count", isChecked: false},
            {id: "CR3", value: "Branch Distribution", isChecked: false},
            {id: "CR4", value: "Collection Status by LANs", isChecked: false},
            {id: "CR5", value: "Collection Status by Amount Collectable", isChecked: false},
            {id: "CR6", value: "Payment Behaviour Distribution", isChecked: true},
            {id: "CR7", value: "Customer Type Distribution", isChecked: true},
            {id: "CR8", value: "Finance Category Distribution", isChecked: false},
            {id: "CR9", value: "Employment Sector Distribution", isChecked: false}
          ]
        }
      }

      handleAllChecked = (event) => {
        let items = this.state.items
        items.forEach(item => item.isChecked = event.target.checked) 
        this.setState({items: items})
      }
    
      handleCheckChildElement = (event) => {
        let items = this.state.items
        items.forEach(item => {
           if (item.value === event.target.value)
              item.isChecked =  event.target.checked
              // {<DisplaySelectedGraph value={item.id} />}
              {<TrialFn value1={item.id} />}
        })
        this.setState({items: items})
      }

    render() { 
        return (
            <div className="filterList-css">
                {/* <h1> Check and Uncheck All Example </h1>
                <input type="checkbox"  value="checkedall" /> */}
                <ul>
                {
                    this.state.items.map((item) => {
                    return (<div key={item.id} className='listitem'><CheckBox handleCheckChildElement={this.handleCheckChildElement} {...item} /></div>)
                })
                }
        </ul>
            </div>
        );
    }
}
 
export default CustomizeCollectionRecommendationsList;