// Seuils de couverture appliqués par Vitest (la clé "vitest" de package.json n'est pas lue)
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      include: ['src/**/*.js'],
      thresholds: { lines: 80, functions: 80, branches: 70, statements: 80 }
    }
  }
})
