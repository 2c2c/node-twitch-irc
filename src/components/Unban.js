import React, { Component, PropTypes } from "react";
import { Text, TextInput, View, Radio } from "react-desktop/windows";
import { FormControl, Modal, Button, ButtonGroup } from "react-bootstrap";
import TwitchModal from "./TwitchModal";

export default class Unban extends Component {
  render() {
    const { client } = this.props;
    return <TwitchModal name="Unban" client={client} action={client.unban} />;
  }
}
