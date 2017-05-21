import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
// import * as actions from '../../actions/formSubmitActions'
import { initStore } from '../../store'
import withRedux from 'next-redux-wrapper'
import standardLayout from '../../hocs/standardLayout'
import LoginForm from '../../components/auth/loginForm'
import { logUserOut } from '../../actions/authActions'
// import cookies from 'browser-cookies'

const pageTitle = 'Log Out'

export class LogOutPage extends Component {
  static async getInitialProps ({ store }) {
    // Get storeID
    // await store.dispatch(getStores())
    await store.dispatch(logUserOut())

    return {}
  }
  componentWillMount () {
    this.props.logout()
  }
  render () {
    return (
      <div className='inner' style={{ paddingTop: 30 }}>
        <h2>Come Back Soon!</h2>
        <LoginForm />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: bindActionCreators(logUserOut, dispatch)
  }
}

export default withRedux(initStore, null, mapDispatchToProps)(
  standardLayout(LogOutPage, pageTitle)
)
