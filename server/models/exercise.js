const Sequelize = require("sequelize")
const sequelize = require("../utils/database")

const Exercise = sequelize.define("exercise", {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    category:{
        type: Sequelize.STRING,
        allowNull: false
    }},
    {timestamps: false})

module.exports = Exercise;