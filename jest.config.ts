import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  preset: 'ts-jest',
  displayName: 'AoC2022',
  testMatch: ['**/?(*.)test.ts'],
  transformIgnorePatterns: ['/node_modules/'],
};

export default config;
