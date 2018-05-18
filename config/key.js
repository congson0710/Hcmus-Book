if (process.env.NODE_ENV === 'production') {
  // export production set of keys
  console.log('environment', process.env.NODE_ENV);
  module.exports = require('./prod');
} else {
  // export development set of keys
  console.log('environment', process.env.NODE_ENV);
  module.exports = require('./dev');
}
