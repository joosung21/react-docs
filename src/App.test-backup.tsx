import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('Ok test', () => {
  render(<App />)
  const linkElement = screen.getByText(/Joosung/i)
  expect(linkElement).toBeInTheDocument()
})
