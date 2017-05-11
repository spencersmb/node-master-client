'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _reactRedux = require('react-redux');

var _search = require('./nav/search');

var _search2 = _interopRequireDefault(_search);

var _login = require('./nav/login');

var _login2 = _interopRequireDefault(_login);

var _envConfig = require('../config/envConfig');

var _envConfig2 = _interopRequireDefault(_envConfig);

var _svgs = require('../config/svgs');

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

var getLinks = function getLinks() {
  return _envConfig2.default.LINKS.map(function (link) {
    return _react2.default.createElement('li', { key: link.slug, className: 'nav__item', __source: { fileName: _jsxFileName, lineNumber: 18 } }, _react2.default.createElement(_link2.default, { prefetch: true, key: link.slug, href: link.slug, __source: { fileName: _jsxFileName, lineNumber: 20 } }, _react2.default.createElement('a', { className: 'nav__link', __source: { fileName: _jsxFileName, lineNumber: 21 } }, (0, _svgs.renderSvg)(link.icon), _react2.default.createElement('span', { __source: { fileName: _jsxFileName, lineNumber: 23 } }, link.title))));
  });
};

exports.default = (0, _reactRedux.connect)()(function (_ref) {
  var url = _ref.url,
      user = _ref.user;
  var path = url.pathname;
  console.log(user);
  return _react2.default.createElement('header', { className: 'top', __source: { fileName: _jsxFileName, lineNumber: 34 } }, _react2.default.createElement('nav', { className: 'nav', __source: { fileName: _jsxFileName, lineNumber: 35 } }, _react2.default.createElement('div', { className: 'nav__section nav__section--pages', __source: { fileName: _jsxFileName, lineNumber: 36 } }, _react2.default.createElement('li', { className: 'nav__item', __source: { fileName: _jsxFileName, lineNumber: 37 } }, _react2.default.createElement('a', { className: 'nav__link nav__link--logo', href: '/', __source: { fileName: _jsxFileName, lineNumber: 38 } }, (0, _svgs.renderSvg)(_envConfig2.default.LOGO))), getLinks()), _react2.default.createElement(_search2.default, { __source: { fileName: _jsxFileName, lineNumber: 45 } }), _react2.default.createElement(_login2.default, { __source: { fileName: _jsxFileName, lineNumber: 46 } })));
});