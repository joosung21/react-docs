import React from 'react'
import { useState, useEffect } from 'react'

const UseEffect = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      // 카운트가 1000 이상이면 멈춤
      if (count >= 1000) {
        clearInterval(intervalId)
        return
      }

      setCount(count => count + 1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="limit-width">
      <div className="page-title">useEffect</div>

      <div className="code">const [count, setCount] = useState(0)</div>

      <div className="code">
        <pre>
          {`useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])`}
        </pre>
      </div>

      <h1 className="text-lg">I have rendered {count} times!</h1>

      <div className="flex flex-wrap">
        {Array.from({ length: count }).map((_, index) => (
          <div key={index} className="p-1">
            <div className="text-4xl">🍩</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UseEffect
