import React, { Component, PropTypes } from "react";
import { Text, TextInput, View, Radio } from "react-desktop/windows";
import { ContextMenuLayer } from "react-contextmenu";
import { FormControl, Modal, Button, ButtonGroup } from "react-bootstrap";

// TODO onClick uses function from props so list can manage clicked state
class UserElement extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const { user, focusedUser } = this.props;
    if (user === focusedUser) {
      return nextProps.focusedUser !== nextProps.user;
    }
    if (user !== focusedUser) {
      return nextProps.focusedUser === nextProps.user;
    }
  }
  _handleFocusedUser(e) {
    const { user, handleFocusedUser } = this.props;
    handleFocusedUser(user);
  }

  render() {
    const { user, handleFocusedUser, focusedUser } = this.props;

    const DEFAULT = "#EFEEF1";
    const CLICKED = "#DDDDDD";
    let bg = false;
    if (focusedUser === user) {
      bg = {
        backgroundColor: CLICKED
      };
    } else {
      bg = {
        backgroundColor: DEFAULT
      };
    }
    let style = { ...bg, marginLeft: "10px" };
    return (
      <h6 onClick={e => this._handleFocusedUser(e)} style={style}>
        {user}
      </h6>
    );
  }
}

export default ContextMenuLayer("simple", props => props)(UserElement);
