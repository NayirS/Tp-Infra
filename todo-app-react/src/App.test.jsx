import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  test('affiche le titre principal', () => {
    render(<App />)
    expect(screen.getByText(/tableau de tâches/i)).toBeInTheDocument()
  })

  test('affiche au moins une tâche dans la liste', () => {
    render(<App />)
    const items = screen.getAllByRole('listitem')
    expect(items.length).toBeGreaterThan(0)
  })

  test('affiche un statut pour chaque tâche', () => {
    render(<App />)
    expect(screen.getAllByText(/à faire|en cours|terminée/i).length).toBeGreaterThan(0)
  })
})
