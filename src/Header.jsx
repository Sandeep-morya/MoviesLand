import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./Context/ThemeContextProvider";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="header">
      <h1>MoviesLand</h1>
      <button onClick={toggleTheme}>Switch To {theme} Mode</button>
    </div>
  );
};

export default Header;
