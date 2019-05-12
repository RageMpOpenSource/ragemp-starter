import logger from '../utils/logger';
import { Sequelize } from 'sequelize-typescript';

const databaseLoader = async () => {
  try {
    /**
     * Sync all defined models to the DB.
     *
     * this has to be the first database function called
     * everything else should be called ONLY after this
     */
    const sequelize = new Sequelize({
      dialect: 'mysql',
      operatorsAliases: Sequelize.Op as any,
      database: <string>process.env.DATABASE_NAME,
      username: <string>process.env.DATABASE_USER,
      host: <string>process.env.DATABASE_HOST,
      password: <string>process.env.DATABASE_PASSWORD,
      modelPaths: [__dirname + '/../models'],
      logging: JSON.parse(<string>process.env.DEBUG)
    });
    await sequelize.sync();

    logger('loaders', `Loaded successfully database config with models!`, 'info');
  } catch (err) {
    logger('loader', `Error while loading database config (Error: ${err.message} / ${err.stack})!`, 'error');
  }
};

export default databaseLoader;
