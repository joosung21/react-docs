import React from 'react'
import { Counter } from 'features/counter/Counter'

const Axios = () => {
  return (
    <div>
      <div className="page-title">Redux</div>

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

export default Axios
