import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import irc from 'tmi.js';
import {Text, TextInput, View, Radio} from 'react-desktop/windows';
import LeftPanel from './LeftPanel.js'
import RightPanel from './RightPanel.js'
import ChatInput from './ChatInput.js'
import ChatWindow from './ChatWindow.js'
import {formatBadges, formatEmotes} from './emotes.js'
import axios from 'axios';
import TwitchPlayer from './TwitchPlayer';
const fs = window.require("fs")
// var natural = require('natural');
var wordUsage = require('./wordUsage')
var util = require('util');

export default class ChatWindowContainer extends Component {
  static propTypes = {};
  state = {
    showStreamPreview: false,
    badgeAPI: {},
    focusedUser: '',
    filters: [],
    messages: [],
    client: null,
    popularWords: []
  };

  toggleStreamPreview(e) {
    this.setState({showStreamPreview: e});
  };

  componentDidMount() {
    const {username, oauth, channel} = this.props;
    // store cache for convenient relogins
    let cache = {
      username: username,
      oauth: oauth
    };
    cache = JSON.stringify(cache);
    fs.writeFileSync('./login', cache, 'utf8')

    //setup client tmijs login
    var options = {
      options: {
        debug: false
      },
      connection: {
        cluster: "aws",
        reconnect: true
      },
      identity: {
        username: username,
        password: oauth
      },
      channels: ['#' + channel]
    };

    var client = new irc.client(options);

    client.connect();
    this.setState({client: client});

    axios.get(`https://api.twitch.tv/kraken/chat/${channel}/badges`,
      {
        headers: {'Client-ID': oauth.replace('oauth:', '')}
      }).then((res) => {
      let badgeapi = res.data;
      this.setState({badgeAPI: badgeapi});
    });


    //TODO use message to handle all types
    client.on('message', (channel, user, message, self) => {
      let payload = {
        badges: user['badges'],
        color: user['color'],
        roomid: user['room-id'],
        channel: channel,
        user: user['display-name'],
        contents: message,
        emotes: user['emotes']
      }
      let temp = this.state.messages;
      temp.push(payload);

      // every 1k messages purge array by half
      if (temp.length % 1000 === 0) {
        temp = temp.slice(500);
      }
      // check word frequency on some interval
      //UNIQUE usage of word per message (NOT per joined set of messages)
      if (temp.length % 20 === 0) {
        let usage = wordUsage(temp);
        usage = usage.slice(0, 10);
        this.setState({popularWords: usage});
      }

      this.setState({messages: temp});
    });
  };


  toggleFilter(word) {
    let temp_filters = this.state.filters;
    // if item isnt in filterlist add it
    // otherwise remove it
    let index = temp_filters.indexOf(word);
    if (index === -1) {
      temp_filters.push(word);
      this.setState({filters: temp_filters});
    } else {
      temp_filters.splice(index, 1);
      this.setState({filters: temp_filters});
    }
  };

  filterMessages(messages, filters) {
    let filtered_messages = messages.filter((message) => {
      filters.forEach((filter) => {
        if (message.contents.includes(filter)) {
          return false;
        }
      });
      return true;
    });

    return filtered_messages;
  };

  handleFocusedUser(user) {
    const {focusedUser} = this.state;
    if (user === focusedUser) {
      this.setState({focusedUser: ''})
    } else {
      this.setState({focusedUser: user})
    }
  };

  // icons, username, content
  render() {
    const {channel, oauth} = this.props;
    const {
      client,
      showStreamPreview,
      focusedUser,
      messages,
      popularWords,
      filters,
      badgeAPI
    } = this.state;
    let filtered_messages;
    if (messages && badgeAPI) {
      filtered_messages = messages.filter((message) => {
        if (!focusedUser) {
          return true;
        }

        return message.user.toLowerCase() === focusedUser;
      }).filter((message) => {
        if (filters.length === 0) {
          return true;
        }

        let is_filtered = filters.some((filter) => {
          return message.contents.toLowerCase().includes(filter);
        });
        return is_filtered;
      }).map((x, id) => {
        let bg = (id % 2 === 0)
        ? {
          backgroundColor: "#FFFFFF"
        }
        : {
          backgroundColor: "#FCFCFC"
        }
        let style = {
          ...bg,
          width: "100%"
        }
        return (
          <div key={id} style={style}>
          <span style={{
            marginLeft: "10px"
          }} dangerouslySetInnerHTML={{
            __html: formatBadges(x.badges, badgeAPI)
          }}/>
          <span style={{
            marginLeft: "10px",
            marginRight: "10px",
            color: x.color,
            fontWeight: "bold",
            textShadow: "1px 1px #000000"
          }}>
          {x.user}:
          </span>
          <span dangerouslySetInnerHTML={{
            __html: formatEmotes(x.contents, x.emotes)
          }}/>
          </div>
        );
      });
    }

    return (
      <ChatWindow
      toggleStreamPreview={(e) => this.toggleStreamPreview(e)}
      toggleFilter={(e) => this.toggleFilter(e)}
      client={client}
      popularWords={popularWords}
      showStreamPreview={showStreamPreview}
      channel={channel}
      handleFocusedUser={(e) => this.handleFocusedUser(e)}
      focusedUser={focusedUser}
      filteredMessages={filtered_messages}
      oauth={oauth}
      />
    );
  }
}
