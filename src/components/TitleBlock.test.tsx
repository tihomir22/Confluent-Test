import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import TitleBlock from "./TitleBlock";

test("renders TitleBlock", () => {
  const component = render(<TitleBlock title=""></TitleBlock>);
  expect(component.container).not.toBeNull();
});

test("Displays title element", () => {
  const textToCheck = "Hello, good afternoon :)";
  const component = render(<TitleBlock title={textToCheck}></TitleBlock>);
  expect(component.getByText(textToCheck)).not.toBeNull();
});
