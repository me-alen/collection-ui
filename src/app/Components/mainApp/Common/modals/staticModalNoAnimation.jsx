import React, { Component, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const StaticModalWithoutAnimation = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <div>
              <Button 
              variant={props.btnVariant} 
              id={props.btnId} 
              aria-expanded={props.btnAriaExpanded} 
              aria-haspopup={props.btnAriaHaspopup} 
              type={props.btnType} 
              onClick={handleShow}>
              <img id={props.imgId} src={props.imgSrc} alt={props.imgAlt}></img>
              </Button>
              <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
              animation={false}
              >
              <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              I will not close if you click outside me. Don't even try to press escape key.
              </Modal.Body>
              <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>Close</Button>
              <Button variant="primary">Understood</Button>
              </Modal.Footer>
              </Modal>
        </div>

    );
}
   
export default StaticModalWithoutAnimation;