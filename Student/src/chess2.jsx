
import React from 'react';
import Piece from './Piece';
import './Square.css';

const Square = ({ row, col, piece, onClick }) => {
  const isBlack = (row + col) % 2 === 1;
  return (
    <div className={square ${isBlack ? 'black' : 'white'}} onClick={onClick}>
      {Piece && <Piece type={Piece} />}
    </div>
  );
};

export default Square;