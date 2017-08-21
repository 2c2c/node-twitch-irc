import React, { Component, PropTypes } from "react";
import { Text, TextInput, View, Radio } from "react-desktop/windows";
import Commercial from "./Commercial";
import Host from "./Host";
import Moderate from "./Moderate";
import ChannelOptions from "./ChannelOptions";
import { FormControl, Modal, Button, ButtonGroup } from "react-bootstrap";
import PopularWordList from "./PopularWordList";
import TwitchButton from "./TwitchButton";
import StreamPreview from "./StreamPreview";
var wordUsage = require("./wordUsage");
var util = require("util");

export default class LeftPanel extends Component {
  render() {
    const {
      client,
      popularWords,
      toggleFilter,
      showStreamPreview,
      toggleStreamPreview
    } = this.props;
    if (!client) {
      return null;
    }
    return (
      <div
        style={{
          flex: "0 0 300px",
          flexFlow: "column nowrap",
          backgroundColor: "#17141F"
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#D3D3D3"
          }}
        >
          {client.lastJoined.slice(1)}
        </h1>
        <StreamPreview toggleStreamPreview={toggleStreamPreview} />
        <Commercial client={client} />
        <Host client={client} />
        <Moderate client={client} />
        <ChannelOptions client={client} />
        <PopularWordList
          toggleFilter={toggleFilter}
          popularWords={popularWords}
        />
      </div>
    );
  }
}
