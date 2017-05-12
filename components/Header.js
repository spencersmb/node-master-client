import Link from 'next/link'
import { connect } from 'react-redux'
import Search from './nav/search'
import Login from './nav/login'
import env from '../config/envConfig'
import { renderSvg } from '../config/svgs'

// import styled from 'styled-components'

// File links array based on if user is authenticated

const getLinks = () => {
  return env.LINKS.map(link => {
    return (
      <li key={link.slug} className='nav__item'>
        <Link prefetch key={link.slug} href={link.slug}>
          <a className='nav__link'>
            {renderSvg(link.icon)}
            <span>{link.title}</span>
          </a>
        </Link>
      </li>
    )
  })
}

export default connect()(({ url, user }) => {
  // const path = url.pathname
  return (
    <header className='top'>
      <nav className='nav'>
        <div className='nav__section nav__section--pages'>
          <li className='nav__item'>
            <a className='nav__link nav__link--logo' href='/'>
              {renderSvg(env.LOGO)}
            </a>
          </li>
          {getLinks()}
        </div>

        <Search />
        <Login />

      </nav>
    </header>
  )
})
