import React, { Component, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import CustomizeFilterList from './customizeFilterList';

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
        <Modal.Header>
        <Modal.Title>Customize Filter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
        {/* <Card.Title>Card Title</Card.Title> */}
        <Card.Subtitle className="mb-2 text-muted">Select collection risk category filters</Card.Subtitle>
        {/* <ListGroup variant="flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup> */}
        <Abc />
        </Card.Body>
        </Card>

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