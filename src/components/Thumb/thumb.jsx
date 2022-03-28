import React from "react";
import { Image } from "./thumb.style";
import { Link } from "react-router-dom";

export default function Thumb(props) {
  const { image, movieId, clickable } = props;

  return (
    <div>
      {clickable ? (
        <Link to={`/movie/${movieId}`}>
          <Image src={image} alt="movie-thumb" />
        </Link>
      ) : (
        <Image src={image} alt="movie-thumb" />
      )}
    </div>
  );
}
