import React from 'react'
import CodeView from 'utils/CodeView'

const codeString1 = `export const presets = [
  ['@babel/preset-env', { targets: { node: 'current' } }],
  '@babel/preset-typescript',
`

const codeString2 = `export default {
  preset: 'ts-jest',
  rootDir: '.',
  testRegex: '.*/src/.*\\.test\\.(t|j)sx?$',
  testEnvironment: 'node',
  resetMocks: true,
  clearMocks: true,
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/assets/',
  ],
}`

const codeString3 = `describe('counter reducer', () => {
  const initialState: CounterState = {
    value: 3,
    status: 'idle',
  }
  it('should handle initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
      status: 'idle',
    })
  })

  it('should handle increment', () => {
    const actual = counterReducer(initialState, increment())
    expect(actual.value).toEqual(4)
  })

  it('should handle decrement', () => {
    const actual = counterReducer(initialState, decrement())
    expect(actual.value).toEqual(2)
  })

  it('should handle incrementByAmount', () => {
    const actual = counterReducer(initialState, incrementByAmount(2))
    expect(actual.value).toEqual(5)
  })
})
`

const Jest = () => {
  return (
    <div className="limit-width">
      <div className="page-title">Jest</div>
      <div className="page-subtitle">유닛테스트</div>

      <div>babel.config.js</div>
      <CodeView code={codeString1} />

      <div className="mt-8">jest.config.ts</div>
      <CodeView code={codeString2} />

      <div className="mt-8">ex) counterSlice.test.ts</div>
      <CodeView code={codeString3} />
    </div>
  )
}

export default Jest
