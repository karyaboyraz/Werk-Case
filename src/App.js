import React, { Component } from "react";
import Login from "./Components/Login/Login";
import TodoMain from "./Components/TodoArea/Todomain";
import "./App.css";
export default class App extends Component {
  render() {
    return (
      <div className="row justify-content-center pt-5">
        <div className="col-md-4">
          <Login></Login>
        </div>
        <div className="col-md-4">
          <TodoMain></TodoMain>
        </div>
      </div>
    );
  }
}
