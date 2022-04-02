import React from "react";
import "./SourceCardList.scss";

export interface MovieSource {
  name: string;
  summary: string;
  websiteUrl: string;
  wikiUrl: string;
}

function MovieSourceCard(source: MovieSource, index: number) {
  return (
    <div className="source-card" key={index}>
      <div className="title">{source.name}</div>
      <div className="description">{source.summary}</div>
      <div className="actions">
        <button className="btn-fulfil btn" onClick={() => window.open(source.websiteUrl, "_blank")}>
          WEBSITE
        </button>
        <button className="btn-outline btn" onClick={() => window.open(source.wikiUrl, "_blank")}>
          WIKI
        </button>
      </div>
    </div>
  );
}

function SourceCardList(props: { sources: Array<MovieSource> }) {
  return (
    <div className="movies-source-list">
      {(props.sources ?? []).map((source, index) => {
        return MovieSourceCard(source, index);
      })}
    </div>
  );
}

export default SourceCardList;
