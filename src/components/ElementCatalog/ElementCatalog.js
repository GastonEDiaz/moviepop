import React from 'react';
import "./ElementCatalog.css"
import movieCover from "../../statics/movie-thumbnail.png";
import { useDispatch } from 'react-redux';

const ElementCatalog = (props) => {
    const {movie} = props;
    const dispatch = useDispatch();
    return(
        <div className="col-sm-4 col-md-4 " onClick={e => {e.preventDefault(); dispatch({ type: 'SET_ELEMENT', movie:movie })}} >
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
