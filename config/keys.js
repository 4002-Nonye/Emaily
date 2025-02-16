if (process.env.NODE_ENV === 'production') {
  // We are in production- return the set of prod keys
  module.exports=require('./prod')
} else {
  //We are in development- return the set of dev keys
  module.exports = require('./dev');
}
