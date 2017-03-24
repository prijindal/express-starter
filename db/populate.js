import Models from './models';

const { User, Order } = Models;

const populateData = async () => {
  await User.sync({ force: true });
  const user = await User.create({
    name: 'Priyanshu Jindal',
    email: 'priyanshujindal1995@gmail.com',
  });
  await Order.sync({ force: true });
  await Order.create({
    name: 'Apple Iphone',
    placedId: user.id,
  });
};

populateData();

export default populateData;
