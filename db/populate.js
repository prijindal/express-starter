import Models from './models';

const { User, Address } = Models;

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

populateData();

export default populateData;
