import React, { Component } from "react";
import Pagination from "@material-ui/lab/Pagination";

class DataTableHeader extends Component {
  handlePageClick = (e, pageNo) => {
    let data = this.state;
    data.fromCount = (pageNo - 1) * 10 + 1;
    data.toCount = pageNo * 10;
    console.log(this.state);
    this.setState({ count: data });
    this.props.onPageChange("page", pageNo - 1);
  };

  searchQuery = "";
  handleSearch = (e) => {
    console.log(e);
    this.searchQuery = e.target.value;
    if (e.code === "Enter" || e.type === "click") {
      console.log(this.searchQuery);
      this.props.onPageChange("customerNameOrAccountNumber", this.searchQuery);
    }
  };

  state = { fromCount: 1, toCount: 10 };
  render() {
    return (
      <div className="table-header-container d-flex align-items-center justify-content-between">
        <div className="left-section d-flex align-items-center">
          <h2 className="table-heading">{this.props.paginationData.title}</h2>
          <div className="count">
            <p className="total">
              Total :
              <span className="value">
                {this.props.paginationData.totalElements}
              </span>
            </p>
          </div>
          <div className="search-wrapper">
            <input
              type="text"
              name="search"
              placeholder="Search"
              onKeyUp={this.handleSearch}
            />
            <span onClick={this.handleSearch} className="icon-search cp"></span>
          </div>
        </div>

        <div className="right-section d-flex align-items-center">
          <span className="current-result">
            Showing {this.state.fromCount} - {this.state.toCount} of{" "}
            {this.props.paginationData.totalElements}
          </span>
          <div className="pagination-wrapper">
            <Pagination
              count={this.props.paginationData.displayCount}
              onChange={this.handlePageClick}
            />
          </div>
          <span className="icon-layout-switch cp"></span>
        </div>
      </div>
    );
  }
}

export default DataTableHeader;
