import React from 'react';
import "./ElementCatalog.css"
import movieCover from "../../statics/movie-cover.jpg";

const ElementCatalog = () => {
    return(
        <div className="pure-u-md-1-3 .pure-u-lg-1-3 pure-u-sm-1-3">
            <div className="ElementCatalog" >
                <img alt="movie" src={movieCover} className="pure-img" />
                <h4>Titulo de pelicula</h4>
            </div>
        </div>
    )
}

export default ElementCatalog;
