import React from 'react'

const LintFormat = () => {
  return (
    <div className="limit-width">
      <div className="page-title">Eslint & Prettier</div>
      <div>세팅참고</div>
      <a
        href="https://velog.io/@shinoung2360/ESLint-Prettier-React-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%97%90-ESLint-%EC%99%80-Prettier-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0-ESLint-%EC%99%80-Prettier-%EC%82%AC%EC%9A%A9%EB%B2%95%EA%B3%BC-%EC%B0%A8%EC%9D%B4%EC%A0%90"
        target="_blank"
        rel="noreferrer"
        className="text-link"
      >
        [ESLint, Prettier] React 프로젝트에 ESLint 와 Prettier 적용하기
      </a>

      <div className="mt-8">
        ESLint 이후 npm ERR! ERESOLVE unable to resolve dependency tree 가 날 경우
      </div>
      <div className="code">npm install --legacy-peer-deps</div>

      <div className="mt-8">package.json script 추가</div>
      <div className="code">
        <pre>
          {`
"scripts": {
  ...
  "lint": "npx eslint src --ext .js,.jsx,.ts,.tsx",
  "fix": "npx eslint src --ext .js,.jsx,.ts,.tsx --fix"
}`}
        </pre>
      </div>

      <div className="mt-8">ESLint 규칙문서</div>
      <a
        href="https://eslint.org/docs/rules/"
        target="_blank"
        rel="noreferrer"
        className="text-link"
      >
        ESLint Rules
      </a>

      <div className="mt-8">Prettier 규칙문서</div>
      <a
        href="https://prettier.io/docs/en/options.html"
        target="_blank"
        rel="noreferrer"
        className="text-link"
      >
        Prettier Options
      </a>
    </div>
  )
}

export default LintFormat
