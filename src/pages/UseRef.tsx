import React, { useRef } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const UseRef = () => {
  const inputEl = useRef<HTMLInputElement>(null)
  const TextFd = useRef<HTMLInputElement>(null)

  const onFocusBtnClick = () => {
    inputEl.current?.focus()
  }

  const onToggleBtnClick = () => {
    const width = TextFd.current?.style.getPropertyValue('width')

    inputEl.current?.setAttribute('placeholder', width === '100%' ? '200px' : '100%')
    TextFd.current?.style.setProperty('width', width === '100%' ? '200px' : '100%')
  }

  return (
    <div>
      <div className="page-title">useRef</div>

      <TextField
        id="outlined-basic"
        ref={TextFd}
        inputRef={inputEl}
        label=""
        size="small"
        sx={{ width: '200px' }}
      />

      <div className="mt-8 space-x-2">
        <Button variant="contained" color="primary" onClick={onFocusBtnClick}>
          Focus
        </Button>

        <Button variant="contained" color="primary" onClick={onToggleBtnClick}>
          Width Toggle
        </Button>
      </div>

      <div className="code">
        <pre>
          {`const inputEl = useRef<HTMLInputElement>(null)
const TextFd = useRef<HTMLInputElement>(null)

const onFocusBtnClick = () => {
  inputEl.current?.focus()
}

const onToggleBtnClick = () => {
  const width = TextFd.current?.style.getPropertyValue('width')

  inputEl.current?.setAttribute('placeholder', width === '100%' ? '200px' : '100%')
  TextFd.current?.style.setProperty('width', width === '100%' ? '200px' : '100%')
}`}
        </pre>
      </div>
      <div className="code">
        <pre>
          {`<TextField
  id="outlined-basic"
  ref={TextFd}
  inputRef={inputEl}
  label=""
  size="small"
  sx={{ width: '200px' }}
/>`}
        </pre>
      </div>
    </div>
  )
}

export default UseRef
