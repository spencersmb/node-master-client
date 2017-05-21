import jwtDecode from 'jwt-decode'
import Cookie from 'js-cookie'
import cookies from 'browser-cookies'

export const setToken = token => {
  if (!process.browser) {
    return
  }
  window.localStorage.setItem('token', token)
  window.localStorage.setItem('user', JSON.stringify(jwtDecode(token)))
  // Cookie.set('jwt', token)
  cookies.set('jwt', token, {
    expires: 365,
    path: 'http://localhost:3000/'
  })
}

export const unsetToken = () => {
  if (!process.browser) {
    return
  }
  window.localStorage.removeItem('token')
  window.localStorage.removeItem('user')
  Cookie.remove('jwt')

  window.localStorage.setItem('logout', Date.now())
}

export const getUserFromLocalStorage = () => {
  const json = window.localStorage.user
  return json ? JSON.parse(json) : undefined
}

export const getUserFromCookie = req => {
  if (!req.headers.cookie) {
    return undefined
  }
  const jwtCookie = req.headers.cookie
    .split(';')
    .find(c => c.trim().startsWith('jwt='))
  if (!jwtCookie) {
    return undefined
  }
  const jwt = jwtCookie.split('=')[1]
  return jwtDecode(jwt)
}
