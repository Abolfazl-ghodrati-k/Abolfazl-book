import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";
import Draggable from "react-draggable";
import { Resizable } from "re-resizable";

export default class Calculator extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
    Width: 400,
    Height: 400,
  };

  handleClick = (buttonName) => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    return (
      <Draggable
        bounds="parent"
        cancel=".cancelcmd"
        handle=".handlecalc"
        defaultClassName="react-draggable cmd"
        defaultPosition={{ x: 40, y: 40 }}
      >
        <Resizable
          defaultSize={{ width: this.state.Width, height: this.state.Height }}
          onResizeStop={(e, direction, ref, d) => {
            this.setState({ Width: this.state.Width + d.width });
            this.setState({Height: this.state.Height + d.height});
          }}
        >
          <div className="rounded w-full h-full flex flex-col gap-1 p-2 pt-4 bg-[black]">
            <div className="component-app handlecalc">
              <Display value={this.state.next || this.state.total || "0"} />
              <ButtonPanel clickHandler={this.handleClick} />
            </div>
          </div>
        </Resizable>
      </Draggable>
    );
  }
}
