import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";
import Draggable from "react-draggable";
import { Resizable } from "re-resizable";
import MacNav from "../../../../Components/MacNav/MacNav";
import { withStore } from "../../../../HOC/withStore";

class Calculator extends React.Component {
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
        defaultClassName="react-draggable calculator"
        defaultPosition={{ x: 40, y: 40 }}
        position={{x: this.state.Width, y: this.state.Height}}
        onStop={(e, data) => {
          this.setState({ Width: data.x, Height: data.y });
        }}
      >
        <Resizable
          defaultSize={{ width: this.state.Width, height: this.state.Height }}
          onResizeStop={(e, direction, ref, d) => {
            this.setState({ Width: this.state.Width + d.width });
            this.setState({ Height: this.state.Height + d.height });
          }}
        >
          <div
            onClick={this.props.onClick}
            className={`rounded w-full h-full flex flex-col gap-1 p-2 pt-4 bg-[black]  ${
              this.props.store.isMaximized
                ? "min-w-[100vw] min-h-[89vh] "
                : `max-w-[${this.state.Width}] max-h-[${this.state.Height}]`
            }`}
            style={{ position: "absolute", zIndex: 100 }}
          >
            <div className="component-app handlecalc">
              <div className="text-[gray] pb-4 flex items-center w-full justify-between">
                Abolfazl Calc
                <div className="flex justify-end items-center ">
                  <MacNav type={"MINIMIZE"} name={"CALCULATOR"} />
                  <div
                    onClick={() => {
                      if (this.props.store.isMaximized) {
                        this.setState({ Height: 40, Width: 40 });
                      } else {
                        this.setState({ Height: 0, Width: 0 });
                      }
                    }}
                  >
                    <MacNav type={"MAXIMIZE"} name={"CALCULATOR"} isMaximized={this.props.store.isMaximized} />
                  </div>

                  <MacNav type={"CLOSE"} name={"CALCULATOR"} />
                </div>
              </div>
              <Display value={this.state.next || this.state.total || "0"} />
              <ButtonPanel clickHandler={this.handleClick} />
            </div>
          </div>
        </Resizable>
      </Draggable>
    );
  }
}

export default withStore(Calculator, "calculator");
