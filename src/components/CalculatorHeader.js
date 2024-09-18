import React from "react";

export const CalculatorHeader = () => {
  return (
    <div className="calcHeader">
      {/* The Heading's position is absolute to ignore the flow rule */}
      <button>☰</button>
      {/* Then the Menu Button will be relative to the parent's position */}
      <h2>BASIC</h2>
    </div>
  );
};
