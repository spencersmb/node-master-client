import React, { Component } from 'react'
// import { bindActionCreators } from 'redux'
// import * as actions from '../../actions/formSubmitActions'
import { initStore } from '../../store'
import withRedux from 'next-redux-wrapper'
import standardLayout from '../../hocs/standardLayout'
import RegisterForm from '../../components/auth/registerForm'
import styled from 'styled-components'

const pageTitle = 'Register'

const Wrapper = styled.div`
  padding: 30px 10px;
`
const Inner = styled(Wrapper)`
  max-width: 900px;
  margin: 0 auto;
`

export class RegisterPage extends Component {
  static async getInitialProps ({ store, res, query }) {
    // Get storeID
    // await store.dispatch(getStores())
    return { query }
  }
  render () {
    return (
      <Inner>
        <RegisterForm />
      </Inner>
    )
  }
}

export default withRedux(initStore)(standardLayout(RegisterPage, pageTitle))
