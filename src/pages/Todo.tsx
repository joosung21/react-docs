import React from "react";

const Todo = () => {
  return (
    <div className="todoList">
      <ul>
        <li>Repository 만들기</li>
        <li>React-admin 또는...</li>
        <li>MUI로 빠르게 만들어 보자</li>
        <li>
            Chanllenges
            <ul>
            <li>디자인패턴 연구하기</li>
            <li>Routing</li>
            <li>적절한 리액트 스켈레톤</li>
            </ul>
        </li>
        <li>
            <div>리액트 공식문서</div>
            <div>https://ko.legacy.reactjs.org/docs/introducing-jsx.html</div>
        </li>
        <li>
            Settings
            <ul>
            <li>
                Tailwind 설치
                <div>https://tailwindcss.com/docs/guides/create-react-app</div>
            </li>
            {/* <li>webpack</li> */}
            <li>tsconfig</li>
            <li>eslint</li>
            <li>prettier</li>
            <li>jest</li>
            <li>
                Router
                https://goddaehee.tistory.com/305
            </li>
            {/* <li>husky</li> */}
            {/* <li>lint-staged</li> */}
            {/* <li>commitlint</li> */}
            {/* <li>storybook</li> */}
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
            <li>MUI</li>
            <li>Icon?</li>
            </ul>
        </li>
        <li>
            ECT
            <ul>
            <li>Router</li>
            <li>Redux</li>
            <li>Recoil</li>
            </ul>
        </li>
      </ul>
    </div>
  );
};

export default Todo;