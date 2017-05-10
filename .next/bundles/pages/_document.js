
          window.__NEXT_REGISTER_PAGE('/_document', function() {
            var comp = module.exports =
webpackJsonp([1],{

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

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

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

var _document = __webpack_require__(601);

var _document2 = _interopRequireDefault(_document);

var _nextReduxWrapper = __webpack_require__(592);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _store = __webpack_require__(705);

var _styledComponents = __webpack_require__(812);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/EveryTuesday/Documents/github/learn-node-master/client/pages/_document.js?entry';


var MyDocument = function (_Document) {
  (0, _inherits3.default)(MyDocument, _Document);

  function MyDocument() {
    (0, _classCallCheck3.default)(this, MyDocument);

    return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyDocument, [{
    key: 'render',
    value: function render() {
      var sheet = new _styledComponents.ServerStyleSheet();
      var main = sheet.collectStyles(_react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }));
      var styleTags = sheet.getStyleElement();

      return _react2.default.createElement('html', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement('link', { async: true, href: '//fonts.googleapis.com/css?family=Open+Sans', rel: 'stylesheet', type: 'text/css', __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }), _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, 'My page'), styleTags), _react2.default.createElement('body', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, main, _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      })));
    }
  }]);

  return MyDocument;
}(_document2.default);

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore)(MyDocument);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/EveryTuesday/Documents/github/learn-node-master/client/pages/_document.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/EveryTuesday/Documents/github/learn-node-master/client/pages/_document.js"); } } })();
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
    })(module.exports.default || module.exports, "/_document")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

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

/***/ 826:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(318);


/***/ })

},[826]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hY3Rpb25zL2FjdGlvblR5cGVzLmpzPzcyOWEzNzUiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvaW5pdGlhbFN0YXRlLmpzPzcyOWEzNzUiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2RvY3VtZW50LmpzPzM1MzQ5ODkiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvYXV0aFJlZHVjZXIuanM/MzUzNDk4OSIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9qb2tlc1JlZHVjZXIuanM/MzUzNDk4OSIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy90b2Rvc1JlZHVjZXIuanM/MzUzNDk4OSIsIndlYnBhY2s6Ly8vLi9zdG9yZS5qcz8zNTM0OTg5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLElBQU07T0FFSjtRQUNBO2VBQ0E7Z0JBQ0E7aUJBQ0E7V0FDQTtzQkFDQTthQUNBO3NCQUNBO2VBQ0E7Z0JBR0Y7QUFiRTs7a0JBYWEsWTs7Ozs7Ozs7Ozs7Ozs7OztjQ1piO1NBQ0E7U0FDQTs7VUFLQTtBQUhJLEdBRkc7U0FNUDs7cUJBQ21CO0FBQWpCO0FBVkYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0Q2Qjs7OztBQUN4Qjs7OztBQUNFOztBQUNBOzs7Ozs7O0lBRUg7Ozs7Ozs7Ozs7OzZCQUVGO1VBQU0sUUFDTjtVQUFNLGFBQWEsOEJBQWU7O29CQUFEO3NCQUNqQztBQURpQztBQUFBLFFBQXBCO1VBQ1AsWUFBWSxNQUVsQjs7NkJBQ0U7O29CQUFBO3NCQUNFO0FBREY7QUFBQSx5QkFDRzs7b0JBQUQ7c0JBQ0U7QUFERjtBQUFBLGlEQUNRLE9BQU4sTUFBWSxNQUFLLCtDQUE4QyxLQUFJLGNBQWEsTUFBSztvQkFBckY7c0JBQ0E7QUFEQTswQkFDQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQ0MsWUFFSDs7b0JBQUE7c0JBQ0c7QUFESDtBQUFBLFNBRUUsc0JBQUM7O29CQUFEO3NCQUlQO0FBSk87QUFBQTs7Ozs7QUFPVjs7a0JBQXlCLGtEQUFXLFk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQjdCOzs7O0FBR1A7Ozs7OztBQUFPLElBQU0sb0NBQWMsdUJBQXVDO01BQUEsNEVBQTlCLHVCQUE4QjtNQUFBLG1CQUNoRTs7VUFBUSxPQUNOO1NBQUssc0JBQ0g7bUNBQXNCLElBQUk7eUJBQ1AsQ0FBQyxNQUV0QjtBQUZJLE9BREs7U0FHSixzQkFDSDttQ0FBc0IsSUFBSSxrQ0FDckIsT0FBTzt5QkFHZDtBQUZJLFFBRks7U0FJSixzQkFDSDthQUFPLHNCQUFlLElBQUksa0NBQ3JCLE9BRVA7U0FBSyxzQkFDSDttQ0FBc0IsSUFBSTt5QkFHNUI7QUFGSSxPQURLO0FBSVA7YUFFTDs7QUF0Qk0sRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7Ozs7QUFFUDs7Ozs7O0FBQU8sSUFBTSxzQ0FBZSx3QkFBd0M7TUFBQSw0RUFBL0IsdUJBQStCO01BQUEsbUJBQ2xFOztVQUFRLE9BQ047U0FBSyxzQkFDSDt3REFBVyxPQUNiO0FBQ0U7YUFFTDs7QUFQTSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTs7OztBQUVQOzs7Ozs7QUFBTyxJQUFNLHNDQUFlLHdCQUF3QztNQUFBLDRFQUEvQix1QkFBK0I7TUFBQSxtQkFFbEU7O1VBQVEsT0FFTjs7U0FBSyxzQkFDRDt3REFDTyxTQUNILE9BRVI7U0FBSyxzQkFDSDt3REFDSyxPQUdQOztBQUNFO2FBRUw7O0FBakJNLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRmdDOztBQUNoQzs7OztBQUNFOztBQUNBOztBQUNBOztBQUNBOztBQUlUOzs7O0FBQU8sSUFBTSxnQ0FBWSxxQkFBdUI7TUFBQSxtRkFDNUM7O0FBQ0Y7TUFBTTtBQUVKO0FBQ0E7QUFDQTtBQUlGO0FBUEUsR0FEZTs7TUFRYixNQUFNLGFBQVksSUFFdEI7O01BQUksT0FBTyxXQUFXLGVBQWUsUUFBUSxlQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUVBOztXQUFPLHdCQUNMLFVBQ0EsY0FDQSxpREFJSDtBQUVEOztTQUFPLHdCQUFZLFVBQVUsY0FDOUI7QUE1Qk0sRSIsImZpbGUiOiJidW5kbGVzL3BhZ2VzL19kb2N1bWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFjdGlvblR5cGVzID0ge1xuICBBREQ6ICdBREQnLFxuICBUSUNLOiAnVElDSycsXG4gIFRPR0dMRV9UT0RPOiAnVE9HR0xFX1RPRE8nLFxuICBUT0dHTEVfTE9HSU46ICdUT0dHTEVfTE9HSU4nLFxuICBMT0dJTl9TVUNDRVNTOiAnTE9HSU5fU1VDQ0VTUycsXG4gIExPR19PVVQ6ICdMT0dfT1VUJyxcbiAgTE9BRF9UT0RPU19TVUNDRVNTOiAnTE9BRF9UT0RPU19TVUNDRVNTJyxcbiAgU0FWRV9UT0RPOiAnU0FWRV9UT0RPJyxcbiAgTE9BRF9KT0tFU19TVUNDRVNTOiAnTE9BRF9KT0tFU19TVUNDRVNTJyxcbiAgR0VUX1BST0ZJTEU6ICdHRVRfUFJPRklMRScsXG4gIFJFRlJFU0hfVVNFUjogJ1JFRlJFU0hfVVNFUidcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWN0aW9uVHlwZXNcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FjdGlvbnMvYWN0aW9uVHlwZXMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGxhc3RVcGRhdGU6IDAsXG4gIGxpZ2h0OiBmYWxzZSxcbiAgY291bnQ6IDAsXG4gIHRvZG9zOiBbXG4gICAge1xuICAgICAgdGV4dDogJ2luaXRpYWwgc3RhdGUgdG9kbydcbiAgICB9XG4gIF0sXG4gIGpva2VzOiBbXSxcbiAgdXNlcjp7XG4gICAgaXNBdXRoZW50aWNhdGVkOiBmYWxzZVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1Y2Vycy9pbml0aWFsU3RhdGUuanMiLCJpbXBvcnQgRG9jdW1lbnQsIHsgSGVhZCwgTWFpbiwgTmV4dFNjcmlwdCB9IGZyb20gJ25leHQvZG9jdW1lbnQnXG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcidcbmltcG9ydCB7IGluaXRTdG9yZSB9IGZyb20gJy4uL3N0b3JlJ1xuaW1wb3J0IHsgU2VydmVyU3R5bGVTaGVldCB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5jbGFzcyBNeURvY3VtZW50IGV4dGVuZHMgRG9jdW1lbnQge1xuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHNoZWV0ID0gbmV3IFNlcnZlclN0eWxlU2hlZXQoKVxuICAgIGNvbnN0IG1haW4gPSBzaGVldC5jb2xsZWN0U3R5bGVzKDxNYWluIC8+KVxuICAgIGNvbnN0IHN0eWxlVGFncyA9IHNoZWV0LmdldFN0eWxlRWxlbWVudCgpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGh0bWw+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxsaW5rIGFzeW5jIGhyZWY9Jy8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnMnIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnPjwvbGluaz5cbiAgICAgICAgICA8dGl0bGU+TXkgcGFnZTwvdGl0bGU+XG4gICAgICAgICAge3N0eWxlVGFnc31cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8Ym9keT5cbiAgICAgICAgICB7bWFpbn1cbiAgICAgICAgICA8TmV4dFNjcmlwdCAvPlxuICAgICAgICA8L2JvZHk+XG4gICAgICA8L2h0bWw+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChpbml0U3RvcmUpKE15RG9jdW1lbnQpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9fZG9jdW1lbnQuanM/ZW50cnkiLCJpbXBvcnQgYWN0aW9uVHlwZXMgZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb25UeXBlcydcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi9pbml0aWFsU3RhdGUnXG5cbmV4cG9ydCBjb25zdCBhdXRoUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZS51c2VyLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgYWN0aW9uVHlwZXMuVE9HR0xFX0xPR0lOOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oIHt9LCBzdGF0ZSwge1xuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6ICFzdGF0ZS5pc0F1dGhlbnRpY2F0ZWRcbiAgICAgIH0pXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5MT0dJTl9TVUNDRVNTOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oIHt9LCBzdGF0ZSwge1xuICAgICAgICAuLi5hY3Rpb24udXNlcixcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkOiB0cnVlXG4gICAgICB9KVxuICAgIGNhc2UgYWN0aW9uVHlwZXMuUkVGUkVTSF9VU0VSOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oIHt9LCBzdGF0ZSwge1xuICAgICAgICAuLi5hY3Rpb24udXNlclxuICAgICAgfSlcbiAgICBjYXNlIGFjdGlvblR5cGVzLkxPR19PVVQ6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbigge30sIHN0YXRlLCB7XG4gICAgICAgIGlzQXV0aGVudGljYXRlZDogZmFsc2VcbiAgICAgIH0pXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1Y2Vycy9hdXRoUmVkdWNlci5qcyIsImltcG9ydCBhY3Rpb25UeXBlcyBmcm9tICcuLi9hY3Rpb25zL2FjdGlvblR5cGVzJ1xuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuL2luaXRpYWxTdGF0ZSdcbmV4cG9ydCBjb25zdCBqb2tlc1JlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUuam9rZXMsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBhY3Rpb25UeXBlcy5MT0FEX0pPS0VTX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gWy4uLmFjdGlvbi5qb2tlc11cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlZHVjZXJzL2pva2VzUmVkdWNlci5qcyIsImltcG9ydCBhY3Rpb25UeXBlcyBmcm9tICcuLi9hY3Rpb25zL2FjdGlvblR5cGVzJ1xuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuL2luaXRpYWxTdGF0ZSdcbmV4cG9ydCBjb25zdCB0b2Rvc1JlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUudG9kb3MsIGFjdGlvbikgPT4ge1xuICBcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIFxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0FWRV9UT0RPOlxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBhY3Rpb24udG9kb1xuICAgICAgICBdO1xuICAgIGNhc2UgYWN0aW9uVHlwZXMuTE9BRF9UT0RPU19TVUNDRVNTOlxuICAgICAgcmV0dXJuIFtcbiAgICAgICAgLi4uYWN0aW9uLnRvZG9zXG4gICAgICBdXG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlZHVjZXJzL3RvZG9zUmVkdWNlci5qcyIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tICdyZWR1eC10aHVuaydcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nXG5pbXBvcnQgeyB0b2Rvc1JlZHVjZXIgfSBmcm9tICcuL3JlZHVjZXJzL3RvZG9zUmVkdWNlcidcbmltcG9ydCB7IGF1dGhSZWR1Y2VyIH0gZnJvbSAnLi9yZWR1Y2Vycy9hdXRoUmVkdWNlcidcbmltcG9ydCB7IGpva2VzUmVkdWNlciB9IGZyb20gJy4vcmVkdWNlcnMvam9rZXNSZWR1Y2VyJ1xuaW1wb3J0IHsgcmVkdWNlciBhcyBmb3JtUmVkdWNlciB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuXG5cbmV4cG9ydCBjb25zdCBpbml0U3RvcmUgPSAoaW5pdGlhbFN0YXRlID0ge30pID0+IHtcbiAgICAvLyBtaXJyb3Igb2Ygc3RhdGUgZnJvbSBvcmlnaW5hbCBhcHBcbiAgY29uc3QgcmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgIHRvZG9zOiB0b2Rvc1JlZHVjZXIsXG4gICAgdXNlcjogYXV0aFJlZHVjZXIsICBcbiAgICBqb2tlczogam9rZXNSZWR1Y2VyLFxuICAgIGZvcm06IGZvcm1SZWR1Y2VyXG4gIH0pXG5cbiAgXG4gIGxldCBlbnYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnXG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIGVudiA9PT0gJ2RldmVsb3BtZW50JyApIHtcbiAgICAvLyBjb25zdCBjb21wb3NlRW5oYW5jZXJzID0gY29tcG9zZVdpdGhEZXZUb29scyh7XG4gICAgLy8gICAvLyBTcGVjaWZ5IGhlcmUgbmFtZSwgYWN0aW9uc0JsYWNrbGlzdCwgYWN0aW9uc0NyZWF0b3JzIGFuZCBvdGhlciBvcHRpb25zIGlmIG5lZWRlZFxuICAgIC8vICAgYWN0aW9uc0JsYWNrbGlzdDogWydUSUNLJ11cbiAgICAvLyB9KTtcblxuICAgIHJldHVybiBjcmVhdGVTdG9yZShcbiAgICAgIHJlZHVjZXJzLFxuICAgICAgaW5pdGlhbFN0YXRlLFxuICAgICAgY29tcG9zZVdpdGhEZXZUb29scyhcbiAgICAgICAgYXBwbHlNaWRkbGV3YXJlKHRodW5rTWlkZGxld2FyZSlcbiAgICAgIClcbiAgICApXG4gIH1cblxuICByZXR1cm4gY3JlYXRlU3RvcmUocmVkdWNlcnMsIGluaXRpYWxTdGF0ZSwgYXBwbHlNaWRkbGV3YXJlKHRodW5rTWlkZGxld2FyZSkpXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zdG9yZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        