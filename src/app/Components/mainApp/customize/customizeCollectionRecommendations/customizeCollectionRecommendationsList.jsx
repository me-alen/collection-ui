import React, { Component } from 'react';
import { CheckBox } from '../../Common/checkBox';
import "./customizeCollectionRecommendationsList.css";

class CustomizeCollectionRecommendationsList extends Component {
    state = {  }

    constructor(props) {
        super(props)
        this.state = {
          items: [
            {id: 1, value: "Probability to Default", isChecked: true},
            {id: 2, value: "Recommended Action Count", isChecked: false},
            {id: 3, value: "Branch Distribution", isChecked: false},
            {id: 4, value: "Collection Status by LANs", isChecked: false},
            {id: 5, value: "Collection Status by Amount Collectable", isChecked: false},
            {id: 6, value: "Payment Behaviour Distribution", isChecked: true},
            {id: 7, value: "Customer Type Distribution", isChecked: true},
            {id: 8, value: "Finance Category Distribution", isChecked: false},
            {id: 9, value: "Employment Sector Distribution", isChecked: false}
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
                    return (<div className='listitem'><CheckBox handleCheckChildElement={this.handleCheckChildElement} {...item} /></div>)
                })
                }
        </ul>
            </div>
        );
    }
}
 
export default CustomizeCollectionRecommendationsList;