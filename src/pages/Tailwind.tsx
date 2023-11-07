import React from 'react'
import CodeView from 'utils/CodeView'

const codeString1 = `<div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
  <div className="p-6 hover:bg-green-600 hover:text-white transition duration-300 ease-in">
    <h1 className="text-2xl font-semibold">Hover</h1>
  </div>
</div>`

const Tailwind = () => {
  return (
    <div className="limit-width">
      <div className="page-title">Tailwind</div>
      <div className="page-subtitle">
        유틸리티-퍼스트 방식으로 빠르게 웹 인터페이스를 구축할 수 있는 CSS 프레임워크
      </div>
      <div>Tailwind React 설치</div>
      <a
        href="https://tailwindcss.com/docs/guides/create-react-app"
        target="_blank"
        rel="noreferrer"
        className="text-link"
      >
        Install Tailwind CSS with Create React App
      </a>

      <br />

      <div className="mt-4">Tailwind 문서</div>
      <a href="https://tailwindcss.com/docs" target="_blank" rel="noreferrer" className="text-link">
        Tailwind CSS Documentation
      </a>

      <div className="mt-4">Example</div>
      <CodeView code={codeString1} />

      <div
        className="h-full border-2 border-gray-200
				border-opacity-60 rounded-lg
				overflow-hidden"
      >
        <div
          className="p-6 hover:bg-green-600
					hover:text-white transition
					duration-300 ease-in"
        >
          <h1 className="text-2xl font-semibold">Hover here</h1>
        </div>
      </div>
    </div>
  )
}

export default Tailwind
