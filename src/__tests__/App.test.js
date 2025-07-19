import '@testing-library/jest-dom/extend-expect'; // ✅ Add this
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

// Initial State Tests
test("pizza checkboxes are initially unchecked", () => {
  render(<App />);
  const pepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });
  const mushrooms = screen.getByRole("checkbox", { name: /add mushrooms/i });
  expect(pepperoni).not.toBeChecked();
  expect(mushrooms).not.toBeChecked();
});

test("toppings list initially contains only cheese", () => {
  render(<App />);
  expect(screen.getAllByRole("listitem").length).toBe(1);
  expect(screen.getByText("Cheese")).toBeInTheDocument();
  expect(screen.queryByText("Pepperoni")).not.toBeInTheDocument();
  expect(screen.queryByText("Mushrooms")).not.toBeInTheDocument();
});

// Toggle Pepperoni
test("adds and removes pepperoni when checkbox is clicked", async () => {
  render(<App />);
  const pepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });

  await userEvent.click(pepperoni);
  expect(pepperoni).toBeChecked();
  expect(screen.getByText("Pepperoni")).toBeInTheDocument();

  await userEvent.click(pepperoni);
  expect(pepperoni).not.toBeChecked();
  expect(screen.queryByText("Pepperoni")).not.toBeInTheDocument();
});

// Toggle Mushrooms
test("adds and removes mushrooms when checkbox is clicked", async () => {
  render(<App />);
  const mushrooms = screen.getByRole("checkbox", { name: /add mushrooms/i });

  await userEvent.click(mushrooms);
  expect(mushrooms).toBeChecked();
  expect(screen.getByText("Mushrooms")).toBeInTheDocument();

  await userEvent.click(mushrooms);
  expect(mushrooms).not.toBeChecked();
  expect(screen.queryByText("Mushrooms")).not.toBeInTheDocument();
});

// Add multiple toppings
test("adds multiple toppings when both checkboxes are checked", async () => {
  render(<App />);
  const pepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });
  const mushrooms = screen.getByRole("checkbox", { name: /add mushrooms/i });

  await userEvent.click(pepperoni);
  await userEvent.click(mushrooms);

  expect(screen.getByText("Pepperoni")).toBeInTheDocument();
  expect(screen.getByText("Mushrooms")).toBeInTheDocument();
  expect(screen.getAllByRole("listitem").length).toBe(3);
});
