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
  },
}, {
  freezeTableName: true,
});

User.sync({ force: true })
.then(() => User.create({
  firstName: 'John',
  lastName: 'Hancock',
}));

export default sequelize;
