import React from 'react'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'
import standardLayout from '../hocs/standardLayout'
import InitializeFromStateForm from '../components/stores/storeForm'
import { getStores } from '../actions/storesActions'

class editStoreForm extends React.Component {
  static async getInitialProps ({ store, res, query }) {
    // Get storeID
    await store.dispatch(getStores())
    return { query }
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
