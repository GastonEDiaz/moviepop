import React, { useState } from "react";
import { Home, Search } from "react-feather";
import "./NavBar.css";
import { useHistory } from "react-router-dom";

const NavBar = ( props ) => {
  let history = useHistory(props.history);
  const setRoute = route => history.push(route);
  // Set hook to change status buttons
  const [buttonActive, setButtonActive] = useState(history.location.pathname);
  return (
    <header className={"NavBar"}>
      <button 
        className={buttonActive === "/catalog" ? "active" : ""}
        onClick={(e) => { e.preventDefault(); setButtonActive("/catalog"); setRoute('/catalog') }}
      >
        <Search />
      </button>
      <button
        className={buttonActive === "/" ? "active" : ""}
        onClick={(e) => { e.preventDefault(); setButtonActive("/"); setRoute('/') }}
      >
        <Home />
      </button>
    </header>
  );
};

export default NavBar;
