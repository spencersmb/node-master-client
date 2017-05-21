import React, { Component } from 'react'
// import { bindActionCreators } from 'redux'
// import * as actions from '../../actions/formSubmitActions'
import { initStore } from '../../store'
import withRedux from 'next-redux-wrapper'
import standardLayout from '../../hocs/standardLayout'
import LoginForm from '../../components/auth/loginForm'
const pageTitle = 'Login'

export class LogInPage extends Component {
  static async getInitialProps ({ store, res, query }) {
    // Get storeID
    // await store.dispatch(getStores())
    return { query }
  }
  render () {
    return (
      <div className='inner' style={{ paddingTop: 30 }}>
        <LoginForm />
      </div>
    )
  }
}

export default withRedux(initStore)(standardLayout(LogInPage, pageTitle))
