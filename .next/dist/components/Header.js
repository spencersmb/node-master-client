'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _reactRedux = require('react-redux');

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