import React, { Component } from "react";
import Form from "react-bootstrap/Form";

const DropDownFilter = ({ data }) => {
  console.log(data);
  return (
    <div className="decision-engine-filter">
      <div className="title-wrapper">
        <div className="text-area">
          <span className="icon-filter"></span>
          <p className="text mb-0">Filters</p>
        </div>
        <div className="icon-area">
          <span className="icon-layout-switch cp"></span>
        </div>
      </div>
      <Form>
        <div className="row filter-row">
          {data.data.map((select) => (
            <div className="col-lg-2 filter-col">
              <div className="filter-item">
                <Form.Group controlId="bucket">
                  <Form.Label>{select.label}</Form.Label>
                  <Form.Control as="select">
                    {select.value.map((value) => (
                      <option>{value.optLbl}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </div>
            </div>
          ))}
        </div>
      </Form>
    </div>
  );
};

export default DropDownFilter;
