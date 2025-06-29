import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

// Configuração customizada do Jest
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',

  // Mapeia o alias @/ para a pasta src
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  }

  // Se quiser configurar arquivos de setup, descomente:
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}

export default createJestConfig(config)
