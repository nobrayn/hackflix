import { useEffect, useState } from 'react';
import axios from 'axios';
// import the Link component to allow us to build out new Links
import { Link } from 'react-router-dom';

const Catalogue = () => {
// set up movie state
// start with empty array, to map over it later. If you try to map over something that isn't an array, app will crash.
const [movies, setMovies] = useState([])

// component mount (useEffect)
useEffect(() => {
  // Fetch data (list of popular movies from a specific year from TMDB API with Axios
  axios({
    url: 'https://api.themoviedb.org/3/discover/movie?',
    params: {
      api_key: '01dc1900fdad2e3d2c800ceae3c9cdb5',
      language: 'en-US',
      sort_by: 'popularity.desc',
      include_adult: false,
      include_video: false,
      page: 1,
      primary_release_year: 1987,
    }
  }).then((response) => {
    // Store those movies in state (useState)
    // console.log(response.data.results);
    setMovies(response.data.results)
  })
}, []); // empty dependency array

return (
  // map through the movies state to render JSX with the movie posters (movie components?)
  <ul className="catalogue">
    {
      // need a parameter in here - put 'movie'
      // if returning one item, make use of "implicit return" of the arrow function so instead of what is commented out below (function block), do what follows.

      // movies.map( (movie) => {
      //   <h2>A movie goes here</h2>
      // })

      // need to proide a KEY here to not make React mad
      // in the TMDB API, there is a built-in id in the data!
      movies.map((movie) =>
      <li key={movie.id}>
        {/* wrap in Link  */}
        <Link to={`/movie/${movie.id}`}>
        
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`Poster for ${movie.original_title}`} />
        </Link>
      </li>
      )
      }
    </ul>
  )
}

export default Catalogue;