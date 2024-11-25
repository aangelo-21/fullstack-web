const { DataTypes } = require("sequelize");
const { connection } = require("../../database/index");

const Combat = connection.define("combat", {
  
  combatNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },



  status: {
    type: DataTypes.STRING,
  },
});

module.exports = Combat;
