import React from 'react'

const Versions = () => {
  return (
    <div className="limit-width">
      <div className="page-title">Versions</div>
      <dl>
        <dt>React</dt>
        <dd>18.2.0</dd>
      </dl>
      <dl>
        <dt>Typescript</dt>
        <dd>4.9.5</dd>
      </dl>
      <dl>
        <dt>Redux</dt>
        <dd>8.1.3</dd>
      </dl>
      <dl>
        <dt>React-Router</dt>
        <dd>6.18.0</dd>
      </dl>
      <dl>
        <dt>React-Redux</dt>
        <dd>8.1.3</dd>
      </dl>

      <div className="code">
        <pre>
          {`"dependencies": {
    "@emotion/react": "^11.11.1",
    "@emotion/styled": "^11.11.0",
    "@fontsource/roboto": "^5.0.8",
    "@mui/icons-material": "^5.14.16",
    "@mui/lab": "^5.0.0-alpha.151",
    "@mui/material": "^5.14.16",
    "@reduxjs/toolkit": "^1.9.7",
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "@types/jest": "^27.5.2",
    "@types/node": "^16.18.60",
    "@types/react": "^18.2.34",
    "@types/react-dom": "^18.2.14",
    "@types/react-redux": "^7.1.28",
    "autoprefixer": "^10.4.16",
    "axios": "^1.6.0",
    "eslint": "^8.53.0",
    "postcss": "^8.4.31",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-redux": "^8.1.3",
    "react-router-dom": "^6.18.0",
    "react-scripts": "5.0.1",
    "redux-devtools-extension": "^2.13.9",
    "sass": "^1.69.5",
    "ts-node": "^10.9.1",
    "typescript": "^4.9.5",
    "web-vitals": "^2.1.4"
  },`}
        </pre>
      </div>
    </div>
  )
}

export default Versions
