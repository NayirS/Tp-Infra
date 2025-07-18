// src/App.test.jsx
import { render, screen } from "@testing-library/react";
import App from "./App";
import { describe, test, expect } from "vitest";

describe("App", () => {
  test("affiche le titre principal", () => {
    render(<App />);
    expect(screen.getByText(/ma liste de tâches/i)).toBeInTheDocument();
  });

  test("affiche le formulaire", () => {
    render(<App />);
    expect(screen.getByPlaceholderText(/ajouter une tâche/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /ajouter/i })).toBeInTheDocument();
  });

  test("affiche le message aucune tâche", () => {
    render(<App />);
    expect(screen.getByText(/aucune tâche pour l’instant/i)).toBeInTheDocument();
  });
});
