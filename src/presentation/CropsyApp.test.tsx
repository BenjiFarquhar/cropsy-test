import React from "react";
import { render, screen } from "@testing-library/react";
import CropsyApp from "./CropsyApp";

test("renders learn react link", () => {
  render(<CropsyApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
