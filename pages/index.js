import React from 'react'
import { bindActionCreators } from 'redux'
import { initStore } from '../store'
import { getTodos } from '../actions/todoActions'
import withRedux from 'next-redux-wrapper'
import TodoList from '../components/todo/todoList'
import styled, { css } from 'styled-components'
import TodoInput from '../components/todo/todoInput'
import { injectGlobal } from 'styled-components';
import Page from '../components/Page'

// const rule1 = {
//   backgroundColor: 'blue',
//   '@media screen and (min-width: 250px)': {
//     backgroundColor: 'red',
//   },
// }
// const Comp = styled.div`
//     ${rule1}
//     `
// const Title = styled.h1`
//   color: red;
//   font-size: 50px;

//   > a{
//     font-size:18px;
//   }
// `


const sizes = {
  phone: 378,
  tablet: 768,
  desktop: 992,
  giant: 1170
}

const media = Object.keys(sizes).reduce( (finalMedia, size) => {

  return {
    ...finalMedia,
    [size]: function(...args) {
      return css`
        @media(max-width: ${sizes[size]}px) {
          ${css(...args)}
        }
      `
    }
  }

}, {} )

const Div = styled.div`
  padding-left: 20px;
  ${media.tablet`
    padding-left: 30px;
  `}
`
const Title = styled.h1`${{
  color: 'red',
  fontSize: '50px',
  fontFamily: 'Open Sans',
  '> a': {
    fontSize: '18px'
  }
}}`

class Counterfirst extends React.Component {
  static async getInitialProps({ store, isServer }) {
    await store.dispatch(getTodos())
    return { isServer }
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    const {isAuthenticated} = this.props.user

    const showTodoInput = () => {
      if(!this.props.user.isAuthenticated){
        return <TodoInput/>
      }
    }

    return (
      <div>
        <Page title='Boilerplate App' linkTo='/' {...this.props}>
          <Div>
            <Title>TodoList</Title>
            {showTodoInput()}
            <TodoList />
          </Div>
        </Page>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTodos: bindActionCreators(getTodos, dispatch)
  }
}

const mapStateToProps = ({user}) => ({user})

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Counterfirst)


