import { describe, it, expect } from 'vitest'
import { readFileSync } from 'fs'
import { resolve } from 'path'

const appSource = readFileSync(resolve(__dirname, '../../src/App.jsx'), 'utf-8')

describe('Preloader', () => {
  it('does not have an artificial setTimeout delay', () => {
    expect(appSource).not.toMatch(/setTimeout\s*\([^)]*[0-9]{3,}/)
  })

  it('does not render a Preloader component', () => {
    expect(appSource).not.toMatch(/<Preloader\s/)
  })

  it('renders content immediately (no loading state gate)', () => {
    expect(appSource).not.toMatch(/\{loading\s*&&/)
    expect(appSource).not.toMatch(/loading\s*\?\s*</)
  })
})
