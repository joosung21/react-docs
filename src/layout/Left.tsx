import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { NavLink, NavProps } from './Left.d'
import logo from 'assets/logo.svg'
import jay from 'assets/jay.jpg'
import Avatar from '@mui/material/Avatar'

const navLinks = [
  { title: 'Create React App', path: '/create-react-app', parent: 'Settings' },
  { title: 'React-router', path: '/react-router', parent: 'Settings' },
  { title: 'ESLint, Prettier', path: '/lint-format', parent: 'Settings' },
  { title: 'Axios', path: '/axios', parent: 'Settings' },
  { title: 'Redux', path: '/redux', parent: 'Settings' },
  { title: 'Jest', path: '/jest', parent: 'Settings' },
  { title: 'Versions', path: '/versions', parent: 'Settings' },
  { title: 'Tailwind', path: '/tailwind', parent: 'UI Control' },
  { title: 'Mui', path: '/mui', parent: 'UI Control' },
  { title: 'UI Sandbox', path: '/ui-sandbox', parent: 'UI Control' },
  { title: 'Form Control', path: '/form', parent: 'UI Control' },
  { title: 'Date Control', path: '/date', parent: 'UI Control' },
  { title: 'useState', path: '/use-state', parent: 'Hooks' },
  { title: 'useEffect', path: '/use-effect', parent: 'Hooks' },
  { title: 'useCallback', path: '/use-callback', parent: 'Hooks' },
  { title: 'useMemo', path: '/use-memo', parent: 'Hooks' },
  { title: 'useRef', path: '/use-ref', parent: 'Hooks' },
  { title: 'useContext', path: '/use-context', parent: 'Hooks' },
  { title: 'useReducer', path: '/use-reducer', parent: 'Hooks' },
  { title: 'Redux', path: '/use-reducer', parent: 'Hooks' },
  { title: 'Todo', path: '/todo', parent: 'Ect' },
] as NavLink[]

const Left = () => {
  const groups = navLinks.reduce((acc: string[], cur) => {
    if (!acc.includes(cur.parent)) {
      acc.push(cur.parent)
    }
    return acc
  }, [])

  const Nav = ({ to, title }: NavProps) => {
    const resolved = useResolvedPath(to)
    const match = useMatch({ path: resolved.pathname, end: true })

    return (
      <Link to={to} key={title} className={match ? 'active' : ''}>
        {title}
      </Link>
    )
  }

  const NavGroup = ({ groupTitle }: { groupTitle: string }) => (
    <>
      <div>
        <hr className="opacity-10 my-4" />
        <div className="mb-2 px-6 opacity-30 text-sm">{groupTitle}</div>
      </div>
      {navLinks
        .filter(link => link.parent === groupTitle)
        .map((link, index) => (
          <Nav to={link.path} title={link.title} key={index}>
            {link.title}
          </Nav>
        ))}
    </>
  )

  return (
    <div className="left bg-blue-950 text-sky-300">
      <Link to={'/'} className="left-header">
        <img src={logo} alt="logo" className="rotate-logo w-32 mx-auto" />
        <div className="mb-4 text-center poppins" style={{ fontSize: '1.8rem' }}>
          Joosung&apos;s React
        </div>
        <Avatar alt="Remy Sharp" src={jay} className="mx-auto" sx={{ width: 64, height: 64 }} />
      </Link>

      <div className="nav">
        {groups.map(group => (
          <NavGroup groupTitle={group} key={group} />
        ))}
        {/* <NavGroup groupTitle="Settings" />
        <NavGroup groupTitle="UI Framworks" />
        <NavGroup groupTitle="Hooks" />
        <NavGroup groupTitle="Ect" /> */}
      </div>
    </div>
  )
}

export default Left
