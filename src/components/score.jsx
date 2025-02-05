import React from "react";

const Score = ({ score }) => {
  return (
    <div data-testid="score" style={{ margin: "20px", fontSize: "1.2rem" }}>
      Score: {score}
    </div>
  );
};

export default Score;
