import React, { Component } from 'react';
import { CheckBox } from '../../Common/checkBox';
import "./customizeFiltersList.scss";

class CustomizeFiltersList extends Component {
    state = {  }

    constructor(props) {
        super(props)
        this.state = {
          items: [
            {id: "Filter1", value: "Delinquency", isChecked: true},
            {id: "Filter2", value: "Cycle", isChecked: true},
            {id: "Filter3", value: "Customer Type", isChecked: true},
            {id: "Filter4", value: "Region", isChecked: false},
            {id: "Filter5", value: "Branch", isChecked: false},
            {id: "Filter6", value: "City", isChecked: true},
            {id: "Filter7", value: "Collection Category", isChecked: false},
            {id: "Filter8", value: "Employment Sector", isChecked: false},
            {id: "Filter9", value: "Payment Flag", isChecked: false},
            {id: "Filter10", value: "Product", isChecked: false},
            {id: "Filter11", value: "States", isChecked: false}
          ]
        }
      }

      getChecked() {
        return this.state.items;
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
                    return (<div key={item.id} className='listitem'><CheckBox handleCheckChildElement={this.handleCheckChildElement} {...item} /></div>)
                })
                }
        </ul>
            </div>
        );
    }
}
 
export default CustomizeFiltersList;