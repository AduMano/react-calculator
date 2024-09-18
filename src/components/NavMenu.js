import React from "react";

export const NavMenu = () => {
  return (
    <div className="calcNavMenu">
      {/* 2 of these three list is interactable, by pressing the button to change the modes. */}
      {/* Those button has their own state if they are selected or not */}
      <ul>
        <li>
          <button>X</button>
          <h3>CALCU</h3>
        </li>
        <li>
          <button className="calcModeButton">BASIC</button>
        </li>
        <li>
          <button className="calcModeButton">STANDARD</button>
        </li>
      </ul>
    </div>
  );
};
