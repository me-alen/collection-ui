import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginForm from "./Components/mainApp/loginForm/loginForm";
import Home from "./Components/mainApp/homePortal";
import "./App.scss";
import DisplayChartsAndGraphs from "./Components/mainApp/Common/graphs/displayChartsAndGraph";
import CheckboxContainer from './Components/mainApp/Common/checkboxContainer';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/checkbox" component={CheckboxContainer} />
        <Route path="/graphs" component={DisplayChartsAndGraphs}></Route>
        <Route path="/login" component={LoginForm} />
        <Route path="/home" component={Home} />
        <Route path="/" render={() => <Redirect to="/login" />} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
