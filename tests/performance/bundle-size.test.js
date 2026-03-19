import { describe, it, expect } from 'vitest'
import { execSync } from 'child_process'
import { readdirSync, statSync } from 'fs'
import { resolve, join } from 'path'

function getDirSize(dir) {
  let size = 0
  try {
    const files = readdirSync(dir, { withFileTypes: true })
    for (const file of files) {
      const fullPath = join(dir, file.name)
      if (file.isDirectory()) {
        size += getDirSize(fullPath)
      } else {
        size += statSync(fullPath).size
      }
    }
  } catch {
    // dir doesn't exist
  }
  return size
}

describe('Bundle size budget', () => {
  it('dist/assets/ total size is under 800KB', () => {
    execSync('npm run build', {
      cwd: resolve(__dirname, '../..'),
      stdio: 'pipe',
    })

    const assetsDir = resolve(__dirname, '../../dist/assets')
    const totalBytes = getDirSize(assetsDir)
    const totalKB = totalBytes / 1024

    console.log(`Total assets size: ${Math.round(totalKB)} KB`)
    expect(totalKB).toBeLessThan(800)
  })
})
