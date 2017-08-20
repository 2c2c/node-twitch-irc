import React, {Component, PropTypes} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import PopularWordElement from './PopularWordElement.js';

// TODO literally redundant
const PopularWordList = ({toggleFilter, popularWords}) => {
  let wordlist;
  if (popularWords) {
    wordlist = popularWords.map((x, id) => {
      return <PopularWordElement toggleFilter={toggleFilter} word={x.term} key={id}/>
    });
  } else {
    wordlist = null;
  }

  return (
    <div style={{
      width: "100%"
    }} className="PopularWordList">
    <hr />
      <h4 style={{
        textAlign: "center",
        color: "#D3D3D3",
        cursor: 'default'
      }}>
        popular terms
      </h4>
      {wordlist}
    </div>
  );
}

export default PopularWordList;
