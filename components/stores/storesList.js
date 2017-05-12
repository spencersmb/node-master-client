import React from 'react'
import { connect } from 'react-redux'
import StoreCard from './storeCard'

class storesList extends React.Component {
  render () {
    const { stores } = this.props

    return (
      <div className='inner stores'>
        {stores.map(store => <StoreCard key={store._id} {...store} />)}
      </div>
    )
  }
}

const mapStateToProps = ({ stores }) => ({ stores })

export default connect(mapStateToProps)(storesList)
