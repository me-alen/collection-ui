import React, { Component, useState } from 'react';
import customizeIcon from "../../../../Images/Icon2.svg";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import StaticModalWithoutAnimation from '../../Common/modals/staticModalNoAnimation';
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
          {/* <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          animation={false}
          >
          <Modal.Header>
          <Modal.Title>Customize Filter</Modal.Title> */}
          {/* <Modal.Subtitle className="mb-2 text-muted">Select collection risk category filters</Modal.Subtitle> */}
          {/* </Modal.Header>
          <Modal.Body>
            <h4>A second random title</h4>
            <h5>A third random title</h5>
          <Card style={{ width: '18rem' }}>
          <Card.Body> */}
          {/* <Card.Title>Card Title</Card.Title> */}
          {/* <Card.Subtitle className="mb-2 text-muted">Select collection risk category filters</Card.Subtitle>
          <h4>A random title</h4> */}
          {/* <ListGroup variant="flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup> */}
          {/* <CustomizeFilterList />
          </Card.Body>
          </Card>
  
          </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="primary">Apply</Button>
          </Modal.Footer>
          </Modal> */}

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
          </div>
          <div className="row">
              <div className="col">
                    <h4>Columns</h4>
                    <h5>Select any 6 Columns you want to display in the grid</h5>
                    <div>
                    <CustomizeGridList />
                    </div>
              </div>
              <div className="col">
                  <h4>Pagination</h4>
                  <h5>Number of items to display in a page</h5>
                  <div>50</div>
              </div>
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
     
  export default CustomizeGrid;