'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _envConfig = require('../env-config');

var _envConfig2 = _interopRequireDefault(_envConfig);

var _isomorphicUnfetch = require('isomorphic-unfetch');

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