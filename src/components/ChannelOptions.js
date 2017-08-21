import React, { Component, PropTypes } from "react";
import { Text, TextInput, View, Radio } from "react-desktop/windows";
import { FormControl, Modal, Button, ButtonGroup } from "react-bootstrap";
import TwitchButton from "./TwitchButton";

export default class ChannelOptions extends Component {
  normal() {
    const { client } = this.props;
    client.r9kbetaoff(client.lastJoined);
    client.slowoff(client.lastJoined);
    client.subscribersoff(client.lastJoined);
  }
  render() {
    const { client } = this.props;
    return (
      <div
        style={{
          width: "100%"
        }}
        className="ChannelModes"
      >
        <hr />
        <h4
          style={{
            textAlign: "center",
            color: "#D3D3D3",
            cursor: "default"
          }}
        >
          channel modes
        </h4>
        <span
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <TwitchButton onClick={c => client.r9kbeta(client.lastJoined)}>
            R9K
          </TwitchButton>
          <TwitchButton onClick={c => client.slow(client.lastJoined)}>
            Slow
          </TwitchButton>
          <TwitchButton onClick={c => client.subscribers(client.lastJoined)}>
            Sub
          </TwitchButton>
          <TwitchButton onClick={() => this.normal()}>Normal</TwitchButton>
        </span>
      </div>
    );
  }
}
