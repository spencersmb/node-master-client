
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 292:
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

/***/ 293:
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
exports.jokesReducer = undefined;

var _toConsumableArray2 = __webpack_require__(59);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _actionTypes = __webpack_require__(292);

var _actionTypes2 = _interopRequireDefault(_actionTypes);

var _initialState = __webpack_require__(293);

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

/***/ 703:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.todosReducer = undefined;

var _toConsumableArray2 = __webpack_require__(59);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _actionTypes = __webpack_require__(292);

var _actionTypes2 = _interopRequireDefault(_actionTypes);

var _initialState = __webpack_require__(293);

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

/***/ 704:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = undefined;

var _redux = __webpack_require__(76);

var _reduxThunk = __webpack_require__(804);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxDevtoolsExtension = __webpack_require__(737);

var _todosReducer = __webpack_require__(703);

var _jokesReducer = __webpack_require__(702);

var _reduxForm = __webpack_require__(772);

var _authReducer = __webpack_require__(849);

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

/***/ 829:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveTodo = exports.loadTodosSuccess = exports.getTodos = exports.addTodo = undefined;

var _actionTypes = __webpack_require__(292);

var _actionTypes2 = _interopRequireDefault(_actionTypes);

var _todosApi = __webpack_require__(842);

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

/***/ 830:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(86);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(77);

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

var _taggedTemplateLiteral2 = __webpack_require__(834);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _defineProperty2 = __webpack_require__(833);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__(117);

var _extends3 = _interopRequireDefault(_extends2);

var _keys = __webpack_require__(323);

var _keys2 = _interopRequireDefault(_keys);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(76);

var _store = __webpack_require__(704);

var _todoActions = __webpack_require__(829);

var _nextReduxWrapper = __webpack_require__(592);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _todoList = __webpack_require__(846);

var _todoList2 = _interopRequireDefault(_todoList);

var _styledComponents = __webpack_require__(811);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _todoInput = __webpack_require__(845);

var _todoInput2 = _interopRequireDefault(_todoInput);

var _Page = __webpack_require__(844);

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

      var qs = __webpack_require__(106)
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

/***/ 842:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(828);

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = __webpack_require__(45);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(17);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _envConfig = __webpack_require__(847);

var _envConfig2 = _interopRequireDefault(_envConfig);

var _isomorphicUnfetch = __webpack_require__(840);

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

/***/ 843:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(841);

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

/***/ 844:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(117);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(56);

var _Header = __webpack_require__(843);

var _Header2 = _interopRequireDefault(_Header);

var _styledComponents = __webpack_require__(811);

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

/***/ 845:
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

var _reduxForm = __webpack_require__(772);

var _redux = __webpack_require__(76);

var _todoActions = __webpack_require__(829);

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

/***/ 847:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var prod = "development" === 'production';

exports.default = {
  BACKEND_URL: prod ? 'https://nameless-scrubland-28835.herokuapp.com' : 'http://localhost:3001'
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/EveryTuesday/Documents/github/learn-node-master/client/config/env-config.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/EveryTuesday/Documents/github/learn-node-master/client/config/env-config.js"); } } })();

/***/ }),

/***/ 848:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(830);


/***/ }),

/***/ 849:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authReducer = undefined;

var _extends2 = __webpack_require__(117);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(115);

var _assign2 = _interopRequireDefault(_assign);

var _actionTypes = __webpack_require__(292);

var _actionTypes2 = _interopRequireDefault(_actionTypes);

var _initialState = __webpack_require__(293);

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

/***/ })

},[848]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hY3Rpb25zL2FjdGlvblR5cGVzLmpzPzA2MmM2YjEiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvaW5pdGlhbFN0YXRlLmpzPzA2MmM2YjEiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvam9rZXNSZWR1Y2VyLmpzPzA2MmM2YjEiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvdG9kb3NSZWR1Y2VyLmpzPzA2MmM2YjEiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUuanM/MDYyYzZiMSIsIndlYnBhY2s6Ly8vLi9hY3Rpb25zL3RvZG9BY3Rpb25zLmpzPzA2MmM2YjEiLCJ3ZWJwYWNrOi8vLy4vcGFnZXM/MDYyYzZiMSIsIndlYnBhY2s6Ly8vLi9hcGkvdG9kb3NBcGkuanM/MDYyYzZiMSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcz8wNjJjNmIxIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUGFnZS5qcz8wNjJjNmIxIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdG9kby90b2RvSW5wdXQuanM/YTU0YzMxNCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RvZG8vdG9kb0xpc3QuanM/YTU0YzMxNCIsIndlYnBhY2s6Ly8vLi9jb25maWcvZW52LWNvbmZpZy5qcz9hNTRjMzE0Iiwid2VicGFjazovLy8uL3JlZHVjZXJzL2F1dGhSZWR1Y2VyLmpzP2E1NGMzMTQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTTtPQUVKO1FBQ0E7ZUFDQTtnQkFDQTtpQkFDQTtXQUNBO3NCQUNBO2FBQ0E7c0JBQ0E7ZUFDQTtnQkFHRjtBQWJFOztrQkFhYSxZOzs7Ozs7Ozs7Ozs7Ozs7O2NDWmI7U0FDQTtTQUNBOztVQUtBO0FBSEksR0FGRztTQU1QOztxQkFDbUI7QUFBakI7QUFWRixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNESzs7OztBQUVQOzs7Ozs7QUFBTyxJQUFNLHNDQUFlLHdCQUF3QztNQUFBLDRF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LFU7Ozs7Ozs7Ozs7Ozs7OztBQ3hCeEMsSUFBTSxPQUFPLGFBQVksS0FFekI7OztlQUNlLE9BQU8sbURBQW1EO0FBQXZFLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hLOzs7O0FBR1A7Ozs7OztBQUFPLElBQU0sb0NBQWMsdUJBQXVDO01BQUEsNEVBQTlCLHVCQUE4QjtNQUFBLG1CQUNoRTs7VUFBUSxPQUNOO1NBQUssc0JBQ0g7bUNBQXNCLElBQUk7eUJBQ1AsQ0FBQyxNQUV0QjtBQUZJLE9BREs7U0FHSixzQkFDSDttQ0FBc0IsSUFBSSxrQ0FDckIsT0FBTzt5QkFHZDtBQUZJLFFBRks7U0FJSixzQkFDSDthQUFPLHNCQUFlLElBQUksa0NBQ3JCLE9BRVA7U0FBSyxzQkFDSDttQ0FBc0IsSUFBSTt5QkFHNUI7QUFGSSxPQURLO0FBSVA7YUFFTDs7QUF0Qk0sRSIsImZpbGUiOiJidW5kbGVzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYWN0aW9uVHlwZXMgPSB7XG4gIEFERDogJ0FERCcsXG4gIFRJQ0s6ICdUSUNLJyxcbiAgVE9HR0xFX1RPRE86ICdUT0dHTEVfVE9ETycsXG4gIFRPR0dMRV9MT0dJTjogJ1RPR0dMRV9MT0dJTicsXG4gIExPR0lOX1NVQ0NFU1M6ICdMT0dJTl9TVUNDRVNTJyxcbiAgTE9HX09VVDogJ0xPR19PVVQnLFxuICBMT0FEX1RPRE9TX1NVQ0NFU1M6ICdMT0FEX1RPRE9TX1NVQ0NFU1MnLFxuICBTQVZFX1RPRE86ICdTQVZFX1RPRE8nLFxuICBMT0FEX0pPS0VTX1NVQ0NFU1M6ICdMT0FEX0pPS0VTX1NVQ0NFU1MnLFxuICBHRVRfUFJPRklMRTogJ0dFVF9QUk9GSUxFJyxcbiAgUkVGUkVTSF9VU0VSOiAnUkVGUkVTSF9VU0VSJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBhY3Rpb25UeXBlc1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYWN0aW9ucy9hY3Rpb25UeXBlcy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbGFzdFVwZGF0ZTogMCxcbiAgbGlnaHQ6IGZhbHNlLFxuICBjb3VudDogMCxcbiAgdG9kb3M6IFtcbiAgICB7XG4gICAgICB0ZXh0OiAnaW5pdGlhbCBzdGF0ZSB0b2RvJ1xuICAgIH1cbiAgXSxcbiAgam9rZXM6IFtdLFxuICB1c2VyOntcbiAgICBpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlZHVjZXJzL2luaXRpYWxTdGF0ZS5qcyIsImltcG9ydCBhY3Rpb25UeXBlcyBmcm9tICcuLi9hY3Rpb25zL2FjdGlvblR5cGVzJ1xuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuL2luaXRpYWxTdGF0ZSdcbmV4cG9ydCBjb25zdCBqb2tlc1JlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUuam9rZXMsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBhY3Rpb25UeXBlcy5MT0FEX0pPS0VTX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gWy4uLmFjdGlvbi5qb2tlc11cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlZHVjZXJzL2pva2VzUmVkdWNlci5qcyIsImltcG9ydCBhY3Rpb25UeXBlcyBmcm9tICcuLi9hY3Rpb25zL2FjdGlvblR5cGVzJ1xuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuL2luaXRpYWxTdGF0ZSdcblxuZXhwb3J0IGNvbnN0IHRvZG9zUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZS50b2RvcywgYWN0aW9uKSA9PiB7XG4gIFxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TQVZFX1RPRE86XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIGFjdGlvbi50b2RvXG4gICAgICAgIF07XG4gICAgY2FzZSBhY3Rpb25UeXBlcy5MT0FEX1RPRE9TX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gW1xuICAgICAgICAuLi5hY3Rpb24udG9kb3NcbiAgICAgIF1cblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdWNlcnMvdG9kb3NSZWR1Y2VyLmpzIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXRodW5rJ1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbidcbmltcG9ydCB7IHRvZG9zUmVkdWNlciB9IGZyb20gJy4vcmVkdWNlcnMvdG9kb3NSZWR1Y2VyJ1xuaW1wb3J0IHsgam9rZXNSZWR1Y2VyIH0gZnJvbSAnLi9yZWR1Y2Vycy9qb2tlc1JlZHVjZXInXG5pbXBvcnQgeyByZWR1Y2VyIGFzIGZvcm1SZWR1Y2VyIH0gZnJvbSAncmVkdXgtZm9ybSdcbmltcG9ydCB7IGF1dGhSZWR1Y2VyIH0gZnJvbSAnLi9yZWR1Y2Vycy9hdXRoUmVkdWNlcidcblxuXG5leHBvcnQgY29uc3QgaW5pdFN0b3JlID0gKGluaXRpYWxTdGF0ZSA9IHt9KSA9PiB7XG4gICAgLy8gbWlycm9yIG9mIHN0YXRlIGZyb20gb3JpZ2luYWwgYXBwXG4gIGNvbnN0IHJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICB0b2RvczogdG9kb3NSZWR1Y2VyLFxuICAgIHVzZXI6IGF1dGhSZWR1Y2VyLCAgXG4gICAgam9rZXM6IGpva2VzUmVkdWNlcixcbiAgICBmb3JtOiBmb3JtUmVkdWNlclxuICB9KVxuXG4gIFxuICBsZXQgZW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50J1xuXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiBlbnYgPT09ICdkZXZlbG9wbWVudCcgKSB7XG4gICAgLy8gY29uc3QgY29tcG9zZUVuaGFuY2VycyA9IGNvbXBvc2VXaXRoRGV2VG9vbHMoe1xuICAgIC8vICAgLy8gU3BlY2lmeSBoZXJlIG5hbWUsIGFjdGlvbnNCbGFja2xpc3QsIGFjdGlvbnNDcmVhdG9ycyBhbmQgb3RoZXIgb3B0aW9ucyBpZiBuZWVkZWRcbiAgICAvLyAgIGFjdGlvbnNCbGFja2xpc3Q6IFsnVElDSyddXG4gICAgLy8gfSk7XG5cbiAgICByZXR1cm4gY3JlYXRlU3RvcmUoXG4gICAgICByZWR1Y2VycyxcbiAgICAgIGluaXRpYWxTdGF0ZSxcbiAgICAgIGNvbXBvc2VXaXRoRGV2VG9vbHMoXG4gICAgICAgIGFwcGx5TWlkZGxld2FyZSh0aHVua01pZGRsZXdhcmUpXG4gICAgICApXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKHJlZHVjZXJzLCBpbml0aWFsU3RhdGUsIGFwcGx5TWlkZGxld2FyZSh0aHVua01pZGRsZXdhcmUpKVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3RvcmUuanMiLCJpbXBvcnQgYWN0aW9uVHlwZXMgZnJvbSAnLi9hY3Rpb25UeXBlcydcbmltcG9ydCB0b2Rvc0FwaSBmcm9tICcuLi9hcGkvdG9kb3NBcGknXG5cbmV4cG9ydCBjb25zdCBhZGRUb2RvID0gKHRvZG8pID0+IGRpc3BhdGNoID0+IHtcbiAgcmV0dXJuIHRvZG9zQXBpLmFkZFRvZG8odG9kbykudGhlbihyZXMgPT4ge1xuICAgIGRpc3BhdGNoKHNhdmVUb2RvKHJlcykpXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBnZXRUb2RvcyA9ICgpID0+IGRpc3BhdGNoID0+IHtcbiAgcmV0dXJuIHRvZG9zQXBpLmdldFRvZG9zKCkudGhlbih0b2RvcyA9PiB7XG4gICAgZGlzcGF0Y2gobG9hZFRvZG9zU3VjY2Vzcyh0b2RvcykpXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBsb2FkVG9kb3NTdWNjZXNzID0gdG9kb3MgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IGFjdGlvblR5cGVzLkxPQURfVE9ET1NfU1VDQ0VTUyxcbiAgICB0b2Rvc1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzYXZlVG9kbyA9IHRvZG8gPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IGFjdGlvblR5cGVzLlNBVkVfVE9ETyxcbiAgICB0b2RvXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FjdGlvbnMvdG9kb0FjdGlvbnMuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7IGluaXRTdG9yZSB9IGZyb20gJy4uL3N0b3JlJ1xuaW1wb3J0IHsgZ2V0VG9kb3MgfSBmcm9tICcuLi9hY3Rpb25zL3RvZG9BY3Rpb25zJ1xuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXG5pbXBvcnQgVG9kb0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy90b2RvL3RvZG9MaXN0J1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBUb2RvSW5wdXQgZnJvbSAnLi4vY29tcG9uZW50cy90b2RvL3RvZG9JbnB1dCdcbmltcG9ydCB7IGluamVjdEdsb2JhbCB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZSdcblxuLy8gY29uc3QgcnVsZTEgPSB7XG4vLyAgIGJhY2tncm91bmRDb2xvcjogJ2JsdWUnLFxuLy8gICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjUwcHgpJzoge1xuLy8gICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXG4vLyAgIH0sXG4vLyB9XG4vLyBjb25zdCBDb21wID0gc3R5bGVkLmRpdmBcbi8vICAgICAke3J1bGUxfVxuLy8gICAgIGBcbi8vIGNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxuLy8gICBjb2xvcjogcmVkO1xuLy8gICBmb250LXNpemU6IDUwcHg7XG5cbi8vICAgPiBhe1xuLy8gICAgIGZvbnQtc2l6ZToxOHB4O1xuLy8gICB9XG4vLyBgXG5cblxuY29uc3Qgc2l6ZXMgPSB7XG4gIHBob25lOiAzNzgsXG4gIHRhYmxldDogNzY4LFxuICBkZXNrdG9wOiA5OTIsXG4gIGdpYW50OiAxMTcwXG59XG5cbmNvbnN0IG1lZGlhID0gT2JqZWN0LmtleXMoc2l6ZXMpLnJlZHVjZSggKGZpbmFsTWVkaWEsIHNpemUpID0+IHtcblxuICByZXR1cm4ge1xuICAgIC4uLmZpbmFsTWVkaWEsXG4gICAgW3NpemVdOiBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgICByZXR1cm4gY3NzYFxuICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiAke3NpemVzW3NpemVdfXB4KSB7XG4gICAgICAgICAgJHtjc3MoLi4uYXJncyl9XG4gICAgICAgIH1cbiAgICAgIGBcbiAgICB9XG4gIH1cblxufSwge30gKVxuXG5jb25zdCBEaXYgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICR7bWVkaWEudGFibGV0YFxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgYH1cbmBcbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYCR7e1xuICBjb2xvcjogJ3JlZCcsXG4gIGZvbnRTaXplOiAnNTBweCcsXG4gIGZvbnRGYW1pbHk6ICdPcGVuIFNhbnMnLFxuICAnPiBhJzoge1xuICAgIGZvbnRTaXplOiAnMThweCdcbiAgfVxufX1gXG5cbmNsYXNzIENvdW50ZXJmaXJzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBzdG9yZSwgaXNTZXJ2ZXIgfSkge1xuICAgIGF3YWl0IHN0b3JlLmRpc3BhdGNoKGdldFRvZG9zKCkpXG4gICAgcmV0dXJuIHsgaXNTZXJ2ZXIgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7aXNBdXRoZW50aWNhdGVkfSA9IHRoaXMucHJvcHMudXNlclxuXG4gICAgY29uc3Qgc2hvd1RvZG9JbnB1dCA9ICgpID0+IHtcbiAgICAgIGlmKCF0aGlzLnByb3BzLnVzZXIuaXNBdXRoZW50aWNhdGVkKXtcbiAgICAgICAgcmV0dXJuIDxUb2RvSW5wdXQvPlxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8UGFnZSB0aXRsZT0nQm9pbGVycGxhdGUgQXBwJyBsaW5rVG89Jy8nIHsuLi50aGlzLnByb3BzfT5cbiAgICAgICAgICA8RGl2PlxuICAgICAgICAgICAgPFRpdGxlPlRvZG9MaXN0PC9UaXRsZT5cbiAgICAgICAgICAgIHtzaG93VG9kb0lucHV0KCl9XG4gICAgICAgICAgICA8VG9kb0xpc3QgLz5cbiAgICAgICAgICA8L0Rpdj5cbiAgICAgICAgPC9QYWdlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGdldFRvZG9zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoZ2V0VG9kb3MsIGRpc3BhdGNoKVxuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7dXNlcn0pID0+ICh7dXNlcn0pXG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChpbml0U3RvcmUsIG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShDb3VudGVyZmlyc3QpXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IGVudiBmcm9tICcuLi9jb25maWcvZW52LWNvbmZpZydcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5cbmNsYXNzIFRvZG9zQXBpIHtcbiAgXG4gIHN0YXRpYyBhZGRUb2RvICh0b2RvKSB7XG4gICAgLy8gc2luY2UgdGhpcyBhbHdheXMgaGFwcGVucyBvbiB0aGUgc2VydmVyIEkgY2FuIGp1c3QgZ2V0IHRoZSBqd3QgZnJvbSBsb2NhbGhvc3RcbiAgICBjb25zdCB0b2tlbiA9IGdldFRva2VuRnJvbUxvY2FsU3RvcmFnZSgpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBmZXRjaChgJHtlbnYuQkFDS0VORF9VUkx9L3RvZG9zYCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWBcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHQgICAgICAgIHRleHQ6dG9kby50ZXh0LFxuICAgICAgICAgIF9jcmVhdG9yOiB0b2RvLl9jcmVhdG9yXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgLnRoZW4ociA9PiByLmpzb24oKSlcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlID0+IHtcbiAgICAgICAgcmVqZWN0KGUpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbiAgc3RhdGljIGdldFRvZG9zICgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgZmV0Y2goYCR7ZW52LkJBQ0tFTkRfVVJMfS90b2Rvc2AsIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICByZXNvbHZlKHJlcy50b2RvcylcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZSA9PiB7XG4gICAgICAgIHJlamVjdChlKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG4gIHN0YXRpYyBnZXRKb2tlcyAoYWNjZXNzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIFxuICAgICAgZmV0Y2goYCR7ZW52LkJBQ0tFTkRfVVJMfS9CQUNLRU5EX1VSTC9qb2tlcy9jZWxlYnJpdHlgLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YWNjZXNzLnRva2VufWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC50aGVuKHIgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSByLmpzb24oKVxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgcmVzb2x2ZSh7am9rZXM6IHJlc30pXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGUgPT4ge1xuICAgICAgICByZWplY3QoZSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2Rvc0FwaVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBpL3RvZG9zQXBpLmpzIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuLy8gaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuLy8gRmlsZSBsaW5rcyBhcnJheSBiYXNlZCBvbiBpZiB1c2VyIGlzIGF1dGhlbnRpY2F0ZWRcbmNvbnN0IGdldEFsbG93ZWRMaW5rID0gaXNBdXRoZW50aWNhdGVkID0+IGxpbmtzXG4gICAgLmZpbHRlcihsID0+ICFsLmF1dGhSZXF1aXJlZCB8fCAobC5hdXRoUmVxdWlyZWQgJiYgaXNBdXRoZW50aWNhdGVkKSlcbiAgICAuZmlsdGVyKGwgPT4gIWlzQXV0aGVudGljYXRlZCB8fCAoaXNBdXRoZW50aWNhdGVkICYmICFsLmFub255bW91c09ubHkpKVxuXG5jb25zdCBsaW5rcyA9IFtcbiAgeyBocmVmOiAnLycsIHRleHQ6ICdIb21lJywgYW5vbnltb3VzT25seTogdHJ1ZSB9LFxuICB7IGhyZWY6ICcvb3RoZXInLCB0ZXh0OiAnT3RoZXInLCBhbm9ueW1vdXNPbmx5OiB0cnVlIH0sXG4gIHsgaHJlZjogJy9jZWxlYi1qb2tlcycsIHRleHQ6ICdUb3AgU2VjcmV0JywgYXV0aFJlcXVpcmVkOiB0cnVlIH1cbl1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZSA9PiBzdGF0ZSkoKHt1cmwsIHVzZXJ9KSA9PiB7XG4gIGNvbnN0IHBhdGggPSB1cmwucGF0aG5hbWVcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYXBwSGVhZGVyJz5cbiAgICAgIDxoMT5IZWFkZXIgQ29tcG9uZW50PC9oMT5cbiAgICAgIHtnZXRBbGxvd2VkTGluayh1c2VyLmlzQXV0aGVudGljYXRlZCkubWFwKGxpbmsgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxMaW5rIHByZWZldGNoIGtleT17bGluay5ocmVmfSBocmVmPXtsaW5rLmhyZWZ9PlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtwYXRoID09PSBsaW5rLmhyZWYgPyAnYWN0aXZlJyA6ICcnfSA+XG4gICAgICAgICAgICAgIHtsaW5rLnRleHR9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApXG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKVxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcidcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmNvbnN0IE90aGVyID0gc3R5bGVkLmgyYCR7e1xuICBjb2xvcjogJ2dyZWVuJyxcbiAgZm9udFNpemU6ICc0MHB4JyxcbiAgZm9udEZhbWlseTogJ09wZW4gU2FucycsXG4gICc+IGEnOiB7XG4gICAgZm9udFNpemU6ICcxOHB4J1xuICB9XG59fWBcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKSggcHJvcHMgPT4ge1xuICBjb25zdCB7dGl0bGV9ID0gcHJvcHNcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWRlciB7Li4ucHJvcHN9Lz5cbiAgICAgIDxPdGhlcj57dGl0bGV9PC9PdGhlcj5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvUGFnZS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IEZpZWxkLCByZWR1eEZvcm0sIHJlc2V0IH0gZnJvbSAncmVkdXgtZm9ybSdcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHsgYWRkVG9kbyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvdG9kb0FjdGlvbnMnXG5cblxuY2xhc3MgVG9kb0lucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5oYW5kbGVGb3JtU3VibWl0ID0gdGhpcy5oYW5kbGVGb3JtU3VibWl0LmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVGb3JtU3VibWl0KHt0b2RvfSl7XG4gICBcbiAgIGNvbnN0IG5ld1RvZG8gPSB7XG4gICAgIHRleHQ6IHRvZG8sXG4gICAgIF9jcmVhdG9yOiB0aGlzLnByb3BzLnVzZXIudXNlcl9pZFxuICAgfVxuXG4gICB0aGlzLnByb3BzLmFkZFRvZG8obmV3VG9kbylcbiAgIHRoaXMucHJvcHMucmVzZXQoKTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBoYW5kbGVTdWJtaXQsIHByaXN0aW5lLCByZXNldCwgc3VibWl0dGluZyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImF1dGgtZm9ybVwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQodGhpcy5oYW5kbGVGb3JtU3VibWl0KX0+XG4gICAgICAgICAgICBcbiAgICAgICAgICA8bGFiZWw+QWRkIFRvZG86PC9sYWJlbD5cbiAgICAgICAgICA8RmllbGQgbmFtZT1cInRvZG9cIiBjb21wb25lbnQ9XCJpbnB1dFwiIHR5cGU9XCJ0ZXh0XCIvPlxuICAgICAgICAgIFxuICAgICAgICAgIDxidXR0b24gYWN0aW9uPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+QWRkIFRvZG88L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICBcbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG4vL0NPUlJFQ1QgV0FZIFRPIFVTRSBSRURVWCArIFJFRFVYLUZPUk0gdjYgYW5kIGFib3ZlIFxuY29uc3QgVG9kb0Zvcm0gPSByZWR1eEZvcm0oeyAgZm9ybTogJ3NpbXBsZScgfSkoVG9kb0lucHV0KTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICByZXR1cm57XG4gICAgdXNlcjpzdGF0ZS51c2VyXG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgYWRkVG9kbzogYmluZEFjdGlvbkNyZWF0b3JzKGFkZFRvZG8sIGRpc3BhdGNoKSxcbiAgICByZXNldDogYmluZEFjdGlvbkNyZWF0b3JzKHJlc2V0LCBkaXNwYXRjaClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShUb2RvRm9ybSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvdG9kby90b2RvSW5wdXQuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmNsYXNzIFRvZG9MaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHt0b2Rvc30gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHt0b2Rvcy5tYXAodG9kbyA9PiA8bGkga2V5PXt0b2RvLl9pZH0+e3RvZG8udGV4dH08L2xpPil9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cblxuICAgIClcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoe3RvZG9zfSkgPT4gKHt0b2Rvc30pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShUb2RvTGlzdClcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvdG9kby90b2RvTGlzdC5qcyIsImNvbnN0IHByb2QgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgQkFDS0VORF9VUkw6IHByb2QgPyAnaHR0cHM6Ly9uYW1lbGVzcy1zY3J1YmxhbmQtMjg4MzUuaGVyb2t1YXBwLmNvbScgOiAnaHR0cDovL2xvY2FsaG9zdDozMDAxJ1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbmZpZy9lbnYtY29uZmlnLmpzIiwiaW1wb3J0IGFjdGlvblR5cGVzIGZyb20gJy4uL2FjdGlvbnMvYWN0aW9uVHlwZXMnXG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gJy4vaW5pdGlhbFN0YXRlJ1xuXG5leHBvcnQgY29uc3QgYXV0aFJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUudXNlciwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGFjdGlvblR5cGVzLlRPR0dMRV9MT0dJTjpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKCB7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkOiAhc3RhdGUuaXNBdXRoZW50aWNhdGVkXG4gICAgICB9KVxuICAgIGNhc2UgYWN0aW9uVHlwZXMuTE9HSU5fU1VDQ0VTUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKCB7fSwgc3RhdGUsIHtcbiAgICAgICAgLi4uYWN0aW9uLnVzZXIsXG4gICAgICAgIGlzQXV0aGVudGljYXRlZDogdHJ1ZVxuICAgICAgfSlcbiAgICBjYXNlIGFjdGlvblR5cGVzLlJFRlJFU0hfVVNFUjpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKCB7fSwgc3RhdGUsIHtcbiAgICAgICAgLi4uYWN0aW9uLnVzZXJcbiAgICAgIH0pXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5MT0dfT1VUOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oIHt9LCBzdGF0ZSwge1xuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlXG4gICAgICB9KVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdWNlcnMvYXV0aFJlZHVjZXIuanMiXSwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        