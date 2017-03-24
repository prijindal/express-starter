import epilogue from 'epilogue';
import sequelize from '../db';

import Models from '../db/models';

import app from '../app';

epilogue.initialize({
  app,
  sequelize,
});

epilogue.resource({
  model: Models.User,
  endpoints: ['/users', '/users/:id'],
});

epilogue.resource({
  model: Models.Order,
  endpoints: ['/order', '/order/:id'],
});
