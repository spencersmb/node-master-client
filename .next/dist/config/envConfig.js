'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _svgs = require('./svgs');

var prod = process.env.NODE_ENV === 'production';

exports.default = {
  BACKEND_URL: prod ? 'https://nameless-scrubland-28835.herokuapp.com' : 'http://localhost:7777',
  WEBSITE_TITLE: 'Now Thats Delicious!',
  LINKS: [{ slug: '/stores', title: 'Stores', icon: _svgs.svgs.Store }, { slug: '/tags', title: 'Tags', icon: _svgs.svgs.Tag }, { slug: '/top', title: 'Top', icon: _svgs.svgs.Top }, { slug: '/add', title: 'Add', icon: _svgs.svgs.Add }, { slug: '/map', title: 'Map', icon: _svgs.svgs.MapSvg }],

  LOGO: _svgs.svgs.Logo,
  TAGS: ['Wifi', 'Open Late', 'Family Friendly', 'Vegetarian', 'Licensed'] };