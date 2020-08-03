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
          <h2>Películas</h2>
          <hr />
          <MoviesList />
        </>
      }
      { movie && <Element /> }
    </div>
  );
};

export default Catalog;
