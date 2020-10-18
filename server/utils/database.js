const Sequelize = require("sequelize")

const sequelize = new Sequelize("gym_logs_db", "root", "nivas_619", {dialect: "mysql", host: "localhost"});
module.exports = sequelize;