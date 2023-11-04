import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import logo from '../assets/logo.svg'

interface NavProps {
    to: string;
    title: string;
    children: React.ReactNode; // Add this line
    key: number;
}

const Left = () => {

  const navLinks = [
    { title: 'React, Typescript, Redux, Sass', path: '/setting1', parent: 'Settings' },
    { title: 'React-router', path: '/setting3', parent: 'Settings' },
    { title: 'Tailwind', path: '/setting2', parent: 'Settings' },
    { title: 'ESLint, Prettier', path: '/setting4', parent: 'Settings' },
    { title: 'Todo', path: '/todo', parent: 'Ect' },
    { title: 'useState', path: '/hook1', parent: 'Hooks' },
    { title: 'useEffect', path: '/hook2', parent: 'Hooks' },
    { title: 'useCallback', path: '/hook3', parent: 'Hooks' },
    { title: 'useMemo', path: '/hook4', parent: 'Hooks' },
    { title: 'useRef', path: '/hook5', parent: 'Hooks' },
    { title: 'useContext', path: '/hook6', parent: 'Hooks' },
    { title: 'useReducer', path: '/hook7', parent: 'Hooks' },
  ]

  const Nav = ({ to, title }: NavProps) => {
    const resolved = useResolvedPath(to)
    const match = useMatch({ path: resolved.pathname, end: true })
  
    return (
      <Link to={to} key={title} className={match ? 'active' : ''}>
        {title}
      </Link>
    )
  }

  const NavTitle = ({ title }: { title: string }) => 
    <div>
      <hr className="opacity-10 my-4" />
      <div className="mb-2 px-6 opacity-30 text-sm">{title}</div>
    </div>

  return (
    <div className='left bg-blue-950 text-sky-300'>
      <div>
        <Link to={'/'}>
          <img src={logo} alt="logo" className="w-36 mx-auto" />
          <div className="mb-5 text-3xl text-center">Joosung&apos;s React</div>
        </Link>

        <div className="nav">
          <NavTitle title="Settings" />
          {navLinks
            .filter((link) => link.parent === 'Settings' )
            .map((link, index) => (
              <Nav to={link.path} title={link.title} key={index}>
                {link.title}
              </Nav>
            ))}

          <NavTitle title="Hooks" />
          {navLinks
            .filter((link) => link.parent === 'Hooks' )
            .map((link, index) => (
              <Nav to={link.path} title={link.title} key={index}>
                {link.title}
              </Nav>
            ))}

          <NavTitle title="UI Framworks" />

          <NavTitle title="Ect" />
          {navLinks
            .filter((link) => link.parent === 'Ect' )
            .map((link, index) => (
              <Nav to={link.path} title={link.title} key={index}>
                {link.title}
              </Nav>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Left