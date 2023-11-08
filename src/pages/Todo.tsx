import React from 'react'

const Todo = () => {
  return (
    <div className="todoList">
      <ul style={{ listStyle: 'square' }}>
        <li>List & Pagination Routing 구현</li>
        <li>유저 Device 데이터 + Redux 연구</li>
        <li>라우팅 파라미터 Prob 구현</li>
        <li>다국어 i18n 구조화</li>
        <li>D3, WebGl 구현</li>
        <li>리액트 DevTool 최적화</li>
        <li>폼 Validation 최적화 연구</li>
        <li>디자인패턴 최적화 연구</li>

        <hr className="my-2" />
        <li>주소검색 외부 API Customise example</li>
        <li>Next.js Fullstack Project</li>

        {/* 공부할 것 */}
        {/* 리액트 공식문서 마스트 */}
        {/* https://goddaehee.tistory.com/311 */}
        {/* https://codepen.io/topic/react/templates */}
      </ul>
    </div>
  )
}

export default Todo
