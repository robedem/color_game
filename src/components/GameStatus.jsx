import React from "react";

const GameStatus = ({ status }) => {
  return (
    <div
      data-testid="gameStatus"
      style={{ margin: "20px", fontSize: "1.2rem", fontWeight: "bold" }}
    >
      {status}
    </div>
  );
};

export default GameStatus;
