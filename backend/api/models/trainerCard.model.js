const { DataTypes } = require("sequelize");
const { connection } = require("../../database/index");

const TrainerCard = connection.define("trainerCard", {
  team: {
    type: DataTypes.STRING,
  },
});

module.exports = TrainerCard;
