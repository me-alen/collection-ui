import React, { Component, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../header/header";
import NavBar from "../navBar/navBar";
import MLDecisionEngine from "./mlDecisionEngine/mlDecisionEngine";
import "./homePortal.module.scss";

class Home extends Component {
  state = { isActive: false, headerTitle: "Home" };
  render() {
    const handleChangeSidepanelClass = () => {
      this.setState({ isActive: !this.state.isActive });
    };
    const handleChangeHeaderTitle = (title) => {
      this.setState({ headerTitle: title });
    };
    return (
      <React.Fragment>
        <div
          className={
            this.state.isActive ? "landing-container min" : "landing-container"
          }
        >
          <NavBar changeHeaderTitle={handleChangeHeaderTitle} />
          <div className="content-container">
            <Header
              onChangeSidePanelClass={handleChangeSidepanelClass}
              headerTitle={this.state.headerTitle}
            />
            <div className="scroll-box">
              <div className="main-content-wrapper">
                <Switch>
                  <Route
                    path="/home/ml-decision-engine"
                    component={MLDecisionEngine}
                  />
                </Switch>
                {/* <div className="alert alert-success" role="alert">
                <h4 className="alert-heading">asdasd</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus deserunt ducimus aperiam labore hic eligendi
                  culpa pariatur, magni repudiandae fugit, ipsa voluptate eos,
                  dolore itaque alias maxime at. Error, pariatur.
                </p>
                <p className="mb-0">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente doloribus fugiat nobis, sunt quod animi nostrum
                  aliquam voluptas modi maxime omnis praesentium incidunt
                  itaque autem magnam iure quo pariatur delectus.
                </p>
              </div> */}
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </React.Fragment>
    );
  }
}

export default Home;
