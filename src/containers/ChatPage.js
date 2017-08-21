import React, { Component } from "react";
import ChatWindowContainer from "../components/ChatWindowContainer";

export default class ChatPage extends Component {
  render() {
    const { username, oauth, channel } = this.props.params;
    return (
      <ChatWindowContainer
        username={username}
        oauth={oauth}
        channel={channel}
      />
    );
  }
}
