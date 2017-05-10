'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _styledComponents = require('styled-components');

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