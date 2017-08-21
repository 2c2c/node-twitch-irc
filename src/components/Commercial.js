import React, { Component, PropTypes } from "react";
import { Text, TextInput, View, Radio } from "react-desktop/windows";
import TwitchButton from "./TwitchButton";

export default class Commercial extends Component {
  render() {
    const { client } = this.props;
    return (
      <div
        style={{
          width: "100%"
        }}
        className="Commercial"
      >
        <hr />
        <h4
          style={{
            textAlign: "center",
            color: "#D3D3D3",
            cursor: "default"
          }}
        >
          commercial
        </h4>
        <span
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <TwitchButton
            style={{}}
            onClick={(c, t) => client.commercial(client.lastJoined, 30)}
          >
            30
          </TwitchButton>
          <TwitchButton
            style={{}}
            onClick={(c, t) => client.commercial(client.lastJoined, 60)}
          >
            60
          </TwitchButton>
          <TwitchButton
            style={{}}
            onClick={(c, t) => client.commercial(client.lastJoined, 90)}
          >
            90
          </TwitchButton>
          <TwitchButton
            style={{}}
            onClick={(c, t) => client.commercial(client.lastJoined, 120)}
          >
            120
          </TwitchButton>
          <TwitchButton
            style={{}}
            onClick={(c, t) => client.commercial(client.lastJoined, 150)}
          >
            150
          </TwitchButton>
          <TwitchButton
            onClick={(c, t) => client.commercial(client.lastJoined, 180)}
          >
            180
          </TwitchButton>
        </span>
      </div>
    );
  }
}
