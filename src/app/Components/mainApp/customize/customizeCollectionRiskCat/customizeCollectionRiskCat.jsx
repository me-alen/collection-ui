import React, { Component, useState } from "react";
import customizeIcon from "../../../../Images/Icon2.svg";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CustomizeCollectionRiskCategoryList from "./customizeCollectionRiskCatList";
import StaticModalWithoutAnimation from "../../Common/modals/staticModalNoAnimation";
import "./customizeCollectionRiskCat.scss";
import SearchBar from "../../Common/searchBar/searchBar";
import CommonCustomizedBox from "../commonCustomizedBox/commonCustomizedBox";

const CustomizeCollectionRiskCategory = ({
  collectionCategory,
  handleOnSubmit,
}) => {
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
        onClick={handleShow}
      >
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
          <div className="filter-flex-container">
            <div className="heading-wrapper">
              <h3 className="heading">Customize Filters</h3>
              <h5 className="sub-heading">
                Select any 5 filters you want to display
              </h5>
            </div>
            <div className="custom-filter-search-wrapper">
              <SearchBar />
            </div>
            <div>
              <CustomizeCollectionRiskCategoryList
                collectionCategory={collectionCategory}
                handleOnSubmit={handleOnSubmit}
              />
            </div>
            <div className="filter-footer-btn-wrapper">
              <Button variant="secondary btn-cancel" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary apply-btn" onClick={handleClose}>
                Apply
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CustomizeCollectionRiskCategory;

// const CustomizeCollectionRiskCategory = () => {
//   return (
//     <div>
//       <CommonCustomizedBox subHeading="Select collection risk category filters" comp={<CustomizeCollectionRiskCategoryList />} />
//     </div>
//   );
// }

// export default CustomizeCollectionRiskCategory;
