import React, { Component } from "react";
import Form from "react-bootstrap/Form";

class DropDownFilter extends Component {
  state = {};
  render() {
    return (
      <div className="decision-engine-filter">
        <div className="title-wrapper">
          <div className="text-area">
            <span class="icon-filter"></span>
            <p className="text mb-0">Filters</p>
          </div>
          <div className="icon-area">
            <span class="icon-layout-switch cp"></span>
          </div>
        </div>
        <Form>
          <div className="row filter-row">
            <div className="col-lg-2 filter-col">
              <div className="filter-item">
                <Form.Group controlId="bucket">
                  <Form.Label>Deliquency</Form.Label>
                  <Form.Control as="select">
                    <option>All</option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </Form.Control>
                </Form.Group>
              </div>
            </div>
            <div className="col-lg-2 filter-col">
              <div className="filter-item">
                <Form.Group controlId="customerType">
                  <Form.Label>Customer Type</Form.Label>
                  <Form.Control as="select">
                    <option>All</option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </Form.Control>
                </Form.Group>
              </div>
            </div>
            <div className="col-lg-2 filter-col">
              <div className="filter-item">
                <Form.Group controlId="bucket">
                  <Form.Label>Deliquency</Form.Label>
                  <Form.Control as="select">
                    <option>All</option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </Form.Control>
                </Form.Group>
              </div>
            </div>

            <div className="col-lg-2 filter-col">
              <div className="filter-item">
                <Form.Group controlId="region">
                  <Form.Label>Region</Form.Label>
                  <Form.Control as="select">
                    <option>All</option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </Form.Control>
                </Form.Group>
              </div>
            </div>
            <div className="col-lg-2 filter-col">
              <div className="filter-item">
                <Form.Group controlId="branch">
                  <Form.Label>Branch</Form.Label>
                  <Form.Control as="select">
                    <option>All</option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </Form.Control>
                </Form.Group>
              </div>
            </div>
          </div>
        </Form>
      </div>
    );
  }
}

export default DropDownFilter;
