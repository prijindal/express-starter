import Order from './order';
import User from './user';

User.Addresses = User.hasMany(Order,  { foreignKey: 'placedId' });
Order.User = Order.belongsTo(User,  { as: 'placed' });

export default {
  User,
  Order,
};
