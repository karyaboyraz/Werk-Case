import React, { Component } from "react";
import "./Login.css";

export default class Login extends Component {
  render() {
    return (
      <div className="loginArea bg-light border border-danger rounded d-flex align-items-center">
        <div className="container text-center">
          <h4>Login</h4>
          <div className="input-group input-group-lg my-4">
            <input className="border form-control border-0 d-block" type="text" placeholder="E-mail" />
          </div>
          <div className="d-flex justify-content-end">
            <button className="loginButton btn-light border btn">Login</button>
          </div>
        </div>
      </div>
    );
  }
}
