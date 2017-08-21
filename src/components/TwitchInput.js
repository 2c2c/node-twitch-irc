import React, { Component, PropTypes } from "react";
import { Text, TextInput, View, Radio } from "react-desktop/windows";
import { FormControl, Modal, Button, ButtonGroup } from "react-bootstrap";
import UserElement from "./UserElement";
import Radium from "radium";

// @Radium
export default Radium(
  class TwitchInput extends Component {
    render() {
      const {
        type,
        style,
        value,
        placeholder,
        onChange,
        children
      } = this.props;
      return (
        <input
          type={type || "text"}
          style={[style, styles.base]}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        >
          {children}
        </input>
      );
    }
  }
);

var styles = {
  base: {
    border: "1px solid black",
    outline: "none",
    boxShadow: 0,
    ":focus": {
      border: "1px solid #6441A5"
    }
  }
};
