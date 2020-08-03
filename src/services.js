import axios from "axios";

const moviesURL = "http://api.tvmaze.com/search/shows?q=star%20wars";

export const getData = async () => {
    try {
      const movies = await axios.get(
        moviesURL
      );
      return movies.data;
    } catch (error) {
      // TODO: Add logic to return into faild api connection
      console.log("MovieCatalog -> getData -> error", error);
      return undefined;
    }
  };
