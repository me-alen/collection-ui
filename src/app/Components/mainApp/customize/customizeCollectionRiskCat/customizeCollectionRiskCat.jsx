import React, { Component, useState } from 'react';
import customizeIcon from "../../../../Images/Icon2.svg";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CustomizeCollectionRiskCategoryList from './customizeCollectionRiskCatList';
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


const CustomizeCollectionRiskCategory = () => {
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
          <h3>Customize Filter</h3>
          <h5>Select collection risk category filters</h5>
          <div>
          {/* <h3>Customize Filter</h3>
          <h5>Select collection risk category filters</h5> */}
          <CustomizeCollectionRiskCategoryList />
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
     
  export default CustomizeCollectionRiskCategory;