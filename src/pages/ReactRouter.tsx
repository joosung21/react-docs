import React from 'react'
import CodeView from 'utils/CodView'

const ReactRouter = () => {
  const codeString2 = 'npm install react-router-dom'
  const codeString1 = `// App.tsx
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Product from './Product';
import NotFound from './NotFound';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/product/*" element={<Product />}></Route>
          {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;`

  return (
    <div className="limit-width">
      <div className="page-title">React-router</div>
      <div className="page-subtitle">라우터 설정</div>
      <div>세팅참고</div>
      <a
        href="https://goddaehee.tistory.com/305"
        target="_blank"
        rel="noreferrer"
        className="text-link"
      >
        https://goddaehee.tistory.com/305
      </a>

      <br />
      <br />

      <CodeView language="bash" code={codeString2} />

      <br />

      <CodeView code={codeString1} />
    </div>
  )
}

export default ReactRouter
