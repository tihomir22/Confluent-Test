import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import App from "./App";

test("renders App", () => {
  const component = render(<App></App>);
  expect(component.container).not.toBeNull();
});
