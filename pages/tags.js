import React from 'react'
import Link from 'next/link'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'
import standardLayout from '../hocs/standardLayout'
import StoresList from '../components/stores/storesList'
import { getStores, getTagsList } from '../actions/storesActions'

const pageTitle = 'Tags'

class StoresPage extends React.Component {
  static async getInitialProps ({ store, res, query }) {
    /* technically we should be filtering off the redux data, but right now im just
    testing sending data down from getInitial props to populate page
    */
    const tag = query.tag
    const [tags, stores] = await store.dispatch(getTagsList(tag))

    return { stores, tags, tag }
  }

  render () {
    const { tags, tag, stores } = this.props
    const tagLength = typeof tag === 'string' ? tag.length : 0
    const activeClass = 'tag__link tag__link--active'

    return (
      <div className='inner'>
        <h2>{tagLength > 0 ? tag : 'Tags'}</h2>

        <ul className='tags'>
          {tags.map((t, index) => (
            <li key={index} className='tag'>
              <Link as={`/tags/${t._id}`} href={`/tags?tag=${t._id}`}>
                <a className={t._id === tag ? activeClass : 'tag__link'}>
                  <span className='tag__text'>{t._id}</span>
                  <span className='tag__count'>{t.count}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <StoresList filteredStores={stores} />
      </div>
    )
  }
}

export default withRedux(initStore)(standardLayout(StoresPage, pageTitle))
