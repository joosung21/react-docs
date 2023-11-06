import React from 'react'

const Todo = () => {
  return (
    <div className="todoList">
      <ul style={{ listStyle: 'square' }}>
        <li>코드뷰 변경</li>
        <li>프로필 페이지</li>
        <li>라우팅 파라미터</li>
        <li>리액트 공식문서 마스터</li>
        <li>리액트 DevTool</li>
        <li>폼 Validation</li>

        <hr className="my-2" />

        <li>디자인패턴</li>
        <li>DateControl</li>
        <li>주소검색</li>
        {/* 공부할 것 */}
        {/* https://goddaehee.tistory.com/311 */}
        {/* https://codepen.io/topic/react/templates */}
      </ul>
    </div>
  )
}

export default Todo
