export default {
  // ts-jest 사용
  preset: 'ts-jest',
  // https://github.com/facebook/jest/issues/3613

  // ⭐️ 프로젝트 루트 디렉토리 상대경로
  // 여기서 삽질하기 쉬운데, jest.config.js 파일로부터
  // 루트 디렉토리까지의 상대경로를 입력해주면 됨.

  rootDir: '.',
  // 테스트 대상 파일 정규식
  // testMatch: ['**/?(*)+(test).ts'],
  testRegex: '.*/src/.*\\.test\\.(t|j)sx?$',
  testEnvironment: 'node',
  resetMocks: true,
  clearMocks: true,
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/build/',
    '<rootDir>/dist/',
    '<rootDir>/assets/',
  ],

  // 💡 tsconfig 에서 `baseUrl` 과 `paths` 를 사용하는 경우 필요
  // moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
  // rootDir is the root of the directory containing `jest config file` or the `package.json`
  // prefix: '<rootDir>',
  // }),
}
