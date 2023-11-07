import React from 'react'
import { useState, useMemo } from 'react'
import TextField from '@mui/material/TextField'
import CodeView from 'utils/CodeView'

const codeString = `const [num, setNum] = useState(0)

const getFactorial = (val: number): number => {
  if (val === 0) return 1
  return val * getFactorial(val - 1)
}

const calculatedFactorial = useMemo(() => {
  return num ? getFactorial(num) : 0
}, [num])`

const UseMemo = () => {
  const [num, setNum] = useState(1)

  const getFactorial = (val: number): number => {
    if (val === 0) return 1
    return val * getFactorial(val - 1)
  }

  const calculatedFactorial = useMemo(() => {
    if (num < 0) return 0
    if (num > 100) return 0

    return num ? getFactorial(num) : 0
  }, [num])

  return (
    <div className="limit-width">
      <div className="page-title">useMemo</div>

      <div className="code">
        <p>
          useMemo는 메모이제이션(memoization) 최적화 기법을 사용하여 연산량이 많은 함수의 반환값을
          기억해두는 역할. <br />
          불필요한 연산을 줄여 성능을 향상.
        </p>
      </div>

      <div className="mt-8">
        <TextField
          id="outlined-basic"
          value={num}
          type="number"
          label="숫자를 입력하세요."
          InputProps={{ inputProps: { min: 0, max: 100 } }}
          sx={{ width: '180px' }}
          onChange={(e) => setNum(Number(e.target.value))}
        />
      </div>
      <div className="my-8 text-lg">Factorial: {calculatedFactorial}</div>

      <CodeView code={codeString} />

      <div className="code">
        <pre style={{ whiteSpace: 'pre-wrap' }}>
          {`Factorial이란 양의 정수 n에 대해 1부터 n까지 모든 정수를 곱한 것. n의 factorial은 n!로 나타낸다.

n! = n × (n-1) × (n-2) × ... × 3 × 2 × 1

예를 들어,

5! = 5 × 4 × 3 × 2 × 1 = 120

0의 factorial은 1로 정의. 즉, 0! = 1이다. 
Factorial은 조합론, 확률론, 그리고 다양한 수학적 문제를 푸는 데 중요한 개념으로 사용됨.`}
        </pre>
      </div>
    </div>
  )
}

export default UseMemo
