import React from 'react'
import { initStore } from '../../store'
import withRedux from 'next-redux-wrapper'
import standardLayout from '../../hocs/standardLayout'
import InitializeFromStateForm from '../../components/stores/storeForm'
import { getStoreById, updateTagsForEditing } from '../../utils/storeHelpers'

class editStoreForm extends React.Component {
  static async getInitialProps ({ store, res, query }) {
    // Get storeID
    const storeId = query.id
    const stores = store.getState().stores

    // Get store
    const data = await getStoreById(stores, storeId)[0]
    const selectedStore = updateTagsForEditing(data)

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
