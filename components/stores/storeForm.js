import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, reset } from 'redux-form'
import {
  loadForm,
  resetForm,
  addStore,
  updateStore
} from '../../actions/storesActions'
import checkBox from '../../components/inputs/checkbox'
import renderField from '../../components/inputs/renderField'
import env from '../../config/envConfig'
import { toastr } from 'react-redux-toastr'
import Router from 'next/router'

class InitializeFromStateForm extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.state = {
      editing: false
    }
  }

  // Set editing state before component mounts
  componentWillMount () {
    // Set local editing state
    if (this.props.selectedStore !== undefined) {
      console.log('load editStore')

      this.setState({ editing: true })
    } else {
      // reset form
      console.log('reset')
      this.setState({ editing: false })
    }
  }

  //update data as soon as it mounts
  componentDidMount () {
    if (this.state.editing) {
      this.props.load(this.props.selectedStore)
    } else {
      // reset form
      this.props.load({})
    }
  }

  handleFormSubmit (formProps) {
    if (this.state.editing) {
      this.props
        .updateStore(formProps)
        .then(r => {
          toastr.success('Saved', 'Store Update Successfully!')
          // this.props.load(r.store)
          // Router.push(`/store/details?params=${r.slug}`, `/store/${r.slug}`)
        })
        .catch(e => {
          toastr.error('Error:', e)
        })
    } else {
      this.props
        .addStore(formProps)
        .then(r => {
          toastr.success('Saved', 'Store Saved Successfully!')
          Router.push(`/store/details?params=${r.slug}`, `/store/${r.slug}`)
        })
        .catch(e => {
          toastr.error('Error:', e)
        })
    }
  }

  render () {
    const {
      handleSubmit,
      load,
      valid,
      errorMessage,
      pristine,
      reset,
      submitting,
      selectedStore
    } = this.props

    return (
      <div>
        <h2>{this.state.editing ? 'Edit Store' : 'Add Store'}</h2>
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
                name={`tags.[${tag}]`}
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

const validate = values => {
  const errors = {}

  if (!values.name) {
    errors.name = 'Required'
  }

  return errors
}

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
const storeForm = reduxForm({
  form: 'initializeFromState', // a unique identifier for this form
  enableReinitialize: true,
  validate
})(InitializeFromStateForm)

export default connect(
  state => ({
    initialValues: state.editingStore.data // pull initial values from account reducer
  }),
  {
    load: loadForm,
    updateStore: updateStore,
    reset: reset,
    addStore: addStore
  } // bind account loading action creator
)(storeForm)
