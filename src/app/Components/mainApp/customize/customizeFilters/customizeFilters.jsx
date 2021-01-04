import React, { Component, useState } from 'react';
import customizeIcon from "../../../../Images/Icon2.svg";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CustomizeFiltersList from './customizeFiltersList';
import StaticModalWithoutAnimation from '../../Common/modals/staticModalNoAnimation';

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
          <img id="customize-icon" src={customizeIcon} alt="custom"></img>
          </Button>
          <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          animation={false}
          >
          <Modal.Body>
          <h3>Customize Filters</h3>
          <h5>Select any 5 filters you want to display</h5>
          <div>
          {/* <h3>Customize Filter</h3>
          <h5>Select collection risk category filters</h5> */}
          <CustomizeFiltersList />
          </div>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="primary">Apply</Button>
          </Modal.Footer>
          </Modal>

    </div>
  
      );
  }
     
  export default CustomizeFilters;