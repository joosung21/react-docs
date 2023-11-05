import React from 'react'

const Todo = () => {
  return (
    <div className="todoList">
      <ul style={{ listStyle: 'square' }}>
        <li>Axios 세팅</li>
        <li>라우팅 파라미터</li>
        <li>리액트 공식문서</li>
        <li>리액트 DevTool</li>

        <hr className="my-2" />

        <li>디자인패턴</li>
        <li>Recoil</li>
        <li>클립보드 복사기능</li>
        <li>jest / vitest</li>
        <li>
          React Hooks
          <ul>
            <li>https://codepen.io/topic/react/templates</li>
          </ul>
        </li>
        {/* 공부할 것 */}
        {/* https://goddaehee.tistory.com/311 */}
      </ul>
    </div>
  )
}

export default Todo
