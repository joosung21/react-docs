import React from 'react'

const Tailwind = () => {
  return (
    <div className="limit-width">
      <div className="page-title">Tailwind</div>
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

      <div className="mt-4">Test</div>
      <div className="code">
        <pre>
          {`<div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
  <div className="p-6 hover:bg-green-600 hover:text-white transition duration-300 ease-in">
    <h1 className="text-2xl font-semibold">Hover</h1>
  </div>
 </div>`}
        </pre>
      </div>
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
          <h1 className="text-2xl font-semibold">Hover</h1>
        </div>
      </div>
    </div>
  )
}

export default Tailwind
