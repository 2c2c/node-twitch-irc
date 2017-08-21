import React, { Component } from "react";
import { Link } from "react-router";
// import { shell } from "electron";
const { shell } = window.require("electron");
import TwitchInput from "./TwitchInput";
import TwitchButton from "./TwitchButton";

export default class TwitchLogin extends Component {
  render() {
    const { username, oauth, channel, handleChange } = this.props;
    return (
      <div
        style={{
          width: "50%",
          margin: "0 auto"
        }}
      >
        <h1
          style={{
            textAlign: "center"
          }}
        >
          Log in pls
        </h1>
        <h4>
          Use &nbsp;
          <a
            style={{
              cursor: "pointer"
            }}
            onClick={url => shell.openExternal("http://twitchapps.com/tmi/")}
          >
            this link
          </a>
          &nbsp; to generate an oauth token
        </h4>
        <form
          style={{
            display: "flex",
            flexDirection: "column"
          }}
        >
          <label>Username</label>
          <TwitchInput
            onChange={e => handleChange({ username: e.target.value })}
            value={this.props.username}
          />
          <label>Oauth</label>
          <TwitchInput
            onChange={e => handleChange({ oauth: e.target.value })}
            type="password"
            value={this.props.oauth}
          />
          <label>Channel</label>
          <TwitchInput
            onChange={e => handleChange({ channel: e.target.value })}
            value={this.props.channel}
          />
          <Link to={`/chatpage/${username}/${oauth}/${channel}`}>
            <TwitchButton>Lets goooo</TwitchButton>
          </Link>
        </form>
      </div>
    );
  }
}
