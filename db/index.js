import Sequelize from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite',
});

export const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING,
    field: 'first_name',
  },
  lastName: {
    type: Sequelize.STRING,
    field: 'last_name',
  },
  createdAt: {
    type: Sequelize.STRING,
  },
  updatedAt: {
    type: Sequelize.STRING,
  },
}, {
  freezeTableName: true,
  // timestamps: false,
});

User.sync({ force: true }, () => {
  User.create({
    firstName: 'John',
    lastName: 'Hancock',
  });
});

export default sequelize;
