import React from 'react';
import "./ElementCatalog.css"
import movieCover from "../../statics/movie-cover.jpg";
import { useDispatch } from 'react-redux';

const ElementCatalog = (props) => {
    const {movie} = props;
    const dispatch = useDispatch();
    return(
        <div className="pure-u-md-1-3 .pure-u-lg-1-3 pure-u-sm-1-3" onClick={e => {e.preventDefault(); dispatch({ type: 'SET_ELEMENT', movie:movie })}} >
            <div className="ElementCatalog" >
                <img alt="movie" src={movie && movie.show && movie.show.image ? movie.show.image.medium : movieCover} className="pure-img" />
                <h4>{movie && movie.show && movie && movie.show.name ? movie && movie.show.name : "Título de pelicula"}</h4>
            </div>
        </div>
    )
}

export default ElementCatalog;
