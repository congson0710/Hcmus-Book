if (process.env.NODE_ENV === 'production') {
  // export production set of keys
  module.exports = require('./prod');
} else {
  // export development set of keys
  module.exports = require('./dev');
}
