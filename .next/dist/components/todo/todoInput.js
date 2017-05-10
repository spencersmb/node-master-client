'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reduxForm = require('redux-form');

var _redux = require('redux');

var _todoActions = require('../../actions/todoActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/EveryTuesday/Documents/github/learn-node-master/client/components/todo/todoInput.js';


var TodoInput = function (_React$Component) {
  (0, _inherits3.default)(TodoInput, _React$Component);

  function TodoInput(props) {
    (0, _classCallCheck3.default)(this, TodoInput);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TodoInput.__proto__ || (0, _getPrototypeOf2.default)(TodoInput)).call(this, props));

    _this.handleFormSubmit = _this.handleFormSubmit.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(TodoInput, [{
    key: 'handleFormSubmit',
    value: function handleFormSubmit(_ref) {
      var todo = _ref.todo;

      var newTodo = {
        text: todo,
        _creator: this.props.user.user_id
      };

      this.props.addTodo(newTodo);
      this.props.reset();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          handleSubmit = _props.handleSubmit,
          pristine = _props.pristine,
          reset = _props.reset,
          submitting = _props.submitting;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement('form', { className: 'auth-form', onSubmit: handleSubmit(this.handleFormSubmit), __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, 'Add Todo:'), _react2.default.createElement(_reduxForm.Field, { name: 'todo', component: 'input', type: 'text', __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), _react2.default.createElement('button', { action: 'submit', className: 'btn btn-primary', __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, 'Add Todo')));
    }
  }]);

  return TodoInput;
}(_react2.default.Component);

//CORRECT WAY TO USE REDUX + REDUX-FORM v6 and above 


var TodoForm = (0, _reduxForm.reduxForm)({ form: 'simple' })(TodoInput);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addTodo: (0, _redux.bindActionCreators)(_todoActions.addTodo, dispatch),
    reset: (0, _redux.bindActionCreators)(_reduxForm.reset, dispatch)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TodoForm);