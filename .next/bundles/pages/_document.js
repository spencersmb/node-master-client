
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
  SAVE_TODO: 'SAVE_TODO',
  LOAD_JOKES_SUCCESS: 'LOAD_JOKES_SUCCESS',
  GET_PROFILE: 'GET_PROFILE',
  REFRESH_USER: 'REFRESH_USER',

  // current actions
  LOAD_TODOS_SUCCESS: 'LOAD_TODOS_SUCCESS',
  SAVE_STORE: 'SAVE_STORE' };

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
    text: 'initial state todo' }],

  jokes: [],
  user: {
    isAuthenticated: false },

  stores: [] };

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

var _store = __webpack_require__(707);

var _styledComponents = __webpack_require__(814);

var _envConfig = __webpack_require__(702);

var _envConfig2 = _interopRequireDefault(_envConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/EveryTuesday/Documents/github/learn-node-master/client/pages/_document.js?entry';var MyDocument = function (_Document) {
  (0, _inherits3.default)(MyDocument, _Document);function MyDocument() {
    (0, _classCallCheck3.default)(this, MyDocument);return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
  }(0, _createClass3.default)(MyDocument, [{ key: 'render', value: function render() {
      var sheet = new _styledComponents.ServerStyleSheet();
      var main = sheet.collectStyles(_react2.default.createElement(_document.Main, { __source: { fileName: _jsxFileName, lineNumber: 10 } }));
      var styleTags = sheet.getStyleElement();

      return _react2.default.createElement('html', { __source: { fileName: _jsxFileName, lineNumber: 14 } }, _react2.default.createElement(_document.Head, { __source: { fileName: _jsxFileName, lineNumber: 15 } }, _react2.default.createElement('link', { rel: 'shortcut icon', type: 'image/png', href: './static/images/icons/doughnut.png', __source: { fileName: _jsxFileName, lineNumber: 16 } }), _react2.default.createElement('link', { async: true, href: '//fonts.googleapis.com/css?family=Open+Sans', rel: 'stylesheet', type: 'text/css', __source: { fileName: _jsxFileName, lineNumber: 17 } }), _react2.default.createElement('title', { __source: { fileName: _jsxFileName, lineNumber: 18 } }, _envConfig2.default.WEBSITE_TITLE), styleTags, _react2.default.createElement('link', { rel: 'stylesheet', href: './static/styles.css', __source: { fileName: _jsxFileName, lineNumber: 20 } })), _react2.default.createElement('body', { __source: { fileName: _jsxFileName, lineNumber: 22 } }, main, _react2.default.createElement(_document.NextScript, { __source: { fileName: _jsxFileName, lineNumber: 24 } })));
    } }]);return MyDocument;
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

var _svgs = __webpack_require__(703);

var prod = "development" === 'production';

exports.default = {
  BACKEND_URL: prod ? 'https://nameless-scrubland-28835.herokuapp.com' : 'http://localhost:7777',
  WEBSITE_TITLE: 'Now Thats Delicious!',
  LINKS: [{ slug: '/stores', title: 'Stores', icon: _svgs.svgs.Store }, { slug: '/tags', title: 'Tags', icon: _svgs.svgs.Tag }, { slug: '/top', title: 'Top', icon: _svgs.svgs.Top }, { slug: '/add', title: 'Add', icon: _svgs.svgs.Add }, { slug: '/map', title: 'Map', icon: _svgs.svgs.MapSvg }],

  LOGO: _svgs.svgs.Logo,
  TAGS: ['Wifi', 'Open Late', 'Family Friendly', 'Vegetarian', 'Licensed'] };

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/EveryTuesday/Documents/github/learn-node-master/client/config/envConfig.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/EveryTuesday/Documents/github/learn-node-master/client/config/envConfig.js"); } } })();

/***/ }),

/***/ 703:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderSvg = exports.svgs = undefined;

var _extends2 = __webpack_require__(59);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/EveryTuesday/Documents/github/learn-node-master/client/config/svgs.js'; //SVGs
var Logo = function Logo(props) {
  return _react2.default.createElement('svg', (0, _extends3.default)({ viewBox: '0 0 606 239', xmlns: 'http://www.w3.org/2000/svg' }, props), _react2.default.createElement('defs', null, _react2.default.createElement('filter', { x: '-50%', y: '-50%', width: '200%', height: '200%', filterUnits: 'objectBoundingBox', id: 'a' }, _react2.default.createElement('feOffset', { dx: '1', dy: '1', 'in': 'SourceAlpha', result: 'shadowOffsetOuter1' }), _react2.default.createElement('feColorMatrix', { values: '0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.323001585 0', 'in': 'shadowOffsetOuter1', result: 'shadowMatrixOuter1' }), _react2.default.createElement('feMerge', null, _react2.default.createElement('feMergeNode', { 'in': 'shadowMatrixOuter1' }), _react2.default.createElement('feMergeNode', { 'in': 'SourceGraphic' })))), _react2.default.createElement('g', { filter: 'url(#a)', fill: '#FFF', fillRule: 'evenodd' }, _react2.default.createElement('path', { d: 'M292.595 40.128c4.368 0 10.08-.56 16.352-1.344-1.792 6.944-5.376 17.024-8.512 25.536-8.176 22.512-12.208 34.384-14.672 43.68 3.36 5.488 7.392 8.624 12.544 9.408 2.016-12.656 5.264-25.536 11.76-45.36 3.36-10.192 9.408-26.544 13.664-35.056 4.928-.56 9.856-.896 14.56-.896 2.688 0 6.832.224 10.64.56-1.232-6.832-3.248-11.312-8.736-11.312-3.92 0-29.568 3.136-44.912 3.136-5.04 0-9.072-.336-10.976-1.232-.56 1.12-1.008 3.136-1.008 4.256 0 4.816 3.36 8.624 9.296 8.624zm39.286 65.968c.112 2.352 2.464 7.28 3.472 7.28.56 0 1.68-1.12 2.128-2.128 6.72-15.792 18.592-32.144 29.232-40.096 1.568-1.232 3.92-2.688 4.368-2.688.112 0 .448.336.448.448-7.28 14.672-12.656 28.784-12.656 33.152 0 3.472 3.024 7.056 6.048 7.056 2.352 0 10.864-4.032 10.864-5.152 0-.336-.112-.672-.784-1.792-.336 0-1.68.896-3.92.896-1.456 0-1.792-.448-1.792-1.904 0-6.048 11.76-26.88 20.944-36.96-3.36-4.256-8.288-7.056-12.208-7.056-6.832 0-17.696 9.296-31.92 27.44 2.688-10.752 6.16-19.04 11.872-30.24 5.264-10.304 14.56-22.512 25.76-33.936-2.576-2.8-9.408-5.376-14.112-5.376-10.192 11.648-20.384 28.784-26.432 44.576-6.832 17.584-11.312 35.952-11.312 46.48zm94.502-43.344c-3.248 6.72-7.728 15.12-10.864 20.384-8.064 13.44-13.44 19.712-17.808 20.608-1.008-.336-1.568-1.12-1.568-2.688 0-13.776 14.672-33.6 26.656-35.504-.336-2.8-5.376-8.064-8.4-8.848-12.096.672-28.224 23.52-28.224 40.208 0 7.728 3.808 13.328 9.296 13.552 6.944-1.12 16.8-12.32 22.848-25.984-2.8 7.28-4.256 13.328-4.256 17.472 0 5.6 2.016 8.288 6.048 8.288 2.24 0 5.488-.896 7.28-2.016-2.016-1.12-2.912-4.032-2.912-8.176 0-7.616 4.144-20.832 10.192-33.376.112-1.456-5.152-3.92-8.288-3.92zm22.934 2.352c-5.712 13.776-9.856 28.896-9.856 36.176 0 5.264 8.512 11.648 15.904 11.872 2.464-.224 10.528-5.6 12.208-8.176-.112-.448-.448-1.12-.784-1.68-3.136 2.464-7.28 4.256-11.76 4.816-2.352-.336-3.696-2.128-3.696-5.488 0-9.184 4.48-23.744 11.872-38.08 5.152-.112 9.744-.896 13.328-2.24 0-1.232-.56-2.464-1.232-3.136-3.136.336-6.272.448-9.184.448 3.696-6.272 6.496-10.64 10.976-16.24-1.456-1.68-8.624-4.032-11.648-4.032-2.464 1.344-8.96 10.976-13.44 19.824-3.024-.112-6.608-.448-10.528-.672 0 2.016.784 5.712 1.456 6.608h6.384zm40.855-13.888c8.624-5.6 13.776-16.016 16.24-29.456-1.904-3.696-8.624-6.608-15.68-7.056 1.008 4.256 1.344 8.176 1.344 11.872 0 8.288-1.904 15.232-3.696 20.384 0 1.568.896 3.472 1.792 4.256zm39.734 12.208c-.896-3.472-9.52-12.208-12.88-13.104-7.84 1.68-14.784 10.304-14.784 18.256 0 6.272 3.472 12.768 3.472 20.384-12.992.896-23.072 10.528-23.072 21.952 1.232 4.144 6.384 8.4 10.64 8.736 11.984-1.232 19.264-9.296 19.264-21.728 0-1.792-.112-2.912-.112-4.032 0-1.68.56-1.904 7.504-3.472.224-.224.448-.896.448-1.456 0-.56 0-.672-.112-.896-2.352 0-4.704.112-7.84.224-.112-.224-.112-.448-.112-1.344 0-14.336 3.248-22.064 9.184-22.064 1.568 0 2.688 1.568 2.688 3.696 0 1.792-1.792 5.152-1.792 6.048.112 1.008.56 1.568 1.456 1.68 2.352 0 5.712-7.168 6.048-12.88zm-36.96 51.072c-1.456-1.008-2.24-2.352-2.24-4.032 0-5.152 9.632-14.896 15.456-15.68 0 7.728-6.048 16.8-13.216 19.712zm-416.3-22.984c-.224-.896-.336-1.904-.336-5.04 0-17.808 11.872-58.352 20.384-71.904.896 25.872 3.024 46.928 9.184 71.904 1.568 3.136 7.504 4.928 14.336 4.928.448 0 1.008 0 1.456-.112-.112-.112-.112-.224-.112-.336.336-17.92 14.896-76.272 29.12-82.096-1.68-3.248-6.496-6.832-9.744-7.392-5.6.672-16.912 37.52-24.08 73.472-4.592-16.128-5.376-31.472-5.376-47.712 0-8.176.56-16.128 1.232-19.712C112.038 5.496 99.382.568 95.238.568l.784 4.704c-9.856 14-30.24 64.288-30.24 77.84 0 4.032 2.352 5.824 10.864 8.4zm74.23-4.592c17.92-3.808 30.8-19.824 30.8-38.528 0-7.168-1.904-10.528-5.936-10.528-.672 0-1.344.112-2.016.112-2.24-3.92-4.704-6.72-7.056-7.952-3.472 0-7.504 1.568-11.536 4.592-10.528 7.728-18.256 22.176-18.256 34.16 0 10.08 5.488 17.248 14 18.144zm5.712-35.28c3.696-4.816 8.96-9.632 15.456-11.536 1.008 1.568 1.456 3.696 1.456 7.504 0 17.472-9.744 31.808-23.072 34.72-1.456-.448-2.912-4.368-2.912-7.952 0-5.936 3.92-15.904 9.072-22.736zm29.318 26.768c0 4.368 1.904 7.392 6.608 8.848 4.704-6.384 6.832-10.304 12.544-17.92 2.8-3.584 8.736-10.976 11.088-12.096-.224 2.464-.672 4.368-2.352 10.976-.896 3.584-1.232 6.384-1.232 10.752 0 4.144 2.464 7.168 5.936 7.168 3.136 0 11.648-9.296 17.248-15.344 13.776-14.784 20.048-23.632 21.504-40.208-.448-.336-1.344-.56-2.464-.56-2.576 0-6.272.896-7.168 2.128-2.8 14.672-4.144 20.16-9.856 28.896-4.592 7.056-12.208 15.792-13.552 16.352 2.016-10.752 5.376-33.824 10.192-39.984-.336-1.792-4.704-2.464-7.616-2.464-.784 0-1.456 0-1.904.112-2.912 2.912-3.92 6.944-4.816 9.632-1.232 3.472-2.128 5.824-6.832 10.192-3.36 3.136-7.952 8.736-12.88 15.232 1.68-11.088 2.688-26.32 11.424-33.376-.56-1.68-4.48-2.8-7.728-2.8-6.048 0-10.304 4.032-12.208 10.976-2.912 10.528-5.936 27.552-5.936 33.488z' }), _react2.default.createElement('path', { d: 'M2.552 211.472c6.396 13.612 19.516 20.992 37.392 20.992 39.032 0 73.144-38.212 73.144-80.852 0-31.324-24.764-52.644-59.696-52.644-27.716 0-48.544 13.448-52.808 33.62 1.312 6.724 6.068 11.48 10.988 13.12 5.084-17.384 15.252-29.192 28.864-34.768-4.592 15.416-28.208 78.556-37.884 100.532zm57.892-104.304c23.78 0 38.868 13.12 38.868 35.588 0 40.344-29.684 75.44-65.272 75.44-5.084 0-9.676-.492-12.628-1.476 0-6.232 5.248-21.648 17.712-49.364 9.84-21.812 20.828-43.132 24.272-47.888-2.296-2.132-9.02-6.56-18.532-10.004 4.756-1.476 10.004-2.296 15.58-2.296zm111.768 44.936c-4.428-5.576-9.184-8.692-14.104-9.348-21.648 0-46.248 31.652-46.248 58.548 0 13.12 8.856 23.452 23.944 25.092 10.332-2.296 22.96-11.644 32.8-24.6-.82-.984-1.64-1.804-2.788-2.788-6.888 7.38-18.204 19.188-30.012 19.188-6.232 0-7.544-7.544-7.544-13.12 0-1.476.164-2.952.164-4.264 27.88-11.152 42.148-21.812 43.788-48.708zm-11.316 5.412c-.82 14.924-13.776 28.372-31.16 37.064 5.248-20.336 19.188-35.424 31.16-37.064zm11.968 53.14c0 6.278 1.314 11.826 3.066 12.994 1.314.876 3.504 3.212 3.942 4.234.584 1.314 2.774 2.482 5.402 2.774-.146-.73-.146-.876-.146-4.234 0-12.264 4.38-31.244 12.556-54.02 9.636-26.718 20.586-46.428 35.77-64.386-1.606-2.482-11.68-8.322-16.352-9.198-10.074 12.264-20.586 34.018-32.558 66.722-7.446 20.44-11.68 36.646-11.68 45.114zm34.217-3.118c0 10.974 11.718 15.81 13.578 15.81 1.116 0 1.116-1.674 1.116-6.138.186-5.394 2.976-13.392 5.58-20.274 6.324-16.368 9.672-29.574 21.018-42.222-4.836-7.254-13.206-11.346-17.298-12.276-11.16 5.58-16.554 24.924-17.67 29.76-4.836 22.32-6.324 31.062-6.324 35.34zm35.526-80.724c0 2.046 2.604 4.464 5.58 5.022 1.86-4.092 15.438-20.646 21.018-25.854-3.72-5.58-16.74-13.02-22.506-13.02-3.162 7.998-5.766 20.088-5.766 24.366 0 2.046.93 4.836 2.232 6.138-.372 1.488-.558 2.604-.558 3.348zm1.04 64.322c0 17.22 11.645 32.308 26.077 33.62 7.38-1.312 20.828-10.66 28.044-19.68 0-.984-.82-2.624-1.64-3.28-10.168 7.544-21.976 13.284-28.372 14.104-3.936-1.804-5.904-7.052-5.904-15.908 0-13.94 5.084-27.06 14.432-37.556 6.068-6.724 13.448-11.316 17.712-11.316 2.46 0 3.772 1.64 3.772 4.756 0 5.412-3.608 11.48-10.988 18.204 1.804 2.624 4.756 4.428 7.38 4.428 6.232 0 12.464-9.84 12.464-19.844 0-10.496-6.396-16.4-17.712-16.4-22.96 0-45.264 24.108-45.264 48.872zm63.06 17.876c0 9.676 10.333 13.94 11.973 13.94.984 0 .984-1.476.984-5.412.164-4.756 2.624-11.808 4.92-17.876 5.576-14.432 8.528-26.076 18.532-37.228-4.264-6.396-11.644-10.004-15.252-10.824-9.84 4.92-14.596 21.976-15.58 26.24-4.264 19.68-5.576 27.388-5.576 31.16zm31.325-71.176c0 1.804 2.296 3.936 4.92 4.428 1.64-3.608 13.612-18.204 18.532-22.796-3.28-4.92-14.76-11.48-19.844-11.48-2.788 7.052-5.084 17.712-5.084 21.484 0 1.804.82 4.264 1.968 5.412-.328 1.312-.492 2.296-.492 2.952zM359.6 225.74c26.24-5.576 45.1-29.028 45.1-56.416 0-10.496-2.788-15.416-8.692-15.416-.984 0-1.968.164-2.952.164-3.28-5.74-6.888-9.84-10.332-11.644-5.084 0-10.988 2.296-16.892 6.724-15.416 11.316-26.732 32.472-26.732 50.02 0 14.76 8.036 25.256 20.5 26.568zm8.364-51.66c5.412-7.052 13.12-14.104 22.632-16.892 1.476 2.296 2.132 5.412 2.132 10.988 0 25.584-14.268 46.576-33.784 50.84-2.132-.656-4.264-6.396-4.264-11.644 0-8.692 5.74-23.288 13.284-33.292zm84.216 42.312c5.084 3.444 12.628 6.396 15.58 6.396 0 0 .656-.164.656-.656 0-2.132-3.608-5.74-3.608-15.088 0-17.22 12.628-35.588 20.664-54.776-1.968-2.46-9.84-5.248-15.58-5.248-7.38 7.052-10.824 16.564-12.792 21.976-3.608 9.676-11.644 19.68-16.072 25.748-9.02 12.3-13.448 17.712-16.728 19.024-.328-.328-1.148-1.312-1.148-2.952 0-5.74 4.756-20.664 6.888-25.584 9.84-23.288 18.86-35.752 20.828-37.884-3.28-3.772-10.824-5.084-14.596-5.084-13.776 10.004-25.42 37.72-29.356 54.284-.984 4.592-1.312 7.872-1.312 13.94 1.804 7.708 10.988 12.464 17.876 12.792 1.476-.164 4.264-2.132 7.052-5.084 3.608-4.264 15.416-21.156 17.22-20.992-.492 1.476-.82 3.444-.82 5.904 0 3.772 1.148 9.84 5.248 13.284zm87.988-61.664c-1.312-5.084-13.94-17.876-18.86-19.188-11.48 2.46-21.648 15.088-21.648 26.732 0 9.184 5.084 18.696 5.084 29.848-19.024 1.312-33.784 15.416-33.784 32.144 1.804 6.068 9.348 12.3 15.58 12.792 17.548-1.804 28.208-13.612 28.208-31.816 0-2.624-.164-4.264-.164-5.904 0-2.46.82-2.788 10.988-5.084.328-.328.656-1.312.656-2.132 0-.82 0-.984-.164-1.312-3.444 0-6.888.164-11.48.328-.164-.328-.164-.656-.164-1.968 0-20.992 4.756-32.308 13.448-32.308 2.296 0 3.936 2.296 3.936 5.412 0 2.624-2.624 7.544-2.624 8.856.164 1.476.82 2.296 2.132 2.46 3.444 0 8.364-10.496 8.856-18.86zm-54.12 74.784c-2.132-1.476-3.28-3.444-3.28-5.904 0-7.544 14.104-21.812 22.632-22.96 0 11.316-8.856 24.6-19.352 28.864zm56.828-40.344c0 9.676 4.592 11.316 10.004 12.792 7.052-39.524 29.356-76.916 51.824-95.448-.984-5.412-11.316-14.76-18.204-16.236-12.792 9.348-43.624 80.852-43.624 98.892zm-3.608 43.46c6.56 0 8.856-10.004 13.94-15.58-2.952-5.248-10.168-10.332-16.236-10.332-4.92 0-7.708 12.628-7.708 18.04 0 2.296 4.92 7.872 10.004 7.872z' })));
};var Store = function Store(props) {
  return _react2.default.createElement('svg', (0, _extends3.default)({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 512 512' }, props), _react2.default.createElement('path', { d: 'M469 493.6V188c35.5-10.9 43.7-45 37.7-68.9L475.3 2H36.7L5.2 119.3C-.7 143 7.9 177.1 43 188v305.6H2V510h508v-16.4h-41zm-16.4-319.5c-22.6 0-41-18.4-41-41v-32.8h73.1l6.2 22.9c5.8 20.8-7 50.9-38.3 50.9zm-335.9-73.8h81.9v32.8c0 22.6-18.4 41-41 41s-41-18.4-41-41v-32.8zm98.3 0h82v32.8c0 22.6-18.4 41-41 41s-41-18.4-41-41v-32.8zm98.4 0h81.9v32.8c0 22.6-18.4 41-41 41s-41-18.4-41-41v-32.8zM49.3 18.4h413.5l17.6 65.5H31.7l17.6-65.5zm-28.2 105l6.2-23.1h73.1v32.8c0 22.6-18.4 41-41 41-31.4 0-44.1-31-38.3-50.7zM297 493.6v-213h114.7v213H297zm155.6 0H428V264.2H280.6v229.4H59.4V190.5c20.8 0 39.1-11.2 49.2-27.8 10 16.7 28.3 27.8 49.2 27.8 20.8 0 39.1-11.2 49.2-27.8 10 16.7 28.3 27.8 49.2 27.8 20.8 0 39.1-11.2 49.2-27.8 10 16.7 28.3 27.8 49.2 27.8 20.8 0 39.1-11.2 49.2-27.8 10 16.7 28.3 27.8 49.2 27.8v303.1z' }), _react2.default.createElement('path', { d: 'M83.9 469h163.9V305.2H83.9V469zm16.4-73.7h57.4v57.4h-57.4v-57.4zm73.8 57.3v-57.4h57.4v57.4h-57.4zm57.3-73.7H174v-57.4h57.4v57.4zm-73.7-57.4v57.4h-57.4v-57.4h57.4zM165.9 231.4h16.4v16.4h-16.4zM133.1 231.4h16.4v16.4h-16.4zM198.6 231.4H215v16.4h-16.4z' }));
};var Tag = function Tag(props) {
  return _react2.default.createElement('svg', (0, _extends3.default)({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 100 100' }, props), _react2.default.createElement('path', { d: 'M54.813 7c-.19.043-.366.142-.5.281l-46 45C7.537 53.04 7 54.171 7 55.531a4.46 4.46 0 0 0 1.281 3.157l33 33C41.977 92.383 42.893 93 44 93c1.154 0 2.03-.653 2.688-1.281l46-44c.194-.185.31-.45.312-.719V8c0-.524-.476-1-1-1H55a1 1 0 0 0-.188 0zm.562 2H91v37.563L45.312 90.25c-.479.459-.975.75-1.312.75-.383 0-.787-.224-1.281-.719l-33-33A2.624 2.624 0 0 1 9 55.531c0-.862.295-1.46.688-1.843zM75 17c-4.406 0-8 3.594-8 8 0 4.406 3.594 8 8 8 4.406 0 8-3.594 8-8 0-4.406-3.594-8-8-8zm0 2c3.326 0 6 2.674 6 6s-2.674 6-6 6-6-2.674-6-6 2.674-6 6-6z', overflow: 'visible' }));
};var Top = function Top(props) {
  return _react2.default.createElement('svg', (0, _extends3.default)({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 62 62' }, props), _react2.default.createElement('path', { d: 'M31 39.1c-1.9 0-3.8-.5-5.5-1.5C17.2 32.7 12 23.7 12 14V0h38v14c0 9.6-5.2 18.7-13.5 23.6-1.7 1-3.6 1.5-5.5 1.5zM14 2v12c0 8.9 4.8 17.3 12.5 21.8 2.8 1.6 6.2 1.6 9 0C43.2 31.3 48 23 48 14V2H14zM43 54H19v-6h24v6zm-22-2h20v-2H21v2z' }), _react2.default.createElement('path', { d: 'M45 62H17V52h28v10zm-26-2h24v-6H19v6zM35 50h-8V36.2l1.3.4c1.8.6 3.6.6 5.4 0l1.3-.4V50zm-6-2h4v-9.1c-1.3.2-2.7.2-4 0V48zM19.9 30.7L16.6 29C7.6 24.3 2 15.1 2 5V4h12v10c0 4.8 1.4 9.5 3.9 13.6l2 3.1zM4 6c.3 7.8 4.2 14.9 10.4 19.3C12.8 21.8 12 17.9 12 14V6H4zM42.1 30.7l2-3.1C46.6 23.5 48 18.8 48 14V4h12v1c0 10.1-5.6 19.3-14.6 24l-3.3 1.7zM50 6v8c0 3.9-.8 7.8-2.5 11.3C53.8 20.9 57.7 13.8 58 6h-8z' }), _react2.default.createElement('g', null, _react2.default.createElement('path', { d: 'M39.3 29.2l-8.3-6-8.3 6 3.2-9.7-8.3-6h10.2L31 3.8l3.2 9.7h10.2l-8.3 6 3.2 9.7zM31 20.7l4.5 3.2-1.7-5.2 4.5-3.2h-5.5L31 10.2l-1.7 5.2h-5.5l4.5 3.2-1.8 5.4 4.5-3.3z' })));
};var Add = function Add(props) {
  return _react2.default.createElement('svg', (0, _extends3.default)({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 100 100' }, props), _react2.default.createElement('path', { d: 'M10.813 10A1 1 0 0 0 10 11v78a1 1 0 0 0 1 1h78a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1H11a1 1 0 0 0-.188 0zM12 12h76v76H12V12zm37.875 14.969A1 1 0 0 0 49 28v21H28a1 1 0 0 0-.188 0A1.004 1.004 0 0 0 28 51h21v21a1 1 0 1 0 2 0V51h21a1 1 0 1 0 0-2H51V28a1 1 0 0 0-1.125-1.031z' }));
};var MapSvg = function MapSvg(props) {
  return _react2.default.createElement('svg', (0, _extends3.default)({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 100 100' }, props), _react2.default.createElement('path', { d: 'M50 7C34.548 7 22 19.548 22 35c0 5.57 1.638 10.762 4.438 15.125l15.375 23.969c-1.582.436-3.04.982-4.313 1.656C34.238 77.477 32 80.004 32 83c0 2.996 2.238 5.523 5.5 7.25C40.762 91.977 45.163 93 50 93s9.238-1.023 12.5-2.75C65.762 88.523 68 85.996 68 83c0-2.996-2.238-5.523-5.5-7.25-1.27-.672-2.737-1.219-4.313-1.656l15.376-23.969A27.927 27.927 0 0 0 78 35C78 19.548 65.452 7 50 7zm0 2c14.371 0 26 11.629 26 26 0 5.178-1.524 9.977-4.125 14.031L50 83.125 28.125 49.031A25.868 25.868 0 0 1 24 35C24 20.629 35.629 9 50 9zm0 15c-6.063 0-11 4.937-11 11s4.937 11 11 11 11-4.937 11-11-4.937-11-11-11zm0 2c4.982 0 9 4.018 9 9s-4.018 9-9 9-9-4.018-9-9 4.018-9 9-9zm-7.031 49.875l6.187 9.656a1 1 0 0 0 1.688 0l6.187-9.656c1.701.428 3.247.976 4.532 1.656C64.453 79.061 66 81.025 66 83s-1.547 3.939-4.438 5.469C58.672 89.999 54.553 91 50 91c-4.551 0-8.672-1.001-11.563-2.531C35.547 86.939 34 84.975 34 83s1.547-3.938 4.438-5.469c1.285-.68 2.828-1.228 4.53-1.656z' }));
};

var svgs = exports.svgs = {
  Logo: Logo,
  Store: Store,
  Tag: Tag,
  Top: Top,
  Add: Add,
  MapSvg: MapSvg };

var renderSvg = exports.renderSvg = function renderSvg(Svg) {
  return _react2.default.createElement(Svg, { __source: { fileName: _jsxFileName, lineNumber: 18 } });
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/EveryTuesday/Documents/github/learn-node-master/client/config/svgs.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/EveryTuesday/Documents/github/learn-node-master/client/config/svgs.js"); } } })();

/***/ }),

/***/ 704:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authReducer = undefined;

var _extends2 = __webpack_require__(59);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(78);

var _assign2 = _interopRequireDefault(_assign);

var _actionTypes = __webpack_require__(178);

var _actionTypes2 = _interopRequireDefault(_actionTypes);

var _initialState = __webpack_require__(179);

var _initialState2 = _interopRequireDefault(_initialState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var authReducer = exports.authReducer = function authReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState2.default.user;var action = arguments[1];
  switch (action.type) {
    case _actionTypes2.default.TOGGLE_LOGIN:
      return (0, _assign2.default)({}, state, {
        isAuthenticated: !state.isAuthenticated });

    case _actionTypes2.default.LOGIN_SUCCESS:
      return (0, _assign2.default)({}, state, (0, _extends3.default)({}, action.user, {
        isAuthenticated: true }));

    case _actionTypes2.default.REFRESH_USER:
      return (0, _assign2.default)({}, state, (0, _extends3.default)({}, action.user));

    case _actionTypes2.default.LOG_OUT:
      return (0, _assign2.default)({}, state, {
        isAuthenticated: false });

    default:
      return state;}
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/EveryTuesday/Documents/github/learn-node-master/client/reducers/authReducer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/EveryTuesday/Documents/github/learn-node-master/client/reducers/authReducer.js"); } } })();

/***/ }),

/***/ 705:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jokesReducer = undefined;

var _toConsumableArray2 = __webpack_require__(60);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _actionTypes = __webpack_require__(178);

var _actionTypes2 = _interopRequireDefault(_actionTypes);

var _initialState = __webpack_require__(179);

var _initialState2 = _interopRequireDefault(_initialState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var jokesReducer = exports.jokesReducer = function jokesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState2.default.jokes;var action = arguments[1];
  switch (action.type) {
    case _actionTypes2.default.LOAD_JOKES_SUCCESS:
      return [].concat((0, _toConsumableArray3.default)(action.jokes));
    default:
      return state;}
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/EveryTuesday/Documents/github/learn-node-master/client/reducers/jokesReducer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/EveryTuesday/Documents/github/learn-node-master/client/reducers/jokesReducer.js"); } } })();

/***/ }),

/***/ 706:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.todosReducer = undefined;

var _toConsumableArray2 = __webpack_require__(60);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _actionTypes = __webpack_require__(178);

var _actionTypes2 = _interopRequireDefault(_actionTypes);

var _initialState = __webpack_require__(179);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/EveryTuesday/Documents/github/learn-node-master/client/reducers/todosReducer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/EveryTuesday/Documents/github/learn-node-master/client/reducers/todosReducer.js"); } } })();

/***/ }),

/***/ 707:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = undefined;

var _redux = __webpack_require__(77);

var _reduxThunk = __webpack_require__(807);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxDevtoolsExtension = __webpack_require__(740);

var _todosReducer = __webpack_require__(706);

var _jokesReducer = __webpack_require__(705);

var _reduxForm = __webpack_require__(775);

var _authReducer = __webpack_require__(704);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initStore = exports.initStore = function initStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // mirror of state from original app
  var reducers = (0, _redux.combineReducers)({
    todos: _todosReducer.todosReducer,
    user: _authReducer.authReducer,
    jokes: _jokesReducer.jokesReducer,
    form: _reduxForm.reducer });

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

/***/ 828:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(318);


/***/ })

},[828]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hY3Rpb25zL2FjdGlvblR5cGVzLmpzP2JlMGE3OWEiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvaW5pdGlhbFN0YXRlLmpzP2JlMGE3OWEiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2RvY3VtZW50LmpzP2JlMGE3OWEiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2VudkNvbmZpZy5qcz9iZTBhNzlhIiwid2VicGFjazovLy8uL2NvbmZpZy9zdmdzLmpzP2JlMGE3OWEiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvYXV0aFJlZHVjZXIuanM/YmUwYTc5YSIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9qb2tlc1JlZHVjZXIuanM/YmUwYTc5YSIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy90b2Rvc1JlZHVjZXIuanM/YmUwYTc5YSIsIndlYnBhY2s6Ly8vLi9zdG9yZS5qcz9iZTBhNzlhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLElBQU07T0FFSixLQURBO1FBRUE7ZUFDQTtnQkFDQTtpQkFDQTtXQUNBO2FBQ0E7c0JBQ0E7ZUFDQTtnQkFFQTs7QUFDQTtzQkFDQTtjQUdGOztrQkFBZSxZOzs7Ozs7Ozs7Ozs7Ozs7O2NDZmI7U0FDQTtTQUNBLENBSEE7U0FJRSxDQUNFO1VBR0o7O1NBQ0E7UUFDRTtxQkFFRjs7VUFBUSxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYnFCOzs7O0FBQ3hCOzs7O0FBQ0U7O0FBQ0E7O0FBQ0Y7Ozs7OztnSEFFRDs7OzRFQUNNLFNBQ1I7VUFBTSxRQUNOO1VBQU0sT0FBTyxNQUFNLGNBQWMsZ0JBQUMsZ0ZBQ2xDO1VBQU0sWUFBWSxNQUVsQjs7QUFDRSxxR0FDRSx3QkFBQyxnRkFDQyxnREFBTSxLQUFJLGlCQUFnQixNQUFLLGFBQVksTUFBSyxzRkFDaEQsaURBQU0sT0FBTixNQUFZLE1BQUssK0NBQThDLEtBQUksY0FBYSxNQUFLLDREQUNyRiwwR0FBUSxvQkFDUCxnQkFDRCxtREFBTSxLQUFJLGNBQWEsTUFBSyx1RUFFOUIsa0dBQ0csUUFDRCxzQkFBQyxzRkFJUjs7QUFHSCxxQjs7a0JBQXlCLGtEQUFXLFk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QjNCOztBQUNULElBQU0sT0FBTyxhQUFZLEtBRXpCOztrQkFDRTtlQUNJLE9BQ0EsbURBQ0o7aUJBQ0E7U0FDRSxHQUFFLE1BQU0sV0FBVyxPQUFPLFVBQVUsTUFBTSxXQUMxQyxXQUFFLE1BQU0sU0FBUyxPQUFPLFFBQVEsTUFBTSxXQUN0QyxTQUFFLE1BQU0sUUFBUSxPQUFPLE9BQU8sTUFBTSxXQUNwQyxTQUFFLE1BQU0sUUFBUSxPQUFPLE9BQU8sTUFBTSxXQUNwQyxTQUFFLE1BQU0sUUFBUSxPQUFPLE9BQU8sTUFBTSxXQUV0Qzs7UUFBTSxXQUNOO1FBQU0sQ0FBQyxRQUFRLGFBQWEsbUJBQW1CLGNBQWMsYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21HQ2hCL0Q7SUFDTzs7TUFDQTs7TUFDQTs7TUFDQTs7TUFDQTs7TUFDQTs7QUFFUDs7QUFBTyxJQUFNO1FBRVg7U0FDQTtPQUNBLEdBSEE7T0FJQTtPQUNBO1VBR0Y7O0FBQU8sSUFBTSxnQ0FBWSxtQkFBQztTQUFRLDhCQUFDLHVEQUFWO0FBQWxCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7Ozs7QUFHUDs7Ozs7O0FBQU8sSUFBTSxvQ0FBYyx1QkFBdUM7TUFBQSw0RUFBOUIsdUJBQThCLDRCQUNoRTtVQUFRLE9BQ047U0FBSyxzQkFDSDthQUFPLHNCQUFlLElBQUksT0FDeEI7eUJBQWlCLENBQUMsTUFFdEI7O1NBQUssc0JBQ0g7YUFBTyxzQkFBZSxJQUFJLDhCQUNyQixXQUFPO3lCQUdkLElBRkk7O1NBRUMsc0JBQ0g7YUFBTyxzQkFBZSxJQUFJLDhCQUNyQixXQUVQOztTQUFLLHNCQUNIO2FBQU8sc0JBQWUsSUFBSTt5QkFHNUIsS0FGSTs7QUFHRjthQUVMO0FBdEJNLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBOzs7O0FBRVA7Ozs7OztBQUFPLElBQU0sc0NBQWUsd0JBQXdDO01BQUEsNEVBQS9CLHVCQUErQiw2QkFDbEU7VUFBUSxPQUNOO1NBQUssc0JBQ0g7d0RBQVcsT0FDYjtBQUNFO2FBRUw7QUFQTSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTs7OztBQUdQOzs7Ozs7QUFBTyxJQUFNLHNDQUFlLHdCQUF3QztNQUFBLDRFQUEvQix1QkFBK0IsNkJBRWxFOztVQUFRLE9BRU47O1NBQUssc0JBQ0Q7dUJBQ08saUNBRFAsUUFFSSxRQUVSOztTQUFLLHNCQUNIO3VCQUNLLHdDQUdQOztBQUNFO2FBRUw7QUFqQk0sRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIZ0M7O0FBQ2hDOzs7O0FBQ0U7O0FBQ0E7O0FBQ0E7O0FBQ1c7O0FBR3BCOzs7O0FBQU8sSUFBTSxnQ0FBWSxxQkFBdUI7TUFBQSxtRkFDOUM7QUFDQTtNQUFNLFdBQVc7QUFFZjtBQUNBO0FBQ0E7QUFHRiw0QkFORTs7TUFNRSxNQUFNLGFBQVksSUFFdEI7O01BQUksT0FBTyxXQUFXLGVBQWUsUUFBUSxlQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUVBOztXQUNFLHdCQUNBLFVBQ0EsK0RBRUg7QUFFRDs7U0FBTyx3QkFBWSxVQUFVLGNBQzlCO0FBekJNLEUiLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9fZG9jdW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhY3Rpb25UeXBlcyA9IHtcbiAgQUREOiAnQUREJyxcbiAgVElDSzogJ1RJQ0snLFxuICBUT0dHTEVfVE9ETzogJ1RPR0dMRV9UT0RPJyxcbiAgVE9HR0xFX0xPR0lOOiAnVE9HR0xFX0xPR0lOJyxcbiAgTE9HSU5fU1VDQ0VTUzogJ0xPR0lOX1NVQ0NFU1MnLFxuICBMT0dfT1VUOiAnTE9HX09VVCcsXG4gIFNBVkVfVE9ETzogJ1NBVkVfVE9ETycsXG4gIExPQURfSk9LRVNfU1VDQ0VTUzogJ0xPQURfSk9LRVNfU1VDQ0VTUycsXG4gIEdFVF9QUk9GSUxFOiAnR0VUX1BST0ZJTEUnLFxuICBSRUZSRVNIX1VTRVI6ICdSRUZSRVNIX1VTRVInLFxuXG4gIC8vIGN1cnJlbnQgYWN0aW9uc1xuICBMT0FEX1RPRE9TX1NVQ0NFU1M6ICdMT0FEX1RPRE9TX1NVQ0NFU1MnLFxuICBTQVZFX1NUT1JFOiAnU0FWRV9TVE9SRSdcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWN0aW9uVHlwZXNcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FjdGlvbnMvYWN0aW9uVHlwZXMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGxhc3RVcGRhdGU6IDAsXG4gIGxpZ2h0OiBmYWxzZSxcbiAgY291bnQ6IDAsXG4gIHRvZG9zOiBbXG4gICAge1xuICAgICAgdGV4dDogJ2luaXRpYWwgc3RhdGUgdG9kbydcbiAgICB9XG4gIF0sXG4gIGpva2VzOiBbXSxcbiAgdXNlcjoge1xuICAgIGlzQXV0aGVudGljYXRlZDogZmFsc2VcbiAgfSxcbiAgc3RvcmVzOiBbXVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdWNlcnMvaW5pdGlhbFN0YXRlLmpzIiwiaW1wb3J0IERvY3VtZW50LCB7IEhlYWQsIE1haW4sIE5leHRTY3JpcHQgfSBmcm9tICduZXh0L2RvY3VtZW50J1xuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXG5pbXBvcnQgeyBpbml0U3RvcmUgfSBmcm9tICcuLi9zdG9yZSdcbmltcG9ydCB7IFNlcnZlclN0eWxlU2hlZXQgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBlbnYgZnJvbSAnLi4vY29uZmlnL2VudkNvbmZpZydcblxuY2xhc3MgTXlEb2N1bWVudCBleHRlbmRzIERvY3VtZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCBzaGVldCA9IG5ldyBTZXJ2ZXJTdHlsZVNoZWV0KClcbiAgICBjb25zdCBtYWluID0gc2hlZXQuY29sbGVjdFN0eWxlcyg8TWFpbiAvPilcbiAgICBjb25zdCBzdHlsZVRhZ3MgPSBzaGVldC5nZXRTdHlsZUVsZW1lbnQoKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxodG1sPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIGhyZWY9XCIuL3N0YXRpYy9pbWFnZXMvaWNvbnMvZG91Z2hudXQucG5nXCI+PC9saW5rPlxuICAgICAgICAgIDxsaW5rIGFzeW5jIGhyZWY9Jy8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnMnIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnPjwvbGluaz5cbiAgICAgICAgICA8dGl0bGU+e2Vudi5XRUJTSVRFX1RJVExFfTwvdGl0bGU+XG4gICAgICAgICAge3N0eWxlVGFnc31cbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi4vc3RhdGljL3N0eWxlcy5jc3NcIi8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGJvZHk+XG4gICAgICAgICAge21haW59XG4gICAgICAgICAgPE5leHRTY3JpcHQgLz5cbiAgICAgICAgPC9ib2R5PlxuICAgICAgPC9odG1sPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgoaW5pdFN0b3JlKShNeURvY3VtZW50KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvX2RvY3VtZW50LmpzP2VudHJ5IiwiaW1wb3J0IHsgc3ZncyB9IGZyb20gJy4vc3ZncydcbmNvbnN0IHByb2QgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgQkFDS0VORF9VUkw6IHByb2RcbiAgICA/ICdodHRwczovL25hbWVsZXNzLXNjcnVibGFuZC0yODgzNS5oZXJva3VhcHAuY29tJ1xuICAgIDogJ2h0dHA6Ly9sb2NhbGhvc3Q6Nzc3NycsXG4gIFdFQlNJVEVfVElUTEU6ICdOb3cgVGhhdHMgRGVsaWNpb3VzIScsXG4gIExJTktTOiBbXG4gICAgeyBzbHVnOiAnL3N0b3JlcycsIHRpdGxlOiAnU3RvcmVzJywgaWNvbjogc3Zncy5TdG9yZSB9LFxuICAgIHsgc2x1ZzogJy90YWdzJywgdGl0bGU6ICdUYWdzJywgaWNvbjogc3Zncy5UYWcgfSxcbiAgICB7IHNsdWc6ICcvdG9wJywgdGl0bGU6ICdUb3AnLCBpY29uOiBzdmdzLlRvcCB9LFxuICAgIHsgc2x1ZzogJy9hZGQnLCB0aXRsZTogJ0FkZCcsIGljb246IHN2Z3MuQWRkIH0sXG4gICAgeyBzbHVnOiAnL21hcCcsIHRpdGxlOiAnTWFwJywgaWNvbjogc3Zncy5NYXBTdmcgfVxuICBdLFxuICBMT0dPOiBzdmdzLkxvZ28sXG4gIFRBR1M6IFsnV2lmaScsICdPcGVuIExhdGUnLCAnRmFtaWx5IEZyaWVuZGx5JywgJ1ZlZ2V0YXJpYW4nLCAnTGljZW5zZWQnXVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29uZmlnL2VudkNvbmZpZy5qcyIsIi8vU1ZHc1xuaW1wb3J0IExvZ28gZnJvbSAnLi4vc3RhdGljL2ltYWdlcy9pY29ucy9sb2dvLnN2ZydcbmltcG9ydCBTdG9yZSBmcm9tICcuLi9zdGF0aWMvaW1hZ2VzL2ljb25zL3N0b3JlLnN2ZydcbmltcG9ydCBUYWcgZnJvbSAnLi4vc3RhdGljL2ltYWdlcy9pY29ucy90YWcuc3ZnJ1xuaW1wb3J0IFRvcCBmcm9tICcuLi9zdGF0aWMvaW1hZ2VzL2ljb25zL3RvcC5zdmcnXG5pbXBvcnQgQWRkIGZyb20gJy4uL3N0YXRpYy9pbWFnZXMvaWNvbnMvYWRkLnN2ZydcbmltcG9ydCBNYXBTdmcgZnJvbSAnLi4vc3RhdGljL2ltYWdlcy9pY29ucy9tYXAuc3ZnJ1xuXG5leHBvcnQgY29uc3Qgc3ZncyA9IHtcbiAgTG9nbyxcbiAgU3RvcmUsXG4gIFRhZyxcbiAgVG9wLFxuICBBZGQsXG4gIE1hcFN2Z1xufVxuXG5leHBvcnQgY29uc3QgcmVuZGVyU3ZnID0gKFN2ZykgPT4gPFN2ZyAvPjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb25maWcvc3Zncy5qcyIsImltcG9ydCBhY3Rpb25UeXBlcyBmcm9tICcuLi9hY3Rpb25zL2FjdGlvblR5cGVzJ1xuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuL2luaXRpYWxTdGF0ZSdcblxuZXhwb3J0IGNvbnN0IGF1dGhSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLnVzZXIsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBhY3Rpb25UeXBlcy5UT0dHTEVfTE9HSU46XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbigge30sIHN0YXRlLCB7XG4gICAgICAgIGlzQXV0aGVudGljYXRlZDogIXN0YXRlLmlzQXV0aGVudGljYXRlZFxuICAgICAgfSlcbiAgICBjYXNlIGFjdGlvblR5cGVzLkxPR0lOX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbigge30sIHN0YXRlLCB7XG4gICAgICAgIC4uLmFjdGlvbi51c2VyLFxuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6IHRydWVcbiAgICAgIH0pXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5SRUZSRVNIX1VTRVI6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbigge30sIHN0YXRlLCB7XG4gICAgICAgIC4uLmFjdGlvbi51c2VyXG4gICAgICB9KVxuICAgIGNhc2UgYWN0aW9uVHlwZXMuTE9HX09VVDpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKCB7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkOiBmYWxzZVxuICAgICAgfSlcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlZHVjZXJzL2F1dGhSZWR1Y2VyLmpzIiwiaW1wb3J0IGFjdGlvblR5cGVzIGZyb20gJy4uL2FjdGlvbnMvYWN0aW9uVHlwZXMnXG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gJy4vaW5pdGlhbFN0YXRlJ1xuZXhwb3J0IGNvbnN0IGpva2VzUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZS5qb2tlcywgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGFjdGlvblR5cGVzLkxPQURfSk9LRVNfU1VDQ0VTUzpcbiAgICAgIHJldHVybiBbLi4uYWN0aW9uLmpva2VzXVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdWNlcnMvam9rZXNSZWR1Y2VyLmpzIiwiaW1wb3J0IGFjdGlvblR5cGVzIGZyb20gJy4uL2FjdGlvbnMvYWN0aW9uVHlwZXMnXG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gJy4vaW5pdGlhbFN0YXRlJ1xuXG5leHBvcnQgY29uc3QgdG9kb3NSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLnRvZG9zLCBhY3Rpb24pID0+IHtcbiAgXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNBVkVfVE9ETzpcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgYWN0aW9uLnRvZG9cbiAgICAgICAgXTtcbiAgICBjYXNlIGFjdGlvblR5cGVzLkxPQURfVE9ET1NfU1VDQ0VTUzpcbiAgICAgIHJldHVybiBbXG4gICAgICAgIC4uLmFjdGlvbi50b2Rvc1xuICAgICAgXVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1Y2Vycy90b2Rvc1JlZHVjZXIuanMiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJ1xuaW1wb3J0IHsgdG9kb3NSZWR1Y2VyIH0gZnJvbSAnLi9yZWR1Y2Vycy90b2Rvc1JlZHVjZXInXG5pbXBvcnQgeyBqb2tlc1JlZHVjZXIgfSBmcm9tICcuL3JlZHVjZXJzL2pva2VzUmVkdWNlcidcbmltcG9ydCB7IHJlZHVjZXIgYXMgZm9ybVJlZHVjZXIgfSBmcm9tICdyZWR1eC1mb3JtJ1xuaW1wb3J0IHsgYXV0aFJlZHVjZXIgfSBmcm9tICcuL3JlZHVjZXJzL2F1dGhSZWR1Y2VyJ1xuXG5leHBvcnQgY29uc3QgaW5pdFN0b3JlID0gKGluaXRpYWxTdGF0ZSA9IHt9KSA9PiB7XG4gIC8vIG1pcnJvciBvZiBzdGF0ZSBmcm9tIG9yaWdpbmFsIGFwcFxuICBjb25zdCByZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgdG9kb3M6IHRvZG9zUmVkdWNlcixcbiAgICB1c2VyOiBhdXRoUmVkdWNlcixcbiAgICBqb2tlczogam9rZXNSZWR1Y2VyLFxuICAgIGZvcm06IGZvcm1SZWR1Y2VyXG4gIH0pXG5cbiAgbGV0IGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCdcblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgZW52ID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgLy8gY29uc3QgY29tcG9zZUVuaGFuY2VycyA9IGNvbXBvc2VXaXRoRGV2VG9vbHMoe1xuICAgIC8vICAgLy8gU3BlY2lmeSBoZXJlIG5hbWUsIGFjdGlvbnNCbGFja2xpc3QsIGFjdGlvbnNDcmVhdG9ycyBhbmQgb3RoZXIgb3B0aW9ucyBpZiBuZWVkZWRcbiAgICAvLyAgIGFjdGlvbnNCbGFja2xpc3Q6IFsnVElDSyddXG4gICAgLy8gfSk7XG5cbiAgICByZXR1cm4gY3JlYXRlU3RvcmUoXG4gICAgICByZWR1Y2VycyxcbiAgICAgIGluaXRpYWxTdGF0ZSxcbiAgICAgIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKHRodW5rTWlkZGxld2FyZSkpXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKHJlZHVjZXJzLCBpbml0aWFsU3RhdGUsIGFwcGx5TWlkZGxld2FyZSh0aHVua01pZGRsZXdhcmUpKVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3RvcmUuanMiXSwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        