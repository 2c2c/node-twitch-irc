import React, {Component, PropTypes} from 'react';
import {Text, TextInput, View, Radio} from 'react-desktop/windows';
import {FormControl, Modal, Button, ButtonGroup} from 'react-bootstrap';
import UserElement from './UserElement';
import Radium from 'radium'
import TwitchInput from './TwitchInput';

// @Radium
export default Radium(class ChatInput extends Component {
  state = {
    value: ' '
  };

  onFormChange(e) {
    e.preventDefault();
    this.setState({value: e.target.value});
  };

  //TODO pass data upwards so chatwindow can see the text I submit
  onFormSubmit(e) {
    let {client} = this.props;
    e.preventDefault();
    let submit_string = this.state.value;
    this.setState({value: ''});
    console.log(submit_string);
    client.say(client.lastJoined, submit_string);
  };

  render() {
    return (
      <form style={{
        width: '100%',
        height: '5%',
        alignSelf: 'flex-end'
      }} onSubmit={(e) => this.onFormSubmit(e)}>
        <TwitchInput style={{width: '100%', height: '100%'}} value={this.state.value} placeholder="" onChange={(e) => this.onFormChange(e)} />
      </form>
    );
  }
})
