require('dotenv').config();
require('core-js/stable');
require('regenerator-runtime/runtime');
require('@babel/register')({
  ignore: [/regex/],
  only: [/src/, '../src/'],
  extensions: ['.es6', '.es', '.jsx', '.js', '.mjs'],
  cache: false,
});

module.exports = require('./app');