import React, { useRef } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import CodeView from 'utils/CodeView'

const codeString1 = `const inputEl = useRef<HTMLInputElement>(null)
const TextFd = useRef<HTMLInputElement>(null)

const onFocusBtnClick = () => {
  inputEl.current?.focus()
}

const onToggleBtnClick = () => {
  const width = TextFd.current?.style.getPropertyValue('width')

  inputEl.current?.setAttribute('placeholder', width === '100%' ? '200px' : '100%')
  TextFd.current?.style.setProperty('width', width === '100%' ? '200px' : '100%')
}`

const codeString2 = `<TextField
  id="outlined-basic"
  ref={TextFd}
  inputRef={inputEl}
  label=""
  size="small"
  sx={{ width: '200px' }}
/>`

const UseRef = () => {
  const inputEl = useRef<HTMLInputElement>(null)
  const TextFd = useRef<HTMLInputElement>(null)

  const onFocusBtnClick = () => {
    inputEl.current?.focus()
  }

  const onToggleBtnClick = () => {
    const width = TextFd.current?.style.getPropertyValue('width')

    inputEl.current?.setAttribute('placeholder', width === '100%' ? '200px' : 'Full Width')
    TextFd.current?.style.setProperty('width', width === '100%' ? '200px' : '100%')
  }

  return (
    <div className="limit-width">
      <div className="page-title">useRef</div>
      <div className="page-subtitle">
        DOM 요소에 접근하거나 컴포넌트 라이프사이클 내에서 일정 값을 유지하는 데 사용
      </div>

      <TextField
        id="outlined-basic"
        ref={TextFd}
        inputRef={inputEl}
        placeholder="200px"
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

      <CodeView code={codeString1} />
      <CodeView code={codeString2} />
    </div>
  )
}

export default UseRef
