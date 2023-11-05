import React, { useState, useCallback } from 'react'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'

const add = (first: number, second: number) => first + second

const UseCallback = () => {
  const [firstVal, setFirstVal] = useState(10)
  const increment = () => setFirstVal((num) => num + 1)
  const onChangeFirstVal = (val: number) => setFirstVal(val)

  const [secondVal, setSecondVal] = useState(20)
  const decrease = () => setSecondVal((num) => num - 1)
  const onChangeSecondVal = (val: number) => setSecondVal(val)

  const additionResult = useCallback(() => add(firstVal, secondVal), [firstVal, secondVal])

  return (
    <div className="limit-width">
      <div className="page-title">useCallback</div>

      <div className="code">
        <p>- useCallback은 특정 함수를 메모이제이션(Memoization)하는 데 사용</p>
        <p>- 주로 렌더링 성능 최적화를 위해 사용되며</p>
        <p>- 복잡한 컴포넌트 트리에서 불필요한 렌더링을 방지하고자 할 때에도 사용</p>
      </div>

      <div className="mt-8">
        <div className="my-4 space-x-2">
          <TextField
            id="outlined-basic"
            type="number"
            label=""
            value={firstVal}
            size="small"
            onChange={(e) => onChangeFirstVal(Number(e.target.value))}
          />
          <Button variant="contained" sx={{ height: '39px' }} onClick={increment}>
            + 1
          </Button>
        </div>

        <div className="my-4 space-x-2">
          <TextField
            id="outlined-basic"
            type="number"
            label=""
            value={secondVal}
            size="small"
            onChange={(e) => onChangeSecondVal(Number(e.target.value))}
          />
          <Button variant="contained" sx={{ height: '39px' }} onClick={decrease}>
            - 1
          </Button>
        </div>

        <div>Result: {additionResult()}</div>
      </div>

      <div className="code">
        {
          'const additionResult = useCallback(() => add(firstVal, secondVal), [firstVal, secondVal])'
        }
      </div>
    </div>
  )
}

export default UseCallback
