import React from "react";

const ColorBox = ({ targetColor, isCorrect }) => {
  return (
    <div
      data-testid="colorBox"
      className={`color-box ${isCorrect ? "correct-guess" : ""}`}
      style={{
        backgroundColor: targetColor,
      }}
    ></div>
  );
};

export default ColorBox;
