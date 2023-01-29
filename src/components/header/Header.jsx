import React, { useState } from "react";
import styled from "styled-components";
import Movie from "../form/form";
import ButtonSecond from "../UI/ButtonSecond";
import Modal from "../UI/Modal";
import ButtonSecond from "../UI/ButtonSecond";

const Header = ({ onAddNewMovie }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModalHandler = () => {
    
    setModalVisible((prev)=>!prev);
    
  };

  return (
    <StyledHeader>
      <Title>Favorite Movies</Title>
      <ButtonSecond onClick={toggleModalHandler} color="#f67722">
        ADD MOVIE
      </ButtonSecond>
      {isModalVisible ? (
        <Modal>
          <Movie
            onAddNewMovie={onAddNewMovie}
            onClose={toggleModalHandler}
          />
        </Modal>
      ) : null }
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5rem;
  background: #00329e;
`;

const Title = styled.h1`
  margin: 0;
  color: white;
  font-size: 1.5rem;
`;

