import { GraphQLObjectType } from 'graphql';
import { resolver, attributeFields } from 'graphql-sequelize';

import Models from '../../db/models';
import userType from './user';

const { Address } = Models;

const addressType = new GraphQLObjectType({
  name: 'Address',
  description: 'An address',
  fields: () => ({
    ...Object.assign(attributeFields(Address), {
      user: {
        type: userType,
        resolve: resolver(Address.User),
      },
    }),
  }),
});

export default addressType;
