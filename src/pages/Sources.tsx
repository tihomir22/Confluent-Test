import React from "react";
import SourceCardList from "../components/SourceCardList.";
import TitleBlock from "../components/TitleBlock";
import moviesSources from "../json/movie_sources.json";
import "./Sources.scss";

function Sources() {
  return (
    <section className="sources">
      <TitleBlock title="Movie Sources"></TitleBlock>
      <SourceCardList sources={moviesSources}></SourceCardList>
    </section>
  );
}

export default Sources;
