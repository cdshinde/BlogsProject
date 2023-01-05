import App from "../App";
import { render, screen } from "@testing-library/react";
test("loads and renders app component", async () => {
  render(<App />);
  expect(screen.getByTestId("App")).toBeInTheDocument();
});
