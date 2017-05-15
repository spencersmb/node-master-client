import React from 'react'
import Link from 'next/link'
import { renderSvg, svgs } from '../../config/svgs'

// create edit page
// convert form to a component thats on the add page?
// new form on edit page that is hooked up to redux like example
// on edit page - get id of store and fetch data from redux?
// on save - look at examples on how to update - do i resave entire redux state or pluck?

// then see if I can make it into a component that takes an initialState for use on both pages

export default props => {
  const { name, photo, slug, description, _id } = props

  const photoUrl = photo || '/static/images/photos/store.png'

  const id = _id

  return (
    <div className='store'>
      <div className='store__hero'>
        <div className='store__actions'>
          <div className='store__action'>
            <div className='store__action--edit'>
              <Link as={`/store/${id}/edit`} href={`/store/edit?id=${id}`}>
                <a>{renderSvg(svgs.Pencil)}{name}</a>
              </Link>
            </div>
          </div>
        </div>
        <img src={photoUrl} alt='' />
        <h2 className='title'>
          <Link as={`/store/${slug}`} href={`/store/details?params=${slug}`}>
            <a>{name}</a>
          </Link>
        </h2>
      </div>
      <div className='store__details'>
        <p>{description.split(' ').slice(0, 25).join(' ')}</p>
      </div>
    </div>
  )
}
