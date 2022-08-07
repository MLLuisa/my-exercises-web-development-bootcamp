import '../styles/App.scss';
import { useEffect, useState } from 'react';
import callToApi from '../services/api';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");

  useEffect(() => {
    if(searchMovie.length > 0) {
      callToApi(searchMovie).then((response) => {
      setMovies(response);
    })
    }
    
  }, [searchMovie]);

  const handleSearchMovie = (ev) => {
    setSearchMovie(ev.target.value);
  }

  const renderMovies = () => {
    return movies.map((movie) => {
      return <li key={movie.id}>{movie.name}</li>
    })
  }


  return (
    <div className="App">
      <form>
        Escribe qui tu serie: <input type="text" name="name" onChange={handleSearchMovie}></input>
      </form>
      {movies &&
      <ul>{renderMovies()}</ul>
      }
    </div>
  );
}

export default App;
