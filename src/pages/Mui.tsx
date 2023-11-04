import React from 'react'
import Button from '@mui/material/Button'

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

      <Button variant="contained">Hello World</Button>

      <br />

      <div className="mt-4">MUI 문서</div>
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
