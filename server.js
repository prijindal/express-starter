/* global process: 2 */

import xAdmin from 'express-admin';
import graphqlHTTP from 'express-graphql';
import sequelize from './db';
// import populateData from './db/populate';
import app from './app';
import adminConfig from './admin';
import schema from './graphql';
import './epilogue';


const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

sequelize.sync()
.then(() => {
  xAdmin.init(adminConfig, (err, admin) => {
    if (err) throw err;
    // mount express-admin before any other middlewares
    app.use('/admin', admin);

    app.use('/graphql', graphqlHTTP({
      schema,
      graphiql: true,
    }));

    app.listen(PORT, HOST, () => console.log(`Listening at ${HOST}:${PORT}`)); // eslint-disable-line no-console
  });
})
.catch(console.error); // eslint-disable-line no-console
