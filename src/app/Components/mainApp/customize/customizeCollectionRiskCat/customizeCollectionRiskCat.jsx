import React, { Component, useState } from 'react';
import customizeIcon from "../../../../Images/Icon2.svg";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CustomizeCollectionRiskCategoryList from './customizeCollectionRiskCatList';
import StaticModalWithoutAnimation from '../../Common/modals/staticModalNoAnimation';
import "./customizeCollectionRiskCat.css";

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
          <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          animation={false}
          >
          <Modal.Body>
            <div className="flex-container">
              <div>
              <h3>Customize Filter</h3>
              <h5>Select collection risk category filters</h5>
              </div>
              <div>
              <CustomizeCollectionRiskCategoryList />
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
     
  export default CustomizeCollectionRiskCategory;