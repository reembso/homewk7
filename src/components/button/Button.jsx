import React from "react";
import styled from "styled-components";
import ButtonSecond from "../UI/ButtonSecond";

const Delete = ({onClose, onDelete}) => {
  return (
   <div>
      <h3>Are sure you wanna delete?</h3>
      <ButtonImpotant>
        <ButtonSecond color="white" textColor="grey" onClick={onClose}> 
          No
        </ButtonSecond>
        <ButtonSecond color="grey" onClick={onDelete}>Yes</ButtonSecond>
      </ButtonImpotant>
      </div>
  );
};

export default Delete;

const ButtonImpotant = styled.div`
  display: flex;
  justify-content: end;
`;
