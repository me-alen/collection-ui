import React, { Component, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Header from '../../../header/header';
import NavBarForCustomization from '../../../navBar/navBarForCustomization';
import "./customizeMLDecisionEngine.css";
import CardComp from '../../Common/cards/CardComp';
import customizationIcon from "../../../../Images/Icon1.svg";


// const MLDecisionMainCustomization = (props) => {
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//     return (
//         <div>
//               <Button 
//               variant={props.btnVariant} 
//               id={props.btnId} 
//               aria-expanded={props.btnAriaExpanded} 
//               aria-haspopup={props.btnAriaHaspopup} 
//               type={props.btnType} 
//               onClick={handleShow}>
//               <img id={props.imgId} src={props.imgSrc} alt={props.imgAlt}></img>
//               </Button>
//               <Modal
//               className="modal-dialog modal-content"
//             //   dialogClassName="modal-90w"
//               show={show}
//               onHide={handleClose}
//               backdrop="static"
//               keyboard={false}
//               animation={false}
//               >
//               {/* <Modal.Header closeButton>
//               <Modal.Title>Modal title</Modal.Title>
//               </Modal.Header> */}
//               <Modal.Body>
//                   {/* <div className="col">
//                       abc
//                   </div>
//                   <div className="col">
//                   I will not close if you click outside me. Don't even try to press escape key.
//                   </div> */}
//                 <React.Fragment>
//                 {/* <Header /> */}
//                 <NavBarForCustomization />
//                 {/* <div className="main-container-wrapper">
//                 <Switch>
//                 <Route
//                 path="/home/ml-decision-engine"
//                 component={MLDecisionEngine}
//                 />
//                 </Switch>
//                 </div> */}
//                 </React.Fragment>
//               </Modal.Body>
//               <Modal.Footer>
//               <Button variant="secondary" onClick={handleClose}>Close</Button>
//               <Button variant="primary">Understood</Button>
//               </Modal.Footer>
//               </Modal>
//         </div>
//     );
// }



const CustomizeMLDecisionEngine = () => {
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
                <img id="customization-icon"  src={customizationIcon} alt="custom"></img>
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
                    {/* <div className="row">
                        <div className="col col-1">
                        <NavBarForCustomization />
                        </div>
                        <div className="col col-2">
                        <Header />
                        </div>
                    </div> */}
                    {/* <Header /> */}
                    <div><CardComp /></div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary">Understood</Button>
                </Modal.Footer>
                </Modal>
          </div>
      );
  }


   
export default CustomizeMLDecisionEngine;