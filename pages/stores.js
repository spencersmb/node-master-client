import React from 'react'
import { initStore } from '../store'
// import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import standardLayout from '../hocs/standardLayout'
import StoresList from '../components/stores/storesList'
import { getStores } from '../actions/storesActions'

const pageTitle = 'Our Store'

class StoresPage extends React.Component {
  static async getInitialProps ({ store, res, query }) {
    await store.dispatch(getStores())
    return {}
  }

  render () {
    return (
      <div>
        <h2 className='inner'>Stores</h2>
        <StoresList />
      </div>
    )
  }
}

export default withRedux(initStore)(standardLayout(StoresPage, pageTitle))
