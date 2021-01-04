import React, { Component } from 'react';
import { CheckBox } from '../../Common/checkBox';
import "./customizeFiltersList.css";

class CustomizeFiltersList extends Component {
    state = {  }

    constructor(props) {
        super(props)
        this.state = {
          items: [
            {id: 1, value: "Filter option 1", isChecked: true},
            {id: 2, value: "Deliquency", isChecked: true},
            {id: 3, value: "Cycle", isChecked: true},
            {id: 4, value: "Branch", isChecked: false},
            {id: 5, value: "Customer Type", isChecked: true},
            {id: 6, value: "Region", isChecked: true},
            {id: 7, value: "Filter option 7", isChecked: false},
            {id: 8, value: "Filter option 8", isChecked: false}
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
 
export default CustomizeFiltersList;