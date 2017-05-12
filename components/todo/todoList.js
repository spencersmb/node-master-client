import React from 'react'
import { connect } from 'react-redux'

class TodoList extends React.Component {
  componentDidMount () {}

  render () {
    const { todos } = this.props

    const renderTodos = () => {
      if (todos.length > 0) {
        return todos.map(todo => <li key={todo._id}>{todo.text}</li>)
      }
    }

    return (
      <div>
        <ul>
          {renderTodos()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ todos }) => ({ todos })

export default connect(mapStateToProps)(TodoList)
