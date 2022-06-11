import { Sequelize } from "sequelize";

const db = new Sequelize('node', 'root', '123456', {
    host: 'localhost',
    dialect: 'sqlite',
    logging: false,
});

export default db;