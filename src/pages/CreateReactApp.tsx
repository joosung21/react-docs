import React from 'react'
import CodeView from 'utils/CodView'

const CreateReactApp = () => {
  return (
    <div className="limit-width">
      <div className="page-title">Create React App</div>
      <div className="page-subtitle">React, Typescript, Redux, Sass 설치를 한방에 하자</div>
      <CodeView language="bash" code="npx create-react-app my-app --template typescript" />
      <CodeView language="bash" code="cd my-app" />
      <CodeView language="bash" code="npm install @reduxjs/toolkit react-redux sass" />

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
