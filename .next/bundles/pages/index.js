
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

var _authReducer = __webpack_require__(702);

var _jokesReducer = __webpack_require__(703);

var _reduxForm = __webpack_require__(773);

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

var _todosApi = __webpack_require__(843);

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

var _taggedTemplateLiteral2 = __webpack_require__(835);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _defineProperty2 = __webpack_require__(834);

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

/***/ 843:
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

var _isomorphicUnfetch = __webpack_require__(841);

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

/***/ 844:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(842);

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

exports.default = (0, _reactRedux.connect)(function (state) {
  return state;
})(function (_ref) {
  var url = _ref.url,
      user = _ref.user;

  var path = url.pathname;
  return _react2.default.createElement('div', { className: 'appHeader', __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, 'Header Component'), getAllowedLink(user.isAuthenticated).map(function (link) {
    return _react2.default.createElement(_link2.default, { prefetch: true, key: link.href, href: link.href, __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      }
    }, _react2.default.createElement('a', { className: path === link.href ? 'active' : '', __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      }
    }, link.text));
  }));
});

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/EveryTuesday/Documents/github/learn-node-master/client/components/Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/EveryTuesday/Documents/github/learn-node-master/client/components/Header.js"); } } })();

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

var _Header = __webpack_require__(844);

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
  BACKEND_URL: prod ? 'https://nameless-scrubland-28835.herokuapp.com' : 'http://localhost:3001'
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/EveryTuesday/Documents/github/learn-node-master/client/env-config.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/EveryTuesday/Documents/github/learn-node-master/client/env-config.js"); } } })();

/***/ }),

/***/ 849:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(831);


/***/ })

},[849]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hY3Rpb25zL2FjdGlvblR5cGVzLmpzP2FlNGYzMDgiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvaW5pdGlhbFN0YXRlLmpzP2FlNGYzMDgiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvYXV0aFJlZHVjZXIuanM/YWU0ZjMwOCIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9qb2tlc1JlZHVjZXIuanM/YWU0ZjMwOCIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy90b2Rvc1JlZHVjZXIuanM/YWU0ZjMwOCIsIndlYnBhY2s6Ly8vLi9zdG9yZS5qcz9hZTRmMzA4Iiwid2VicGFjazovLy8uL2FjdGlvbnMvdG9kb0FjdGlvbnMuanM/YWU0ZjMwOCIsIndlYnBhY2s6Ly8vLi9wYWdlcz9hZTRmMzA4Iiwid2VicGFjazovLy8uL2FwaS90b2Rvc0FwaS5qcz9hZTRmMzA4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyLmpzP2FlNGYzMDgiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QYWdlLmpzP2FlNGYzMDgiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90b2RvL3RvZG9JbnB1dC5qcz9hZTRmMzA4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdG9kby90b2RvTGlzdC5qcz9hZTRmMzA4Iiwid2VicGFjazovLy8uL2Vudi1jb25maWcuanM/YWU0ZjMwOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxJQUFNO09BRUo7UUFDQTtlQUNBO2dCQUNBO2lCQUNBO1dBQ0E7c0JBQ0E7YUFDQTtzQkFDQTtlQUNBO2dCQUdGO0FBYkU7O2tCQWFhLFk7Ozs7Ozs7Ozs7Ozs7Ozs7Y0NaYjtTQUNBO1NBQ0E7O1VBS0E7QUFISSxHQUZHO1NBTVA7O3FCQUNtQjtBQUFqQjtBQVZGLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNESzs7OztBQUdQOzs7Ozs7QUFBTyxJQUFNLG9DQUFjLHVCQUF1QztNQUFBLDRFQUE5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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRHJEOzs7O0FBQ0U7Ozs7Ozs7SUFFSDs7Ozs7Ozs7Ozs7d0NBR0g7Ozs2QkFFUztVQUNELFFBQVMsS0FBSyxNQUVyQjs7NkJBQ0U7O29CQUFBO3NCQUNFO0FBREY7QUFBQSx5QkFDRTs7b0JBQUE7c0JBQ0c7QUFESDtBQUFBLGVBQ1MsSUFBSTsrQkFBUSxzQkFBSSxLQUFLLEtBQUs7c0JBQWQ7d0JBQW9CO0FBQXBCO1NBQUEsT0FBeUI7QUFLbkQ7Ozs7O0VBaEJvQixnQkFBTTs7QUFtQjdCLElBQU0sa0JBQWtCO01BQUU7U0FBWSxFQUFDLE9BQUQ7QUFFdEM7O2tCQUFlLHlCQUFRLGlCQUFpQixVOzs7Ozs7Ozs7Ozs7Ozs7QUN4QnhDLElBQU0sT0FBTyxhQUFZLEtBRXpCOzs7ZUFDZSxPQUFPLG1EQUFtRDtBQUF2RSxFIiwiZmlsZSI6ImJ1bmRsZXMvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhY3Rpb25UeXBlcyA9IHtcbiAgQUREOiAnQUREJyxcbiAgVElDSzogJ1RJQ0snLFxuICBUT0dHTEVfVE9ETzogJ1RPR0dMRV9UT0RPJyxcbiAgVE9HR0xFX0xPR0lOOiAnVE9HR0xFX0xPR0lOJyxcbiAgTE9HSU5fU1VDQ0VTUzogJ0xPR0lOX1NVQ0NFU1MnLFxuICBMT0dfT1VUOiAnTE9HX09VVCcsXG4gIExPQURfVE9ET1NfU1VDQ0VTUzogJ0xPQURfVE9ET1NfU1VDQ0VTUycsXG4gIFNBVkVfVE9ETzogJ1NBVkVfVE9ETycsXG4gIExPQURfSk9LRVNfU1VDQ0VTUzogJ0xPQURfSk9LRVNfU1VDQ0VTUycsXG4gIEdFVF9QUk9GSUxFOiAnR0VUX1BST0ZJTEUnLFxuICBSRUZSRVNIX1VTRVI6ICdSRUZSRVNIX1VTRVInXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFjdGlvblR5cGVzXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hY3Rpb25zL2FjdGlvblR5cGVzLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBsYXN0VXBkYXRlOiAwLFxuICBsaWdodDogZmFsc2UsXG4gIGNvdW50OiAwLFxuICB0b2RvczogW1xuICAgIHtcbiAgICAgIHRleHQ6ICdpbml0aWFsIHN0YXRlIHRvZG8nXG4gICAgfVxuICBdLFxuICBqb2tlczogW10sXG4gIHVzZXI6e1xuICAgIGlzQXV0aGVudGljYXRlZDogZmFsc2VcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdWNlcnMvaW5pdGlhbFN0YXRlLmpzIiwiaW1wb3J0IGFjdGlvblR5cGVzIGZyb20gJy4uL2FjdGlvbnMvYWN0aW9uVHlwZXMnXG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gJy4vaW5pdGlhbFN0YXRlJ1xuXG5leHBvcnQgY29uc3QgYXV0aFJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUudXNlciwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGFjdGlvblR5cGVzLlRPR0dMRV9MT0dJTjpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKCB7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkOiAhc3RhdGUuaXNBdXRoZW50aWNhdGVkXG4gICAgICB9KVxuICAgIGNhc2UgYWN0aW9uVHlwZXMuTE9HSU5fU1VDQ0VTUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKCB7fSwgc3RhdGUsIHtcbiAgICAgICAgLi4uYWN0aW9uLnVzZXIsXG4gICAgICAgIGlzQXV0aGVudGljYXRlZDogdHJ1ZVxuICAgICAgfSlcbiAgICBjYXNlIGFjdGlvblR5cGVzLlJFRlJFU0hfVVNFUjpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKCB7fSwgc3RhdGUsIHtcbiAgICAgICAgLi4uYWN0aW9uLnVzZXJcbiAgICAgIH0pXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5MT0dfT1VUOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oIHt9LCBzdGF0ZSwge1xuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlXG4gICAgICB9KVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdWNlcnMvYXV0aFJlZHVjZXIuanMiLCJpbXBvcnQgYWN0aW9uVHlwZXMgZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb25UeXBlcydcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi9pbml0aWFsU3RhdGUnXG5leHBvcnQgY29uc3Qgam9rZXNSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLmpva2VzLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgYWN0aW9uVHlwZXMuTE9BRF9KT0tFU19TVUNDRVNTOlxuICAgICAgcmV0dXJuIFsuLi5hY3Rpb24uam9rZXNdXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1Y2Vycy9qb2tlc1JlZHVjZXIuanMiLCJpbXBvcnQgYWN0aW9uVHlwZXMgZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb25UeXBlcydcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi9pbml0aWFsU3RhdGUnXG5leHBvcnQgY29uc3QgdG9kb3NSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLnRvZG9zLCBhY3Rpb24pID0+IHtcbiAgXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNBVkVfVE9ETzpcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgYWN0aW9uLnRvZG9cbiAgICAgICAgXTtcbiAgICBjYXNlIGFjdGlvblR5cGVzLkxPQURfVE9ET1NfU1VDQ0VTUzpcbiAgICAgIHJldHVybiBbXG4gICAgICAgIC4uLmFjdGlvbi50b2Rvc1xuICAgICAgXVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1Y2Vycy90b2Rvc1JlZHVjZXIuanMiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJ1xuaW1wb3J0IHsgdG9kb3NSZWR1Y2VyIH0gZnJvbSAnLi9yZWR1Y2Vycy90b2Rvc1JlZHVjZXInXG5pbXBvcnQgeyBhdXRoUmVkdWNlciB9IGZyb20gJy4vcmVkdWNlcnMvYXV0aFJlZHVjZXInXG5pbXBvcnQgeyBqb2tlc1JlZHVjZXIgfSBmcm9tICcuL3JlZHVjZXJzL2pva2VzUmVkdWNlcidcbmltcG9ydCB7IHJlZHVjZXIgYXMgZm9ybVJlZHVjZXIgfSBmcm9tICdyZWR1eC1mb3JtJztcblxuXG5leHBvcnQgY29uc3QgaW5pdFN0b3JlID0gKGluaXRpYWxTdGF0ZSA9IHt9KSA9PiB7XG4gICAgLy8gbWlycm9yIG9mIHN0YXRlIGZyb20gb3JpZ2luYWwgYXBwXG4gIGNvbnN0IHJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICB0b2RvczogdG9kb3NSZWR1Y2VyLFxuICAgIHVzZXI6IGF1dGhSZWR1Y2VyLCAgXG4gICAgam9rZXM6IGpva2VzUmVkdWNlcixcbiAgICBmb3JtOiBmb3JtUmVkdWNlclxuICB9KVxuXG4gIFxuICBsZXQgZW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50J1xuXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiBlbnYgPT09ICdkZXZlbG9wbWVudCcgKSB7XG4gICAgLy8gY29uc3QgY29tcG9zZUVuaGFuY2VycyA9IGNvbXBvc2VXaXRoRGV2VG9vbHMoe1xuICAgIC8vICAgLy8gU3BlY2lmeSBoZXJlIG5hbWUsIGFjdGlvbnNCbGFja2xpc3QsIGFjdGlvbnNDcmVhdG9ycyBhbmQgb3RoZXIgb3B0aW9ucyBpZiBuZWVkZWRcbiAgICAvLyAgIGFjdGlvbnNCbGFja2xpc3Q6IFsnVElDSyddXG4gICAgLy8gfSk7XG5cbiAgICByZXR1cm4gY3JlYXRlU3RvcmUoXG4gICAgICByZWR1Y2VycyxcbiAgICAgIGluaXRpYWxTdGF0ZSxcbiAgICAgIGNvbXBvc2VXaXRoRGV2VG9vbHMoXG4gICAgICAgIGFwcGx5TWlkZGxld2FyZSh0aHVua01pZGRsZXdhcmUpXG4gICAgICApXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKHJlZHVjZXJzLCBpbml0aWFsU3RhdGUsIGFwcGx5TWlkZGxld2FyZSh0aHVua01pZGRsZXdhcmUpKVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3RvcmUuanMiLCJpbXBvcnQgYWN0aW9uVHlwZXMgZnJvbSAnLi9hY3Rpb25UeXBlcydcbmltcG9ydCB0b2Rvc0FwaSBmcm9tICcuLi9hcGkvdG9kb3NBcGknXG5cbmV4cG9ydCBjb25zdCBhZGRUb2RvID0gKHRvZG8pID0+IGRpc3BhdGNoID0+IHtcbiAgcmV0dXJuIHRvZG9zQXBpLmFkZFRvZG8odG9kbykudGhlbihyZXMgPT4ge1xuICAgIGRpc3BhdGNoKHNhdmVUb2RvKHJlcykpXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBnZXRUb2RvcyA9ICgpID0+IGRpc3BhdGNoID0+IHtcbiAgcmV0dXJuIHRvZG9zQXBpLmdldFRvZG9zKCkudGhlbih0b2RvcyA9PiB7XG4gICAgZGlzcGF0Y2gobG9hZFRvZG9zU3VjY2Vzcyh0b2RvcykpXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBsb2FkVG9kb3NTdWNjZXNzID0gdG9kb3MgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IGFjdGlvblR5cGVzLkxPQURfVE9ET1NfU1VDQ0VTUyxcbiAgICB0b2Rvc1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzYXZlVG9kbyA9IHRvZG8gPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IGFjdGlvblR5cGVzLlNBVkVfVE9ETyxcbiAgICB0b2RvXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FjdGlvbnMvdG9kb0FjdGlvbnMuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7IGluaXRTdG9yZSB9IGZyb20gJy4uL3N0b3JlJ1xuaW1wb3J0IHsgZ2V0VG9kb3MgfSBmcm9tICcuLi9hY3Rpb25zL3RvZG9BY3Rpb25zJ1xuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXG5pbXBvcnQgVG9kb0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy90b2RvL3RvZG9MaXN0J1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBUb2RvSW5wdXQgZnJvbSAnLi4vY29tcG9uZW50cy90b2RvL3RvZG9JbnB1dCdcbmltcG9ydCB7IGluamVjdEdsb2JhbCB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZSdcblxuLy8gY29uc3QgcnVsZTEgPSB7XG4vLyAgIGJhY2tncm91bmRDb2xvcjogJ2JsdWUnLFxuLy8gICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjUwcHgpJzoge1xuLy8gICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXG4vLyAgIH0sXG4vLyB9XG4vLyBjb25zdCBDb21wID0gc3R5bGVkLmRpdmBcbi8vICAgICAke3J1bGUxfVxuLy8gICAgIGBcbi8vIGNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxuLy8gICBjb2xvcjogcmVkO1xuLy8gICBmb250LXNpemU6IDUwcHg7XG5cbi8vICAgPiBhe1xuLy8gICAgIGZvbnQtc2l6ZToxOHB4O1xuLy8gICB9XG4vLyBgXG5cblxuY29uc3Qgc2l6ZXMgPSB7XG4gIHBob25lOiAzNzgsXG4gIHRhYmxldDogNzY4LFxuICBkZXNrdG9wOiA5OTIsXG4gIGdpYW50OiAxMTcwXG59XG5cbmNvbnN0IG1lZGlhID0gT2JqZWN0LmtleXMoc2l6ZXMpLnJlZHVjZSggKGZpbmFsTWVkaWEsIHNpemUpID0+IHtcblxuICByZXR1cm4ge1xuICAgIC4uLmZpbmFsTWVkaWEsXG4gICAgW3NpemVdOiBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgICByZXR1cm4gY3NzYFxuICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiAke3NpemVzW3NpemVdfXB4KSB7XG4gICAgICAgICAgJHtjc3MoLi4uYXJncyl9XG4gICAgICAgIH1cbiAgICAgIGBcbiAgICB9XG4gIH1cblxufSwge30gKVxuXG5jb25zdCBEaXYgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICR7bWVkaWEudGFibGV0YFxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgYH1cbmBcbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYCR7e1xuICBjb2xvcjogJ3JlZCcsXG4gIGZvbnRTaXplOiAnNTBweCcsXG4gIGZvbnRGYW1pbHk6ICdPcGVuIFNhbnMnLFxuICAnPiBhJzoge1xuICAgIGZvbnRTaXplOiAnMThweCdcbiAgfVxufX1gXG5cbmNsYXNzIENvdW50ZXJmaXJzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBzdG9yZSwgaXNTZXJ2ZXIgfSkge1xuICAgIGF3YWl0IHN0b3JlLmRpc3BhdGNoKGdldFRvZG9zKCkpXG4gICAgcmV0dXJuIHsgaXNTZXJ2ZXIgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7aXNBdXRoZW50aWNhdGVkfSA9IHRoaXMucHJvcHMudXNlclxuXG4gICAgY29uc3Qgc2hvd1RvZG9JbnB1dCA9ICgpID0+IHtcbiAgICAgIGlmKCF0aGlzLnByb3BzLnVzZXIuaXNBdXRoZW50aWNhdGVkKXtcbiAgICAgICAgcmV0dXJuIDxUb2RvSW5wdXQvPlxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8UGFnZSB0aXRsZT0nQm9pbGVycGxhdGUgQXBwJyBsaW5rVG89Jy8nIHsuLi50aGlzLnByb3BzfT5cbiAgICAgICAgICA8RGl2PlxuICAgICAgICAgICAgPFRpdGxlPlRvZG9MaXN0PC9UaXRsZT5cbiAgICAgICAgICAgIHtzaG93VG9kb0lucHV0KCl9XG4gICAgICAgICAgICA8VG9kb0xpc3QgLz5cbiAgICAgICAgICA8L0Rpdj5cbiAgICAgICAgPC9QYWdlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGdldFRvZG9zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoZ2V0VG9kb3MsIGRpc3BhdGNoKVxuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7dXNlcn0pID0+ICh7dXNlcn0pXG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChpbml0U3RvcmUsIG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShDb3VudGVyZmlyc3QpXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IGVudiBmcm9tICcuLi9lbnYtY29uZmlnJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcblxuY2xhc3MgVG9kb3NBcGkge1xuICBcbiAgc3RhdGljIGFkZFRvZG8gKHRvZG8pIHtcbiAgICAvLyBzaW5jZSB0aGlzIGFsd2F5cyBoYXBwZW5zIG9uIHRoZSBzZXJ2ZXIgSSBjYW4ganVzdCBnZXQgdGhlIGp3dCBmcm9tIGxvY2FsaG9zdFxuICAgIGNvbnN0IHRva2VuID0gZ2V0VG9rZW5Gcm9tTG9jYWxTdG9yYWdlKCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGZldGNoKGAke2Vudi5CQUNLRU5EX1VSTH0vdG9kb3NgLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdCAgICAgICAgdGV4dDp0b2RvLnRleHQsXG4gICAgICAgICAgX2NyZWF0b3I6IHRvZG8uX2NyZWF0b3JcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAudGhlbihyID0+IHIuanNvbigpKVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGUgPT4ge1xuICAgICAgICByZWplY3QoZSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuICBzdGF0aWMgZ2V0VG9kb3MgKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBmZXRjaChgJHtlbnYuQkFDS0VORF9VUkx9L3RvZG9zYCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4ociA9PiByLmpzb24oKSlcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIHJlc29sdmUocmVzLnRvZG9zKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlID0+IHtcbiAgICAgICAgcmVqZWN0KGUpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbiAgc3RhdGljIGdldEpva2VzIChhY2Nlc3MpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgXG4gICAgICBmZXRjaChgJHtlbnYuQkFDS0VORF9VUkx9L0JBQ0tFTkRfVVJML2pva2VzL2NlbGVicml0eWAsIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3MudG9rZW59YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4ociA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHIuanNvbigpXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgIH0pXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICByZXNvbHZlKHtqb2tlczogcmVzfSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZSA9PiB7XG4gICAgICAgIHJlamVjdChlKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9zQXBpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcGkvdG9kb3NBcGkuanMiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG4vLyBpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG4vLyBGaWxlIGxpbmtzIGFycmF5IGJhc2VkIG9uIGlmIHVzZXIgaXMgYXV0aGVudGljYXRlZFxuY29uc3QgZ2V0QWxsb3dlZExpbmsgPSBpc0F1dGhlbnRpY2F0ZWQgPT4gbGlua3NcbiAgICAuZmlsdGVyKGwgPT4gIWwuYXV0aFJlcXVpcmVkIHx8IChsLmF1dGhSZXF1aXJlZCAmJiBpc0F1dGhlbnRpY2F0ZWQpKVxuICAgIC5maWx0ZXIobCA9PiAhaXNBdXRoZW50aWNhdGVkIHx8IChpc0F1dGhlbnRpY2F0ZWQgJiYgIWwuYW5vbnltb3VzT25seSkpXG5cbmNvbnN0IGxpbmtzID0gW1xuICB7IGhyZWY6ICcvJywgdGV4dDogJ0hvbWUnLCBhbm9ueW1vdXNPbmx5OiB0cnVlIH0sXG4gIHsgaHJlZjogJy9vdGhlcicsIHRleHQ6ICdPdGhlcicsIGFub255bW91c09ubHk6IHRydWUgfSxcbiAgeyBocmVmOiAnL2NlbGViLWpva2VzJywgdGV4dDogJ1RvcCBTZWNyZXQnLCBhdXRoUmVxdWlyZWQ6IHRydWUgfVxuXVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlID0+IHN0YXRlKSgoe3VybCwgdXNlcn0pID0+IHtcbiAgY29uc3QgcGF0aCA9IHVybC5wYXRobmFtZVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdhcHBIZWFkZXInPlxuICAgICAgPGgxPkhlYWRlciBDb21wb25lbnQ8L2gxPlxuICAgICAge2dldEFsbG93ZWRMaW5rKHVzZXIuaXNBdXRoZW50aWNhdGVkKS5tYXAobGluayA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPExpbmsgcHJlZmV0Y2gga2V5PXtsaW5rLmhyZWZ9IGhyZWY9e2xpbmsuaHJlZn0+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e3BhdGggPT09IGxpbmsuaHJlZiA/ICdhY3RpdmUnIDogJyd9ID5cbiAgICAgICAgICAgICAge2xpbmsudGV4dH1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIClcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuY29uc3QgT3RoZXIgPSBzdHlsZWQuaDJgJHt7XG4gIGNvbG9yOiAnZ3JlZW4nLFxuICBmb250U2l6ZTogJzQwcHgnLFxuICBmb250RmFtaWx5OiAnT3BlbiBTYW5zJyxcbiAgJz4gYSc6IHtcbiAgICBmb250U2l6ZTogJzE4cHgnXG4gIH1cbn19YFxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgpKCBwcm9wcyA9PiB7XG4gIGNvbnN0IHt0aXRsZX0gPSBwcm9wc1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZGVyIHsuLi5wcm9wc30vPlxuICAgICAgPE90aGVyPnt0aXRsZX08L090aGVyPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9QYWdlLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgRmllbGQsIHJlZHV4Rm9ybSwgcmVzZXQgfSBmcm9tICdyZWR1eC1mb3JtJ1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgeyBhZGRUb2RvIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy90b2RvQWN0aW9ucydcblxuXG5jbGFzcyBUb2RvSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLmhhbmRsZUZvcm1TdWJtaXQgPSB0aGlzLmhhbmRsZUZvcm1TdWJtaXQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUZvcm1TdWJtaXQoe3RvZG99KXtcbiAgIFxuICAgY29uc3QgbmV3VG9kbyA9IHtcbiAgICAgdGV4dDogdG9kbyxcbiAgICAgX2NyZWF0b3I6IHRoaXMucHJvcHMudXNlci51c2VyX2lkXG4gICB9XG5cbiAgIHRoaXMucHJvcHMuYWRkVG9kbyhuZXdUb2RvKVxuICAgdGhpcy5wcm9wcy5yZXNldCgpO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IGhhbmRsZVN1Ym1pdCwgcHJpc3RpbmUsIHJlc2V0LCBzdWJtaXR0aW5nIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiYXV0aC1mb3JtXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdCh0aGlzLmhhbmRsZUZvcm1TdWJtaXQpfT5cbiAgICAgICAgICAgIFxuICAgICAgICAgIDxsYWJlbD5BZGQgVG9kbzo8L2xhYmVsPlxuICAgICAgICAgIDxGaWVsZCBuYW1lPVwidG9kb1wiIGNvbXBvbmVudD1cImlucHV0XCIgdHlwZT1cInRleHRcIi8+XG4gICAgICAgICAgXG4gICAgICAgICAgPGJ1dHRvbiBhY3Rpb249XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5BZGQgVG9kbzwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbi8vQ09SUkVDVCBXQVkgVE8gVVNFIFJFRFVYICsgUkVEVVgtRk9STSB2NiBhbmQgYWJvdmUgXG5jb25zdCBUb2RvRm9ybSA9IHJlZHV4Rm9ybSh7ICBmb3JtOiAnc2ltcGxlJyB9KShUb2RvSW5wdXQpO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gIHJldHVybntcbiAgICB1c2VyOnN0YXRlLnVzZXJcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBhZGRUb2RvOiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWRkVG9kbywgZGlzcGF0Y2gpLFxuICAgIHJlc2V0OiBiaW5kQWN0aW9uQ3JlYXRvcnMocmVzZXQsIGRpc3BhdGNoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFRvZG9Gb3JtKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy90b2RvL3RvZG9JbnB1dC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuY2xhc3MgVG9kb0xpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG5cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge3RvZG9zfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8dWw+XG4gICAgICAgICAge3RvZG9zLm1hcCh0b2RvID0+IDxsaSBrZXk9e3RvZG8uX2lkfT57dG9kby50ZXh0fTwvbGk+KX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuXG4gICAgKVxuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7dG9kb3N9KSA9PiAoe3RvZG9zfSlcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFRvZG9MaXN0KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy90b2RvL3RvZG9MaXN0LmpzIiwiY29uc3QgcHJvZCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcblxuZXhwb3J0IGRlZmF1bHQge1xuICBCQUNLRU5EX1VSTDogcHJvZCA/ICdodHRwczovL25hbWVsZXNzLXNjcnVibGFuZC0yODgzNS5oZXJva3VhcHAuY29tJyA6ICdodHRwOi8vbG9jYWxob3N0OjMwMDEnXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW52LWNvbmZpZy5qcyJdLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        