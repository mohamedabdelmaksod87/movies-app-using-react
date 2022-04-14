import React, { useEffect, useState } from "react";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
import Spinner from "./Spinner/spinner.style";
import Grid from "./Grid/grid";
import NoImage from "../images/no_image.jpg";
import API from "../API";
import { useParams } from "react-router-dom";
import BreadCrumb from "./BreadCrumb/breadCrumb";
import MovieInfo from "./MovieInfo/movieInfo";
import MovieInfoBar from "./MovieInfoBar/movieInfoBar";
import Actor from "./Actor/actor";
import { isPersistedState } from "../helpers";

export default function Movie() {
  const { movieId } = useParams();
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  //Fetch Movie Data when component mounts
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movie = await API.fetchMovie(movieId);
        const credits = await API.fetchCredits(movieId);
        const directors = credits.crew.filter(
          (member) => member.job === "Director"
        );
        setState({ ...movie, actors: credits.cast, directors });
        sessionStorage.setItem(
          movieId,
          JSON.stringify({ ...movie, actors: credits.cast, directors })
        );
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    };
    const sessionState = isPersistedState(movieId);
    if (sessionState) {
      setState(sessionState);
      setLoading(false);
      return;
    }
    fetchMovie();
  }, [movieId]);

  if (loading) return <Spinner />;

  if (error)
    return (
      <h4 className="error">
        Couldn't display movie details, Please try again or check your internet
        connection
      </h4>
    );

  return state.actors ? (
    <>
      <BreadCrumb movieTitle={state.original_title} />
      <MovieInfo movieData={state} />
      <MovieInfoBar
        budget={state.budget}
        revenue={state.revenue}
        runtime={state.runtime}
      />
      <Grid header="Actors">
        {state.actors.map((actor) => (
          <Actor
            key={actor.credit_id}
            name={actor.name}
            character={actor.character}
            imageUrl={
              actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : NoImage
            }
          />
        ))}
      </Grid>
    </>
  ) : null;
}
