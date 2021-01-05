import React, { Component } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import "./filters.scss";

class DisplayFilters extends Component {
    state = {  }
    render() { 
        return (
            <div>
                {/* <h2>Filters</h2> */}
                <div className="flex-container-1">
                
                <div>
                <h5 className="sub-sub-heading">Delinquency</h5>
                <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item href="#/action-1">All</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Bucket 0</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Bucket 1</Dropdown.Item>
                <Dropdown.Item href="#/action-4">Bucket 2</Dropdown.Item>
                <Dropdown.Item href="#/action-5">Bucket3</Dropdown.Item>
                </DropdownButton>
                </div>

                <div>
                <h5 className="sub-sub-heading">Cycle</h5>
                <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item href="#/action-1">All</Dropdown.Item>
                <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">10</Dropdown.Item>
                <Dropdown.Item href="#/action-4">20</Dropdown.Item>
                </DropdownButton>
                </div>

                <div>
                <h5 className="sub-sub-heading">Customer Type</h5>
                <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item href="#/action-1">All</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Corporate</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Retail</Dropdown.Item>
                </DropdownButton>
                </div>

                <div>
                <h5 className="sub-sub-heading">Region</h5>
                <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item href="#/action-1">All</Dropdown.Item>
                <Dropdown.Item href="#/action-2">East</Dropdown.Item>
                <Dropdown.Item href="#/action-3">North</Dropdown.Item>
                <Dropdown.Item href="#/action-4">South</Dropdown.Item>
                <Dropdown.Item href="#/action-5">West</Dropdown.Item>
                </DropdownButton>
                </div>

                <div>
                <h5 className="sub-sub-heading">Branch</h5>
                <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item href="#/action-1">All</Dropdown.Item>
                </DropdownButton>
                </div>

                <div>
                <h5 className="sub-sub-heading">Recommended Action</h5>
                <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item href="#/action-1">All</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Email</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Whatsapp</Dropdown.Item>
                <Dropdown.Item href="#/action-4">SMS</Dropdown.Item>
                <Dropdown.Item href="#/action-5">Tele Call</Dropdown.Item>
                <Dropdown.Item href="#/action-6">IVR</Dropdown.Item>
                <Dropdown.Item href="#/action-7">Visit</Dropdown.Item>
                </DropdownButton>
                </div>

                </div>
            </div>
        );
    }
}
 
export default DisplayFilters;