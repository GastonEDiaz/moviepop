import React, { useState } from "react";
import { Home, Search } from "react-feather";
import "./NavBar.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const NavBar = ( props ) => {
  let history = useHistory(props.history);
  const setRoute = route => history.push(route);
  // Set hook to change status buttons
  const [buttonActive, setButtonActive] = useState(history.location.pathname);
  const dispatch = useDispatch();

  const setOption = (e,route) => {
    e.preventDefault(); 
    setButtonActive(route); 
    setRoute(route); 
    dispatch({type: 'CLEAR_STORE'});
  }

  return (
    <header className={"NavBar"}>
      <button 
        className={buttonActive === "/catalog" ? "active" : ""}
        onClick={(e) => { setOption(e, "/catalog") }}
      >
        <Search />
      </button>
      <button
        className={buttonActive === "/" ? "active" : ""}
        onClick={(e) => { setOption(e,'/') }}
      >
        <Home />
      </button>
    </header>
  );
};

export default NavBar;
