import React from "react";

export const NavMenu = ({ handleNavMenu, modeSetup }) => {
  const { navActive, handleNav } = handleNavMenu;
  const closeNav = () => {
    if (navActive) {
      handleNav(false);
    }
  };
  const setToBasic = () => {
    modeSetup("basic");
    handleNav(false);
  };
  const setToStandard = () => {
    modeSetup("standard");
    handleNav(false);
  };

  return (
    <div className={navActive ? "calcNavMenu open" : "calcNavMenu"}>
      {/* 2 of these three list is interactable, by pressing the button to change the modes. */}
      {/* Those button has their own state if they are selected or not */}
      <ul>
        <li>
          <button onClick={closeNav}>X</button>
          <h3>CALCU</h3>
        </li>
        <li>
          <button className="calcModeButton" onClick={setToBasic}>
            BASIC
          </button>
        </li>
        <li>
          <button className="calcModeButton" onClick={setToStandard}>
            STANDARD
          </button>
        </li>
      </ul>
    </div>
  );
};
