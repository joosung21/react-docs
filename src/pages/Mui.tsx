import React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Chip from '@mui/material/Chip'

const Mui = () => {
  return (
    <div className="limit-width">
      <div className="page-title">Mui</div>

      <p>설치</p>
      <div className="code">npm install @mui/material @emotion/react @emotion/styled</div>

      <div className="code">npm install @fontsource/roboto</div>

      <p>App.tsx에 import</p>
      <div className="code">
        <pre>
          {`import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'`}
        </pre>
      </div>

      <p>사용</p>
      <div className="code">
        <pre>
          {`import Button from '@mui/material/Button'
...
<Button variant="contained">Hello World</Button>`}
        </pre>
      </div>

      <div className="my-8">
        <Button variant="contained">Test Button</Button>
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
