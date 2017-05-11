import { connect } from 'react-redux'

export default connect()( ( ) => {
  return (
    <div className="nav__section nav__section--user">
        <li className="nav__item"><a className="nav__link" href="/register">Register</a></li>
        <li className="nav__item"><a className="nav__link" href="/login">Log In</a></li>
    </div>
  )
})