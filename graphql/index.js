import { getSchema } from 'graphql-sequelize-crud';

import sequelize from '../db';
import '../db/models';

const Schema = getSchema(sequelize);

export default Schema;
