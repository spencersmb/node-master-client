import React from 'react'
import { initStore } from '../../store'
import withRedux from 'next-redux-wrapper'
import standardLayout from '../../hocs/standardLayout'

const pageTitle = 'Our Store'

class StorePage extends React.Component {
  static async getInitialProps ({ store, res, query }) {
    console.log('query single store')
    console.log(query)
    const post = 'string'

    // if (!post && res) {
    //   res.statusCode = 404
    // }

    return { post }
  }

  render () {
    return (
      <div>
        SINGLE STORE PAGE
        <img src='/static/images/photos/1.jpg' />
      </div>
    )
  }
}

export default withRedux(initStore)(standardLayout(StorePage, pageTitle))
