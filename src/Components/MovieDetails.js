import { useState, useEffect} from "react";
import axios from "axios";
// allow the component to access the param it was passed by importing useParams
import { useParams } from "react-router-dom";
// import Link so we can add a back button
import { Link } from 'react-router-dom';


const MovieDetails = () => {
  // store the param in a variable - this is restructuring 
  // useParams (built-in function from react-router-dom) gives you access to the URL. The text/string/whatever that comes after the colon we used in App.js, in our <Route..., becomes a param that is accessed here.
  const { movieID } = useParams();
  // create state to store our movie details
  const [movie, setMovie] = useState({});
  // on component mount...
  useEffect( () => {
    // make an axios call to get the movie details using the movieID param
    axios({
      url: `https://api.themoviedb.org/3/movie/${movieID}`,
      params: {
        api_key: '01dc1900fdad2e3d2c800ceae3c9cdb5'
      }
    }).then ( (res) => {
      // put our movie in state!
      setMovie(res.data);
    })

  }, [movieID]);
    // set details to state
    // destructuring
    const { original_title, tagline, overview, poster_path } = movie;

    return (
      <>
    {/* put the movie ID on the page (for starters) */}
      <div className="poster">
        <div className="description">
          <h2>{original_title}</h2>
          <h3>{tagline}</h3>
          <p>{overview}</p>
        </div>
        <div className="poster-image">
          <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={`Poster for ${original_title}`} />
        </div>
      </div>
      <Link to={'/'}>
        <h2>back...</h2>
      </Link>
    </>
  )
}

export default MovieDetails;