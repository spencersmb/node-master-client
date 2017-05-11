import { connect } from 'react-redux'
import Header from './Header'
import styled from 'styled-components'

const Other = styled.h2`${{
  color: 'green',
  fontSize: '40px',
  fontFamily: 'Open Sans',
  '> a': {
    fontSize: '18px'
  }
}}`
export default connect()( props => {
  const {title} = props
  return (
    <div>
      <Other>{title}</Other>
      {props.children}
    </div>
  )
})
