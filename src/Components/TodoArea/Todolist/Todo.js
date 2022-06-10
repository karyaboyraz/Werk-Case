import React, { Component } from "react";
import { InputGroup, FormControl} from "react-bootstrap";



export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: "Bulutlu",
      city: "City",
    };

    this.removeReadonly = this.removeReadonly.bind(this);
  }
  removeReadonly(element) {
    element.removeAttribute('readOnly');
  }
  render() {
    return (
      <div>
        <div className="h4">&#128048; To Do</div>
        <InputGroup size="lg" className="my-3 ">
          <FormControl className="border-0" readOnly onDoubleClick={this.removeReadonly} value={this.city} />
          <InputGroup.Checkbox className="rounded-circle"/>
        </InputGroup>
        
        <InputGroup size="lg" className="my-3 ">
          <FormControl id="newTask" placeholder="+ New"/>
        </InputGroup>
      </div>
    );
  }
}
