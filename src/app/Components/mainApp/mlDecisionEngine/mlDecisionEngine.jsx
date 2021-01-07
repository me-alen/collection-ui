import React, { Component } from "react";
import ButtonFilter from "../../../core/common/buttonFilter";
import DropDownFilter from "../../../core/common/dropDownFilter";
import DisplayDataTable from "../Common/dataTable/dataTable";
import DisplayChartsAndGraphs from "../Common/graphs/displayChartsAndGraph";
import filterService from "../../../Services/filterServices";
import CustomizeCollectionRecommendations from "../customize/customizeCollectionRecommendations/customizeCollectionRecommendations";
import services from "../../../Services/apiService";

let filterData = {};
class MLDecisionEngine extends Component {
  //Button-Filter

  getButtonFilterData = () => {
    filterService.buttonFilterData().then((resolve) => {
      let data = { ...this.state.collectionRiskFilter };
      data.data = resolve.data.map((e) => {
        let mapValue = Object.assign({}, e);
        mapValue.active = "list-item";
        mapValue.isChecked = false;
        return mapValue;
      });
      this.setState({ collectionRiskFilter: data });
    });
  };

  //DropDown-Filter
  getDropDownFilter = () => {
    filterService.dropDownFilterData().then((resolve) => {
      let data = { ...this.state.MLFilter };
      data.data = resolve.data;
      data.data[2].value = [{ description: "All", value: null }];
      let formData = { ...data };
      formData.data = data.data.map((e) => {
        let mapValue = Object.assign({}, e);
        mapValue.isChecked = false;
        return mapValue;
      });
      this.setState({ MLFilter: formData });
    });
  };

  //ML-Filterr
  setFilterData = (param, value, isButtonFilter) => {
    filterData[param] = value;
    this.getMLDataTableFilterData(filterData);
    this.setState({ loader: true });
  };

  // Data-Table

  getMLDataTableFilterData = (filterData) => {
    filterService.mlFilteringDataTable(filterData).then((resolve) => {
      let data = { ...this.state.dataTable };
      data.data = resolve.content;
      data.totalElements = resolve.totalElements;
      this.setState({ dataTable: data });
      this.setState({ loader: false });
    });
  };

  // componentDidMount() {
  //   this.getMLDataTableFilterData(null);
  //   this.getButtonFilterData();
  // }

  async componentDidMount() {
    this.getMLDataTableFilterData(null);
    this.getButtonFilterData();
    this.getDropDownFilter();
    // await this.Delinquency();
    // await this.Cycle();
    // await this.CustomerType();
    // await this.Region();
    // await this.Branch();
    // await this.City();
    // await this.CollectionCategory();
    // await this.EmploymentSector();
    // await this.PaymentFlag();
    // await this.Product();
    // await this.States();
  }

  // async Delinquency() {
  //   try {
  //     const { data } = await services.getDelinquency();
  //     console.log('Delinquency data', data);
  //     const place = this.state.dataPoints[0].value
  //     this.setState({ place: data });
  //     console.log("place value", place)
  //   } catch (ex) {
  //     if (ex.response && ex.response.status === 404)
  //       console.log("oops. error.");
  //   }
  // }

  // async Delinquency() {
  //   try {
  //     const { data } = await services.getDelinquency();
  //     // console.log('Delinquency data', data);
  //     // const place = this.state.dataPoints[0].value
  //     const data1 = { name: "Name", id: "Key2", value: "2" };
  //     var arr = [...this.state.MLFilterData1];
  //     var arr1 = arr.push(data1);
  //     this.setState({ MLFilterData1: arr });
  //   } catch (ex) {
  //     if (ex.response && ex.response.status === 404)
  //       console.log("oops. error.");
  //   }
  // }

  // async Cycle() {
  //   try {
  //     const { data } = await services.getCycle();
  //     // console.log('Cycle data', data);
  //     // const place = this.state.dataPoints[0].value
  //     const data1 = { name: "Name", id: "Key2", value: "2" };
  //     var arr = [...this.state.MLFilterData1];
  //     var arr1 = arr.push(data1);
  //     this.setState({ MLFilterData1: arr });
  //   } catch (ex) {
  //     if (ex.response && ex.response.status === 404)
  //       console.log("oops. error.");
  //   }
  // }

  // async CustomerType() {
  //   try {
  //     const { data } = await services.getCustomerType();
  //     // console.log('Customer Type data', data);
  //     // const place = this.state.dataPoints[0].value
  //     const data1 = { name: "Name", id: "Key2", value: "2" };
  //     var arr = [...this.state.MLFilterData1];
  //     var arr1 = arr.push(data1);
  //     this.setState({ MLFilterData1: arr });
  //   } catch (ex) {
  //     if (ex.response && ex.response.status === 404)
  //       console.log("oops. error.");
  //   }
  // }

  // async Region() {
  //   try {
  //     const { data } = await services.getRegion();
  //     // console.log('Region data', data);
  //     // const place = this.state.dataPoints[0].value
  //     const data1 = { name: "Name", id: "Key2", value: "2" };
  //     var arr = [...this.state.MLFilterData1];
  //     var arr1 = arr.push(data1);
  //     this.setState({ MLFilterData1: arr });
  //   } catch (ex) {
  //     if (ex.response && ex.response.status === 404)
  //       console.log("oops. error.");
  //   }
  // }

  // async Branch() {
  //   try {
  //     const { data } = await services.getBranch();
  //     // console.log('Branch data', data);
  //     // const place = this.state.dataPoints[0].value
  //     const data1 = { name: "Name", id: "Key2", value: "2" };
  //     var arr = [...this.state.MLFilterData1];
  //     var arr1 = arr.push(data1);
  //     this.setState({ MLFilterData1: arr });
  //   } catch (ex) {
  //     if (ex.response && ex.response.status === 404)
  //       console.log("oops. error.");
  //   }
  // }

  // async City() {
  //   try {
  //     const { data } = await services.getCity();
  //     // console.log('City data', data);
  //     // const place = this.state.dataPoints[0].value
  //     const data1 = { name: "Name", id: "Key2", value: "2" };
  //     var arr = [...this.state.MLFilterData1];
  //     var arr1 = arr.push(data1);
  //     this.setState({ MLFilterData1: arr });
  //   } catch (ex) {
  //     if (ex.response && ex.response.status === 404)
  //       console.log("oops. error.");
  //   }
  // }

  // async CollectionCategory() {
  //   try {
  //     const { data } = await services.getCollectionCategory();
  //     // console.log('Collection Category data', data);
  //     // const place = this.state.dataPoints[0].value
  //     const data1 = { name: "Name", id: "Key2", value: "2" };
  //     var arr = [...this.state.MLFilterData1];
  //     var arr1 = arr.push(data1);
  //     this.setState({ MLFilterData1: arr });
  //   } catch (ex) {
  //     if (ex.response && ex.response.status === 404)
  //       console.log("oops. error.");
  //   }
  // }

  // async EmploymentSector() {
  //   try {
  //     const { data } = await services.getEmploymentSector();
  //     // console.log('Employment Sector data', data);
  //     // const place = this.state.dataPoints[0].value
  //     const data1 = { name: "Name", id: "Key2", value: "2" };
  //     var arr = [...this.state.MLFilterData1];
  //     var arr1 = arr.push(data1);
  //     this.setState({ MLFilterData1: arr });
  //   } catch (ex) {
  //     if (ex.response && ex.response.status === 404)
  //       console.log("oops. error.");
  //   }
  // }

  // async PaymentFlag() {
  //   try {
  //     const { data } = await services.getPaymentFlag();
  //     // console.log('Payment Flag data', data);
  //     // const place = this.state.dataPoints[0].value
  //     const data1 = { name: "Name", id: "Key2", value: "2" };
  //     var arr = [...this.state.MLFilterData1];
  //     var arr1 = arr.push(data1);
  //     this.setState({ MLFilterData1: arr });
  //   } catch (ex) {
  //     if (ex.response && ex.response.status === 404)
  //       console.log("oops. error.");
  //   }
  // }

  // async Product() {
  //   try {
  //     const { data } = await services.getProduct();
  //     // console.log('Product data', data);
  //     // const place = this.state.dataPoints[0].value
  //     const data1 = { name: "Name", id: "Key2", value: "2" };
  //     var arr = [...this.state.MLFilterData1];
  //     var arr1 = arr.push(data1);
  //     this.setState({ MLFilterData1: arr });
  //   } catch (ex) {
  //     if (ex.response && ex.response.status === 404)
  //       console.log("oops. error.");
  //   }
  // }

  // async States() {
  //   try {
  //     const { data } = await services.getStates();
  //     // console.log('States data', data);
  //     // const place = this.state.dataPoints[0].value
  //     const data1 = { name: "Name", id: "Key2", value: "2" };
  //     var arr = [...this.state.MLFilterData1];
  //     var arr1 = arr.push(data1);
  //     this.setState({ MLFilterData1: arr });
  //   } catch (ex) {
  //     if (ex.response && ex.response.status === 404)
  //       console.log("oops. error.");
  //   }
  // }

  state = {
    loader: true,
    dataTable: {
      columns: [
        {
          name: "Unique Ref Number",
          selector: "accountNumber",
          sortable: true,
        },
        {
          name: "Name",
          selector: "customerName",
          sortable: true,
        },
        {
          name: "Customer Type",
          selector: "customerType",
          sortable: true,
        },
        {
          name: "Deliquency",
          selector: "bucket",
          sortable: true,
        },
        {
          name: "Collection Category",
          selector: "collectionCategory",
          sortable: true,
        },
        {
          name: "Branch",
          selector: "branch",
          sortable: true,
        },
        {
          name: "Action",
          selector: "action",
          sortable: true,
        },
      ],
      data: [],
      totalElements: 0,
      pageCount: 10,
      title: "Recommended Actions",
    },
    collectionRiskFilter: {
      id: "collectionCategory",
      title: "Collection Risk Categories",
      data: [],
    },
    MLFilter: {
      data: [
        {
          id: "bucket",
          description: "Deliquency",
          value: [
            { description: "All", value: "null" },
            { description: "Bucket One", value: 1 },
            { description: "Bucket Two", value: 2 },
            { description: "Bucket Three", value: 3 },
          ],
        },
        {
          id: "cycle",
          description: "Cycle",
          value: [
            { description: "All", value: null },
            { description: "Cycle One", value: 2 },
            { description: "Cycle Two", value: 10 },
            { description: "Cycle Three", value: 20 },
          ],
        },
        {
          id: "customerType",
          description: "Customer Type",
          value: [
            { description: "All", value: null },
            { description: "Retail", value: "RETAIL" },
            { description: "FTU", value: "FTU" },
          ],
        },
        {
          id: "branch",
          description: "Branch",
          value: [
            { description: "All", value: null },
            { description: "Agra", value: "AGRA" },
            { description: "Ahmedabad", value: "AHMEDABAD" },
            { description: "Ahmednagar", value: "AHMEDNAGAR" },
            { description: "Ajmer", value: "AJMER" },
            { description: "Ambala", value: "AMBALA" },
            { description: "Amritsar", value: "AMRITSAR" },
            { description: "Aurangabad", value: "AURANGABAD" },
            { description: "Mumbai", value: "MUMBAI" },
          ],
        },
      ],
    },
    dataPoints: [
      {
        id: "bucket",
        label: "Delinquency",
        value: [],
      },
      {
        id: "cycle",
        label: "Cycle",
        value: [],
      },
      {
        id: "customerType",
        label: "Customer Type",
        value: [],
      },
      {
        id: "branch",
        label: "Branch",
        value: [],
      },
      {
        id: "region",
        label: "Region",
        value: [],
      },
      {
        id: "branch",
        label: "Branch",
        value: [],
      },
      {
        id: "city",
        label: "City",
        value: [],
      },
      {
        id: "collectionCategory",
        label: "CollectionCategory",
        value: [],
      },
      {
        id: "employmentSector",
        label: "Employment Sector",
        value: [],
      },
      {
        id: "paymentFlag",
        label: "Payment Flag",
        paymentFlagValue: [],
      },
      {
        id: "product",
        label: "Product",
        value: [],
      },
      {
        id: "states",
        label: "States",
        value: [],
      },
    ],
    MLFilterData1: [
      {
        name: "Hannah",
        id: "Key1",
      },
    ],
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <DropDownFilter
          data={this.state.MLFilter}
          onClickButton={this.setFilterData}
        />
        <div className="graph-wrapper">
          <div className="heading-wrapper d-flex align-items-center justify-content-between">
            <h2 className="sub-heading">Collection Recommendations</h2>
            {/* <span className="icon-layout-switch cp"></span> */}
            <CustomizeCollectionRecommendations />
          </div>
          <DisplayChartsAndGraphs csstext={this.props.text} />
        </div>
        <ButtonFilter
          data={this.state.collectionRiskFilter}
          onClickButton={this.setFilterData}
        />
        <div className="table-wrapper">
          <DisplayDataTable
            data={this.state.dataTable}
            onPageChange={this.setFilterData}
            showHideLoader={this.state.loader}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default MLDecisionEngine;
