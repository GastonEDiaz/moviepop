import React,{useState,useEffect} from 'react';
import "./MovieList.css"
import ElementCatalog from '../ElementCatalog/ElementCatalog';
import { getData } from '../../services';
import Loader from 'react-loader-spinner';

const MoviesList = () => {
    const [movies, setMovies] = useState([]);
    const [isLoadignElements, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        async function getMovies() {
            const movies = await getData()
            setMovies(movies);
        }
        getMovies();
        setLoading(false);
     }, [])
    return(
        <div className="container" >
            <div className="row no-gutters row-cols-3 row-cols-sm-3 row-cols-md-3 " >
                {
                    !isLoadignElements && movies && movies.map( (movie, index) => {
                        return <ElementCatalog movie={movie} key={index} />
                    })
                }
            </div>
            {
                isLoadignElements && 
                <div className="LoaderContainer" >
                    <Loader
                        type="Puff"
                        color="#FFFFFF"
                        height={100}
                        width={100}
                    />
                </div>
                }
        </div>
    );
}

export default MoviesList;
