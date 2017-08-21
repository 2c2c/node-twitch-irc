import React, { Component, PropTypes } from "react";
import { Text, TextInput, View, Radio } from "react-desktop/windows";
import { FormControl, Modal, Button, ButtonGroup } from "react-bootstrap";
import TwitchModal from "./TwitchModal";
import TwitchButton from "./TwitchButton";

export default class Host extends Component {
  render() {
    const { client } = this.props;
    return (
      <div
        style={{
          width: "100%"
        }}
        className="Hosting"
      >
        <hr />
        <h4
          style={{
            textAlign: "center",
            color: "#D3D3D3",
            cursor: "default"
          }}
        >
          hosting
        </h4>
        <span
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <TwitchModal name="Host" client={client} action={client.host} />
          <TwitchButton onClick={c => client.unhost(client.lastJoined)}>
            Unhost
          </TwitchButton>
        </span>
      </div>
    );
  }
}
