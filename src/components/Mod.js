import React, { Component, PropTypes } from "react";
import { Text, TextInput, View, Radio } from "react-desktop/windows";
import { FormControl, Modal, Button, ButtonGroup } from "react-bootstrap";
import TwitchModal from "./TwitchModal";

export default class Mod extends Component {
  render() {
    const { client } = this.props;
    return <TwitchModal name="Mod" client={client} action={client.mod} />;
  }
}
