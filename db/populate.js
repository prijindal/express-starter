import User from './models/user';
import Address from './models/address';

const populateData = async () => {
  await User.sync({ force: true });
  const user = await User.create({
    name: 'Priyanshu Jindal',
    email: 'priyanshujindal1995@gmail.com',
  });
  await Address.sync({ force: true });
  await Address.create({
    address: 'New Address',
    userId: user.id,
  });
};

export default populateData;
