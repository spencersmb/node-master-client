import Link from 'next/link'
import { connect } from 'react-redux'
import Search from './nav/search'
import Login from './nav/login'
import env from '../config/envConfig'
import { renderSvg } from '../config/svgs'

// import styled from 'styled-components'

// File links array based on if user is authenticated
// const getAllowedLink = isAuthenticated => links
//     .filter(l => !l.authRequired || (l.authRequired && isAuthenticated))
//     .filter(l => !isAuthenticated || (isAuthenticated && !l.anonymousOnly))

// File links array based on if user is authenticated
const getLinks = isAuthenticated => {
  return env.LINKS
    .filter(
      link => !link.authRequired || (link.authRequired && isAuthenticated)
    )
    .map(link => {
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

export default connect(state => state)(({ url, user }) => {
  return (
    <header className='top'>
      <nav className='nav'>
        <div className='nav__section nav__section--pages'>
          <li className='nav__item'>
            <Link prefetch href='/'>
              <a className='nav__link nav__link--logo'>
                {renderSvg(env.LOGO)}
              </a>
            </Link>
          </li>
          {getLinks(user.isAuthenticated)}
        </div>

        <Search />
        <Login />

      </nav>
    </header>
  )
})
