import React, { Component } from "react";
import "./Todomain.css";
import Tododone from "./Tododone/Done";
import Todoprogress from "./Todoprogress/Progress";
import Todolist from "./Todolist/Todo";
import Date from "./Date/Date";


export default class Todomain extends Component {
  render() {
    return (
      <div className="loginArea bg-light border border-danger rounded p-5">
        <div className=" ">
          <Date></Date>
          <div className="mt-5">
          <Todolist info={this.state}></Todolist>
          </div>
          <div className="mt-5">
          <Todoprogress></Todoprogress>
          </div>
          <div className="mt-5">
          <Tododone></Tododone>
          </div>
        </div>
      </div>
    );
  }
}
