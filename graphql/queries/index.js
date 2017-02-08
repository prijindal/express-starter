import { GraphQLObjectType } from 'graphql';

import users from './users';

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    users,
  },
});

export default query;
