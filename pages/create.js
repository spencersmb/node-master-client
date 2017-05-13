import React from 'react'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'
import standardLayout from '../hocs/standardLayout'
import InitializeFromStateForm from '../components/stores/storeForm'

class editStoreForm extends React.Component {
  static getInitialProps ({ store, res, query }) {
    return { query }
  }

  constructor (props, context) {
    super(props, context)
  }

  render () {
    return (
      <div className='inner'>
        <InitializeFromStateForm />
      </div>
    )
  }
}

export default withRedux(initStore, null)(
  standardLayout(editStoreForm, 'Create Store')
)
