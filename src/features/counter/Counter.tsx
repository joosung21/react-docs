import React, { useState } from 'react'

import { useAppSelector, useAppDispatch } from '../../app/hooks'
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice'
import { Card, CardContent, IconButton, CardHeader } from '@mui/material'
import styles from './Counter.module.css'
import AddBoxIcon from '@mui/icons-material/AddBox'
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox'

export function Counter() {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2')

  const incrementValue = Number(incrementAmount) || 0

  return (
    <div className="mt-16">
      <div className="text-sm text-gray-500">useAppSelector를 이용해 작동하는 count state 값</div>
      <div className="flex space-x-2 items-center my-5">
        <IconButton
          aria-label="delete"
          color="primary"
          size="large"
          onClick={() => dispatch(decrement())}
        >
          <IndeterminateCheckBoxIcon fontSize="inherit" />
        </IconButton>

        <div className="text-4xl font-thin w-20 text-center">{count}</div>

        <IconButton
          aria-label="delete"
          color="primary"
          size="large"
          onClick={() => dispatch(increment())}
        >
          <AddBoxIcon fontSize="inherit" />
        </IconButton>
      </div>

      <Card sx={{ minWidth: 600, maxWidth: 800, backgroundColor: '#f1f1ff', userSelect: 'none' }}>
        <CardHeader title="Counter Component" />
        <CardContent>
          <div className={styles.row}>
            <button
              className={styles.button}
              aria-label="Decrement value"
              onClick={() => dispatch(decrement())}
            >
              -
            </button>
            <span className={styles.value}>{count}</span>
            <button
              className={styles.button}
              aria-label="Increment value"
              onClick={() => dispatch(increment())}
            >
              +
            </button>
          </div>
          <div className={styles.row}>
            <input
              className={styles.textbox}
              aria-label="Set increment amount"
              value={incrementAmount}
              onChange={e => setIncrementAmount(e.target.value)}
            />
            <button
              className={styles.button}
              onClick={() => dispatch(incrementByAmount(incrementValue))}
            >
              Add Amount
            </button>
            <button
              className={styles.asyncButton}
              onClick={() => dispatch(incrementAsync(incrementValue))}
            >
              Add Async
            </button>
            <button
              className={styles.button}
              onClick={() => dispatch(incrementIfOdd(incrementValue))}
            >
              Add If Odd
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
