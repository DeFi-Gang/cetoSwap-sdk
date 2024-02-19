
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cetoswap-sdk.cjs.production.min.js')
} else {
  module.exports = require('./cetoswap-sdk.cjs.development.js')
}
