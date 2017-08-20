import React, { Component, PropTypes } from 'react';
export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div style={{height:'100%', width:'100%'}}>
        {this.props.children}
        test
      </div>
    );
  }
}
