const { DataTypes } = require("sequelize");
const { connection } = require("../../database/index");

const Comment = connection.define("comment", {
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Comment;
