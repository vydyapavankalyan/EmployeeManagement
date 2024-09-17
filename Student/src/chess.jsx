
import React, { useState } from 'react';
import Square from './Square';
import Piece from './chess3';
import './chess.css';

const initialBoardSetup = [
  // simplified for brevity, you should define all pieces
  ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
  ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
  ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
];

const Board = () => {
  const [board, setBoard] = useState(initialBoardSetup);
  const [selected, setSelected] = useState(null);

  const handleClick = (row, col) => {
    if (selected) {
      const newBoard = [...board];
      newBoard[row][col] = newBoard[selected.row][selected.col];
      newBoard[selected.row][selected.col] = null;
      setBoard(newBoard);
      setSelected(null);
    } else {
      setSelected({ row, col });
    }
  };

  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        row.map((piece, colIndex) => (
          <Square
            key={${rowIndex}-${colIndex}}
            row={rowIndex}
            col={colIndex}
            piece={piece}
            onClick={() => handleClick(rowIndex, colIndex)}
          
        ))
      ))}
      />
    </div>
  );
};

export default Board;