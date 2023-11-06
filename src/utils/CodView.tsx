// CodeView.tsx
import React, { useCallback } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism'
import IconButton from '@mui/material/IconButton'
import CounterIconCopy from '@mui/icons-material/ContentCopy'

interface CodeViewProps {
  code: string
  language?: string
}

const CodeView: React.FC<CodeViewProps> = ({ code, language = 'typescript' }) => {
  const copyToClipboard = useCallback(() => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        alert('코드가 클립보드에 복사되었습니다!')
      })
      .catch((err) => {
        console.error('클립보드 복사에 실패했습니다: ', err)
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
