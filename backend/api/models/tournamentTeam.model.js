//Tabla intermedia no tiene controlador (ni routes).
const { DataTypes } = require("sequelize");
const { connection } = require("../../database/index");
const Tournament = connection.define("tournamentTeam", {
  tournamentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  teamId: {
    type: DataTypes.INTEGER,
  },
});

module.exports = Tournament;
