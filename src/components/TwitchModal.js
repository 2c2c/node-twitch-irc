import React, {Component, PropTypes} from 'react';
import {Text, TextInput, View, Radio} from 'react-desktop/windows';
import {FormControl, Modal, Button, ButtonGroup} from 'react-bootstrap';
import TwitchButton from './TwitchButton'
import TwitchInput from './TwitchInput'

export default class Ban extends Component {
  state = {
    showModal: false,
    target: '',
    value: ''
  };

  open() {
    this.setState({showModal: true});
  };

  cancel() {
    this.setState({value: '', showModal: false});
  };

  handleChange(e) {
    this.setState({value: e.target.value});
  };

  confirm() {
    const {action, client} = this.props;
    this.setState({target: this.state.value});
    action(client.lastJoined, this.state.target);
    this.cancel();
  };

  render() {
    const {name} = this.props
    return (
      <span className={name}>
        <TwitchButton onClick={() => this.open()}>
          {name}
        </TwitchButton>
        <Modal show={this.state.showModal} onHide={() => this.cancel()}>
          <Modal.Body>
            <TwitchInput style={{width: '100%'}} value={this.state.value} placeholder={"username to " + name.toLowerCase()} onChange={(e) => this.handleChange(e)} />
          </Modal.Body>
          <Modal.Footer>
            <TwitchButton onClick={() => this.cancel()}>
              Cancel
            </TwitchButton>
            <TwitchButton onClick={() => this.confirm()}>
              Confirm
            </TwitchButton>
          </Modal.Footer>
        </Modal>
      </span>
    );
  };
};
