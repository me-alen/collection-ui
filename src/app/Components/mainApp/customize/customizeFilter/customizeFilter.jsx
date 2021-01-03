import React, { Component, useState } from 'react';
import customizeIcon from "../../../../Images/Icon2.svg";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CustomizeFilterList from './customizeFilterList';
import StaticModalWithoutAnimation from '../../Common/modals/staticModalNoAnimation';

// class CustomizeFilter extends Component {
//     state = {  }
//     render() { 
//         return (
//             <StaticModalWithoutAnimation
//             btnVariant="light" 
//             btnId="customization-button"
//             btnAriaExpanded="false"
//             btnAriaHaspopup="true"
//             btnType="button"
//             imgId="customize-icon" 
//             imgSrc={customizeIcon} 
//             imgAlt="custom" />
//         );
//     }
// }
 
// export default CustomizeFilter;


const CustomizeFilter = () => {
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
          <Modal.Header>
          <Modal.Title>Customize Filter</Modal.Title>
          {/* <Modal.Subtitle className="mb-2 text-muted">Select collection risk category filters</Modal.Subtitle> */}
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
          <CustomizeFilterList />
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
     
  export default CustomizeFilter;