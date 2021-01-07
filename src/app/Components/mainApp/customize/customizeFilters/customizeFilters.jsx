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
          <div className="heading-wrapper">
          <h3 className="heading">Customize Filters</h3>
          <h5 className="sub-heading">Select any 5 filters you want to display</h5>
          </div>
          <div className="custom-filter-search-wrapper">
            <SearchBar />
          </div>
          <div>
          <CustomizeFiltersList />
          </div>
          <div className="filter-footer-btn-wrapper">
          <Button variant="secondary btn-cancel" onClick={handleClose}>Cancel</Button>
          <Button variant="primary apply-btn">Apply</Button>
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