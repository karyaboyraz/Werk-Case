import React, { Component } from 'react'
import { InputGroup, FormControl} from "react-bootstrap";

export default class Progress extends Component {
  render() {
    return (
      <div>
        <div className="h4">&#128048; Progress</div>
        <InputGroup size="lg" className="my-3 ">
          <FormControl className="border-0" readOnly onDoubleClick={this.removeReadonly} value={this.city} />
          <InputGroup.Checkbox className="rounded-circle"/>
        </InputGroup>
      </div>
    )
  }
}
