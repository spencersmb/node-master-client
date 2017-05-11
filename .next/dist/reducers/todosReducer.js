'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.todosReducer = undefined;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _actionTypes = require('../actions/actionTypes');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

var _initialState = require('./initialState');

var _initialState2 = _interopRequireDefault(_initialState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var todosReducer = exports.todosReducer = function todosReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState2.default.todos;var action = arguments[1];

  switch (action.type) {

    case _actionTypes2.default.SAVE_TODO:
      return [].concat((0, _toConsumableArray3.default)(state), [action.todo]);

    case _actionTypes2.default.LOAD_TODOS_SUCCESS:
      return [].concat((0, _toConsumableArray3.default)(action.todos));

    default:
      return state;}
};