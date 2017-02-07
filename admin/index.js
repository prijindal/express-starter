import path from 'path';

import config from './config.json';
import settings from './settings.json';
import custom from './custom.json';
import users from './users.json';

export default {
  dpath: path.join(__dirname),
  config,
  settings,
  custom,
  users,
};
