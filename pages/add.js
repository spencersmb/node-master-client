import React from 'react'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'
import { bindActionCreators } from 'redux'
import standardLayout from '../hocs/standardLayout'
import { Field, reduxForm } from 'redux-form'
import checkBox from '../components/inputs/checkbox'
import renderField from '../components/inputs/renderField'
import env from '../config/envConfig'
import { addStore } from '../actions/storesActions'

class editStoreForm extends React.Component {
  static getInitialProps ({ store, isServer }) {
    return { isServer }
  }

  constructor (props, context) {
    super(props, context)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFormSubmit (formProps) {
    // Take data and call Redux action passing the data
    // Redux action calls api to POST data to the server
    // On Successful save - redirect? If so where in redux
    // Reset the form
    // If we dont redirect - reset the form
    this.props.addStore(formProps)
  }

  render () {
    const { handleSubmit, valid, errorMessage } = this.props
    return (
      <div className='inner'>
        <h2>Add Store</h2>
        <form
          className='card'
          onSubmit={handleSubmit(this.handleFormSubmit)}
          encType='multipart/form-data'
        >
          <Field
            name='name'
            type='text'
            component={renderField}
            label='Name:'
          />
          <label htmlFor='description'>Description</label>
          <Field name='description' component='textarea' label='Description:' />
          <ul className='tags'>
            {env.TAGS.map(tag => (
              <Field
                key={tag}
                value={tag}
                name={`tags.[${tag.toLowerCase().replace(' ', '_')}]`}
                id={tag.toLowerCase().replace(' ', '_')}
                type='checkbox'
                component={checkBox}
                label={tag}
              />
            ))}
          </ul>
          {/* loginErrorText() */}
          <input
            type='submit'
            className='button'
            value='Save'
            disabled={valid === false ? 'disabled' : ''}
          />
        </form>

      </div>
    )
  }
}

const editStore = reduxForm({
  form: 'signin'
})(editStoreForm)

const mapDispatchToProps = dispatch => {
  return {
    addStore: bindActionCreators(addStore, dispatch)
  }
}

// const mapStateToProps = (state, ownProps) => {
//   return {
//     errorMessage: state.auth.error
//   }
// }

export default withRedux(initStore, null, mapDispatchToProps)(
  standardLayout(editStore, 'Edit Store')
)
