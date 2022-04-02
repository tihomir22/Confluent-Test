import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import SourceCardList, { MovieSource } from "./SourceCardList.";
import sourcesList from "../json/movie_sources.json";

test("renders SourceCardList", () => {
  const component = render(<SourceCardList sources={sourcesList}></SourceCardList>);
  expect(component.container).not.toBeNull();
});

test("Displays source data", () => {
  const component = render(<SourceCardList sources={sourcesList}></SourceCardList>);
  const oneSourceFromTheList: MovieSource = sourcesList[0];
  expect(component.getByText(oneSourceFromTheList.name)).not.toBeNull();
  expect(component.getByText(oneSourceFromTheList.summary)).not.toBeNull();
});

test("List loop works", () => {
  const component = render(<SourceCardList sources={sourcesList}></SourceCardList>);
  expect(component.container.getElementsByClassName("source-card").length).toBe(sourcesList.length);
});
