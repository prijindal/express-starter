import { GraphQLObjectType, GraphQLList } from 'graphql';
import { resolver, attributeFields, defaultListArgs } from 'graphql-sequelize';

import Models from '../../db/models';
import addressType from './address';

const { User } = Models;

const userType = new GraphQLObjectType({
  name: 'User',
  description: 'A user',
  fields: Object.assign(attributeFields(User), {
    addresses: {
      type: new GraphQLList(addressType),
      resolve: resolver(User.Addresses),
      args: defaultListArgs(),
    },
  }),
});

export default userType;
