import { useState } from "react";

function useNavMenu() {
  const [navActive, setNavActive] = useState(false);

  const handleNav = (val) => {
    setNavActive(val);
  };

  return { navActive, handleNav };
}

export default useNavMenu;
