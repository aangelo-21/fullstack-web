const { DataTypes } = require("sequelize");
const { connection } = require("../../database/index");

const Team = connection.define("team", {
  name: {
    type: DataTypes.STRING,
  },

  slot1: {
    type: DataTypes.STRING,
  },

  slot2: {
    type: DataTypes.STRING,
  },

  slot3: {
    type: DataTypes.STRING,
  },

  slot4: {
    type: DataTypes.STRING,
  },
  slot5: {
    type: DataTypes.STRING,
  },

  slot6: {
    type: DataTypes.STRING,
  },
});

module.exports = Team;
