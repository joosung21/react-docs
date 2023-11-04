import React from 'react'

const CreateReactApp = () => {
  return (
    <div className="limit-width">
      <div className="page-title">React, Typescript, Redux, Sass</div>
      <div className="code">npx create-react-app my-app --template typescript</div>
      <div className="code">cd my-app</div>
      <div className="code">npm install @reduxjs/toolkit react-redux sass</div>

      <div className="my-4 mt-8">
        <a
          href="https://ko.legacy.reactjs.org/docs/introducing-jsx.html"
          target="_blank"
          rel="noreferrer"
          className="text-link"
        >
          React 공식문서
        </a>
      </div>

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
    </div>
  )
}

export default CreateReactApp
