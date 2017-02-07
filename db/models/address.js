import Sequelize from 'sequelize';
import sequelize from '../';

const Address = sequelize.define('address', {
  address: {
    type: Sequelize.STRING,
  },
}, {
  timestamps: false,
});

export default Address;
