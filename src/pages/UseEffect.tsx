import React from 'react'
import { useState, useEffect } from 'react'
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'

const UseEffect = () => {
  const [mounted, setMounted] = React.useState(false)
  const [count, setCount] = useState(0)

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    setMounted(false)
  }

  useEffect(() => {
    setMounted(true)

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

      <div className="code">const [count, setCount] = useState(0)</div>

      <div className="code">
        <pre>
          {`useEffect(() => {
    setMounted(true)

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

      <Snackbar
        open={mounted}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert variant="filled" onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          useEffect: 컴포넌트가 마운트됐어요!
        </Alert>
      </Snackbar>
    </div>
  )
}

export default UseEffect
