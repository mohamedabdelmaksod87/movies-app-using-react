import React, { useEffect, useState } from "react";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
import Spinner from "./Spinner/spinner.style";
import Grid from "./Grid/grid";
import NoImage from "../images/no_image.jpg";
import API from "../API";
import { useParams } from "react-router-dom";
import BreadCrumb from "./BreadCrumb/breadCrumb";

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
        console.log(movie);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    };
    fetchMovie();
  }, [movieId]);

  if (loading) return <Spinner />;
  if (error) return <div>Couldn't display movie details, Please try again</div>;

  return (
    <>
      <BreadCrumb movieTitle={state.original_title} />
    </>
  );
}
