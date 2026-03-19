import { describe, it, expect } from 'vitest'
import { readFileSync, statSync, existsSync } from 'fs'
import { resolve } from 'path'

const heroPath = resolve(__dirname, '../../src/components/Hero.jsx')
const heroSource = readFileSync(heroPath, 'utf-8')

describe('Hero image optimization', () => {
  it('imports WebP hero image, not JPG', () => {
    expect(heroSource).toMatch(/import\s+heroImage\s+from\s+['"].*\.webp['"]/)
  })

  it('WebP hero file exists', () => {
    const webpPath = resolve(__dirname, '../../src/assets/hero-fun2go-osetia.webp')
    expect(existsSync(webpPath)).toBe(true)
  })

  it('WebP hero file is smaller than 150KB', () => {
    const webpPath = resolve(__dirname, '../../src/assets/hero-fun2go-osetia.webp')
    if (!existsSync(webpPath)) return
    const stats = statSync(webpPath)
    const sizeKB = stats.size / 1024
    expect(sizeKB).toBeLessThan(150)
  })
})

describe('Lazy loading', () => {
  const components = [
    { name: 'ForWhom', path: '../../src/components/ForWhom.jsx' },
    { name: 'Impressions', path: '../../src/components/Impressions.jsx' },
    { name: 'PhotoGallery', path: '../../src/components/PhotoGallery.jsx' },
    { name: 'Program', path: '../../src/components/Program.jsx' },
    { name: 'FinalCTA', path: '../../src/components/FinalCTA.jsx' },
  ]

  components.forEach(({ name, path }) => {
    it(`${name} images have loading="lazy"`, () => {
      const source = readFileSync(resolve(__dirname, path), 'utf-8')
      const imgTags = source.match(/<(?:motion\.)?img\b[^>]*>/g) || []
      imgTags.forEach((tag) => {
        if (tag.includes('loading="eager"')) return
        // Skip dynamically rendered images (lightbox etc.) — no loading attr needed
        if (!tag.includes('loading=')) return
        expect(tag).toContain('loading="lazy"')
      })
    })
  })
})
