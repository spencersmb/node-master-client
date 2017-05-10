webpackHotUpdate(5,{

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcGkvdG9kb3NBcGkuanM/MDc3OSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ087Ozs7QUFDQTs7Ozs7O0FBRlA7SUFJTTs7Ozs7Ozs0QkFFWSxNQUNkO0FBQ0E7VUFBTSxRQUNOO21DQUFtQixVQUFDLFNBQVMsUUFDM0I7eUNBQVMsb0JBQUk7a0JBRVg7OzRCQUVFO3VDQUVGO0FBSEU7O2tCQUlJLEtBQ0o7c0JBQVUsS0FBSztBQURoQixXQURLO0FBTE4sV0FVRCxLQUFLO2lCQUFLLEVBQUU7QUFYYixXQVlDLEtBQUssZUFDSjtrQkFDRDtBQWRELFdBZUMsTUFBTSxhQUNMO2lCQUNEO0FBQ0Y7QUFDRixPQXBCUTs7OzsrQkFzQlA7bUNBQW1CLFVBQUMsU0FBUyxRQUMzQjt5Q0FBUyxvQkFBSTtrQkFFWDs7NEJBQ2tCO0FBQWhCO0FBRkYsV0FLRCxLQUFLO2lCQUFLLEVBQUU7QUFOYixXQU9DLEtBQUssZUFDSjtrQkFBUSxJQUNUO0FBVEQsV0FVQyxNQUFNLGFBQ0w7aUJBQ0Q7QUFDRjtBQUNGLE9BZlE7Ozs7NkJBZ0JRLFFBQ2Y7bUNBQW1CLFVBQUMsU0FBUyxRQUUzQjs7eUNBQVMsb0JBQUk7a0JBRVg7O3VDQUMyQixPQUFPO0FBQWhDO0FBRkYsV0FLRCxLQUFLLGFBQ0o7Y0FBTSxTQUFTLEVBQ2Y7aUJBQ0Q7QUFURCxXQVVDLEtBQUssZUFDSjtrQkFBUSxFQUFDLE9BQ1Y7QUFaRCxXQWFDLE1BQU0sYUFDTDtpQkFDRDtBQUNGO0FBQ0YsT0FuQlE7Ozs7O0FBc0JYOztrQkFBZSxTIiwiZmlsZSI6IjUuNTI0NzEyZWI3ZTAyNzgwMThjMGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQgZW52IGZyb20gJy4uL2Vudi1jb25maWcnXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuXG5jbGFzcyBUb2Rvc0FwaSB7XG4gIFxuICBzdGF0aWMgYWRkVG9kbyAodG9kbykge1xuICAgIC8vIHNpbmNlIHRoaXMgYWx3YXlzIGhhcHBlbnMgb24gdGhlIHNlcnZlciBJIGNhbiBqdXN0IGdldCB0aGUgand0IGZyb20gbG9jYWxob3N0XG4gICAgY29uc3QgdG9rZW4gPSBnZXRUb2tlbkZyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgZmV0Y2goYCR7ZW52LkJBQ0tFTkRfVVJMfS90b2Rvc2AsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcblx0ICAgICAgICB0ZXh0OnRvZG8udGV4dCxcbiAgICAgICAgICBfY3JlYXRvcjogdG9kby5fY3JlYXRvclxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZSA9PiB7XG4gICAgICAgIHJlamVjdChlKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG4gIHN0YXRpYyBnZXRUb2RvcyAoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGZldGNoKGAke2Vudi5CQUNLRU5EX1VSTH0vdG9kb3NgLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbihyID0+IHIuanNvbigpKVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgcmVzb2x2ZShyZXMudG9kb3MpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGUgPT4ge1xuICAgICAgICByZWplY3QoZSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuICBzdGF0aWMgZ2V0Sm9rZXMgKGFjY2Vzcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBcbiAgICAgIGZldGNoKGAke2Vudi5CQUNLRU5EX1VSTH0vQkFDS0VORF9VUkwvam9rZXMvY2VsZWJyaXR5YCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzcy50b2tlbn1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbihyID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gci5qc29uKClcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIHJlc29sdmUoe2pva2VzOiByZXN9KVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlID0+IHtcbiAgICAgICAgcmVqZWN0KGUpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9kb3NBcGlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwaS90b2Rvc0FwaS5qcyJdLCJzb3VyY2VSb290IjoiIn0=