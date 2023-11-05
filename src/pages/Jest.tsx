import React from 'react'

const Jest = () => {
  return (
    <div className="limit-width">
      <div className="page-title">Jest</div>

      <div>babel.config.js</div>
      <div className="code">
        <pre>
          {`export const presets = [
  ['@babel/preset-env', { targets: { node: 'current' } }],
  '@babel/preset-typescript',
`}
        </pre>
      </div>

      <div className="mt-8">jest.config.ts</div>
      <div className="code">
        <pre>
          {`export default {
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
}
`}
        </pre>
      </div>

      <div className="mt-8">fileName.test.ts</div>
      <div className="code">
        <pre>
          {`describe('counter reducer', () => {
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
`}
        </pre>
      </div>
    </div>
  )
}

export default Jest
