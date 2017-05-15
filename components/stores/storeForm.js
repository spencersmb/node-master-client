import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, reset } from 'redux-form'
import renderDropzoneInput from '../inputs/fileInput'
import { loadForm, addStore, updateStore } from '../../actions/storesActions'
import checkBox from '../../components/inputs/checkbox'
import renderField from '../../components/inputs/renderField'
import env from '../../config/envConfig'
import { toastr } from 'react-redux-toastr'
import Router from 'next/router'
import { convertTagsToArray } from '../../utils/storeHelpers'

class InitializeFromStateForm extends React.Component {
  constructor (props, context) {
    super(props, context)
    console.log(props)

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
      // modify store props to work with Redux form
      if (this.props.selectedStore.photo !== undefined) {
        const updatedImage = this.props.selectedStore
        updatedImage.photo = [
          {
            preview: this.props.selectedStore.photo,
            type: 'image/jpg'
          }
        ]
        this.props.load(updatedImage)
      } else {
        this.props.load(this.props.selectedStore)
      }
    } else {
      // reset form
      this.props.load({})
    }
  }

  handleFormSubmit (formProps) {
    //Convert Tags Object to array
    let storeWithTagsArray = convertTagsToArray(formProps)
    // const preview = this.props.selectedStore.photo[0].preview
    // check for image is preivew or not

    if (
      storeWithTagsArray.photo !== undefined &&
      !storeWithTagsArray.photo[0].name
    ) {
      console.log('no image updated')

      // this.props.selectedStore.photo = preview
      storeWithTagsArray.photo = this.props.selectedStore.photo[0].preview
    }
    if (this.state.editing) {
      this.props
        .updateStore(storeWithTagsArray)
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
        .addStore(storeWithTagsArray)
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

    const loginErrorText = () => {
      if (errorMessage !== undefined) {
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
          <label htmlFor='photo'>Upload Photo</label>
          <Field
            name='photo'
            preview={this.state.editing ? selectedStore.photo : null}
            component={renderDropzoneInput}
          />
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

  // check that its an array because we are already validating type in dropzone component
  if (values.photo !== undefined && !Array.isArray(values.photo)) {
    errors.photo = 'Invalid File Type'
  }

  if (!values.name) {
    errors.name = 'Required'
  }

  return errors
}

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
const storeForm = reduxForm({
  form: 'initializeFromState', // a unique identifier for this form
  validate,
  enableReinitialize: true
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
