import React, { Component } from "react";

const TwitchPlayer = ({ showStreamPreview, channel }) => {
  let source_url = `http://player.twitch.tv/?channel=${channel}`;
  if (!showStreamPreview) {
    return null;
  }
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column nowrap",
        height: "40%"
      }}
    >
      <iframe
        style={{
          flex: "1"
        }}
        src={source_url}
        frameBorder="0"
        scrolling="no"
        allowFullScreen="true"
      />
    </div>
  );
};

export default TwitchPlayer;
