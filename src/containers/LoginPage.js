import React, { Component } from 'react';
import TwitchLogin from '../components/TwitchLogin';
import fs from 'fs';

export default class LoginPage extends Component {
  state = {
    username: '',
    oauth: '',
    channel: ''
  }

  handleChange(state) {
    this.setState(state);
  };

  cachedLoginDetails() {
    try {
      var obj = JSON.parse(fs.readFileSync('./login', 'utf8'));
      this.setState({
        username: obj.username,
        oauth: obj.oauth
      })
    }
    catch (e) {
      console.log(e)
    }
  }

  componentDidMount() {
    this.cachedLoginDetails();
  }

  render() {
    const {username, oauth, channel} = this.state;
    return (
      <TwitchLogin handleChange={(state) => this.handleChange(state)} username={username} oauth={oauth} channel={channel} />
    );
  }
}
