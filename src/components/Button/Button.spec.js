import { Button } from "./Button";
import { render, screen, fireEvent } from "@testing-library/react";

test("Button renders a button HTML element", () => {
  render(<Button />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("Button accepts custom props", () => {
  let i = 0;
  const increment = () => {
    i++;
  };
  render(<Button onClick={increment}>Hello</Button>);
  const button = screen.getByRole("button");
  fireEvent.click(button);
  expect(i).toBe(1);
  expect(button).toHaveTextContent("Hello");
});

test("Button is red by default", () => {
  render(<Button />);
  const button = screen.getByRole("button");
  expect(button).toHaveStyle("background-color: red");
});

test("Button may accept custom backgroundColor", () => {
  render(<Button backgroundColor="green" />);
  const button = screen.getByRole("button");
  expect(button).toHaveStyle("background-color: green");
});
