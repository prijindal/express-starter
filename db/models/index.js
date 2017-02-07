import Address from './address';
import User from './user';

User.Addresses = User.hasMany(Address, { as: 'addresses' });
Address.User = Address.belongsTo(User);

export default {
  User,
  Address,
};
