import React from 'react'
import { connect } from 'react-redux'
import StoreCard from './storeCard'

class storesList extends React.Component {
  renderStores () {
    const { stores, filteredStores } = this.props
    if (filteredStores) {
      return filteredStores.map(store => (
        <StoreCard key={store._id} {...store} />
      ))
    }

    return stores.map(store => <StoreCard key={store._id} {...store} />)
  }

  render () {
    return (
      <div className='inner stores'>
        {this.renderStores()}
      </div>
    )
  }
}

const mapStateToProps = ({ stores }) => ({ stores })

export default connect(mapStateToProps)(storesList)
