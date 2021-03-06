import React, { Component, useState } from 'react';
import customizeIcon from "../../../../Images/Icon2.svg";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "./commonCustomizedBox.scss";
import SearchBar from '../../Common/searchBar/searchBar';

const CommonCustomizedBox = (props) => {
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
          <div className="flex-container">
          <div>
          <h3>Customize Filters</h3>
          <h5>{props.subHeading}</h5>
          </div>
          <div>
            <SearchBar />
          </div>
          <div>
          {/* <CustomizeFiltersList /> */}
          {console.log(props.childComp)}
          {props.childComp}
          </div>
          <div>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
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
     
  export default CommonCustomizedBox;