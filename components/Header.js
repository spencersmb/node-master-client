import Link from 'next/link'
import { connect } from 'react-redux'
// import styled from 'styled-components'

// File links array based on if user is authenticated
const getAllowedLink = isAuthenticated => links
    .filter(l => !l.authRequired || (l.authRequired && isAuthenticated))
    .filter(l => !isAuthenticated || (isAuthenticated && !l.anonymousOnly))

const links = [
  { href: '/', text: 'Home', anonymousOnly: true },
  { href: '/other', text: 'Other', anonymousOnly: true },
  { href: '/celeb-jokes', text: 'Top Secret', authRequired: true }
]

export default connect()( ( {url, user} ) => {
  const path = url.pathname
  console.log(user)
  return (
    <div className='appHeader'>
      <h1>Header Component</h1>
      {getAllowedLink(user.isAuthenticated).map(link => {
        return (
          <Link prefetch key={link.href} href={link.href}>
            <a className={path === link.href ? 'active' : ''} >
              {link.text}
            </a>
          </Link>
        )
      })}
    </div>
  )
})
