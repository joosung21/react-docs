import React from "react";

const Setting1 = () => {
  return (
    <div>
      <div className="page-title">React, Typescript, Redux, Sass</div>
      <div className="code">npx create-react-app my-app --template typescript</div>
      <div className="code">cd my-app</div>
      <div className="code">npm install @reduxjs/toolkit react-redux sass</div>

      <div className="my-8">
        <a href="https://ko.legacy.reactjs.org/docs/introducing-jsx.html" target="_blank" rel="noreferrer" className="text-link">
          리액트 공식문서
        </a>
      </div>
    </div>
  );
};

export default Setting1;