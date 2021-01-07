import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import CustomizeFilters from "../../Components/mainApp/customize/customizeFilters/customizeFilters";
import Button from "react-bootstrap/Button";
import CommonCustomizedBox from "../../Components/mainApp/customize/commonCustomizedBox/commonCustomizedBox";
import CommonCustomizeFilters from "../../Components/mainApp/customize/commonCustomizeFilters/commonCustomizeFilters";

class DropDownFilter extends Component {
  state = { data: [] };
  handleOnSubmit = (data) => {
    this.setState({ data: data });
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ data: this.props.data.data.slice(0, 5) });
    }, 4000);
  }
  render() {
    return (
      <div className="decision-engine-filter">
        <div className="title-wrapper">
          <div className="text-area">
            <span className="icon-filter"></span>
            <p className="text mb-0">Filters</p>
          </div>
          <div className="icon-area">
            {/* <span className="icon-layout-switch cp"></span> */}
            <CustomizeFilters
              dropDownData={this.props.data.data}
              handleOnSubmit={this.handleOnSubmit}
            />
            {/* <CommonCustomizedBox /> */}
            {/* <CommonCustomizeFilters /> */}
          </div>
        </div>
        <Form>
          <div className="row filter-row">
            {this.state.data.map((select) => (
              <div className="col-lg-2 filter-col" key={select.description}>
                <div className="filter-item">
                  <Form.Group controlId={select.id}>
                    <Form.Label>{select.description}</Form.Label>
                    <Form.Control
                      as="select"
                      onChange={(e) =>
                        this.props.onClickButton(
                          e.target.id,
                          e.target.value,
                          false
                        )
                      }
                    >
                      {select.value.map((list) => (
                        <option key={list.value} value={list.value}>
                          {list.description}
                        </option>
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
  }
}

export default DropDownFilter;
