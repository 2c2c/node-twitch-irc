import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import LeftPanel from './LeftPanel.js'
import RightPanel from './RightPanel.js'
import MiddlePanel from './MiddlePanel';

export default class ChatWindow extends Component {
  render() {
    const {channel,
      client,
      showStreamPreview,
      focusedUser,
      messages,
      popularWords,
      filters,
      badgeAPI,
      filteredMessages,
      oauth,
      toggleStreamPreview,
      toggleFilter,
      handleFocusedUser,
    } = this.props;
    return (
      <div style={{
        display: 'flex',
        flexFlow: 'row nowrap',
        width: '100%',
        height: '100%'
      }}>
        <LeftPanel toggleStreamPreview={toggleStreamPreview} toggleFilter={toggleFilter} client={client} popularWords={popularWords}/>
        <MiddlePanel client={client} showStreamPreview={showStreamPreview} channel={channel} filteredMessages={filteredMessages} />
        {/* <RightPanel handleFocusedUser={handleFocusedUser} focusedUser={focusedUser} client={client} oauth={oauth}/> */}
      </div>
    );
  }
}
