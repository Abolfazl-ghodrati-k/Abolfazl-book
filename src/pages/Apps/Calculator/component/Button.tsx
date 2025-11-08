import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

export default class Button extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    orange: PropTypes.bool,
    wide: PropTypes.bool,
    clickHandler: PropTypes.func,
  };

  handleClick = () => {
    // @ts-expect-error TS(2339): Property 'clickHandler' does not exist on type 'Re... Remove this comment to see the full error message
    this.props.clickHandler(this.props.name);
  };

  render() {
    const className = [
      "component-button",
      // @ts-expect-error TS(2339): Property 'orange' does not exist on type 'Readonly... Remove this comment to see the full error message
      this.props.orange ? "orange" : "",
      // @ts-expect-error TS(2339): Property 'wide' does not exist on type 'Readonly<{... Remove this comment to see the full error message
      this.props.wide ? "wide" : "",
    ];

    return (
      <div className={className.join(" ").trim()}>
        {/* @ts-expect-error TS(2339): Property 'name' does not exist on type 'Readonly<{... Remove this comment to see the full error message */}
        <button onClick={this.handleClick}>{this.props.name}</button>
      </div>
    );
  }
}
