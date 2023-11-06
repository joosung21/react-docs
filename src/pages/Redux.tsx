import React from 'react'
import { Counter } from 'features/counter/Counter'
import { AlertColor, Button } from '@mui/material'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { openSnackbar } from 'features/snackbar/appSnackbarSlice'
import { selectSnackbar } from 'features/snackbar/appSnackbarSlice'
import CodeView from 'utils/CodView'

const snackBarMsgs = [
  { message: '성공적으로 저장하였습니다.', type: 'success', btnText: '성공 스낵바' },
  { message: '실패하였습니다. 실패는 성공의 어머니.', type: 'error', btnText: '실패 스낵바' },
  { message: '큰 바위보다 발밑의 돌을 주의해 주세요.', type: 'warning', btnText: '경고 스낵바' },
  { message: '내일은 비가 올지도 모릅니다.', type: 'info', btnText: '인포 스낵바' },
]

const Redux = () => {
  const dispatch = useAppDispatch()
  const snackbar = useAppSelector(selectSnackbar)

  const codeString = `// 스낵바 전역 상태
key: ${snackbar.key}
message: ${snackbar.message}
type: ${snackbar.type}
opened: ${snackbar.opened}`

  return (
    <div>
      <div className="page-title">Redux</div>

      <div className="my-8 space-x-2">
        {snackBarMsgs.map((msg, index) => (
          <Button
            key={index}
            variant="contained"
            color={msg.type as AlertColor}
            onClick={() =>
              dispatch(openSnackbar({ message: msg.message, type: msg.type as AlertColor }))
            }
          >
            {msg.btnText}
          </Button>
        ))}
      </div>

      <CodeView code={codeString} />

      <div className="my-4">
        <a href="https://ko.redux.js.org/" target="_blank" rel="noreferrer" className="text-link">
          Redux 공식문서
        </a>
      </div>

      <div className="my-4">
        <a
          href="https://redux-toolkit.js.org/"
          target="_blank"
          rel="noreferrer"
          className="text-link"
        >
          Redux Toolkit 공식문서
        </a>
      </div>

      <div className="my-4">
        <a
          href="https://redux.js.org/tutorials/typescript-quick-start"
          target="_blank"
          rel="noreferrer"
          className="text-link"
        >
          Redux Toolkit TypeScript Quick Start
        </a>
      </div>

      <div className="my-4">
        <a
          href="https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/counter-ts?from-embed=&file=/src/index.tsx:114-150"
          target="_blank"
          rel="noreferrer"
          className="text-link"
        >
          TypeScript Redux Setting CodeSandbox
        </a>
      </div>

      <Counter />
    </div>
  )
}

export default Redux
