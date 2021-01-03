import React, { Component } from 'react';
import "./mainCustomization.css";

class MainCustomization extends Component {
    state = {  }
    render() { 
        return (
            <div className="row glitter">
                <div className="col glitterati">
                    <header>Manage Page Components</header>
                    <div className="row">
                        <div className="col">
                            {/* <title>All Components</title> */}
                            <header>All Components</header>
                            {/* <p>Dashboard</p>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <p>Filters</p>
                            <div></div>
                            <div></div>
                            <p>Content</p>
                            <div></div> */}
                        </div>
                        <div className="col">
                            {/* <p>Drag and drop components to this section</p> */}
                            <header>Drag and drop components to this section</header>
                            {/* <div></div> */}
                        </div>
                    </div>
                </div>
                <div className="col shine">
                    <header>Select Page Layout</header>
                </div>
            </div>
        );
    }
}
 
export default MainCustomization;