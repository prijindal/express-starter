/* global process: 2 */

import xAdmin from 'express-admin';
import graphqlHTTP from 'express-graphql';
import sequelize from './db';
import populateData from './db/populate';
import app from './app';
import adminConfig from './admin';
import schema from './graphql';
import './epilogue';


const PORT = process.env.PORT || 3000;

sequelize.sync({ force: true })
.then(() => {
  xAdmin.init(adminConfig, (err, admin) => {
    if (err) throw err;
    // mount express-admin before any other middlewares
    app.use('/admin', admin);

    app.use('/graphql', graphqlHTTP({
      schema,
      graphiql: true,
    }));

    app.listen(PORT, populateData);
  });
})
.catch(console.error); // eslint-disable-line no-console
