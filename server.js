/* global process: 2 */

import xAdmin from 'express-admin';
import sequelize from './db';
import app from './app';
import adminConfig from './admin';
import './epilogue';


const PORT = process.env.PORT || 3000;

xAdmin.init(adminConfig, (err, admin) => {
  if (err) return console.log(err);
  // mount express-admin before any other middlewares
  app.use('/admin', admin);
  // site specific middlewares
  // app.use(express.bodyParser());
  // site routes
  // app.get('/', function (req, res) {
  //     res.send('Hello World');
  // });
  // site server
  app.listen(PORT, () => {
    // console.log('My awesome site listening on port 3000');
  });
});

// sequelize
//   .sync({ force: true })
//   .then(() => {
//     app.listen(PORT);
//   });
