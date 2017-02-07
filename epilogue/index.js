import epilogue from 'epilogue';
import sequelize, { User } from '../db';

import app from '../app';

epilogue.initialize({
  app,
  sequelize,
});

epilogue.resource({
  model: User,
  endpoints: ['/users', '/users/:id'],
});
