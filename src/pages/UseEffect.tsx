import React from 'react'
import { useState, useEffect } from 'react'
import { useAppDispatch } from 'app/hooks'
import { openSnackbar } from 'features/snackbar/appSnackbarSlice'
import CodeView from 'utils/CodeView'

const codeString1 = `const [count, setCount] = useState(0)

useEffect(() => {
  dispatch(openSnackbar({ message: 'useEffect: 컴포넌트가 마운트됐어요!', type: 'success' }))

  const intervalId = setInterval(() => {
    if (count >= 1000) {
      clearInterval(intervalId)
      return
    }

    setCount((count) => count + 1)
  }, 1000)

  return () => {
    clearInterval(intervalId)
  }
}, [])`

const UseEffect = () => {
  const dispatch = useAppDispatch()
  const [count, setCount] = useState(0)

  useEffect(() => {
    dispatch(openSnackbar({ message: 'useEffect: 컴포넌트가 마운트됐어요!', type: 'success' }))

    const intervalId = setInterval(() => {
      if (count >= 1000) {
        clearInterval(intervalId)
        return
      }

      setCount((count) => count + 1)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div className="limit-width">
      <div className="page-title">useEffect</div>
      <div className="page-subtitle">컴포넌트 렌더링 시 부수 효과 관리</div>

      <CodeView code={codeString1} />

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
