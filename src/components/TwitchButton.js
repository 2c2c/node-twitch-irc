import React, { Component, PropTypes } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import PopularWordElement from "./PopularWordElement.js";
import Radium from "radium";
import color from "color";

//TODO make clicked/unclicked
//trigger the filteringj
// @Radium
export default Radium(
  class TwitchButton extends Component {
    render() {
      const { style, onClick, children } = this.props;
      return (
        <button
          style={[style, styles.base]}
          className="TwitchButton"
          onClick={onClick}
        >
          {children}
        </button>
      );
    }
  }
);

let styles = {
  base: {
    color: "#D3D3D3",
    background: "#17141F",
    outline: "none",
    border: 0,

    ":hover": {
      background: color("#201C2B").hexString(),
      color: "#FFFFFF"
    }
  }
};
