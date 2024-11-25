const { DataTypes } = require("sequelize");
const { connection } = require("../../database/index");

const Tournament = connection.define("tournament", {
  name: {
    type: DataTypes.STRING,
  },
  format: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.STRING,
  },
  date: {
    type: DataTypes.DATEONLY,
  },
  status: {
    type: DataTypes.STRING,
  },
  seats: {
    type: DataTypes.INTEGER,
  },
  tournamentWinner: {
    type: DataTypes.INTEGER,
  },
});

module.exports = Tournament;
