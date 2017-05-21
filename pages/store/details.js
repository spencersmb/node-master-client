import React from 'react'
import Link from 'next/link'
import { initStore } from '../../store'
import withRedux from 'next-redux-wrapper'
import standardLayout from '../../hocs/standardLayout'
import { getSingleStore, getStores } from '../../actions/storesActions'
import { toastr } from 'react-redux-toastr'

const pageTitle = 'Our Store'

class StorePage extends React.Component {
  static async getInitialProps ({ store, res, query }) {
    const slug = query.slug
    let post = ''

    /*
    Check if stores is cached, if they are not, it gets a single store and puts it in redux and returns it to our post obj
    Then it makes a seperate api call to get all the stores to place them in redux
    */
    try {
      /* technically we should be filtering off the redux data, but right now im just
      testing sending data down from getInitial props to populate page
      */
      post = await store.dispatch(getSingleStore(slug))
    } catch (e) {
      toastr.error('Error:', e)
    }

    return { post }
  }

  async componentDidMount () {
    // load all stores as 2nd call for backup
    await this.props.dispatch(getStores())
  }

  render () {
    const { name, slug, tags } = this.props.post
    const photo = this.props.post.photo || '/static/images/photos/store.png'
    return (
      <div>
        <div className='single'>
          <div className='single__hero'>
            <img className='single__image' src={photo} />
            <h2 className='title title--single'>
              <Link as={`/store/${slug}`} href={`/store/details?slug=${slug}`}>
                <a>{name}</a>
              </Link>
            </h2>
          </div>

        </div>
        <div className='single__details inner'>
          <img
            src='/static/images/photos/static-map.png'
            alt='google placeholder'
            className='single__map'
          />
          <p className='single__location'>Location of store</p>

          <ul className='tags'>
            {tags.map((tag, index) => (
              <li key={tag + index} className='tag'>
                <Link as={`/tags/${tag}`} href={`/tags?tag=${tag}`}>

                  <a className='tag__link'>
                    <span className='tag__text'>{tag}</span>
                  </a>

                </Link>
              </li>
            ))}
          </ul>

        </div>
      </div>
    )
  }
}

export default withRedux(initStore)(standardLayout(StorePage, pageTitle))
