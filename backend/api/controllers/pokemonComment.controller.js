const PokemonComment = require("../models/pokemonComment.model.js");

async function getAllPokemonComments(req, res) {
  try {
    const users = await PokemonComment.findAll({ where: req.query });
    if (users) {
      return res.status(200).json(users);
    } else {
      return res.status(404).send("> No pokemonComments found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getOnePokemonComment(req, res) {
  try {
    const user = await PokemonComment.findByPk(req.params.id);
    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).send("> PokemonComment not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function createPokemonComment(req, res) {
  try {
    const user = await PokemonComment.create(req.body);
    return res
      .status(200)
      .json({ message: "> PokemonComment created", user: user });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function updatePokemonComment(req, res) {
  try {
    const [userExist, user] = await PokemonComment.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    });
    if (userExist !== 0) {
      return res
        .status(200)
        .json({ message: "> PokemonComment updated", user: user });
    } else {
      return res.status(404).send("> PokemonComment not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function deletePokemonComment(req, res) {
  try {
    const user = await PokemonComment.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (user) {
      return res.status(200).json("> PokemonComment deleted");
    } else {
      return res.status(404).send("> PokemonCommet not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  getAllPokemonComments,
  getOnePokemonComment,
  createPokemonComment,
  updatePokemonComment,
  deletePokemonComment,
};
