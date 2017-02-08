import { resolver, defaultListArgs } from 'graphql-sequelize';
import { GraphQLList } from 'graphql';

import UserType from './../models/user';
import User from '../../db/models/user';

const users = {
  type: new GraphQLList(UserType),
  args: defaultListArgs(),
  resolve: resolver(User),
};

export default users;
