import { resolver } from 'graphql-sequelize';
import { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLString } from 'graphql';

import UserType from './models/user';
import User from '../db/models/user';

const Schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      users: {
        type: new GraphQLList(UserType),
        args: {
          // An arg with the key limit will automatically be converted to a limit on the target
          limit: {
            type: GraphQLInt,
          },
          // An arg with the key order will automatically be converted to a order on the target
          order: {
            type: GraphQLString,
          },
        },
        resolve: resolver(User),
      },
    },
  }),
});

export default Schema;
