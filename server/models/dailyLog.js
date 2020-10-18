const Sequelize = require("sequelize")
const sequelize = require("../utils/database")
const Exercise = require("./exercise")

const DailyLog = sequelize.define("dailyLog", {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    date:{
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    count1:Sequelize.INTEGER,
    weight1: Sequelize.DOUBLE,
    count2:Sequelize.INTEGER,
    weight2: Sequelize.DOUBLE,
    count3:Sequelize.INTEGER,
    weight3: Sequelize.DOUBLE,
},
{timestamps: false})

DailyLog.belongsTo(Exercise)
module.exports = DailyLog;