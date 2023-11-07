import React, { useState } from 'react'
import Button from '@mui/material/Button'
import CodeView from 'utils/CodeView'

const codeString1 = `const [count, setCount] = useState(0)

...
setCount(count + 1)
setCount(count - 1)
setCount(count * 2)
setCount(count / 2)
setCount(0)`

const UseState = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="limit-width">
      <div className="page-title">useState</div>
      <div className="page-subtitle">컴포넌트 내 상태변경 관리</div>

      <div className="mt-4 mb-4 text-xl">count: {count}</div>
      <div className="flex space-x-2 mb-4">
        <Button variant="contained" color="primary" onClick={() => setCount(count + 1)}>
          +
        </Button>

        <Button variant="contained" color="primary" onClick={() => setCount(count - 1)}>
          -
        </Button>

        <Button variant="contained" color="primary" onClick={() => setCount(count * 2)}>
          *
        </Button>

        <Button variant="contained" color="primary" onClick={() => setCount(count / 2)}>
          /
        </Button>

        <Button variant="contained" color="primary" onClick={() => setCount(0)}>
          reset
        </Button>
      </div>

      <CodeView code={codeString1} />
    </div>
  )
}

export default UseState
