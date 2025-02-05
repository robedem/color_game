import React from "react";

const ColorOptions = ({ colors, handleGuess }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        flexWrap: "wrap",
      }}
    >
      {colors.map((color, index) => (
        <button
          key={index}
          data-testid="colorOption"
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: color,
            border: "2px solid black",
            cursor: "pointer",
          }}
          onClick={() => handleGuess(color)}
        ></button>
      ))}
    </div>
  );
};

export default ColorOptions;
