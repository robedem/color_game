import React, { useState, useEffect } from "react";
import { generateRandomColor, generateColorOptions } from "./utils";
import ColorBox from "./components/colorbox";
import ColorOptions from "./components/ColorOptions";
import GameStatus from "./components/gamestatus";
import Score from "./components/score";
import NewGameButton from "./components/newgamebutton";
import "./App.css";

const App = () => {
  const [targetColor, setTargetColor] = useState("");
  const [colorOptions, setColorOptions] = useState([]);
  const [status, setStatus] = useState("Guess the correct color!");
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);

  // Initialize the game
  const initializeGame = () => {
    const newTargetColor = generateRandomColor();
    const newColorOptions = generateColorOptions();
    // Ensure the target color is one of the options
    newColorOptions[Math.floor(Math.random() * 6)] = newTargetColor;
    setTargetColor(newTargetColor);
    setColorOptions(newColorOptions);
    setStatus("Guess the correct color!");
    setIsCorrect(false);
  };

  // Handle color guess
  const handleGuess = (color) => {
    if (color === targetColor) {
      setStatus("Correct! 🎉");
      setScore(score + 1);
      setIsCorrect(true);
      // Change the target color after a correct guess
      setTimeout(() => {
        initializeGame();
      }, 1000); // Wait 1 second before changing the color
    } else {
      setStatus("Wrong! Try again. 😢");
      setIsCorrect(false);
    }
  };

  // Reset the game
  const resetGame = () => {
    initializeGame();
    setScore(0);
  };

  // Initialize the game on component mount
  useEffect(() => {
    initializeGame();
  }, []);

  return (
    <div className="App">
      <h1>Color Guessing Game</h1>
      <ColorBox targetColor={targetColor} isCorrect={isCorrect} />
      <ColorOptions colors={colorOptions} handleGuess={handleGuess} />
      <GameStatus status={status} />
      <Score score={score} />
      <NewGameButton resetGame={resetGame} />
    </div>
  );
};

export default App;
