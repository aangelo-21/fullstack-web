const { DataTypes } = require("sequelize");
const { connection } = require("../../database/index");

const UserTournament = connection.define("userTournament", {
  tournamentId: {
    type: DataTypes.INTEGER,
  },

  teamId: {
    type: DataTypes.INTEGER,
  },
});

module.exports = UserTournament;
