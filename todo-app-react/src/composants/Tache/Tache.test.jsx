import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, test, expect, vi } from 'vitest'
import Tache from './Tache'

describe('Composant Tache', () => {
  const fakeTache = {
    id: 1,
    texte: 'Lire un livre',
    terminee: false
  }

  test('appelle basculer quand on clique sur le texte', async () => {
    const basculerMock = vi.fn()
    const supprimerMock = vi.fn()

    render(<Tache tache={fakeTache} basculer={basculerMock} supprimer={supprimerMock} />)

    const texte = screen.getByText(/⭕ Lire un livre/)
    await userEvent.click(texte)

    expect(basculerMock).toHaveBeenCalledWith(1)
    expect(basculerMock).toHaveBeenCalledTimes(1)
  })

  test('appelle supprimer quand on clique sur le bouton poubelle', async () => {
    const basculerMock = vi.fn()
    const supprimerMock = vi.fn()

    render(<Tache tache={fakeTache} basculer={basculerMock} supprimer={supprimerMock} />)

    const bouton = screen.getByRole('button')
    await userEvent.click(bouton)

    expect(supprimerMock).toHaveBeenCalledWith(1)
    expect(supprimerMock).toHaveBeenCalledTimes(1)
  })
})
