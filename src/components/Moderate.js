import React, { Component, PropTypes } from "react";
import { Text, TextInput, View, Radio } from "react-desktop/windows";
import { Button, ButtonGroup } from "react-bootstrap";
import Ban from "./Ban";
import Unban from "./Unban";
import Mod from "./Mod";
import Unmod from "./Unmod";
import Timeout from "./Timeout";

//TODO ban unban mod unmod timeout
export default class Moderate extends Component {
  render() {
    const { client } = this.props;
    return (
      <div
        style={{
          width: "100%"
        }}
        className="Moderate"
      >
        <hr />
        <h4
          style={{
            textAlign: "center",
            color: "#D3D3D3",
            cursor: "default"
          }}
        >
          moderate
        </h4>
        <span
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div>
            <Ban client={client} />
            <Unban client={client} />
            <Mod client={client} />
            <Unmod client={client} />
            <Timeout client={client} />
          </div>
        </span>
      </div>
    );
  }
}
