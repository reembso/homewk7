import React from "react";
import Button from "../button/Button";
import "./Card.css";
const movies = [
  {
    id: 1,

    title: "Avatar 1",

    rating: 4,

    img: "https://image.cnbcfm.com/api/v1/image/105897632-1557241558937avatar-e1541360922907.jpg?v=1664130328&w=1920&h=1080",
  },

  {
    id: 2,

    title: "Kunfu panda",

    rating: 5,

    img: "https://m.media-amazon.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
  },

  {
    id: 3,

    title: "Naruto Shippuden",

    rating: 5,

    img: "https://cdn.europosters.eu/image/1300/posters/naruto-shippuden-i84239.jpg",
  },

  {
    id: 4,

    title: "Hobbit",

    rating: 5,

    img: "https://m.media-amazon.com/images/M/MV5BMTcwNTE4MTUxMl5BMl5BanBnXkFtZTcwMDIyODM4OA@@._V1_FMjpg_UX1000_.jpg",
  },
];

const Cards = () => {
  let props = movies.map((props) => {
    return (
      <div>
        <ul id="movie-list">
          <li className="movie-element" key={props.id}>
            <div className="movie-element__image">
              <img src={props.img} alt="img" />
            </div>
            <div className="movie-element__info">
              <h2>{props.title}</h2>
              <p>{props.rating}/5 stars</p>
              <Button text="Delete" class="btn btn--danger" />
              <Button text="Edit" class="btn " />
            </div>
          </li>
        </ul>
      </div>
    );
  });

  return props;
};

export default Cards;
