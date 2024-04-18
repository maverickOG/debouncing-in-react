// App.js
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [search, setSearch] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    let timer = setTimeout(() => {
      axios
        .get(`http://www.omdbapi.com/?&apikey=43719d9e&s=${search}`)
        .then((res) => {
          setData(res.data.Search);
        });
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  return (
    <div className="container">
      <div className="appName">
        <h1>Mofie!</h1>
      </div>
      <input
        type="text"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="Search for a movie"
      />
      {data ? (
        <div className="movie-list">
          {data.map((movie) => (
            <div className="movie-card" key={movie.imdbID}>
              <img src={movie.Poster} alt={movie.Title} />
              <h1>{movie.Title}</h1>
              <h2>{movie.Year}</h2>
            </div>
          ))}
        </div>
      ) : (
        <h1 className="loading">Loading...</h1>
      )}
    </div>
  );
}

export default App;
