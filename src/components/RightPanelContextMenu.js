import React, {Component, PropTypes} from "react";
import { ContextMenu, MenuItem } from "react-contextmenu";

export default class RightPanelContextMenu extends Component {
  handleClick(e, data) {
    console.log(`we clicked ${data.item}`);
  };

  render() {
    return (
    <ContextMenu identifier="simple">
      <MenuItem onClick={(e, data) => this.handleClick(e, data)} data={{item: 'Hello'}}> waddup </MenuItem>
      <MenuItem onClick={(e, data) => this.handleClick(e, data)} data={{item: 'hai'}}> ?? </MenuItem>
    </ContextMenu>
    );
  };
}
