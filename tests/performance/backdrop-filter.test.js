import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync } from 'fs'
import { resolve, join } from 'path'

function countBackdropBlur(dir) {
  let count = 0
  const files = readdirSync(dir, { withFileTypes: true })
  for (const file of files) {
    const fullPath = join(dir, file.name)
    if (file.isDirectory()) {
      count += countBackdropBlur(fullPath)
    } else if (file.name.endsWith('.jsx') || file.name.endsWith('.js') || file.name.endsWith('.css')) {
      const content = readFileSync(fullPath, 'utf-8')
      const matches = content.match(/backdrop-blur|backdrop-filter/g)
      if (matches) count += matches.length
    }
  }
  return count
}

describe('Backdrop filter usage', () => {
  it('uses backdrop-filter/backdrop-blur sparingly (max 5 occurrences in src/)', () => {
    const srcDir = resolve(__dirname, '../../src')
    const count = countBackdropBlur(srcDir)
    // Currently 10 occurrences. Target: max 5.
    // Essential: mobile menu overlay (1), lightbox overlay (1), Button onDark (1), Included card (1)
    expect(count).toBeLessThanOrEqual(5)
  })
})
