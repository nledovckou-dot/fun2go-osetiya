import { describe, it, expect } from 'vitest'
import { readFileSync } from 'fs'
import { resolve } from 'path'

const html = readFileSync(resolve(__dirname, '../../index.html'), 'utf-8')

describe('Preconnect hints', () => {
  it('has preconnect for static.tildacdn.com', () => {
    expect(html).toContain('<link rel="preconnect" href="https://static.tildacdn.com"')
  })

  it('has preconnect for fonts.googleapis.com', () => {
    expect(html).toContain('<link rel="preconnect" href="https://fonts.googleapis.com"')
  })

  it('has preconnect for fonts.gstatic.com', () => {
    expect(html).toContain('<link rel="preconnect" href="https://fonts.gstatic.com"')
  })
})
