import { describe, it, expect } from 'vitest'
import { readFileSync } from 'fs'
import { resolve } from 'path'

const html = readFileSync(resolve(__dirname, '../../index.html'), 'utf-8')

describe('Font loading optimization', () => {
  it('Google Fonts link uses display=swap', () => {
    const fontLink = html.match(/href="https:\/\/fonts\.googleapis\.com\/css2[^"]*"/)?.[0] || ''
    expect(fontLink).toContain('display=swap')
  })

  it('Google Fonts CSS is not render-blocking (uses preload or media strategy)', () => {
    const fontLinkLine = html.split('\n').find(line =>
      line.includes('fonts.googleapis.com/css2') && line.includes('rel="stylesheet"')
    )

    if (fontLinkLine) {
      expect(fontLinkLine).toContain('media="print"')
      expect(fontLinkLine).toContain("onload=")
    }
  })
})
