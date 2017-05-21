import React from 'react'
import { bindActionCreators } from 'redux'
import { initStore } from '../store'
import { getTodos } from '../actions/todoActions'
import withRedux from 'next-redux-wrapper'
import styled, { css } from 'styled-components'
import standardLayout from '../hocs/standardLayout'
import StoresList from '../components/stores/storesList'
// const rule1 = {
//   backgroundColor: 'blue',
//   '@media screen and (min-width: 250px)': {
//     backgroundColor: 'red',
//   },
// }
// const Comp = styled.div`
//     ${rule1}
//     `
const Title = styled.h1`
  color: red;
  font-size: 50px;

  > a{
    font-size:18px;
  }
`

const sizes = {
  phone: 378,
  tablet: 768,
  desktop: 992,
  giant: 1170
}

const media = Object.keys(sizes).reduce((finalMedia, size) => {
  return {
    ...finalMedia,
    [size]: function (...args) {
      return css`
        @media(max-width: ${sizes[size]}px) {
          ${css(...args)}
        }
      `
    }
  }
}, {})

const Div = styled.div`
  padding-left: 20px;

  ${media.tablet`
    padding-left: 30px;
  `}
  
`
//
// const Title = styled.h1`
//   ${{ color: "red", fontSize: "50px", fontFamily: "Open Sans", "> a": { fontSize: "18px" } }}`

const pageTitle = 'Our Store'

class Counterfirst extends React.Component {
  render () {
    return (
      <div className='inner'>
        <Div>
          <Title>My first Isomorphic App</Title>
        </Div>

        <StoresList />

      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTodos: bindActionCreators(getTodos, dispatch)
  }
}

// const mapStateToProps = ({ user }) => ({ user })

export default withRedux(initStore, null, mapDispatchToProps)(
  standardLayout(Counterfirst, pageTitle)
)
