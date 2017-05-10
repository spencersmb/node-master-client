'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _store = require('../store');

var _todoActions = require('../actions/todoActions');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _todoList = require('../components/todo/todoList');

var _todoList2 = _interopRequireDefault(_todoList);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _todoInput = require('../components/todo/todoInput');

var _todoInput2 = _interopRequireDefault(_todoInput);

var _Page = require('../components/Page');

var _Page2 = _interopRequireDefault(_Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/EveryTuesday/Documents/github/learn-node-master/client/pages/index.js?entry';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    padding-left: 30px;\n  '], ['\n    padding-left: 30px;\n  ']);

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


var sizes = {
  phone: 378,
  tablet: 768,
  desktop: 992,
  giant: 1170
};

var media = (0, _keys2.default)(sizes).reduce(function (finalMedia, size) {

  return (0, _extends3.default)({}, finalMedia, (0, _defineProperty3.default)({}, size, function () {
    return (0, _styledComponents.css)(['@media(max-width: ', 'px) {', '}'], sizes[size], _styledComponents.css.apply(undefined, arguments));
  }));
}, {});

var Div = _styledComponents2.default.div.withConfig({
  displayName: 'pages__Div',
  componentId: 'hb3uuz-0'
})(['padding-left: 20px;', ''], media.tablet(_templateObject));
var Title = _styledComponents2.default.h1.withConfig({
  displayName: 'pages__Title',
  componentId: 'hb3uuz-1'
})(['', ''], {
  color: 'red',
  fontSize: '50px',
  fontFamily: 'Open Sans',
  '> a': {
    fontSize: '18px'
  }
});

var Counterfirst = function (_React$Component) {
  (0, _inherits3.default)(Counterfirst, _React$Component);

  function Counterfirst() {
    (0, _classCallCheck3.default)(this, Counterfirst);

    return (0, _possibleConstructorReturn3.default)(this, (Counterfirst.__proto__ || (0, _getPrototypeOf2.default)(Counterfirst)).apply(this, arguments));
  }

  (0, _createClass3.default)(Counterfirst, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var isAuthenticated = this.props.user.isAuthenticated;

      var showTodoInput = function showTodoInput() {
        if (!_this2.props.user.isAuthenticated) {
          return _react2.default.createElement(_todoInput2.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 85
            }
          });
        }
      };

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement(_Page2.default, (0, _extends3.default)({ title: 'Boilerplate App', linkTo: '/' }, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }), _react2.default.createElement(Div, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react2.default.createElement(Title, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, 'TodoList'), showTodoInput(), _react2.default.createElement(_todoList2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref) {
        var store = _ref.store,
            isServer = _ref.isServer;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return store.dispatch((0, _todoActions.getTodos)());

              case 2:
                return _context.abrupt('return', { isServer: isServer });

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Counterfirst;
}(_react2.default.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getTodos: (0, _redux.bindActionCreators)(_todoActions.getTodos, dispatch)
  };
};

var mapStateToProps = function mapStateToProps(_ref3) {
  var user = _ref3.user;
  return { user: user };
};

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore, mapStateToProps, mapDispatchToProps)(Counterfirst);