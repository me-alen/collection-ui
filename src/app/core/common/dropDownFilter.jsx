import React, {Component} from "react";
import Form from "react-bootstrap/Form";
import CustomizeFilters from '../../Components/mainApp/customize/customizeFilters/customizeFilters';
import Button from 'react-bootstrap/Button';
import CommonCustomizedBox from '../../Components/mainApp/customize/commonCustomizedBox/commonCustomizedBox';
import CommonCustomizeFilters from '../../Components/mainApp/customize/commonCustomizeFilters/commonCustomizeFilters';


// const DropDownFilter = ({ data, onClickButton }) => {
//   return (
//     <div className="decision-engine-filter">
//       <div className="title-wrapper">
//         <div className="text-area">
//           <span className="icon-filter"></span>
//           <p className="text mb-0">Filters</p>
//         </div>
//         <div className="icon-area">
//           {/* <span className="icon-layout-switch cp"></span> */}
//           <CustomizeFilters />
//           {/* <CommonCustomizedBox /> */}
//           {/* <CommonCustomizeFilters /> */}
//         </div>
//       </div>
//       <Form>
//         <div className="row filter-row">
//           {data.data.map((select) => (
//             <div className="col-lg-2 filter-col" key={select.id}>
//               <div className="filter-item">
//                 <Form.Group controlId={select.id}>
//                   <Form.Label>{select.label}</Form.Label>
//                   <Form.Control
//                     as="select"
//                     onChange={(e) => onClickButton(e.target.id, e.target.value)}
//                   >
//                     {select.value.map((value) => (
//                       <option key={value.value} value={value.value}>
//                         {value.optLbl}
//                       </option>
//                     ))}
//                   </Form.Control>
//                 </Form.Group>
//               </div>
//             </div>
//           ))}
//         </div>
//       </Form>
//     </div>
//   );
// };

// export default DropDownFilter;

class DropDownFilter extends Component {
  state = {  }
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
          <CustomizeFilters />
          {/* <CommonCustomizedBox /> */}
          {/* <CommonCustomizeFilters /> */}
        </div>
      </div>
      <Form>
        <div className="row filter-row">
          {this.props.data.data.map((select) => (
            <div className="col-lg-2 filter-col" key={select.id}>
              <div className="filter-item">
                <Form.Group controlId={select.id}>
                  <Form.Label>{select.label}</Form.Label>
                  <Form.Control
                    as="select"
                    onChange={(e) => this.props.onClickButton(e.target.id, e.target.value)}
                  >
                    {select.value.map((value) => (
                      <option key={value.value} value={value.value}>
                        {value.optLbl}
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
