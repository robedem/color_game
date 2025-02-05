import React from "react";

const NewGameButton = ({ resetGame }) => {
  return (
    <button
      data-testid="newGameButton"
      onClick={resetGame}
      style={{
        padding: "10px 20px",
        fontSize: "1rem",
        cursor: "pointer",
        margin: "20px",
      }}
    >
      New Game
    </button>
  );
};

export default NewGameButton;
