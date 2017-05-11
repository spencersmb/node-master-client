import React from 'react'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'
import Page from '../components/Page'
import standardLayout from '../hocs/standardLayout'

class Counter extends React.Component {
  static getInitialProps ({ store, isServer }) {
    return { isServer }
  }

  componentDidMount () {}

  render () {
    return <Page title='Other Page' linkTo='/' {...this.props} />
  }
}

export default withRedux(initStore)(standardLayout(Counter, 'Other Page Title'))
