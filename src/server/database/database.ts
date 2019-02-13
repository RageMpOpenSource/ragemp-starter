import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
  dialect: 'mysql',
  operatorsAliases: Sequelize.Op as any,
  database: <string>process.env.DATABASE_NAME,
  username: <string>process.env.DATABASE_USER,
  host: <string>process.env.DATABASE_HOST,
  password: <string>process.env.DATABASE_PASSWORD,
  modelPaths: [__dirname + '/../models'],
  logging: false // set to true for debugging
});

export { sequelize };
