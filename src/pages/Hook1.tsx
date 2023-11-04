import React, { useState } from 'react'

const Hook1 = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="page-title">useState</div>

      <div>TODO: MUI 적용</div>
      <div className="mt-4">count: {count}</div>
      <button className="btn-blue" onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
}

export default Hook1