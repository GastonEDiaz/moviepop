import React from 'react';
import { useSelector } from "react-redux";
import movieCover from "../../statics/movie-cover.jpg";
import "./Element.css"
import StarsCounter from '../../components/StarsCounter/StarsCounter';

const Element = (element) => {
    const movie = useSelector(state => state.elementReducer.movie )
    return (
        <div className="Element" >
            <div className="CoverContainer" >
                <img alt="coverimage" src={movie.show && movie.show.image && movie.show.image.original ? movie.show.image.original : movieCover}  />
                <StarsCounter rating={movie.show.rating.average} />
            </div>
            <h2>{movie.show.name}</h2>
            <div className="InfoContainer" >
                <div className="Info" >
                    <label>Lenguaje:</label>
                    <p>{movie.show && movie.show.language}</p>
                </div>
                <div className="Info" >
                    <label>Género:</label>
                    <p>{movie.show && movie.show.genres.toString()}</p>
                </div>
                <div className="Info" >
                    <label>Fecha de estreno:</label>
                    <p>{movie.show && movie.show.premiered}</p>
                </div>
            </div>
            <h3>Sinopsis</h3>
            <div dangerouslySetInnerHTML={{__html: movie.show && movie.show.summary}} />
        </div>
    );
}

export default Element;
