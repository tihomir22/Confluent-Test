import React from "react";
import TitleBlock from "../components/TitleBlock";
import MovieCardList from "../components/MovieCardList";
import moviesData from "../json/movies.json";
import "./Movies.scss";

function Movies() {
  return (
    <section className="movies">
      <TitleBlock title="Avengers Movies"></TitleBlock>
      <MovieCardList movies={moviesData}></MovieCardList>
    </section>
  );
}

export default Movies;
