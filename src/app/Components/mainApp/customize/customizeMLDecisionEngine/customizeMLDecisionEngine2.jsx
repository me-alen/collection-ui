import React, { Component, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Header from '../../../header/header';
import NavBarForCustomization from '../../../navBar/navBarForCustomization';
import "./customizeMLDecisionEngine.css";
import CardComp from '../../Common/cards/CardComp';
import customizationIcon from "../../../../Images/Icon1.svg";

const CustomizeMLDecisionEngine2 = () => {
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
                {/* <img id="customization-icon"  src={customizationIcon} alt="custom"></img> */}
                <span className="icon-window-plus"></span>
                </Button>
                <Modal
                className="modal-dialog modal-content"
              //   dialogClassName="modal-90w"
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                animation={false}
                >
                <Modal.Header>
                <Modal.Title>Customize: ML Decision Engine</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="flex-container1">
                        <div>Navbar</div>
                        <div className="flex-container2">
                            <div>
                                <h4>Customize ML Decision Engine (header here)</h4>
                                <Button variant="secondary" onClick={handleClose}>Close</Button>
                                <Button variant="primary">Understood</Button>
                            </div>
                            <div>
                                <div className="flex-container3">
                                    <div className="flex-container4">
                                        <div>Manage Page Components</div>
                                        <div className="flex-container5">
                                        <div className="flex-container6">
                                            <h3>All Components</h3>
                                            <div>
                                                <h5>Dashboard</h5>
                                                <list />
                                            </div>
                                            <div>
                                                <h5>Filters</h5>
                                                <list />
                                            </div>
                                            <div>
                                                <h5>Content</h5>
                                                <list />
                                            </div>
                                        </div>
                                        <div>Drag n drop</div>
                                        </div>
                                    </div>
                                    <div className="flex-container6">
                                        <div>Select Page Layout</div>
                                        <div className="flex-container7">
                                        <div>layout1</div>
                                        <div>layout2</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                {/* <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary">Understood</Button> */}
                </Modal.Footer>
                </Modal>
          </div>
      );
  }


   
export default CustomizeMLDecisionEngine2;