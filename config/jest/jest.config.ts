import type { Config } from 'jest';
import path from 'path';

const config: Config = {
    clearMocks: true,
    testEnvironment: 'jsdom',
    testMatch: ['<rootDir>/src/**/*(*.)@(spec|test).[tj]s?(x)'],
    coveragePathIgnorePatterns: ['/node_modules/'],
    moduleFileExtensions: [
        'js',
        'mjs',
        'cjs',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],
    rootDir: '../../',
    moduleDirectories: ['node_modules'],
    modulePaths: ['<rootDir>src'],
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '\\.svg$': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    },
    setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
};

export default config;
