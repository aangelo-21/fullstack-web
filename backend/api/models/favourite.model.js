const { DataTypes } = require("sequelize");
const { connection } = require("../../database/index");

const Favourite = connection.define("favourite", {
  slot1: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  slot2: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  slot3: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  slot4: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  slot5: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  slot6: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  slot7: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  slot8: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  slot9: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  slot10: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Favourite;
