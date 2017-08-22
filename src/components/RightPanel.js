import React, { Component, PropTypes } from "react";
import { Text, TextInput, View, Radio } from "react-desktop/windows";
import Commercial from "./Commercial";
import Host from "./Host";
import Moderate from "./Moderate";
import ChannelOptions from "./ChannelOptions";
import { FormControl, Modal, Button, ButtonGroup } from "react-bootstrap";
import PopularWordList from "./PopularWordList";
import axios from "axios";
import UserList from "./UserList";
import RightPanelContextMenu from "./RightPanelContextMenu";
import jsonp from "jsonp";

var wordUsage = require("./wordUsage");
var util = require("util");

export default class RightPanel extends Component {
  state = {
    mods: [],
    staff: [],
    admins: [],
    global_mods: [],
    viewers: [],
    count: null
  };

  componentWillReceiveProps(nextProps) {
    const { client, oauth } = this.props;
    if (client || !nextProps.client) {
      return;
    }
    nextProps.client.on("join", (channel, username, self) => {
      if (!self) {
        return;
      }
      // channel is in #channelname form
      channel = channel.substring(1);

      // axios doesn't support jsonp. (?!)
      jsonp(
        `http://tmi.twitch.tv/group/user/${channel}/chatters`,
        null,
        function(err, resp) {
          if (err) {
            console.error(err.message);
          } else {
            console.log(resp);
            this.setState({
              mods: resp.data.chatters.moderators,
              staff: resp.data.chatters.staff,
              admins: resp.data.chatters.admins,
              global_mods: resp.data.chatters.global_mods,
              viewers: resp.data.chatters.viewers,
              count: resp.data.chatter_count
            });
          }
        }.bind(this)
      );
    });
  }
  // tagged list

  render() {
    const { mods, staff, admins, global_mods, viewers, count } = this.state;

    const { focusedUser, handleFocusedUser } = this.props;

    if (!count) {
      return null;
    }
    return (
      <div
        style={{
          flex: "0 0 200px",
          flexFlow: "column nowrap",
          backgroundColor: "#EFEEF1",
          overflow: "auto"
        }}
      >
        <UserList
          focusedUser={focusedUser}
          handleFocusedUser={user => handleFocusedUser(user)}
          name="mods"
          userlist={mods}
        />
        <UserList
          focusedUser={focusedUser}
          handleFocusedUser={user => handleFocusedUser(user)}
          name="staff"
          userlist={staff}
        />
        <UserList
          focusedUser={focusedUser}
          handleFocusedUser={user => handleFocusedUser(user)}
          name="admins"
          userlist={admins}
        />
        <UserList
          focusedUser={focusedUser}
          handleFocusedUser={user => handleFocusedUser(user)}
          name="global_mods"
          userlist={global_mods}
        />
        <UserList
          focusedUser={focusedUser}
          handleFocusedUser={user => handleFocusedUser(user)}
          name="users"
          userlist={viewers}
        />
        <RightPanelContextMenu />
      </div>
    );
  }
}
