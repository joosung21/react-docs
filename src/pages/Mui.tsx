import React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Chip from '@mui/material/Chip'
import CodeView from 'utils/CodeView'

const codeString1 = `// index.tsx
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'`

const codeString2 = `import Button from '@mui/material/Button'

const App = () => {
  return (
    <Button variant="contained">Button Component</Button>
  )
}`

const Mui = () => {
  return (
    <div className="limit-width">
      <div className="page-title">Mui</div>
      <div className="page-subtitle">React UI tools - Material UI</div>

      <p>설치</p>
      <CodeView language="bash" code="npm install @mui/material @emotion/react @emotion/styled" />
      <CodeView language="bash" code="npm install @fontsource/roboto" />

      <CodeView code={codeString1} />

      <p>사용예시</p>
      <CodeView code={codeString2} />

      <div className="my-8">
        <Button variant="contained">Button Component</Button>
      </div>
      <div className="my-4">
        <TextField label="TextField" />
      </div>
      <div className="my-4 flex space-x-2">
        <Chip label="Chip Filled" />
        <Chip label="Chip Outlined" variant="outlined" />
      </div>

      <br />

      <div>MUI 문서</div>
      <a
        href="https://mui.com/material-ui/getting-started/installation/"
        target="_blank"
        rel="noreferrer"
        className="text-link"
      >
        MUI
      </a>

      <br />

      <div className="mt-4">Tutorial</div>
      <a
        href="https://www.youtube.com/playlist?list=PLDxCaNaYIuUlG5ZqoQzFE27CUOoQvOqnQ"
        target="_blank"
        rel="noreferrer"
        className="text-link"
      >
        React + Material UI - From zero to hero
      </a>
    </div>
  )
}

export default Mui
