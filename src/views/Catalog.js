import React from 'react';
import "./Catalog.css"

import MoviesList from "../components/MoviesCatalog/MoviesList";

const Catalog = () => {
    return (
        <div className="Catalog" >
        <h2>Películas</h2>
        <hr />
        <MoviesList />
        </div>
    );
}

export default Catalog;
