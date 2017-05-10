
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var actionTypes = {
  ADD: 'ADD',
  TICK: 'TICK',
  TOGGLE_TODO: 'TOGGLE_TODO',
  TOGGLE_LOGIN: 'TOGGLE_LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOG_OUT: 'LOG_OUT',
  LOAD_TODOS_SUCCESS: 'LOAD_TODOS_SUCCESS',
  SAVE_TODO: 'SAVE_TODO',
  LOAD_JOKES_SUCCESS: 'LOAD_JOKES_SUCCESS',
  GET_PROFILE: 'GET_PROFILE',
  REFRESH_USER: 'REFRESH_USER'
};

exports.default = actionTypes;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/EveryTuesday/Documents/github/learn-node-master/client/actions/actionTypes.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/EveryTuesday/Documents/github/learn-node-master/client/actions/actionTypes.js"); } } })();

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  lastUpdate: 0,
  light: false,
  count: 0,
  todos: [{
    text: 'initial state todo'
  }],
  jokes: [],
  user: {
    isAuthenticated: false
  }
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/EveryTuesday/Documents/github/learn-node-master/client/reducers/initialState.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/EveryTuesday/Documents/github/learn-node-master/client/reducers/initialState.js"); } } })();

/***/ }),

/***/ 702:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authReducer = undefined;

var _extends2 = __webpack_require__(79);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(77);

var _assign2 = _interopRequireDefault(_assign);

var _actionTypes = __webpack_require__(178);

var _actionTypes2 = _interopRequireDefault(_actionTypes);

var _initialState = __webpack_require__(179);

var _initialState2 = _interopRequireDefault(_initialState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var authReducer = exports.authReducer = function authReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState2.default.user;
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes2.default.TOGGLE_LOGIN:
      return (0, _assign2.default)({}, state, {
        isAuthenticated: !state.isAuthenticated
      });
    case _actionTypes2.default.LOGIN_SUCCESS:
      return (0, _assign2.default)({}, state, (0, _extends3.default)({}, action.user, {
        isAuthenticated: true
      }));
    case _actionTypes2.default.REFRESH_USER:
      return (0, _assign2.default)({}, state, (0, _extends3.default)({}, action.user));
    case _actionTypes2.default.LOG_OUT:
      return (0, _assign2.default)({}, state, {
        isAuthenticated: false
      });
    default:
      return state;
  }
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/EveryTuesday/Documents/github/learn-node-master/client/reducers/authReducer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/EveryTuesday/Documents/github/learn-node-master/client/reducers/authReducer.js"); } } })();

/***/ }),

/***/ 703:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jokesReducer = undefined;

var _toConsumableArray2 = __webpack_require__(59);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _actionTypes = __webpack_require__(178);

var _actionTypes2 = _interopRequireDefault(_actionTypes);

var _initialState = __webpack_require__(179);

var _initialState2 = _interopRequireDefault(_initialState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var jokesReducer = exports.jokesReducer = function jokesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState2.default.jokes;
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes2.default.LOAD_JOKES_SUCCESS:
      return [].concat((0, _toConsumableArray3.default)(action.jokes));
    default:
      return state;
  }
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/EveryTuesday/Documents/github/learn-node-master/client/reducers/jokesReducer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/EveryTuesday/Documents/github/learn-node-master/client/reducers/jokesReducer.js"); } } })();

/***/ }),

/***/ 704:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.todosReducer = undefined;

var _toConsumableArray2 = __webpack_require__(59);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _actionTypes = __webpack_require__(178);

var _actionTypes2 = _interopRequireDefault(_actionTypes);

var _initialState = __webpack_require__(179);

var _initialState2 = _interopRequireDefault(_initialState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var todosReducer = exports.todosReducer = function todosReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState2.default.todos;
  var action = arguments[1];

  switch (action.type) {

    case _actionTypes2.default.SAVE_TODO:
      return [].concat((0, _toConsumableArray3.default)(state), [action.todo]);
    case _actionTypes2.default.LOAD_TODOS_SUCCESS:
      return [].concat((0, _toConsumableArray3.default)(action.todos));

    default:
      return state;
  }
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/EveryTuesday/Documents/github/learn-node-master/client/reducers/todosReducer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/EveryTuesday/Documents/github/learn-node-master/client/reducers/todosReducer.js"); } } })();

/***/ }),

/***/ 705:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = undefined;

var _redux = __webpack_require__(76);

var _reduxThunk = __webpack_require__(805);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxDevtoolsExtension = __webpack_require__(738);

var _todosReducer = __webpack_require__(704);

var _jokesReducer = __webpack_require__(703);

var _reduxForm = __webpack_require__(773);

var _authReducer = __webpack_require__(702);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initStore = exports.initStore = function initStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // mirror of state from original app
  var reducers = (0, _redux.combineReducers)({
    todos: _todosReducer.todosReducer,
    user: _authReducer.authReducer,
    jokes: _jokesReducer.jokesReducer,
    form: _reduxForm.reducer
  });

  var env = "development" || 'development';

  if (typeof window !== 'undefined' && env === 'development') {
    // const composeEnhancers = composeWithDevTools({
    //   // Specify here name, actionsBlacklist, actionsCreators and other options if needed
    //   actionsBlacklist: ['TICK']
    // });

    return (0, _redux.createStore)(reducers, initialState, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk2.default)));
  }

  return (0, _redux.createStore)(reducers, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/EveryTuesday/Documents/github/learn-node-master/client/store.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/EveryTuesday/Documents/github/learn-node-master/client/store.js"); } } })();

/***/ }),

/***/ 830:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveTodo = exports.loadTodosSuccess = exports.getTodos = exports.addTodo = undefined;

var _actionTypes = __webpack_require__(178);

var _actionTypes2 = _interopRequireDefault(_actionTypes);

var _todosApi = __webpack_require__(844);

var _todosApi2 = _interopRequireDefault(_todosApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addTodo = exports.addTodo = function addTodo(todo) {
  return function (dispatch) {
    return _todosApi2.default.addTodo(todo).then(function (res) {
      dispatch(saveTodo(res));
    });
  };
};

var getTodos = exports.getTodos = function getTodos() {
  return function (dispatch) {
    return _todosApi2.default.getTodos().then(function (todos) {
      dispatch(loadTodosSuccess(todos));
    });
  };
};

var loadTodosSuccess = exports.loadTodosSuccess = function loadTodosSuccess(todos) {
  return {
    type: _actionTypes2.default.LOAD_TODOS_SUCCESS,
    todos: todos
  };
};

var saveTodo = exports.saveTodo = function saveTodo(todo) {
  return {
    type: _actionTypes2.default.SAVE_TODO,
    todo: todo
  };
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/EveryTuesday/Documents/github/learn-node-master/client/actions/todoActions.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/EveryTuesday/Documents/github/learn-node-master/client/actions/todoActions.js"); } } })();

/***/ }),

/***/ 831:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(843);

var _link2 = _interopRequireDefault(_link);

var _reactRedux = __webpack_require__(56);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/EveryTuesday/Documents/github/learn-node-master/client/components/Header.js';

// import styled from 'styled-components'

// File links array based on if user is authenticated
var getAllowedLink = function getAllowedLink(isAuthenticated) {
  return links.filter(function (l) {
    return !l.authRequired || l.authRequired && isAuthenticated;
  }).filter(function (l) {
    return !isAuthenticated || isAuthenticated && !l.anonymousOnly;
  });
};

var links = [{ href: '/', text: 'Home', anonymousOnly: true }, { href: '/other', text: 'Other', anonymousOnly: true }, { href: '/celeb-jokes', text: 'Top Secret', authRequired: true }];

exports.default = (0, _reactRedux.connect)()(function (_ref) {
  var url = _ref.url,
      user = _ref.user;

  var path = url.pathname;
  console.log(user);
  return _react2.default.createElement('div', { className: 'appHeader', __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, 'Header Component'), getAllowedLink(user.isAuthenticated).map(function (link) {
    return _react2.default.createElement(_link2.default, { prefetch: true, key: link.href, href: link.href, __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      }
    }, _react2.default.createElement('a', { className: path === link.href ? 'active' : '', __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      }
    }, link.text));
  }));
});

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/EveryTuesday/Documents/github/learn-node-master/client/components/Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/EveryTuesday/Documents/github/learn-node-master/client/components/Header.js"); } } })();

/***/ }),

/***/ 832:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(88);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(78);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(17);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = __webpack_require__(836);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _defineProperty2 = __webpack_require__(835);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__(79);

var _extends3 = _interopRequireDefault(_extends2);

var _keys = __webpack_require__(323);

var _keys2 = _interopRequireDefault(_keys);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(76);

var _store = __webpack_require__(705);

var _todoActions = __webpack_require__(830);

var _nextReduxWrapper = __webpack_require__(592);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _todoList = __webpack_require__(847);

var _todoList2 = _interopRequireDefault(_todoList);

var _styledComponents = __webpack_require__(812);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _todoInput = __webpack_require__(846);

var _todoInput2 = _interopRequireDefault(_todoInput);

var _Page = __webpack_require__(845);

var _Page2 = _interopRequireDefault(_Page);

var _pageLayout_ = __webpack_require__(849);

var _pageLayout_2 = _interopRequireDefault(_pageLayout_);

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
  componentId: 'bwtzhy-0'
})(['padding-left: 20px;', ''], media.tablet(_templateObject));
var Title = _styledComponents2.default.h1.withConfig({
  displayName: 'pages__Title',
  componentId: 'bwtzhy-1'
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
              lineNumber: 86
            }
          });
        }
      };

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, _react2.default.createElement(Div, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react2.default.createElement(Title, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, 'TodoList')), showTodoInput(), _react2.default.createElement(_todoList2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }));
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

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore, mapStateToProps, mapDispatchToProps)((0, _pageLayout_2.default)(Counterfirst));

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/EveryTuesday/Documents/github/learn-node-master/client/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/EveryTuesday/Documents/github/learn-node-master/client/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(108)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 844:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(829);

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = __webpack_require__(45);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(17);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _envConfig = __webpack_require__(848);

var _envConfig2 = _interopRequireDefault(_envConfig);

var _isomorphicUnfetch = __webpack_require__(842);

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-unused-vars */
var TodosApi = function () {
  function TodosApi() {
    (0, _classCallCheck3.default)(this, TodosApi);
  }

  (0, _createClass3.default)(TodosApi, null, [{
    key: 'addTodo',
    value: function addTodo(todo) {
      // since this always happens on the server I can just get the jwt from localhost
      var token = getTokenFromLocalStorage();
      return new _promise2.default(function (resolve, reject) {
        (0, _isomorphicUnfetch2.default)(_envConfig2.default.BACKEND_URL + '/todos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
          },
          body: (0, _stringify2.default)({
            text: todo.text,
            _creator: todo._creator
          })
        }).then(function (r) {
          return r.json();
        }).then(function (res) {
          resolve(res);
        }).catch(function (e) {
          reject(e);
        });
      });
    }
  }, {
    key: 'getTodos',
    value: function getTodos() {
      return new _promise2.default(function (resolve, reject) {
        (0, _isomorphicUnfetch2.default)(_envConfig2.default.BACKEND_URL + '/todos', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(function (r) {
          return r.json();
        }).then(function (res) {
          resolve(res.todos);
        }).catch(function (e) {
          reject(e);
        });
      });
    }
  }, {
    key: 'getJokes',
    value: function getJokes(access) {
      return new _promise2.default(function (resolve, reject) {

        (0, _isomorphicUnfetch2.default)(_envConfig2.default.BACKEND_URL + '/BACKEND_URL/jokes/celebrity', {
          method: 'GET',
          headers: {
            Authorization: 'Bearer ' + access.token
          }
        }).then(function (r) {
          var result = r.json();
          return result;
        }).then(function (res) {
          resolve({ jokes: res });
        }).catch(function (e) {
          reject(e);
        });
      });
    }
  }]);

  return TodosApi;
}();

exports.default = TodosApi;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/EveryTuesday/Documents/github/learn-node-master/client/api/todosApi.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/EveryTuesday/Documents/github/learn-node-master/client/api/todosApi.js"); } } })();

/***/ }),

/***/ 845:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(79);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(56);

var _Header = __webpack_require__(831);

var _Header2 = _interopRequireDefault(_Header);

var _styledComponents = __webpack_require__(812);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/EveryTuesday/Documents/github/learn-node-master/client/components/Page.js';


var Other = _styledComponents2.default.h2.withConfig({
  displayName: 'Page__Other',
  componentId: 'qg33y9-0'
})(['', ''], {
  color: 'green',
  fontSize: '40px',
  fontFamily: 'Open Sans',
  '> a': {
    fontSize: '18px'
  }
});
exports.default = (0, _reactRedux.connect)()(function (props) {
  var title = props.title;

  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement(_Header2.default, (0, _extends3.default)({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  })), _react2.default.createElement(Other, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, title), props.children);
});

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/EveryTuesday/Documents/github/learn-node-master/client/components/Page.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/EveryTuesday/Documents/github/learn-node-master/client/components/Page.js"); } } })();

/***/ }),

/***/ 846:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(17);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(56);

var _reduxForm = __webpack_require__(773);

var _redux = __webpack_require__(76);

var _todoActions = __webpack_require__(830);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/EveryTuesday/Documents/github/learn-node-master/client/components/todo/todoInput.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/EveryTuesday/Documents/github/learn-node-master/client/components/todo/todoInput.js"); } } })();

/***/ }),

/***/ 847:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(17);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(56);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/EveryTuesday/Documents/github/learn-node-master/client/components/todo/todoList.js';


var TodoList = function (_React$Component) {
  (0, _inherits3.default)(TodoList, _React$Component);

  function TodoList() {
    (0, _classCallCheck3.default)(this, TodoList);

    return (0, _possibleConstructorReturn3.default)(this, (TodoList.__proto__ || (0, _getPrototypeOf2.default)(TodoList)).apply(this, arguments));
  }

  (0, _createClass3.default)(TodoList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      var todos = this.props.todos;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, todos.map(function (todo) {
        return _react2.default.createElement('li', { key: todo._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        }, todo.text);
      })));
    }
  }]);

  return TodoList;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(_ref) {
  var todos = _ref.todos;
  return { todos: todos };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(TodoList);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/EveryTuesday/Documents/github/learn-node-master/client/components/todo/todoList.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/EveryTuesday/Documents/github/learn-node-master/client/components/todo/todoList.js"); } } })();

/***/ }),

/***/ 848:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var prod = "development" === 'production';

exports.default = {
  BACKEND_URL: !prod ? 'https://nameless-scrubland-28835.herokuapp.com' : 'http://localhost:3001'
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/EveryTuesday/Documents/github/learn-node-master/client/config/envConfig.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/EveryTuesday/Documents/github/learn-node-master/client/config/envConfig.js"); } } })();

/***/ }),

/***/ 849:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = __webpack_require__(88);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = __webpack_require__(79);

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = __webpack_require__(78);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(17);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(107);

var _index2 = _interopRequireDefault(_index);

var _Header = __webpack_require__(831);

var _Header2 = _interopRequireDefault(_Header);

var _reactRedux = __webpack_require__(56);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/EveryTuesday/Documents/github/learn-node-master/client/hocs/pageLayout_1.js';

exports.default = function (Page) {
  var PageLayout_1 = function (_React$Component) {
    (0, _inherits3.default)(PageLayout_1, _React$Component);

    (0, _createClass3.default)(PageLayout_1, null, [{
      key: 'getInitialProps',
      value: function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx) {
          var pageProps;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return Page.getInitialProps;

                case 2:
                  _context.t0 = _context.sent;

                  if (!_context.t0) {
                    _context.next = 7;
                    break;
                  }

                  _context.next = 6;
                  return Page.getInitialProps(ctx);

                case 6:
                  _context.t0 = _context.sent;

                case 7:
                  pageProps = _context.t0;
                  return _context.abrupt('return', (0, _extends3.default)({}, pageProps, {
                    currentUrl: ctx.pathname
                  }));

                case 9:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function getInitialProps(_x) {
          return _ref.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }]);

    function PageLayout_1(props) {
      (0, _classCallCheck3.default)(this, PageLayout_1);

      var _this = (0, _possibleConstructorReturn3.default)(this, (PageLayout_1.__proto__ || (0, _getPrototypeOf2.default)(PageLayout_1)).call(this, props));

      _this.logout = _this.logout.bind(_this);
      return _this;
    }

    (0, _createClass3.default)(PageLayout_1, [{
      key: 'logout',
      value: function logout(eve) {
        if (eve.key === 'logout') {
          _index2.default.push('/?logout=' + eve.newValue);
        }
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        window.addEventListener('storage', this.logout, false);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        window.removeEventListener('storage', this.logout, false);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        }, _react2.default.createElement(_Header2.default, (0, _extends3.default)({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        })), _react2.default.createElement(Page, (0, _extends3.default)({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        })));
      }
    }]);

    return PageLayout_1;
  }(_react2.default.Component);

  return (0, _reactRedux.connect)()(PageLayout_1);
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/EveryTuesday/Documents/github/learn-node-master/client/hocs/pageLayout_1.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/EveryTuesday/Documents/github/learn-node-master/client/hocs/pageLayout_1.js"); } } })();

/***/ }),

/***/ 850:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(832);


/***/ })

},[850]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hY3Rpb25zL2FjdGlvblR5cGVzLmpzPzliZDdmN2IiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvaW5pdGlhbFN0YXRlLmpzPzliZDdmN2IiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvYXV0aFJlZHVjZXIuanM/OWJkN2Y3YiIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9qb2tlc1JlZHVjZXIuanM/OWJkN2Y3YiIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy90b2Rvc1JlZHVjZXIuanM/OWJkN2Y3YiIsIndlYnBhY2s6Ly8vLi9zdG9yZS5qcz85YmQ3ZjdiIiwid2VicGFjazovLy8uL2FjdGlvbnMvdG9kb0FjdGlvbnMuanM/OWJkN2Y3YiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcz85YmQ3ZjdiIiwid2VicGFjazovLy8uL3BhZ2VzPzliZDdmN2IiLCJ3ZWJwYWNrOi8vLy4vYXBpL3RvZG9zQXBpLmpzPzliZDdmN2IiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QYWdlLmpzPzliZDdmN2IiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90b2RvL3RvZG9JbnB1dC5qcz85YmQ3ZjdiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdG9kby90b2RvTGlzdC5qcz85YmQ3ZjdiIiwid2VicGFjazovLy8uL2NvbmZpZy9lbnZDb25maWcuanM/OWJkN2Y3YiIsIndlYnBhY2s6Ly8vLi9ob2NzL3BhZ2VMYXlvdXRfMS5qcz85YmQ3ZjdiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLElBQU07T0FFSjtRQUNBO2VBQ0E7Z0JBQ0E7aUJBQ0E7V0FDQTtzQkFDQTthQUNBO3NCQUNBO2VBQ0E7Z0JBR0Y7QUFiRTs7a0JBYWEsWTs7Ozs7Ozs7Ozs7Ozs7OztjQ1piO1NBQ0E7U0FDQTs7VUFLQTtBQUhJLEdBRkc7U0FNUDs7cUJBQ21CO0FBQWpCO0FBVkYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztB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QUFpQixXQUFXLEtBQUssUUFDekM7QUExQm9CO0FBQUE7V0FBQTs2Q0E2Qm5CO2VBQU8sb0JBQW9CLFdBQVcsS0FBSyxRQUM1QztBQTlCb0I7QUFBQTtXQUFBOytCQWlDbkI7K0JBQ0U7O3NCQUFBO3dCQUNFO0FBREY7QUFBQSwyQkFDRywyREFBVyxLQUFLOztzQkFBakI7d0JBQ0E7QUFEQTtBQUFBLDJDQUNDLGlDQUFTLEtBQUs7O3NCQUFmO3dCQUdMO0FBSEs7QUFBQTtBQXBDZTtBQUFBOztXQUFBO0lBQ0ksZ0JBd0MzQjs7U0FBTywyQkFDUjtBQTFDRCxFIiwiZmlsZSI6ImJ1bmRsZXMvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhY3Rpb25UeXBlcyA9IHtcbiAgQUREOiAnQUREJyxcbiAgVElDSzogJ1RJQ0snLFxuICBUT0dHTEVfVE9ETzogJ1RPR0dMRV9UT0RPJyxcbiAgVE9HR0xFX0xPR0lOOiAnVE9HR0xFX0xPR0lOJyxcbiAgTE9HSU5fU1VDQ0VTUzogJ0xPR0lOX1NVQ0NFU1MnLFxuICBMT0dfT1VUOiAnTE9HX09VVCcsXG4gIExPQURfVE9ET1NfU1VDQ0VTUzogJ0xPQURfVE9ET1NfU1VDQ0VTUycsXG4gIFNBVkVfVE9ETzogJ1NBVkVfVE9ETycsXG4gIExPQURfSk9LRVNfU1VDQ0VTUzogJ0xPQURfSk9LRVNfU1VDQ0VTUycsXG4gIEdFVF9QUk9GSUxFOiAnR0VUX1BST0ZJTEUnLFxuICBSRUZSRVNIX1VTRVI6ICdSRUZSRVNIX1VTRVInXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFjdGlvblR5cGVzXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hY3Rpb25zL2FjdGlvblR5cGVzLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBsYXN0VXBkYXRlOiAwLFxuICBsaWdodDogZmFsc2UsXG4gIGNvdW50OiAwLFxuICB0b2RvczogW1xuICAgIHtcbiAgICAgIHRleHQ6ICdpbml0aWFsIHN0YXRlIHRvZG8nXG4gICAgfVxuICBdLFxuICBqb2tlczogW10sXG4gIHVzZXI6e1xuICAgIGlzQXV0aGVudGljYXRlZDogZmFsc2VcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdWNlcnMvaW5pdGlhbFN0YXRlLmpzIiwiaW1wb3J0IGFjdGlvblR5cGVzIGZyb20gJy4uL2FjdGlvbnMvYWN0aW9uVHlwZXMnXG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gJy4vaW5pdGlhbFN0YXRlJ1xuXG5leHBvcnQgY29uc3QgYXV0aFJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUudXNlciwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGFjdGlvblR5cGVzLlRPR0dMRV9MT0dJTjpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKCB7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkOiAhc3RhdGUuaXNBdXRoZW50aWNhdGVkXG4gICAgICB9KVxuICAgIGNhc2UgYWN0aW9uVHlwZXMuTE9HSU5fU1VDQ0VTUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKCB7fSwgc3RhdGUsIHtcbiAgICAgICAgLi4uYWN0aW9uLnVzZXIsXG4gICAgICAgIGlzQXV0aGVudGljYXRlZDogdHJ1ZVxuICAgICAgfSlcbiAgICBjYXNlIGFjdGlvblR5cGVzLlJFRlJFU0hfVVNFUjpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKCB7fSwgc3RhdGUsIHtcbiAgICAgICAgLi4uYWN0aW9uLnVzZXJcbiAgICAgIH0pXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5MT0dfT1VUOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oIHt9LCBzdGF0ZSwge1xuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlXG4gICAgICB9KVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdWNlcnMvYXV0aFJlZHVjZXIuanMiLCJpbXBvcnQgYWN0aW9uVHlwZXMgZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb25UeXBlcydcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi9pbml0aWFsU3RhdGUnXG5leHBvcnQgY29uc3Qgam9rZXNSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLmpva2VzLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgYWN0aW9uVHlwZXMuTE9BRF9KT0tFU19TVUNDRVNTOlxuICAgICAgcmV0dXJuIFsuLi5hY3Rpb24uam9rZXNdXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1Y2Vycy9qb2tlc1JlZHVjZXIuanMiLCJpbXBvcnQgYWN0aW9uVHlwZXMgZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb25UeXBlcydcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi9pbml0aWFsU3RhdGUnXG5cbmV4cG9ydCBjb25zdCB0b2Rvc1JlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUudG9kb3MsIGFjdGlvbikgPT4ge1xuICBcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIFxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0FWRV9UT0RPOlxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBhY3Rpb24udG9kb1xuICAgICAgICBdO1xuICAgIGNhc2UgYWN0aW9uVHlwZXMuTE9BRF9UT0RPU19TVUNDRVNTOlxuICAgICAgcmV0dXJuIFtcbiAgICAgICAgLi4uYWN0aW9uLnRvZG9zXG4gICAgICBdXG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlZHVjZXJzL3RvZG9zUmVkdWNlci5qcyIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tICdyZWR1eC10aHVuaydcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nXG5pbXBvcnQgeyB0b2Rvc1JlZHVjZXIgfSBmcm9tICcuL3JlZHVjZXJzL3RvZG9zUmVkdWNlcidcbmltcG9ydCB7IGpva2VzUmVkdWNlciB9IGZyb20gJy4vcmVkdWNlcnMvam9rZXNSZWR1Y2VyJ1xuaW1wb3J0IHsgcmVkdWNlciBhcyBmb3JtUmVkdWNlciB9IGZyb20gJ3JlZHV4LWZvcm0nXG5pbXBvcnQgeyBhdXRoUmVkdWNlciB9IGZyb20gJy4vcmVkdWNlcnMvYXV0aFJlZHVjZXInXG5cblxuZXhwb3J0IGNvbnN0IGluaXRTdG9yZSA9IChpbml0aWFsU3RhdGUgPSB7fSkgPT4ge1xuICAgIC8vIG1pcnJvciBvZiBzdGF0ZSBmcm9tIG9yaWdpbmFsIGFwcFxuICBjb25zdCByZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgdG9kb3M6IHRvZG9zUmVkdWNlcixcbiAgICB1c2VyOiBhdXRoUmVkdWNlciwgIFxuICAgIGpva2VzOiBqb2tlc1JlZHVjZXIsXG4gICAgZm9ybTogZm9ybVJlZHVjZXJcbiAgfSlcblxuICBcbiAgbGV0IGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCdcblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgZW52ID09PSAnZGV2ZWxvcG1lbnQnICkge1xuICAgIC8vIGNvbnN0IGNvbXBvc2VFbmhhbmNlcnMgPSBjb21wb3NlV2l0aERldlRvb2xzKHtcbiAgICAvLyAgIC8vIFNwZWNpZnkgaGVyZSBuYW1lLCBhY3Rpb25zQmxhY2tsaXN0LCBhY3Rpb25zQ3JlYXRvcnMgYW5kIG90aGVyIG9wdGlvbnMgaWYgbmVlZGVkXG4gICAgLy8gICBhY3Rpb25zQmxhY2tsaXN0OiBbJ1RJQ0snXVxuICAgIC8vIH0pO1xuXG4gICAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxuICAgICAgcmVkdWNlcnMsXG4gICAgICBpbml0aWFsU3RhdGUsXG4gICAgICBjb21wb3NlV2l0aERldlRvb2xzKFxuICAgICAgICBhcHBseU1pZGRsZXdhcmUodGh1bmtNaWRkbGV3YXJlKVxuICAgICAgKVxuICAgIClcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVTdG9yZShyZWR1Y2VycywgaW5pdGlhbFN0YXRlLCBhcHBseU1pZGRsZXdhcmUodGh1bmtNaWRkbGV3YXJlKSlcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3N0b3JlLmpzIiwiaW1wb3J0IGFjdGlvblR5cGVzIGZyb20gJy4vYWN0aW9uVHlwZXMnXG5pbXBvcnQgdG9kb3NBcGkgZnJvbSAnLi4vYXBpL3RvZG9zQXBpJ1xuXG5leHBvcnQgY29uc3QgYWRkVG9kbyA9ICh0b2RvKSA9PiBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiB0b2Rvc0FwaS5hZGRUb2RvKHRvZG8pLnRoZW4ocmVzID0+IHtcbiAgICBkaXNwYXRjaChzYXZlVG9kbyhyZXMpKVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgZ2V0VG9kb3MgPSAoKSA9PiBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiB0b2Rvc0FwaS5nZXRUb2RvcygpLnRoZW4odG9kb3MgPT4ge1xuICAgIGRpc3BhdGNoKGxvYWRUb2Rvc1N1Y2Nlc3ModG9kb3MpKVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgbG9hZFRvZG9zU3VjY2VzcyA9IHRvZG9zID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBhY3Rpb25UeXBlcy5MT0FEX1RPRE9TX1NVQ0NFU1MsXG4gICAgdG9kb3NcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2F2ZVRvZG8gPSB0b2RvID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBhY3Rpb25UeXBlcy5TQVZFX1RPRE8sXG4gICAgdG9kb1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hY3Rpb25zL3RvZG9BY3Rpb25zLmpzIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuLy8gaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuLy8gRmlsZSBsaW5rcyBhcnJheSBiYXNlZCBvbiBpZiB1c2VyIGlzIGF1dGhlbnRpY2F0ZWRcbmNvbnN0IGdldEFsbG93ZWRMaW5rID0gaXNBdXRoZW50aWNhdGVkID0+IGxpbmtzXG4gICAgLmZpbHRlcihsID0+ICFsLmF1dGhSZXF1aXJlZCB8fCAobC5hdXRoUmVxdWlyZWQgJiYgaXNBdXRoZW50aWNhdGVkKSlcbiAgICAuZmlsdGVyKGwgPT4gIWlzQXV0aGVudGljYXRlZCB8fCAoaXNBdXRoZW50aWNhdGVkICYmICFsLmFub255bW91c09ubHkpKVxuXG5jb25zdCBsaW5rcyA9IFtcbiAgeyBocmVmOiAnLycsIHRleHQ6ICdIb21lJywgYW5vbnltb3VzT25seTogdHJ1ZSB9LFxuICB7IGhyZWY6ICcvb3RoZXInLCB0ZXh0OiAnT3RoZXInLCBhbm9ueW1vdXNPbmx5OiB0cnVlIH0sXG4gIHsgaHJlZjogJy9jZWxlYi1qb2tlcycsIHRleHQ6ICdUb3AgU2VjcmV0JywgYXV0aFJlcXVpcmVkOiB0cnVlIH1cbl1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgpKCAoIHt1cmwsIHVzZXJ9ICkgPT4ge1xuICBjb25zdCBwYXRoID0gdXJsLnBhdGhuYW1lXG4gIGNvbnNvbGUubG9nKHVzZXIpXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2FwcEhlYWRlcic+XG4gICAgICA8aDE+SGVhZGVyIENvbXBvbmVudDwvaDE+XG4gICAgICB7Z2V0QWxsb3dlZExpbmsodXNlci5pc0F1dGhlbnRpY2F0ZWQpLm1hcChsaW5rID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TGluayBwcmVmZXRjaCBrZXk9e2xpbmsuaHJlZn0gaHJlZj17bGluay5ocmVmfT5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17cGF0aCA9PT0gbGluay5ocmVmID8gJ2FjdGl2ZScgOiAnJ30gPlxuICAgICAgICAgICAgICB7bGluay50ZXh0fVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKVxuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gIClcbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0hlYWRlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHsgaW5pdFN0b3JlIH0gZnJvbSAnLi4vc3RvcmUnXG5pbXBvcnQgeyBnZXRUb2RvcyB9IGZyb20gJy4uL2FjdGlvbnMvdG9kb0FjdGlvbnMnXG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcidcbmltcG9ydCBUb2RvTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL3RvZG8vdG9kb0xpc3QnXG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IFRvZG9JbnB1dCBmcm9tICcuLi9jb21wb25lbnRzL3RvZG8vdG9kb0lucHV0J1xuaW1wb3J0IHsgaW5qZWN0R2xvYmFsIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlJ1xuaW1wb3J0IFBhZ2VMYXlvdXRfMSBmcm9tICcuLi9ob2NzL3BhZ2VMYXlvdXRfMSdcblxuLy8gY29uc3QgcnVsZTEgPSB7XG4vLyAgIGJhY2tncm91bmRDb2xvcjogJ2JsdWUnLFxuLy8gICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjUwcHgpJzoge1xuLy8gICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXG4vLyAgIH0sXG4vLyB9XG4vLyBjb25zdCBDb21wID0gc3R5bGVkLmRpdmBcbi8vICAgICAke3J1bGUxfVxuLy8gICAgIGBcbi8vIGNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxuLy8gICBjb2xvcjogcmVkO1xuLy8gICBmb250LXNpemU6IDUwcHg7XG5cbi8vICAgPiBhe1xuLy8gICAgIGZvbnQtc2l6ZToxOHB4O1xuLy8gICB9XG4vLyBgXG5cblxuY29uc3Qgc2l6ZXMgPSB7XG4gIHBob25lOiAzNzgsXG4gIHRhYmxldDogNzY4LFxuICBkZXNrdG9wOiA5OTIsXG4gIGdpYW50OiAxMTcwXG59XG5cbmNvbnN0IG1lZGlhID0gT2JqZWN0LmtleXMoc2l6ZXMpLnJlZHVjZSggKGZpbmFsTWVkaWEsIHNpemUpID0+IHtcblxuICByZXR1cm4ge1xuICAgIC4uLmZpbmFsTWVkaWEsXG4gICAgW3NpemVdOiBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgICByZXR1cm4gY3NzYFxuICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiAke3NpemVzW3NpemVdfXB4KSB7XG4gICAgICAgICAgJHtjc3MoLi4uYXJncyl9XG4gICAgICAgIH1cbiAgICAgIGBcbiAgICB9XG4gIH1cblxufSwge30gKVxuXG5jb25zdCBEaXYgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICR7bWVkaWEudGFibGV0YFxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgYH1cbmBcbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYCR7e1xuICBjb2xvcjogJ3JlZCcsXG4gIGZvbnRTaXplOiAnNTBweCcsXG4gIGZvbnRGYW1pbHk6ICdPcGVuIFNhbnMnLFxuICAnPiBhJzoge1xuICAgIGZvbnRTaXplOiAnMThweCdcbiAgfVxufX1gXG5cbmNsYXNzIENvdW50ZXJmaXJzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBzdG9yZSwgaXNTZXJ2ZXIgfSkge1xuICAgIGF3YWl0IHN0b3JlLmRpc3BhdGNoKGdldFRvZG9zKCkpXG4gICAgcmV0dXJuIHsgaXNTZXJ2ZXIgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7aXNBdXRoZW50aWNhdGVkfSA9IHRoaXMucHJvcHMudXNlclxuXG4gICAgY29uc3Qgc2hvd1RvZG9JbnB1dCA9ICgpID0+IHtcbiAgICAgIGlmKCF0aGlzLnByb3BzLnVzZXIuaXNBdXRoZW50aWNhdGVkKXtcbiAgICAgICAgcmV0dXJuIDxUb2RvSW5wdXQvPlxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICAgPERpdj5cbiAgICAgICAgICAgIDxUaXRsZT5Ub2RvTGlzdDwvVGl0bGU+XG4gICAgICAgICAgPC9EaXY+XG4gICAgICAgICAge3Nob3dUb2RvSW5wdXQoKX1cbiAgICAgICAgICAgIDxUb2RvTGlzdCAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGdldFRvZG9zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoZ2V0VG9kb3MsIGRpc3BhdGNoKVxuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7dXNlcn0pID0+ICh7dXNlcn0pXG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChpbml0U3RvcmUsIG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShQYWdlTGF5b3V0XzEoQ291bnRlcmZpcnN0KSlcblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQgZW52IGZyb20gJy4uL2NvbmZpZy9lbnZDb25maWcnXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuXG5jbGFzcyBUb2Rvc0FwaSB7XG4gIFxuICBzdGF0aWMgYWRkVG9kbyAodG9kbykge1xuICAgIC8vIHNpbmNlIHRoaXMgYWx3YXlzIGhhcHBlbnMgb24gdGhlIHNlcnZlciBJIGNhbiBqdXN0IGdldCB0aGUgand0IGZyb20gbG9jYWxob3N0XG4gICAgY29uc3QgdG9rZW4gPSBnZXRUb2tlbkZyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgZmV0Y2goYCR7ZW52LkJBQ0tFTkRfVVJMfS90b2Rvc2AsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcblx0ICAgICAgICB0ZXh0OnRvZG8udGV4dCxcbiAgICAgICAgICBfY3JlYXRvcjogdG9kby5fY3JlYXRvclxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZSA9PiB7XG4gICAgICAgIHJlamVjdChlKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG4gIHN0YXRpYyBnZXRUb2RvcyAoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGZldGNoKGAke2Vudi5CQUNLRU5EX1VSTH0vdG9kb3NgLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbihyID0+IHIuanNvbigpKVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgcmVzb2x2ZShyZXMudG9kb3MpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGUgPT4ge1xuICAgICAgICByZWplY3QoZSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuICBzdGF0aWMgZ2V0Sm9rZXMgKGFjY2Vzcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBcbiAgICAgIGZldGNoKGAke2Vudi5CQUNLRU5EX1VSTH0vQkFDS0VORF9VUkwvam9rZXMvY2VsZWJyaXR5YCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzcy50b2tlbn1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbihyID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gci5qc29uKClcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIHJlc29sdmUoe2pva2VzOiByZXN9KVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlID0+IHtcbiAgICAgICAgcmVqZWN0KGUpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9kb3NBcGlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwaS90b2Rvc0FwaS5qcyIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5jb25zdCBPdGhlciA9IHN0eWxlZC5oMmAke3tcbiAgY29sb3I6ICdncmVlbicsXG4gIGZvbnRTaXplOiAnNDBweCcsXG4gIGZvbnRGYW1pbHk6ICdPcGVuIFNhbnMnLFxuICAnPiBhJzoge1xuICAgIGZvbnRTaXplOiAnMThweCdcbiAgfVxufX1gXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCkoIHByb3BzID0+IHtcbiAgY29uc3Qge3RpdGxlfSA9IHByb3BzXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkZXIgey4uLnByb3BzfS8+XG4gICAgICA8T3RoZXI+e3RpdGxlfTwvT3RoZXI+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1BhZ2UuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBGaWVsZCwgcmVkdXhGb3JtLCByZXNldCB9IGZyb20gJ3JlZHV4LWZvcm0nXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7IGFkZFRvZG8gfSBmcm9tICcuLi8uLi9hY3Rpb25zL3RvZG9BY3Rpb25zJ1xuXG5cbmNsYXNzIFRvZG9JbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuaGFuZGxlRm9ybVN1Ym1pdCA9IHRoaXMuaGFuZGxlRm9ybVN1Ym1pdC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlRm9ybVN1Ym1pdCh7dG9kb30pe1xuICAgXG4gICBjb25zdCBuZXdUb2RvID0ge1xuICAgICB0ZXh0OiB0b2RvLFxuICAgICBfY3JlYXRvcjogdGhpcy5wcm9wcy51c2VyLnVzZXJfaWRcbiAgIH1cblxuICAgdGhpcy5wcm9wcy5hZGRUb2RvKG5ld1RvZG8pXG4gICB0aGlzLnByb3BzLnJlc2V0KCk7XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgaGFuZGxlU3VibWl0LCBwcmlzdGluZSwgcmVzZXQsIHN1Ym1pdHRpbmcgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJhdXRoLWZvcm1cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0KHRoaXMuaGFuZGxlRm9ybVN1Ym1pdCl9PlxuICAgICAgICAgICAgXG4gICAgICAgICAgPGxhYmVsPkFkZCBUb2RvOjwvbGFiZWw+XG4gICAgICAgICAgPEZpZWxkIG5hbWU9XCJ0b2RvXCIgY29tcG9uZW50PVwiaW5wdXRcIiB0eXBlPVwidGV4dFwiLz5cbiAgICAgICAgICBcbiAgICAgICAgICA8YnV0dG9uIGFjdGlvbj1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPkFkZCBUb2RvPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuLy9DT1JSRUNUIFdBWSBUTyBVU0UgUkVEVVggKyBSRURVWC1GT1JNIHY2IGFuZCBhYm92ZSBcbmNvbnN0IFRvZG9Gb3JtID0gcmVkdXhGb3JtKHsgIGZvcm06ICdzaW1wbGUnIH0pKFRvZG9JbnB1dCk7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgcmV0dXJue1xuICAgIHVzZXI6c3RhdGUudXNlclxuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGFkZFRvZG86IGJpbmRBY3Rpb25DcmVhdG9ycyhhZGRUb2RvLCBkaXNwYXRjaCksXG4gICAgcmVzZXQ6IGJpbmRBY3Rpb25DcmVhdG9ycyhyZXNldCwgZGlzcGF0Y2gpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVG9kb0Zvcm0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3RvZG8vdG9kb0lucHV0LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5jbGFzcyBUb2RvTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcblxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7dG9kb3N9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7dG9kb3MubWFwKHRvZG8gPT4gPGxpIGtleT17dG9kby5faWR9Pnt0b2RvLnRleHR9PC9saT4pfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHt0b2Rvc30pID0+ICh7dG9kb3N9KVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoVG9kb0xpc3QpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3RvZG8vdG9kb0xpc3QuanMiLCJjb25zdCBwcm9kID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIEJBQ0tFTkRfVVJMOiAhcHJvZCA/ICdodHRwczovL25hbWVsZXNzLXNjcnVibGFuZC0yODgzNS5oZXJva3VhcHAuY29tJyA6ICdodHRwOi8vbG9jYWxob3N0OjMwMDEnXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29uZmlnL2VudkNvbmZpZy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5leHBvcnQgZGVmYXVsdCAoUGFnZSkgPT4ge1xuICBjbGFzcyBQYWdlTGF5b3V0XzEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKGN0eCkge1xuXG4gICAgICAvLyBzZW5kIHByb3BzIHRvIHRoZSBwYXJlbnQgPiBjaGlsZCBjb250YWluZXJcbiAgICAgIGNvbnN0IHBhZ2VQcm9wcyA9IGF3YWl0IFBhZ2UuZ2V0SW5pdGlhbFByb3BzICYmIGF3YWl0IFBhZ2UuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucGFnZVByb3BzLFxuICAgICAgICBjdXJyZW50VXJsOiBjdHgucGF0aG5hbWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgdGhpcy5sb2dvdXQgPSB0aGlzLmxvZ291dC5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgbG9nb3V0IChldmUpIHtcbiAgICAgIGlmIChldmUua2V5ID09PSAnbG9nb3V0Jykge1xuICAgICAgICBSb3V0ZXIucHVzaChgLz9sb2dvdXQ9JHtldmUubmV3VmFsdWV9YClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc3RvcmFnZScsIHRoaXMubG9nb3V0LCBmYWxzZSlcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3RvcmFnZScsIHRoaXMubG9nb3V0LCBmYWxzZSlcbiAgICB9XG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8SGVhZGVyIHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICAgIDxQYWdlIHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvbm5lY3QoKShQYWdlTGF5b3V0XzEpXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ob2NzL3BhZ2VMYXlvdXRfMS5qcyJdLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        