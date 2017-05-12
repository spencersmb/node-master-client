import React from 'react'
import { initStore } from '../../store'
import withRedux from 'next-redux-wrapper'
import { bindActionCreators } from 'redux'
import standardLayout from '../../hocs/standardLayout'
import { Field, reduxForm } from 'redux-form'
import checkBox from '../../components/inputs/checkbox'
import renderField from '../../components/inputs/renderField'
import env from '../../config/envConfig'
import { addStore } from '../../actions/storesActions'
import { toastr } from 'react-redux-toastr'
import Router from 'next/router'

class editStoreForm extends React.Component {
  static getInitialProps ({ store, res, query }) {
    console.log('query from HOC')
    // console.log(query)
    const post = 'string'

    // if (!post && res) {
    //   res.statusCode = 404
    // }

    return { post }
  }

  constructor (props, context) {
    super(props, context)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    // // query setup for edit or add page
    // this.params = this.props.url.query
    // if (this.params.id) {
    //   this.edit = true
    // }
  }

  componentDidMount () {
    // const params = this.props.url.query
    // console.log('CDM')
  }

  componentWillUpdate (nextProps, nextState) {
    // console.log('CWU')
  }

  componentDidUpdate (prevProps, prevState) {
    // console.log('CDU')
    // // check if we are on the edit page
    // const urlParams = this.props.url.query
    // const prevUrlParams = prevProps.url.query
    // console.log('cuurent')
    // console.log(urlParams.hasOwnProperty('id'))
    // console.log('prev')
    // console.log(prevUrlParams.hasOwnProperty('id'))
    // if (urlParams.hasOwnProperty('id') === prevUrlParams.hasOwnProperty('id')) {
    //   console.log('editing')
    //   // this.setState({ editing: true }
    // } else {
    //   console.log('not editing')
    //   // this.setState({ editing: true })
    // }
  }

  handleFormSubmit (formProps) {
    // Take data and call Redux action passing the data
    // Redux action calls api to POST data to the server
    // On Successful save - redirect? If so where in redux
    // Reset the form
    // If we dont redirect - reset the form

    this.props
      .addStore(formProps)
      .then(r => {
        toastr.success('Saved', 'Store Saved Successfully!')
        Router.push(`/store?params=${r.slug}`, `/store/${r.slug}`)
      })
      .catch(e => {
        toastr.error('Error:', e)
      })
  }

  render () {
    const { handleSubmit, valid, errorMessage } = this.props
    return (
      <div className='inner'>
        <h2>{this.edit ? 'Edit Store' : 'Add Store'}</h2>
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

const editStore = reduxForm({
  form: 'signin',
  validate
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
