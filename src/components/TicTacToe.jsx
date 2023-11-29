import React, { useState } from "react";
import Board from "./Board";

const TicTacToe = () => {
  const PLAYER_X = "X";
  const PLAYER_O = "O";

  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);

  const handleTileClick = (index) => {
    if (tiles[index] !== null) return;

    const newTiles = [...tiles];
    newTiles[index] = playerTurn;
    setTiles(newTiles);

    if (playerTurn === PLAYER_O) {
      setPlayerTurn(PLAYER_X);
    } else {
      setPlayerTurn(PLAYER_O);
    }
  };

  const resetGame = () => {
    setTiles(Array(9).fill(null))
    setPlayerTurn(PLAYER_X)
  }

  return (
    <div>
      <h1 className="flex justify-center items-center m-12 text-3xl font-bold">
        Tic-Tac-Toe
      </h1>
      <Board tiles={tiles} onTileClick={handleTileClick} turn={playerTurn} />
      <button
        onClick={resetGame}
        className="bg-white px-6 py-2 w-44 text-[#23272f] m-10 font-semibold"
      >
        Reset Game
      </button>
    </div>
  );
};

export default TicTacToe;
