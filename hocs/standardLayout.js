import React from 'react'
import Router from 'next/router'
import Header from '../components/Header'
import { connect } from 'react-redux'
import Head from 'next/head'
import env from '../config/envConfig'
import ReduxToastr from 'react-redux-toastr'
import { getUserFromLocalStorage, getUserFromCookie } from '../utils/authUtils'
import { validateUserToken } from '../actions/authActions'
import { getStores } from '../actions/storesActions'

export default (Page, title = '') => {
  class standardLayout extends React.Component {
    static async getInitialProps (ctx) {
      // 1. Check storage for user
      const loggedUser = process.browser
        ? ''
        : ctx.store.dispatch(validateUserToken(getUserFromCookie(ctx.req)))

      const stores = process.browser
        ? ''
        : await ctx.store.dispatch(getStores())

      // 2. log user out if no user, or set user in Redux
      // 3. this is only used to fill redux state
      // await ctx.store.dispatch(validateUserToken(loggedUser))

      // 3. Get state after user has been added to redux
      // const state = ctx.store.getState()
      // console.log(state)

      // if(!state.user._id && state.user.isAuthenticated){
      //   console.log('needs refresh')
      //   const cookieToken = getCookie(ctx.req)
      //   loggedUser.token = cookieToken
      //   ctx.store.dispatch(refreshUser(loggedUser))
      // }

      // IF NO USER AND STATE AUTHENTICATED - redo how auth function works on page load
      // LOOK AT HOW STORES ARE LOADED IN EACH PAGE - getstores() function to look at

      // send props to the parent > child container
      const pageProps =
        (await Page.getInitialProps) && (await Page.getInitialProps(ctx))

      return {
        ...pageProps,
        currentUrl: ctx.pathname
      }
    }

    constructor (props) {
      super(props)
      this.logout = this.logout.bind(this)
    }

    logout (eve) {
      if (eve.key === 'logout') {
        Router.push(`/?logout=${eve.newValue}`)
      }
    }

    componentDidMount () {
      window.addEventListener('storage', this.logout, false)
    }

    componentWillUnmount () {
      window.removeEventListener('storage', this.logout, false)
    }

    render () {
      return (
        <div>
          <Head>
            <title>{title} | {env.WEBSITE_TITLE}</title>
          </Head>
          <Header {...this.props} />
          <Page {...this.props} />
          <ReduxToastr
            timeOut={8000}
            newestOnTop={false}
            preventDuplicates
            position='bottom-right'
            transitionIn='fadeIn'
            transitionOut='fadeOut'
            progressBar={false}
          />
        </div>
      )
    }
  }
  return connect()(standardLayout)
}
