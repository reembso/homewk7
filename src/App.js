
import React, { useState } from "react";
import { MOVIES } from "./components/card/Card";
import Mainn from "../src/components/main/Main"
import "./App.css";
import Header from "./components/header/header";


const App = () => {
  const [movies, setMovies] = useState(MOVIES);

  const addNewMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const deleteMovieHandler = (deletingMovieId) => {
    const filteredMovies = movies.filter(
      (movie) => movie.id !== deletingMovieId
    );
    setMovies(filteredMovies);
  };

  return (
    <>
      <Header onAddNewMovie={addNewMovie} />
      <Mainn movies={movies} deleteMovieHandler={deleteMovieHandler} />
    </>
  );
};

export default App;