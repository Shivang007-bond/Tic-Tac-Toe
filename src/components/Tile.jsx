import React from "react";

const Tile = ({ className ,value , onClick }) => {
  return <div onClick={onClick} className={`p-6 ${className}`}>{value}</div>;
};

export default Tile;
