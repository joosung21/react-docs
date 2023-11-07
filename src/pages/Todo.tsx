import React from 'react'

const Todo = () => {
  return (
    <div className="todoList">
      <ul style={{ listStyle: 'square' }}>
        <li>Left Drawer</li>
        <li>반응형</li>
        <li>D3, WebGl</li>
        <li>페이지네이션</li>
        <li>라우팅 파라미터</li>
        <li>리액트 공식문서 마스터</li>
        <li>리액트 DevTool</li>
        <li>폼 Validation</li>

        <hr className="my-2" />

        <li>디자인패턴</li>
        <li>주소검색</li>
        {/* 공부할 것 */}
        {/* https://goddaehee.tistory.com/311 */}
        {/* https://codepen.io/topic/react/templates */}
      </ul>
    </div>
  )
}

export default Todo
