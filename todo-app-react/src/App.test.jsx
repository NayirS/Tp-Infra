import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

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

  test("ajoute une tâche et l'affiche dans la liste", async () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/ajouter une tâche/i);
    const button = screen.getByRole("button", { name: /ajouter/i });

    await userEvent.type(input, "Manger 🍕");
    await userEvent.click(button);

    expect(screen.getByText(/manger 🍕/i)).toBeInTheDocument();
  });

  test("supprime une tâche après l'avoir ajoutée", async () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/ajouter une tâche/i);
    const button = screen.getByRole("button", { name: /ajouter/i });

    await userEvent.type(input, "Dormir 😴");
    await userEvent.click(button);

    const tache = screen.getByText(/dormir 😴/i);
    expect(tache).toBeInTheDocument();

    const boutonSupprimer = screen.getByRole("button", { name: "🗑" });
    await userEvent.click(boutonSupprimer);

    expect(screen.queryByText(/dormir 😴/i)).not.toBeInTheDocument();
  });
});
