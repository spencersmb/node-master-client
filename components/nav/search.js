import { connect } from 'react-redux'

export default connect()(() => {
    return (
        <div className="nav__section nav__section--search">
            <div className="search">
                <input className="search__input" type="text" placeholder="Coffee, beer..." name="search" />
                <div className="search__results"></div>
            </div>
        </div>
    )
})