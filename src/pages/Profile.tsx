import React from 'react'
import logo from 'assets/logo.svg'
import vue from 'assets/vue.svg'
import typescript from 'assets/typescript.svg'
import bg2 from 'assets/bg2.webp'

const bgStyle = {
  backgroundImage: `url(${bg2})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '100vh',
  margin: '-24px',
  // padding: '24px',
  color: 'white',
}

const overlay = {
  backgroundColor: 'rgba(0,0,0,0.3)',
  height: '100%',
  padding: '36px',
}

const Profile = () => {
  return (
    <div style={bgStyle}>
      <div style={overlay}>
        <div className="text-small opacity-50">
          이 웹 어플리케이션은 React 18 최신버젼으로 제작되었습니다.
        </div>

        <div className="poppins opacity-85 text-7xl mt-8">
          Front-end Developer
          <br /> & Project Leader
        </div>

        <div className="poppins opacity-80 text-3xl mt-2">from New York, NY</div>

        <div className="flex mt-8 items-center space-x-2 opacity-80">
          <img src={vue} alt="vue" width={46} />
          <img src={logo} alt="logo" width={78} />
          <img src={typescript} alt="typescript" width={42} />
        </div>

        <div className="poppins mt-20 text-sm opacity-80" style={{ lineHeight: '1.7rem' }}>
          <p>VueJs / React / Angular</p>
          <p>SPA / CI/CD / Typescript / Javascript</p>
          <p>HTML / css / sass / Tailwindcss / Vuetify / MUI</p>
          <p>Postgresql / MySQL / TypeORM / Sequelize</p>
          <p>Photoshop / Sketch / Pigma / Illustrator / Jquery</p>
        </div>

        <div className="mt-8 text-sm opacity-60">
          <a
            href="https://helix-vest-616.notion.site/6de0026076cf42aeb2266c9e88d1ab33?pvs=4"
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            안주성 이력서 보기
          </a>
        </div>
        <div className="mt-2 text-sm opacity-60">
          <a
            href="https://helix-vest-616.notion.site/Reference-Portfolio-2207c2c438444b47acbbc7642d2a2796?pvs=4"
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            포트폴리오/추천사 보기
          </a>
        </div>
      </div>
    </div>
  )
}

export default Profile
