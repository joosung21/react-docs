import React from 'react'

const CreateReactApp = () => {
  return (
    <div className="limit-width">
      <div className="page-title">Create React App</div>
      <div className="page-subtitle">React, Typescript, Redux, Sass 설치를 한방에 하자</div>
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
    </div>
  )
}

export default CreateReactApp
