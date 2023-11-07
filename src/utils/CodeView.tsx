// CodeView.tsx
import React, { useCallback } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import IconButton from '@mui/material/IconButton'
import CounterIconCopy from '@mui/icons-material/ContentCopy'
import { useAppDispatch } from 'app/hooks'
import { openSnackbar } from 'features/snackbar/appSnackbarSlice'

// code style colors
// https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/AVAILABLE_STYLES_PRISM.MD

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
    <div className="code-view">
      <div className="copy-button">
        <IconButton aria-label="copy" onClick={copyToClipboard}>
          <CounterIconCopy />
        </IconButton>
      </div>
      <SyntaxHighlighter language={language} style={base16AteliersulphurpoolLight}>
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

export default CodeView
