import Sequelize from 'sequelize';
import sequelize from '../';

import User from './user';

const Order = sequelize.define('order', {
  name: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  location_from: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.INTEGER,
  },
  status: {
    type: Sequelize.ENUM,
    default: 'waiting',
    values: [
      'waiting',
      'claimed',
      'payed',
      'delivered'
    ],
  },
  claimedId: {
    type: Sequelize.INTEGER,
    required: true,
    references: {
      model: User,
      
      key: 'id',
    }
  }
}, {
  timestamps: false,
});

export default Order;
