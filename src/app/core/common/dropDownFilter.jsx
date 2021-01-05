import React, { Component } from "react";
import Form from "react-bootstrap/Form";

class DropDownFilter extends Component {
  state = {};
  render() {
    return (
      <div className="filter">
        <span>filter</span>
        <Form>
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
          <Form.Group controlId="cycle">
            <Form.Label>Cycle</Form.Label>
            <Form.Control as="select">
              <option>All</option>
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Form.Control>
          </Form.Group>
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
        </Form>
      </div>
    );
  }
}

export default DropDownFilter;
