import Sequelize from 'sequelize';

import { pg as config } from '../admin/config.json';

const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  port: config.port,
  dialect: 'postgres',
});

export default sequelize;
