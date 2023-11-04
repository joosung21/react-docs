import React from 'react'

const Todo = () => {
  return (
    <div className="todoList">
      <ul style={{ listStyle: 'square' }}>
        <li>MUI 적용</li>
        <li>Prettier 설치</li>
        <li>Router 분리</li>
        <li>React-admin 적용해 보기</li>
        
        <li>리액트 공식문서 1독</li>
        <li>리액트 DevTool</li>
        <li>라우팅 파라미터</li>

        <hr className="my-2" />
        
        <li>디자인패턴 연구하기</li>
        <li>적절한 리액트 스켈레톤</li>
        <li>Recoil</li>
        <li>클립보드 복사기능</li>
        <li>
            Settings
          <ul>
            <li>prettier</li>
            <li>jest</li>
            <li>
                Router
                https://goddaehee.tistory.com/305
            </li>
          </ul>
        </li>
        <li>
            React Hooks
          <ul>
            <li>https://codepen.io/topic/react/templates</li>
            <li>useState</li>
            <li>useEffect</li>
            <li>useCallback</li>
            <li>useMemo</li>
            <li>useRef</li>
            <li>useContext</li>
            <li>useReducer</li>
          </ul>
        </li>
        <li>
            UI Component
          <ul>
            <li>Icon?</li>
          </ul>
        </li>
        {/* 공부할 것 */}
        {/* https://goddaehee.tistory.com/311 */}
      </ul>
    </div>
  )
}

export default Todo