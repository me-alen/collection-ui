import React, { Component } from "react";
import "./loginForm.css";
import loginService from "../../../Services/loginService";

class LoginForm extends Component {
  state = {
    user: { username: "", password: "" },
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state.user;
    loginService.login(username, password).then((resolve) => {
      if (resolve.status === "success") {
        this.props.history.replace("/home/ml-decision-engine");
      }
    });
  };

  handleChange = ({ currentTarget: input }) => {
    const user = { ...this.state.user };
    user[input.name] = input.value;
    this.setState({ user });
  };

  render() {
    const { user } = this.state;

    return (
      <div className="text-center login-form-wrapper">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              autoFocus
              onChange={this.handleChange}
              value={user.username}
              name="username"
              id="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              onChange={this.handleChange}
              value={user.password}
              name="password"
              id="password"
              type="password"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
