'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveTodo = exports.loadTodosSuccess = exports.getTodos = exports.addTodo = undefined;

var _actionTypes = require('./actionTypes');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

var _todosApi = require('../api/todosApi');

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