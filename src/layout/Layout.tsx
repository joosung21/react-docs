import React, { useEffect } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { NavLink, NavProps } from './Left.d'
import logo from 'assets/logo.svg'
import jay from 'assets/jay.jpg'
import Avatar from '@mui/material/Avatar'

const drawerWidth = 280

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
  { title: 'Form Control', path: '/form-control', parent: 'UI Control' },
  { title: 'Date Control', path: '/date-control', parent: 'UI Control' },
  { title: 'useState', path: '/use-state', parent: 'Hooks' },
  { title: 'useEffect', path: '/use-effect', parent: 'Hooks' },
  { title: 'useCallback', path: '/use-callback', parent: 'Hooks' },
  { title: 'useMemo', path: '/use-memo', parent: 'Hooks' },
  { title: 'useRef', path: '/use-ref', parent: 'Hooks' },
  { title: 'useContext', path: '/use-context', parent: 'Hooks' },
  { title: 'useReducer', path: '/use-reducer', parent: 'Hooks' },
  { title: 'Todo', path: '/todo', parent: 'Ect' },
] as NavLink[]

export default function ResponsiveDrawer() {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

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
        .filter((link) => link.parent === groupTitle)
        .map((link, index) => (
          <Nav to={link.path} title={link.title} key={index}>
            {link.title}
          </Nav>
        ))}
    </>
  )

  const drawer = (
    <div className="left bg-blue-950 text-sky-300">
      <Link to={'/'} className="left-header">
        <img src={logo} alt="logo" className="rotate-logo w-32 mx-auto" />
        <div className="mb-4 text-center poppins" style={{ fontSize: '1.8rem' }}>
          Joosung&apos;s React
        </div>
        <Avatar alt="Remy Sharp" src={jay} className="mx-auto" sx={{ width: 64, height: 64 }} />
      </Link>

      <div className="nav">
        {groups.map((group) => (
          <NavGroup groupTitle={group} key={group} />
        ))}
      </div>
    </div>
  )

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    setMobileOpen(false)
  }, [location]) // location이 변경될 때마다 scrollTop을 0으로 초기화

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: '#fff',
          boxShadow: 'none',
          borderBottom: '1px solid #e0e0e0',
          display: { sm: 'none' },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: '#666' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, md: 3 },
          overflowY: 'hidden',
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
        className="main"
      >
        <Toolbar sx={{ display: { sm: 'none' } }} />

        <Outlet />
      </Box>
    </Box>
  )
}
