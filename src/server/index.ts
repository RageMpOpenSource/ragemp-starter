import databaseLoader from "./loaders/database.loader";
import modulesLoader from "./loaders/module.loader";
import bootstrapLoader from "./loaders/bootstrap.loader";

// Lodash
var _ = require('lodash');

// Env
const dotenv = require('dotenv');
const result = dotenv.config(); // eslint-disable-line no-unused-vars

(async () => {
  await databaseLoader();
  await modulesLoader();
  await bootstrapLoader();
})();
