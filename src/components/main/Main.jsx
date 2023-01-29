import React from "react";
import MovieItem from "../item/Item";



const Mainn = ({ movies , deleteMovieHandler}) => {
  
  return (
    <>
     
      {movies.map((movie) => {
    return (
      <MovieItem
        data={movie}
        key={movie.id}
        deleteMovieHandler={deleteMovieHandler}
      />
    );   
      }) }
    </>
  
  
  )
};

export default Mainn;
