import React from "react";

export const CalculatorHeader = ({ title, handleNavMenu }) => {
  const { navActive, handleNav } = handleNavMenu;
  const openNav = () => {
    if (!navActive) handleNav(true);
  };

  return (
    <div className="calcHeader">
      {/* The Heading's position is absolute to ignore the flow rule */}
      <button onClick={openNav}>☰</button>
      {/* Then the Menu Button will be relative to the parent's position */}
      <h2>{title}</h2>
    </div>
  );
};
