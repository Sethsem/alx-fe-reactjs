import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("renders TodoList component", () => {
  render(<TodoList />);
  expect(screen.getByRole("heading", { name: /todo list/i })).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText(/add a new todo/i);
  const addButton = screen.getByRole("button", { name: /add/i });

  fireEvent.change(input, { target: { value: "New Todo" } });
  fireEvent.click(addButton);

  expect(screen.getByText(/new todo/i)).toBeInTheDocument();
});

test("toggles todo completion", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText(/add a new todo/i);
  const addButton = screen.getByRole("button", { name: /add/i });

  fireEvent.change(input, { target: { value: "New Todo" } });
  fireEvent.click(addButton);

  const todoItem = screen.getByText(/new todo/i);
  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle("text-decoration: line-through");

  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle("text-decoration: none");
});


test("deletes a todo", () => {
  render(<TodoList />);
  const todoItem = screen.getByText(/learn react/i);
  const deleteButton = screen.getByRole("button", { name: /delete/i });

  fireEvent.click(deleteButton);

  expect(screen.queryByText(/learn react/i)).not.toBeInTheDocument();
});
