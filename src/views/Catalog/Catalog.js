import React from "react";
import "./Catalog.css";

import MoviesList from "../../components/MoviesCatalog/MoviesList";
import Element from "../Element/Element";
import { useSelector } from "react-redux";

const Catalog = () => {
  const movie = useSelector(state => state.elementReducer.movie )
  return (
    <div className="Catalog">
      {
        !movie &&
        <>
          <label>Películas</label>
          <hr />
          <MoviesList />
        </>
      }
      { movie && <Element /> }
    </div>
  );
};

export default Catalog;
