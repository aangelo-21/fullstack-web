const { DataTypes } = require("sequelize");
const { connection } = require("../../database/index");

const PokemonComment = connection.define("pokemonComment", {
  pokemonId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = PokemonComment;
