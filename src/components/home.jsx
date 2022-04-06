import React, { useState, useEffect } from "react";
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
import NoImage from "../images/no_image.jpg";
import API from "../API";
import HeroImage from "./HeroImage/heroImage";
import Grid from "./Grid/grid";
import Thumb from "./Thumb/thumb";
import Spinner from "./Spinner/spinner.style";
import SearchBar from "./SearchBar/searchBar";
import LoadMoreBtn from "./LoadMoreBtn/btn";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // initial render when component monunts and searchBar effect
  useEffect(() => {
    const getMovies = async (page, searchTerm = "") => {
      try {
        setError(false);
        setLoading(true);
        const moviesObj = await API.fetchMovies(searchTerm, page);
        setState(moviesObj);
      } catch (err) {
        console.log(err);
        setError(true);
        setLoading(false);
      }
      setLoading(false);
    };
    getMovies(1, searchTerm);
  }, [searchTerm]);

  //Load More Movies Logic
  const loadMore = async () => {
    try {
      setLoading(true);
      const moreMovies = await API.fetchMovies(searchTerm, state.page + 1);
      setState({
        ...moreMovies,
        results: [...state.results, ...moreMovies.results],
      });
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
    setLoading(false);
  };

  if (error) return <h2>Couldn't Display Movies, Please try Again</h2>;

  return state.results ? (
    <>
      {!searchTerm ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid searchTerm={searchTerm} header="Popular Movies">
        {state.results.map((movie) => (
          <Thumb
            key={movie.id}
            clickable={true}
            movieId={movie.id}
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage
            }
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <LoadMoreBtn loadMore={loadMore} />
      )}
    </>
  ) : (
    <>{loading ? <Spinner /> : null}</>
  );
}
