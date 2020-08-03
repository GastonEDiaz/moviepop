import React,{useState,useEffect} from 'react';
import "./MovieList.css"
import ElementCatalog from '../ElementCatalog/ElementCatalog';
import { getData } from '../../services';

const MoviesList = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function getMovies() {
            const movies = await getData()
            setMovies(movies);
        }
        getMovies();
     }, [])
    return(
        <div>
            {
                movies && movies.map( (movie, index) => {
                    return <ElementCatalog movie={movie} key={index} />
                })
            }
        </div>
    );
}

export default MoviesList;
