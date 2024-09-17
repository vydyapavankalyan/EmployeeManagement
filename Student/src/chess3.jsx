I// src/components/Piece.js
import React from 'react';
import './chess.css';

const Piece = ({ type }) => (
  <div className={piece ${type}}>
    {type}
  </div>
);

export default Piece