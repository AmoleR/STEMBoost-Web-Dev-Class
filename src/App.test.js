import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders correct values", () => {
  render(<App />);
  const linkElement = screen.getByText(/Value 2/i);
  expect(linkElement).toBeInTheDocument();
});
