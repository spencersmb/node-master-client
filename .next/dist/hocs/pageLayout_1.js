'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _reactRedux = require('react-redux');

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