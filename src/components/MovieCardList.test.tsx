import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import MovieCardList, { ExpandableCard, Movie } from "./MovieCardList";
import movies from "../json/movies.json";

test("renders MovieCardList", () => {
  const component = render(<MovieCardList movies={movies}></MovieCardList>);
  expect(component.container).not.toBeNull();
});

test("Displays movie data", () => {
  const component = render(<MovieCardList movies={movies}></MovieCardList>);
  const oneMovieFromTheList: Movie = movies[0];
  expect(component.getByText(oneMovieFromTheList.title)).not.toBeNull();
  expect(component.getByText(oneMovieFromTheList.summary)).not.toBeNull();
});

test("List loop works", () => {
  const component = render(<MovieCardList movies={movies}></MovieCardList>);
  expect(component.container.getElementsByClassName("movie-card").length).toBe(movies.length);
});

test("Displays casts", async () => {
  const component = render(<ExpandableCard movie={movies[0]} index={0}></ExpandableCard>);
  const actions = component.container.getElementsByClassName("list-casts")[0];
  expect(actions.children.length).toBe(movies[0].casts.length);
});
