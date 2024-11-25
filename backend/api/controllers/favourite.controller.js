const Favourite = require("../models/favourite.model.js");

async function getAllFavourites(req, res) {
  try {
    const users = await Favourite.findAll({ where: req.query });
    if (users) {
      return res.status(200).json(users);
    } else {
      return res.status(404).send("> No favourites found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getOneFavourite(req, res) {
  try {
    const user = await Favourite.findByPk(req.params.id);
    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).send("> Favourite not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function createFavourite(req, res) {
  try {
    const user = await Favourite.create(req.body);
    return res.status(200).json({ message: "> Favourite created", user: user });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function updateFavourite(req, res) {
  try {
    const [userExist, user] = await Favourite.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    });
    if (userExist !== 0) {
      return res
        .status(200)
        .json({ message: "> Favourite updated", user: user });
    } else {
      return res.status(404).send("> Favourite not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function deleteFavourite(req, res) {
  try {
    const user = await Favourite.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (user) {
      return res.status(200).json("> Favourite deleted");
    } else {
      return res.status(404).send("> Favourite not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  getAllFavourites,
  getOneFavourite,
  createFavourite,
  updateFavourite,
  deleteFavourite,
};
