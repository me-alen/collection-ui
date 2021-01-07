import React, { Component, useState } from 'react';
import customizeIcon from "../../../../Images/Icon2.svg";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "./commonCustomizeFilters.scss";
import SearchBar from '../../Common/searchBar/searchBar';
import { CheckBox } from "../../Common/checkBox";

const CommonCustomizeFilters = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //       items: [
    //         {id: 1, value: "Filter option 1", isChecked: true},
    //         {id: 2, value: "Deliquency", isChecked: true},
    //         {id: 3, value: "Cycle", isChecked: true},
    //         {id: 4, value: "Branch", isChecked: false},
    //         {id: 5, value: "Customer Type", isChecked: true},
    //         {id: 6, value: "Region", isChecked: true},
    //         {id: 7, value: "Filter option 7", isChecked: false},
    //         {id: 8, value: "Filter option 8", isChecked: false}
    //       ]
    //     }
    //   }

    // handleAllChecked = (event) => {
    //     let items = this.state.items
    //     items.forEach(item => item.isChecked = event.target.checked) 
    //     this.setState({items: items})
    //   }
    
    //   handleCheckChildElement = (event) => {
    //     let items = this.state.items
    //     items.forEach(item => {
    //        if (item.value === event.target.value)
    //           item.isChecked =  event.target.checked
    //     })
    //     this.setState({items: items})
    //   }

      return (
        <div>
          <Button
            variant="light"
            id="customization-button"
            aria-expanded="false"
            aria-haspopup="true"
            type="button"
            onClick={handleShow}
          >
            {/* <img id="customize-icon" src={customizeIcon} alt="custom"></img> */}
            <span className="icon-layout-switch cp"></span>
          </Button>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            animation={false}
          >
            <Modal.Body>
              <div>
                <div>
                  <h3>Customize Filters</h3>
                  <h5>{props.subHeading}</h5>
                </div>
                <div>
                  <SearchBar />
                </div>
                {/* <div>
          <CustomizeFiltersList />
          {console.log(props.childComp)}
          {props.childComp}
          </div> */}
                <div className="filterList-css">
                  <ul>
                    {this.state.items.map((item) => {
                      return (
                        <div className="listitem">
                          <CheckBox
                            handleCheckChildElement={
                              this.handleCheckChildElement
                            }
                            {...item}
                          />
                        </div>
                      );
                    })}
                  </ul>
                </div>
                <div>
                  <Button variant="secondary" onClick={handleClose}>
                    Cancel
                  </Button>
                  <Button variant="primary">Apply</Button>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              {/* <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="primary">Apply</Button> */}
            </Modal.Footer>
          </Modal>
        </div>
      );
  }
     
  export default CommonCustomizeFilters;