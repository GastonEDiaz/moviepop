import React from 'react';
import "./ElementCatalog.css"
import movieCover from "../../statics/movie-thumbnail.png";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

const ElementCatalog = (props) => {
    const {movie} = props;
    let history = useHistory();
    const dispatch = useDispatch();
    function seeMovie (e, movie) {
        e.preventDefault(); 
        dispatch({ type: 'SET_ELEMENT', movie:movie });
        history.push('/catalog/movie');
    }
    return(
        <div className="col-sm-4 col-md-4 " onClick={e => {seeMovie(e, movie)}} >
            <div className="ElementCatalog" >
                <figure className="figure" >
                    <img alt="movie" src={movie && movie.show && movie.show.image ? movie.show.image.medium : movieCover} className="img-fluid" />
                    <figcaption className="figure-caption text-right" >{movie && movie.show && movie && movie.show.name ? movie && movie.show.name : "Título de pelicula"}</figcaption>
                </figure>
            </div>
        </div>
    )
}

export default ElementCatalog;
