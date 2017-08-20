import React, {Component, PropTypes} from 'react';
import TwitchButton from './TwitchButton'

export default class StreamPreview extends Component {
  render() {
    const {toggleStreamPreview} = this.props;
    return (
      <div style={{
        width: "100%"
      }} className="Commercial">
      <hr />
        <h4 style={{
          textAlign: "center",
          color: "#D3D3D3",
          cursor: 'default'
        }}>stream preview</h4>
        <span style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <TwitchButton onClick={(e) => toggleStreamPreview(true)}>Show</TwitchButton>
          <TwitchButton onClick={(e) => toggleStreamPreview(false)}>Hide</TwitchButton>
        </span>
      </div>
    );
  }
}
