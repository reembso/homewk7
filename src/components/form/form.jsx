import React, { createRef, useRef } from "react";
import styled from "styled-components";
import InputForm from "../UI/InputForm";
import ButtonSecond from "../UI/ButtonSecond";

const Movie = ({ onClose, onAddMovie }) => {
  const titleInputRef = useRef();
  const imgUrlInputRef = useRef();
  const ratingInputRef = useRef();

  const addMovieHandler = () => {
    const title = titleInputRef.current.value;
    const img = imgUrlInputRef.current.value;
    const rating = ratingInputRef.current.value;

    const newMovie = {
      id: Math.random().toString(),
      title,
      img,
      rating,
    };
    onAddMovie(newMovie);

    titleInputRef.current.value = "";
    imgUrlInputRef.current.value = "";
    ratingInputRef.current.value = "";
    onClose();
  };

  return (
    <>
      <div>
        <InputForm
          lableTitle="Movie Title"
          inputType="text"
          ref={titleInputRef}
        />
        <InputForm
          lableTitle="Image URL"
          inputType="text"
          ref={imgUrlInputRef}
        />
        <InputForm
          lableTitle="Your Rating"
          InputType="number"
          ref={ratingInputRef}
        />
      </div>
      <ButtonImpotant >
        <ButtonSecond color="grey" onClick={onClose}>
          Cancel
        </ButtonSecond>
        <ButtonSecond color="grey" onClick={addMovieHandler}>
          Add
        </ButtonSecond>
      </ButtonImpotant >
    </>
  );
};

export default Movie;

const ButtonImpotant = styled.div`
  display: flex;
  justify-content: end;
`;