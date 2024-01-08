import React from "react";
import { render, screen } from "@testing-library/react";

import Landing from "../src/views/Landing/Landing";

it("renders landing page", () => {
  render(<Landing />);
  const linkElement = screen.getByTestId("test");
  console.log(linkElement);
  expect(linkElement).toBeInTheDocument();
});
