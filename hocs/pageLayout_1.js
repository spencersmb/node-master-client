import React from 'react'
import Router from 'next/router'
import Header from '../components/Header'
import { connect } from 'react-redux'

export default (Page) => {
  class PageLayout_1 extends React.Component {
    static async getInitialProps (ctx) {

      // send props to the parent > child container
      const pageProps = await Page.getInitialProps && await Page.getInitialProps(ctx)

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
          <Header {...this.props} />
          <Page {...this.props} />
        </div>
      )
    }
  }
  return connect()(PageLayout_1)
}
