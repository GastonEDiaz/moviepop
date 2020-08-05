import React from 'react';
import { useSelector } from "react-redux";
import movieCover from "../../statics/movie-cover.png";
import "./Element.css"
import StarsCounter from '../../components/StarsCounter/StarsCounter';

const Element = () => {
    const movie = useSelector(state => state.elementReducer.movie )
    return (
        <div className="Element" >
            <div className="CoverContainer" >
                <img alt="coverimage" src={movie.show && movie.show.image && movie.show.image.original ? movie.show.image.original : movieCover} className="img-fluid" />
                <StarsCounter rating={movie.show.rating.average} />
            </div>
            <label>{movie.show.name}</label>
            <div className="InfoContainer" >
                <div className="Info" >
                    <label className="labelInfo" >Lenguaje:</label>
                    <p>{movie.show && movie.show.language}</p>
                </div>
                <div className="Info" >
                    <label className="labelInfo" >Género:</label>
                    <p>{movie.show && movie.show.genres.toString()}</p>
                </div>
                <div className="Info" >
                    <label className="labelInfo" >Fecha de estreno:</label>
                    <p>{movie.show && movie.show.premiered}</p>
                </div>
            </div>
            <label>Sinopsis</label>
            <div dangerouslySetInnerHTML={{__html: movie.show && movie.show.summary}} />
        </div>
    );
}

export default Element;
