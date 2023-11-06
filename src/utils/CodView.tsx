// CodeView.tsx
import React, { useCallback } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism'
import IconButton from '@mui/material/IconButton'
import CounterIconCopy from '@mui/icons-material/ContentCopy'
import { useAppDispatch } from 'app/hooks'
import { openSnackbar } from 'features/snackbar/appSnackbarSlice'

interface CodeViewProps {
  code: string
  language?: string
}

const CodeView: React.FC<CodeViewProps> = ({ code, language = 'typescript' }) => {
  const dispatch = useAppDispatch()

  const copyToClipboard = useCallback(() => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        dispatch(openSnackbar({ message: '코드가 클립보드에 복사되었습니다!', type: 'success' }))
      })
      .catch(() => {
        dispatch(openSnackbar({ message: '클립보드 복사에 실패했습니다.', type: 'error' }))
      })
  }, [code])

  return (
    <div className="relative">
      <IconButton
        aria-label="copy"
        onClick={copyToClipboard}
        style={{ position: 'absolute', top: 12, right: 8, zIndex: 1, color: 'rgb(138, 150, 156)' }}
      >
        <CounterIconCopy />
      </IconButton>
      <SyntaxHighlighter language={language} style={materialOceanic}>
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

export default CodeView
