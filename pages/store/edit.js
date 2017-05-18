import React from 'react'
import { initStore } from '../../store'
import withRedux from 'next-redux-wrapper'
import standardLayout from '../../hocs/standardLayout'
import InitializeFromStateForm from '../../components/stores/storeForm'
import { getStoreById, convertTagsToObject } from '../../utils/storeHelpers'
import { getStores } from '../../actions/storesActions'

class editStoreForm extends React.Component {
  static async getInitialProps ({ store, res, query }) {
    // make sure there are stores in state -- TODO: Replace with reselect
    await store.dispatch(getStores())

    // Get storeID
    const storeId = query.id
    const stores = store.getState().stores

    // Get store
    const data = await getStoreById(stores, storeId)

    // COnvert Tag to object so redux-can init properly
    const selectedStore = convertTagsToObject(data)

    return { selectedStore }
  }

  render () {
    return (
      <div className='inner'>
        <InitializeFromStateForm selectedStore={this.props.selectedStore} />
      </div>
    )
  }
}

export default withRedux(initStore, null)(
  standardLayout(editStoreForm, 'Edit Store')
)
