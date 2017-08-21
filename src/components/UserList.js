import React, { Component, PropTypes } from "react";
import { Text, TextInput, View, Radio } from "react-desktop/windows";
import {
  ListGroup,
  FormControl,
  Modal,
  Button,
  ButtonGroup
} from "react-bootstrap";
import UserElement from "./UserElement";

export default class UserList extends Component {
  render() {
    let rendered_content = null;
    const { userlist, handleFocusedUser, focusedUser, name } = this.props;

    if (!userlist || userlist.length < 0) {
      return null;
    }

    let rendered_list = userlist.map((user, id) => {
      return (
        <UserElement
          key={name + user}
          user={user}
          focusedUser={focusedUser}
          handleFocusedUser={user => handleFocusedUser(user)}
        />
      );
    });

    if (rendered_list.length === 0) {
      return null;
    }
    // infinite list rendering is retarded
    return (
      <div className={name}>
        <h4 style={{ textWeight: "bold", textAlign: "center" }}>
          {name}
        </h4>
        {rendered_list.splice(0, 100)}
      </div>
    );
  }
}
