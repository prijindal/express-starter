import Sequelize from 'sequelize';
import sequelize from '../';

const User = sequelize.define('user', {
  name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  address: {
    type: Sequelize.STRING,
  },
  secure_key: {
    type: Sequelize.STRING,
  },
}, {
  timestamps: false,
});

export default User;
