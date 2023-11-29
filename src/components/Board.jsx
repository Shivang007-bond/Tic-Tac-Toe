import Tile from "./Tile";
import Result from "./Result";

const Board = ({ onTileClick, tiles, turn }) => {
  const WIN_CONDITION = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = () => {
    for (let i = 0; i < WIN_CONDITION.length; i++) {
      const [x, y, z] = WIN_CONDITION[i];

      if (tiles[x] && tiles[x] === tiles[y] && tiles[x] === tiles[z]) {
        return tiles[x];
      }
    }
    return null;
  };

  const isBoardFull = () => {
    return tiles.every((tiles) => tiles !== null);
  };

  const winner = checkWinner();
  const draw = !winner && isBoardFull();
  const status = draw
    ? `Game Draw`
    : winner
    ? `Winner: ${winner}`
    : `${turn} turn`;

  return (
    <div className="m-4 p-4 grid grid-rows-3 grid-cols-3 cursor-pointer">
      <Tile
        value={tiles[0]}
        onClick={() => onTileClick(0)}
        className="border-r-2 border-b-2"
      />
      <Tile
        value={tiles[1]}
        onClick={() => onTileClick(1)}
        className="border-r-2 border-b-2"
      />
      <Tile
        value={tiles[2]}
        onClick={() => onTileClick(2)}
        className="border-b-2"
      />
      <Tile
        value={tiles[3]}
        onClick={() => onTileClick(3)}
        className="border-r-2 border-b-2"
      />
      <Tile
        value={tiles[4]}
        onClick={() => onTileClick(4)}
        className="border-r-2 border-b-2"
      />
      <Tile
        value={tiles[5]}
        onClick={() => onTileClick(5)}
        className=" border-b-2"
      />
      <Tile
        value={tiles[6]}
        onClick={() => onTileClick(6)}
        className="border-r-2"
      />
      <Tile
        value={tiles[7]}
        onClick={() => onTileClick(7)}
        className="border-r-2 "
      />
      <Tile value={tiles[8]} onClick={() => onTileClick(8)} />

      <Result status={status} />
    </div>
  );
};

export default Board;
