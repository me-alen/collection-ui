import React, { Component } from 'react';
import { CheckBox } from '../../Common/checkBox';
import "./customizeFilterList.css";

class CustomizeFilterList extends Component {
    state = {  }

    constructor(props) {
        super(props)
        this.state = {
          items: [
            {id: 1, value: "All", isChecked: false},
            {id: 2, value: "VP_to_Pay", isChecked: false},
            {id: 3, value: "HP_to_pay", isChecked: false},
            {id: 4, value: "LP_to_pay", isChecked: false},
            {id: 5, value: "VHP_to_pay", isChecked: false},
            {id: 6, value: "Filter option 7", isChecked: false},
            {id: 7, value: "Filter option 8", isChecked: false}
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
                    return (<CheckBox handleCheckChildElement={this.handleCheckChildElement} {...item} />)
                })
                }
        </ul>
            </div>
        );
    }
}
 
export default CustomizeFilterList;