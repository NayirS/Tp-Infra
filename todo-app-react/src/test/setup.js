/// <reference types="vitest/globals" />
import '@testing-library/jest-dom'

// Mock complet de localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
  length: 0,
  key: vi.fn(),
}

// Ajoute le mock à l'objet global window
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
  writable: true,
})

// Réinitialise les mocks avant chaque test
beforeEach(() => {
  vi.clearAllMocks()
})
