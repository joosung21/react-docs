import React from "react";
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import logo from '../assets/logo.svg';

interface MyLinkProps {
    to: string;
    title: string;
    children: React.ReactNode; // Add this line
    key: number;
}

const Left = () => {
    const settingsLinks = [
      { title: 'React, Typescript, Redux, Sass', path: '/setting1' },
      { title: 'React-router', path: '/setting3' },
      { title: 'Tailwind', path: '/setting2' },
    ]

    const ectLinks = [
      { title: 'Todo', path: '/todo' },
    ]

    const MyLink = ({ to, title }: MyLinkProps) => {
        let resolved = useResolvedPath(to);
      let match = useMatch({ path: resolved.pathname, end: true });
    
      return (
        <Link to={to} key={title} className={match ? 'active' : ''}>
          {title}
        </Link>
      )
     }

    return (
      <div className='left bg-blue-950 text-sky-300'>
        <div>
          <Link to={'/'}>
            <img src={logo} alt="logo" className="w-36 mx-auto" />
            <div className="mb-5 text-2xl text-center">JOOSUNG's REACT DOCS</div>
          </Link>

          <div className="nav">
            <div className="mb-2 px-6 opacity-30 text-sm">Settings</div>

            {settingsLinks.map((link, index) => (
              <MyLink to={link.path} title={link.title} key={index}>
                {link.title}
              </MyLink>
            ))}

            <hr className="opacity-10 my-4" />

            <div className="mb-2 px-6 opacity-30 text-sm">UI Framworks</div>

            <hr className="opacity-10 my-4" />

            <div className="mb-2 px-6 opacity-30 text-sm">Ect</div>

            {ectLinks.map((link, index) => (
              <MyLink to={link.path} title={link.title} key={index}>
                {link.title}
              </MyLink>
            ))}

            <hr className="opacity-10 my-4" />
          </div>
        </div>
      </div>
    )
}

export default Left;