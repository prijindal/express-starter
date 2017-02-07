import Sequelize from 'sequelize';

const sequelize = new Sequelize('postgresql://postgres:postgres@localhost:5432/express');

export default sequelize;
