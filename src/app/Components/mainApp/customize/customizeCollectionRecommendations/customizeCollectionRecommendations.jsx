import React, { Component, useState } from 'react';
import customizeIcon from "../../../../Images/Icon2.svg";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import StaticModalWithoutAnimation from '../../Common/modals/staticModalNoAnimation';
import "./customizeCollectionRecommendations.css";
import CustomizeCollectionRecommendationsList from './customizeCollectionRecommendationsList';

const CustomizeCollectionRecommendations = () => {
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
              <div className="box">
              <div className="row">
          <h3>Customize Grid</h3>
          <h5>Select components to add to this section</h5>
          <button>Remove</button>
          </div>
          <div className="row">
              <div className="col">
                    <div>
                    <CustomizeCollectionRecommendationsList />
                    </div>
              </div>
              <div className="col"></div>
          </div>
          <div className="row">
              <h5>Select Dashboard Layout</h5><br />
              <button>3 in a row</button>
              <button>2 up 1 down</button>
              <button>1 up 2 down</button>
              <button>1 left 2 right</button>
          </div>
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
     
  export default CustomizeCollectionRecommendations;