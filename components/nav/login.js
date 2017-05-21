import { connect } from 'react-redux'
import Link from 'next/link'
import { renderSvg } from '../../config/svgs'
import { svgs } from '../../config/svgs'

const isSignedIn = user => {
  if (user.isAuthenticated) {
    return (
      <div className='nav__section nav__section--user'>
        <li className='nav__item'>
          <img
            src={
              user.gravatar
                ? user.gravatar
                : '/static/images/photos/default.jpg'
            }
            alt=''
            className='avatar'
          />
        </li>
        <li className='nav__item'>
          <Link href='/auth/logout' as='/logout'>
            <a className='nav__link'>
              {renderSvg(svgs.Logout)}
              Log Out
            </a>
          </Link>
        </li>
      </div>
    )
  } else {
    return (
      <div className='nav__section nav__section--user'>
        <li className='nav__item'>
          <Link href='/auth/register' as='/register'>
            <a className='nav__link'>Register</a>
          </Link>

        </li>
        <li className='nav__item'>
          <Link href='/auth/login' as='/login'>
            <a className='nav__link'>Log In</a>
          </Link>
        </li>
      </div>
    )
  }
}

export default connect(state => state)(({ user }) => {
  return isSignedIn(user)
})
