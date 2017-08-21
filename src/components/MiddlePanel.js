import React, { Component, PropTypes } from "react";
import ReactDOM from "react-dom";
import { Text, TextInput, View, Radio } from "react-desktop/windows";
import ChatInput from "./ChatInput.js";
import TwitchPlayer from "./TwitchPlayer";

export default class MiddlePanel extends Component {
  // logic handles autoscroll:
  // checks if scrolled up at all
  componentWillUpdate() {
    var node = ReactDOM.findDOMNode(this.refs.ChatOutput);
    this.shouldScrollBottom =
      node.scrollTop + node.offsetHeight === node.scrollHeight;
  }

  // autoscroll if bool set that we are not scrolled up
  componentDidUpdate() {
    if (this.shouldScrollBottom) {
      var node = ReactDOM.findDOMNode(this.refs.ChatOutput);
      node.scrollTop = node.scrollHeight;
    }
  }

  render() {
    const { showStreamPreview, channel, filteredMessages, client } = this.props;
    return (
      <div
        style={{
          flex: "1 1 auto",
          flexFlow: "column nowrap"
        }}
      >
        <TwitchPlayer showStreamPreview={showStreamPreview} channel={channel} />
        <Text
          className="ChatOutput"
          ref="ChatOutput"
          style={{
            overflow: "auto"
          }}
          width="100%"
          height={showStreamPreview ? "55%" : "95%"}
        >
          <div
            style={{
              width: "100%"
            }}
          >
            {filteredMessages}
          </div>
        </Text>
        <ChatInput client={client} />
      </div>
    );
  }
}
