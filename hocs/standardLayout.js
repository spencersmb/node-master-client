import React from 'react'
import Router from 'next/router'
import Header from '../components/Header'
import { connect } from 'react-redux'
import Head from 'next/head'
import env from '../config/envConfig'
import ReduxToastr from 'react-redux-toastr'

export default (Page, title = '') => {
  class standardLayout extends React.Component {
    static async getInitialProps (ctx) {
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
            timeOut={4000}
            newestOnTop={false}
            preventDuplicates
            position='bottom-right'
            transitionIn='fadeIn'
            transitionOut='fadeOut'
            progressBar
          />
        </div>
      )
    }
  }
  return connect()(standardLayout)
}
