import React, { useEffect, useRef, useState } from "react";
import videoLogo from "../video.svg";
import "./MovieCardList.scss";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

export interface Movie {
  title: string;
  summary: string;
  imdbUrl: string;
  fullCastUrl: string;
  casts: Array<string>;
}

export function ExpandableCard(props: { movie: Movie; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) setHeight(ref.current?.getBoundingClientRect()?.height ? ref.current?.getBoundingClientRect()?.height + 20 : 0);
    else setHeight(0);
  }, [isOpen]);

  return (
    <div className="movie-card" key={props.index}>
      <div className="always-visible">
        <img src={videoLogo} alt="Alternative text for the video logo" />
        <div className="snippet-film">
          <div className="title">{props.movie.title}</div>
          <div className="description">{props.movie.summary}</div>
        </div>
        <div className="actions">
          <button className="provider-btn btn-outline btn" onClick={() => window.open(props.movie.imdbUrl, "_blank")}>
            IMDB
          </button>
          <div className="collapse-icon" onClick={() => setIsOpen((prev) => !prev)}>
            {!isOpen ? <AiOutlineDown size={20} /> : <AiOutlineUp size={20} />}
          </div>
        </div>
      </div>
      <div className="hidden-content" style={{ height }}>
        <div ref={ref}>
          <div className="separator"></div>
          <div className="list-casts">
            {props.movie.casts.map((cast, index) => {
              return (
                <div className="cast" key={index}>
                  {cast}
                </div>
              );
            })}
          </div>
          <br></br>
          <a href={props.movie.fullCastUrl} target="_blank" className="App-link" rel="noopener noreferrer">
            See Full Cast
          </a>
        </div>
      </div>
    </div>
  );
}

function MovieCardList(props: { movies: Array<Movie> }) {
  return (
    <div className="movies-list">
      {(props.movies ?? []).map((movie, index) => {
        return ExpandableCard({ movie, index });
      })}
    </div>
  );
}

export default MovieCardList;
