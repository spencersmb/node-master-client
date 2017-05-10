'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var prod = process.env.NODE_ENV === 'production';

exports.default = {
  BACKEND_URL: !prod ? 'https://nameless-scrubland-28835.herokuapp.com' : 'http://localhost:3001'
};