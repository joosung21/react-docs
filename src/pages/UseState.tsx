import React, { useState } from 'react'
import Button from '@mui/material/Button'

const UseState = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="page-title">useState</div>

      <div className="mt-4 mb-4 text-xl">count: {count}</div>
      <div className="flex space-x-2">
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
    </div>
  )
}

export default UseState
