/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom', // jsdom으로 수정
  setupFilesAfterEnv: ['<rootDir>/setupTest.js'],
};
