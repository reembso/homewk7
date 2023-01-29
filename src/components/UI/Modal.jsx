import React from "react";
import styled from "styled-components";
import { createPortal } from "react-dom";

const Backdrop = ({ onClose}) => {
  return (
    <>
      {createPortal(
        <StyledBackdrop onClick={onClose} />,
        document.getElementById("backdrop")
      )}
    </>
  );
};

const Modal = ({ onClose, children }) => {
  return (
    <>
      {createPortal(
        <>
          <Backdrop onClose={onClose} />
          <CardStile>{children}</CardStile>
        </>,
        document.getElementById("modal")
      )}
    </>
  );
};

export default Modal;

const CardStile = styled.div`
  background-color: #bcb2b2;
  padding: 30px;
  min-width: 400px;
  box-sizing: border-box;
  border-radius: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;

const StyledBackdrop = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
`;