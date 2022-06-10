import React, { Component } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
var sdate = Date("JANUARY, 25, 2015").toString().toUpperCase().split(" ")
var a =new Date().getMonth()
console.log(a);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      day: sdate[2],
      month: sdate[1],
      year: sdate[3],
      weekofday: sdate[0],
    };
    this.handleChange = this.handleChange.bind(this);
    this.activeDatepicker = this.activeDatepicker.bind(this);
  }
  handleChange(date) {
    var xdate = date.toString().toUpperCase().split(" ")
    this.setState({
      day: xdate[2],
      month: xdate[1],
      year: xdate[3],
      weekofday: xdate[0],
    });
  }
  activeDatepicker(e){
    document.getElementById("datepicker").click()
  }

  render() {
    const { day, month, year, weekofday } = this.state;
    return (
      <div>
        <div onClick={this.activeDatepicker} className="d-flex justify-content-between cursor">
          <div className="row ">
          <div className="col dateDay pr-0 my-auto">{day}</div>
          <div className="col p-0">
            <div className="dateYear">{month}</div>
            <div className="dateYear">{year}</div>
          </div>
        </div>
        <div className="my-auto dateYear">{weekofday}</div>
        </div>
        <div className="form-group">
          <DatePicker id="datepicker" onChange={this.handleChange} dateFormat="MMMM d, yyyy"></DatePicker>
        </div>
      </div>
    );
  }
}
export default App;
