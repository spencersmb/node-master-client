import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import renderField from '../inputs/renderField'
import { authenticateUser } from '../../actions/authActions'
import { toastr } from 'react-redux-toastr'
import Router from 'next/router'

export class RegisterComponent extends Component {
  constructor (props, context) {
    super(props, context)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  async handleFormSubmit (formProps) {
    // call action creator to sign up the user on the server
    try {
      const response = await this.props.authenticateUser(formProps)
      toastr.success('Success:', 'User: ' + response.user.name + ' created!')
      Router.push(`/stores`)
      // push to new page
    } catch (e) {
      if (Array.isArray(e)) {
        e.forEach(err => {
          toastr.error('Error:', err.msg)
        })
      } else {
        toastr.error('Error:', e)
      }
    }
  }

  render () {
    const { handleSubmit, valid, errorMessage } = this.props
    const loginErrorText = () => {
      if (errorMessage) {
        return (
          <div className='bs-callout bs-callout-danger'>
            <h4>
              {errorMessage}
            </h4>
          </div>
        )
      }
    }

    return (
      <form className='form' onSubmit={handleSubmit(this.handleFormSubmit)}>
        <h2>Sign Up</h2>
        <Field name='name' type='text' component={renderField} label='Name:' />
        <Field
          name='email'
          type='email'
          component={renderField}
          label='Email:'
        />
        <Field
          name='password'
          type='password'
          component={renderField}
          label='Password:'
        />
        {/*{password.error}*/}
        <Field
          name='passwordConfirm'
          type='password'
          component={renderField}
          label='Confirm Password:'
        />
        {loginErrorText()}
        <input
          type='submit'
          className='button'
          value='Sign Up'
          disabled={valid === false ? 'disabled' : ''}
        />
      </form>
    )
  }
}

// RegisterComponent.propTypes = {
//   handleSubmit: PropTypes.func.isRequired,
//   actions: PropTypes.object,
//   errorMessage: PropTypes.string
// }

function validate (formProps) {
  let errors = {}

  const requiredFields = ['email', 'password', 'passwordConfirm']

  requiredFields.forEach(field => {
    if (!formProps[field]) {
      errors[field] = 'Required'
    }
  })

  if (!formProps.email) {
    errors.email = 'Required'
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formProps.email)
  ) {
    errors.email = 'Invalid email address'
  }

  if (formProps.password != formProps.passwordConfirm) {
    errors.passwordConfirm = 'Passwords Must Match'
  }

  return errors
}

const RegisterForm = reduxForm({
  form: 'register',
  validate
})(RegisterComponent)

const mapDispatchToProps = dispatch => {
  return {
    authenticateUser: bindActionCreators(authenticateUser, dispatch)
  }
}

// const mapStateToProps = (state, ownProps) => {

//     return {
//         errorMessage: state.auth.error
//     }

// };

export default connect(null, mapDispatchToProps)(RegisterForm)
