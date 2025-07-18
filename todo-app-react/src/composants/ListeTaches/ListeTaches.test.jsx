import { render, screen } from '@testing-library/react'
import ListeTaches from './ListeTaches.jsx'

describe('ListeTaches', () => {
  const taches = [
    { id: 1, texte: 'Tâche 1', terminee: false },
    { id: 2, texte: 'Tâche 2', terminee: true }
  ]

  test('affiche chaque tâche dans la liste', () => {
    render(<ListeTaches taches={taches} basculer={() => {}} supprimer={() => {}} />)

    expect(screen.getByText(/tâche 1/i)).toBeInTheDocument()
    expect(screen.getByText(/tâche 2/i)).toBeInTheDocument()
  })

  test('affiche les statuts corrects pour chaque tâche', () => {
    render(<ListeTaches taches={taches} basculer={() => {}} supprimer={() => {}} />)

    expect(screen.getByText(/⭕/)).toBeInTheDocument()
    expect(screen.getByText(/✅/)).toBeInTheDocument()
  })
})
