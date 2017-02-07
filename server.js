/* global process: 2 */

import xAdmin from 'express-admin';
import sequelize from './db';
import app from './app';
import adminConfig from './admin';
import './epilogue';


const PORT = process.env.PORT || 3000;

sequelize.sync({ force: true })
.then(() => {
  xAdmin.init(adminConfig, (err, admin) => {
    if (err) return;
    // mount express-admin before any other middlewares
    app.use('/admin', admin);
    app.listen(PORT);
  });
});
