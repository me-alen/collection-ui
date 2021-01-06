import React, { Component, useState } from 'react';
import customizeIcon from "../../../../Images/Icon2.svg";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "./customizeGrid.css";
import CustomizeGridList from './customizeGridList';

const CustomizeGrid = () => {
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
            <div className="flex-container2">
            <div>
            <h3>Customize Grid</h3>
            </div>
            <div className="flex-container">
              <div>
                <h4>Columns</h4>
                <h5>Select any 6 Columns you want to display in the grid</h5>
                <div>
                <CustomizeGridList />
                </div>
              </div>
              <div>
                <h4>Pagination</h4>
                <h5>Number of items to display in a page</h5>
                <div>50</div>
              </div>
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
     
  export default CustomizeGrid;