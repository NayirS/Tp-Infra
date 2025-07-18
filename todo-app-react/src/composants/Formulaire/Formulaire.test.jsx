// src/composants/Formulaire/Formulaire.test.jsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Formulaire from "./Formulaire";
import { describe, test, expect, vi } from "vitest";

describe("Formulaire", () => {
  test("ajoute une tâche quand on clique sur Ajouter", async () => {
    const ajouterTacheMock = vi.fn();
    render(<Formulaire ajouterTache={ajouterTacheMock} />);

    const input = screen.getByPlaceholderText(/ajouter une tâche/i);
    const bouton = screen.getByRole("button", { name: /ajouter/i });

    await userEvent.type(input, "Nouvelle tâche");
    await userEvent.click(bouton);

    expect(ajouterTacheMock).toHaveBeenCalledWith("Nouvelle tâche");
  });
});
