import React, { createContext, useContext, useState, ReactNode } from 'react'
import Button from '@mui/material/Button'
import { Typography } from '@mui/material'
import CodeView from 'utils/CodeView'

const codeString = `const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// 테마 사용을 위한 커스텀 훅
const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

// 자식 컴포넌트 예제
const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="p-8 text-center border-2 rounded-xl">
      <Typography variant="h6" gutterBottom>
        Child1 Component
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        현재 테마: {theme}
      </Typography>
      <Button variant="contained" onClick={toggleTheme}>
        테마 변경하기
      </Button>
    </div>
  )
}`

// 테마 타입 정의
type Theme = 'light' | 'dark'

// 테마 컨텍스트를 위한 인터페이스 정의
interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

// 테마 컨텍스트 생성
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
  children: ReactNode // children prop의 타입을 ReactNode로 명시
}

// 테마 제공자 컴포넌트
const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light')

  // 테마 토글 함수
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

// 테마 사용을 위한 커스텀 훅
const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

// 자식 컴포넌트 예제
const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="p-8 text-center border-2 rounded-xl">
      <Typography variant="h6" gutterBottom>
        Child1 Component
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        현재 테마: {theme}
      </Typography>
      <Button variant="contained" onClick={toggleTheme}>
        테마 변경하기
      </Button>
    </div>
  )
}

// 테마에 따라 배경색이 변경되는 컴포넌트
const ThemedBackground: React.FC = () => {
  const { theme } = useTheme()

  // 배경색을 설정하기 위한 스타일 객체
  const backgroundStyle = {
    transition: 'background 0.3s ease',
    backgroundColor: theme === 'light' ? '#f1f1f4' : '#333',
    color: theme === 'light' ? '#36a' : '#f1f1f1',
    padding: '50px',
    borderRadius: '10px',
    margin: '16px 0',
  }

  return (
    <div style={backgroundStyle}>
      <Typography variant="h6" gutterBottom>
        Child2 Component
      </Typography>
      테마에 따라 변경되는 배경색!
    </div>
  )
}

// 앱 컴포넌트
const UseContext: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="limit-width">
        <div className="page-title">useContext</div>
        <div className="page-subtitle">
          컴포넌트 트리 안에서 전역적인 데이터를 공유할 수 있게 해주는 Hook
        </div>

        <ThemeToggleButton />
        <ThemedBackground />

        <CodeView code={codeString} />
      </div>
    </ThemeProvider>
  )
}

export default UseContext
