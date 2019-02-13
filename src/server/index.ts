// Lodash
var _ = require('lodash');

// Env
const dotenv = require('dotenv');
const result = dotenv.config(); // eslint-disable-line no-unused-vars

(async () => {
  await require('./loaders/databaseLoader')();
  await require('./loaders/moduleLoader.js')();
  await require('./loaders/bootstrapLoader.js')();
})();
