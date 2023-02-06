import './App.css';
import Catalogue from './Components/Catalogue'
import MovieDetails from './Components/MovieDetails';
import ErrorPage from './Components/ErrorPage';

import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="wrapper">
      <header>
        <h1>Hackflix</h1>
      </header>

      <Routes>
        <Route path="/" element={ <Catalogue /> } />
        {/* show the MovieDetails component on /movie/:movieID, passit it the movie ID */}
        {/* this path is crucial. The colon indicates that whatever comes after it will become the custom parameter */}
        {/* We have to make a MovieDetails component now */}
        <Route path="/movie/:movieID" element={ <MovieDetails /> } />
        {/* show ErrorPage for routes that don't exist */}
        <Route path="*" element={ <ErrorPage /> } />
      </Routes>
    </div>
  );
}

export default App;


// component mount (useEffect)
  // Fetch data (list of popular movies from a specific year from TMDB API with Axios
  // Store those movies in state (useState)
  // Map through the movies state to render JSX with the movie posters (movie component?)
