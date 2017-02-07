import Sequelize from 'sequelize';
import sequelize from '../';

const User = sequelize.define('user', {
  name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
}, {
  timestamps: false,
});

export default User;
