import React, { Component, PropTypes } from 'react';
import { Text, TextInput, View, Radio } from 'react-desktop/windows';
import { FormControl, Unmodal, Button, ButtonGroup} from 'react-bootstrap';
import TwitchModal from './TwitchModal';

export default class Unmod extends Component {
  render () {
    const {client} = this.props;
    return (
      <TwitchModal name="Unmod" client={client} action={client.unmod} />
    );
  };
};
