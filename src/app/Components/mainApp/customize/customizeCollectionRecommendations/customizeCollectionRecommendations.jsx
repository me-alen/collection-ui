import React, { Component, useState } from 'react';
import customizeIcon from "../../../../Images/Icon2.svg";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import StaticModalWithoutAnimation from '../../Common/modals/staticModalNoAnimation';
import "./customizeCollectionRecommendations.scss";
import CustomizeCollectionRecommendationsList from './customizeCollectionRecommendationsList';
import pic from "../../../../Images/Icon2.svg";
import MLDecisionEngine from '../../mlDecisionEngine/mlDecisionEngine';
import DisplayVerticalGraph from '../../Common/graphs/verticalGraph';
import DisplaySelectedGraph from './displaySelectedGraph';
import TrialFn from './trialfn';

const CustomizeCollectionRecommendations = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmitLayout1 = () => {
      const text="layout1";
      <MLDecisionEngine text={text} />
    }

    const handleSubmitLayout2 = () => {
      const text="layout3";
      <MLDecisionEngine text={text} />
    }

    const handleSubmitLayout3 = () => {
      const text="layout1";
      <MLDecisionEngine text={text} />
    }

    const handleSubmitLayout4 = () => {
      const text="layout2";
      <MLDecisionEngine text={text} />
    }

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
            <div className="rec-flex-container1">
            <div>
            <h3>Customize: Collection Recommendations</h3>
            <h5>Select components to add to this section</h5>
            <button>Remove</button>
            <Button variant="secondary" onClick={handleClose}>Cancel</Button>
            <Button variant="primary">Apply</Button>
            </div>
            <div className="rec-flex-container2">
              <div>
                <div className="rec-box1">
                    <CustomizeCollectionRecommendationsList />
                </div>
              </div>
              <div className="rec-box2">
                    {/* <img src={pic}></img> */}
                    <DisplayVerticalGraph />
                    {/* {<CustomizeCollectionRecommendationsList />} */}
                    {/* {<TrialFn />} */}
              </div>
            </div>
            <div>
              <h5>Select Dashboard Layout</h5><br />
              <Button variant="light" onClick={handleSubmitLayout1}>3 in a row</Button>
              <Button variant="light" onClick={handleSubmitLayout2}>2 up 1 down</Button>
              <Button variant="light" onClick={handleSubmitLayout3}>1 up 2 down</Button>
              <Button variant="light" onClick={handleSubmitLayout4}>1 left 2 right</Button>
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
     
  export default CustomizeCollectionRecommendations;