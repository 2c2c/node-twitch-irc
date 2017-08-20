import React, {Component, PropTypes} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import TwitchButton from './TwitchButton';

//TODO make clicked/unclicked
//trigger the filtering
export default class PopularWordElement extends Component {
  state = {
    selected: false
  };

  handleClick(e) {
    let {toggleFilter, word} = this.props;
    toggleFilter(word);
    this.setState({
      selected: !this.state.selected
    });
  };

  render() {
    const {word} = this.props;
    const {selected} = this.state;
    if (!word) {
      return null;
    }
    // TODO TwitchButton uses radium but dunno how to use conditional highlihgting without refactor
    let bg = '';
    if (selected) {
      bg = {
        backgroundColor: '#201C2B',
        color: '#FFFFFF'
      }
    } else {
      bg = {
        backgroundColor: '#17141F',
        color: '#D3D3D3'
      }
    }
     let style = {...bg, textAlign: 'center', paddingLeft: 0, cursor: 'pointer'};

    return (
      <div style={style} onClick={(e) => this.handleClick(e)}>
        {word}
      </div>
    );
  }
}
