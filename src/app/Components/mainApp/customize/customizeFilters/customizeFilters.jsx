import React, { Component, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import CustomizeFiltersList from './customizeFiltersList';
import "./customizeFilters.scss";
import SearchBar from '../../Common/searchBar/searchBar';
import CommonCustomizedBox from '../commonCustomizedBox/commonCustomizedBox';

const CustomizeFilters = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    var input1 = null;
    const child = element => {
      input1 = element;
    };

    const onClick = () => {
      console.log(input1.getChecked())
    };

      return (  
          <div>
          <Button 
          variant="light"
          id="customization-button"
          aria-expanded="false"
          aria-haspopup="true" 
          type="button" 
          onClick={handleShow}>
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
          <div className="filter-flex-container">
          <div>
          <h3>Customize Filters</h3>
          <h5>Select any 5 filters you want to display</h5>
          </div>
          <div>
            <SearchBar />
          </div>
          <div>
          {/* <CustomizeFiltersList /> */}
          <CustomizeFiltersList ref={child} />
          </div>
          <div>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          {/* <Button variant="primary">Apply</Button> */}
          <Button variant="primary" onClick={onClick} >Apply</Button>
          </div>
          </div>
          </Modal.Body>
          </Modal>

    </div>
  
      );
  }
     
  export default CustomizeFilters;

  // const customizeFilters = () => {

  //   const myComp= <CustomizeFiltersList />

  //   return (
  //     <div>
  //       {<CommonCustomizedBox subHeading="Select any 5 filters you want to display" childComp={myComp} />}
  //     </div>
  //   );
  // }
   
  // export default customizeFilters;