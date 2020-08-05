import React from "react";
import "./Catalog.css";

import MoviesList from "../../components/MoviesCatalog/MoviesList";

const Catalog = () => {
  return (
    <div className="Catalog">
      <label>Películas</label>
      <hr />
      <MoviesList />
    </div>
  );
};

export default Catalog;
