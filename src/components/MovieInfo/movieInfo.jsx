import React from "react";
import Thumb from "../Thumb/thumb";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import NoImage from "../../images/no_image.jpg";
import { Wrapper, Content, Text } from "./movieInfo.styles";

export default function MovieInfo(props) {
  const { movieData } = props;

  return (
    <Wrapper backdrop={movieData.backdrop_path}>
      <Content>
        <Thumb
          image={
            movieData.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movieData.poster_path}`
              : NoImage
          }
        />
        <Text>
          <h1>{movieData.title}</h1>
          <h3>PLOT</h3>
          <p>{movieData.overview}</p>
          <div className="rating-directors">
            <div>
              <h3>RATING</h3>
              <div className="score">{movieData.vote_average}</div>
            </div>
            <div className="director">
              <h3>DIRECTOR{movieData.directors.length > 1 ? "S" : ""}</h3>
              {movieData.directors.map((director) => (
                <p key={director.credit_id}>{director.name}</p>
              ))}
            </div>
          </div>
        </Text>
      </Content>
    </Wrapper>
  );
}
