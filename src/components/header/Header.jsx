import React from "react";
import Button from "../button/Button";
import "./Header.css";

const HeadContent = () => {
  return (
    <div>
      <header className="header">
        <p className="HeadTitle">Favorite Movies</p>
        <Button class="Add_btn" text="Add movie" />
      </header>
    </div>
  );
};

export default HeadContent;
