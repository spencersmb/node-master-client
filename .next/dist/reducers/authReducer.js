'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authReducer = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _actionTypes = require('../actions/actionTypes');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

var _initialState = require('./initialState');

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