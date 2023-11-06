import React from 'react'
import { useState, useMemo } from 'react'
import TextField from '@mui/material/TextField'

const UseMemo = () => {
  const [num, setNum] = useState(0)

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
    <div>
      <div className="page-title">useMemo</div>

      <div className="code">
        <p>
          useMemo는 리액트(React)의 훅(Hook) 중 하나로, 메모이제이션(memoization) 최적화 기법을
          사용하여 연산량이 많은 함수의 반환값을 기억해두는 역할을 합니다. 이는 불필요한 연산을 줄여
          성능을 향상시킬 수 있습니다.
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

      <div className="code">
        <pre>
          {`const [num, setNum] = useState(0)

const getFactorial = (val: number): number => {
  if (val === 0) return 1
  return val * getFactorial(val - 1)
}

const calculatedFactorial = useMemo(() => {
  return num ? getFactorial(num) : 0
}, [num])`}
        </pre>
      </div>

      <div className="code">
        <pre style={{ whiteSpace: 'pre-wrap' }}>
          {`Factorial이란 양의 정수 n에 대해 1부터 n까지 모든 정수를 곱한 것을 말합니다. n의 factorial은 n!로 나타내며, 다음과 같이 정의됩니다.

n! = n × (n-1) × (n-2) × ... × 3 × 2 × 1

예를 들어,

5! = 5 × 4 × 3 × 2 × 1 = 120

0의 factorial은 1로 정의됩니다. 즉, 0! = 1입니다. Factorial은 조합론, 확률론, 그리고 다양한 수학적 문제를 푸는 데 중요한 개념으로 사용됩니다.`}
        </pre>
      </div>
    </div>
  )
}

export default UseMemo
